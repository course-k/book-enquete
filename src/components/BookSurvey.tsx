import { useState, useEffect } from "react";
import { BookService } from "../services";
import { Book, SearchCriteria, SortConfig } from "../types/book";
import SearchForm from "./SearchForm";
import BookTable from "./BookTable";
import VoteRanking from "./VoteRanking";
import ErrorAlert from "./ErrorAlert";

export default function BookSurvey() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    field: "votes",
    direction: "desc",
  });

  // 初期データの読み込み
  useEffect(() => {
    loadBooks();
    // リアルタイム更新のサブスクリプション設定
    const subscription = BookService.subscribeToBookUpdates(
      (updatedBook) => {
        setBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.isbn === updatedBook.isbn ? { ...book, ...updatedBook } : book
          )
        );
        setFilteredBooks((prevBooks) =>
          prevBooks.map((book) =>
            book.isbn === updatedBook.isbn ? { ...book, ...updatedBook } : book
          )
        );
      },
      (error) => {
        setError("リアルタイム更新エラー: " + error.message);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const loadBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedBooks = await BookService.listBooks();
      setBooks(fetchedBooks);
      setFilteredBooks(fetchedBooks);
    } catch (err) {
      setError(
        "本の読み込みに失敗しました: " +
          (err instanceof Error ? err.message : "不明なエラー")
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (criteria: SearchCriteria) => {
    try {
      setLoading(true);
      setError(null);

      // 検索条件が空の場合は全データを表示
      if (Object.values(criteria).every((value) => !value)) {
        setFilteredBooks(books);
        return;
      }

      const filtered = books.filter((book) => {
        return Object.entries(criteria).every(([key, value]) => {
          if (!value) return true;
          if (key === "description") {
            return book.description.some((desc) =>
              desc.toLowerCase().includes(value.toLowerCase())
            );
          }
          return book[key as keyof Book]
            ?.toString()
            .toLowerCase()
            .includes(value.toLowerCase());
        });
      });

      setFilteredBooks(filtered);
    } catch (err) {
      setError(
        "検索に失敗しました: " +
          (err instanceof Error ? err.message : "不明なエラー")
      );
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (isbn: string) => {
    try {
      setError(null);
      await BookService.voteForBook(isbn);
      // 投票の更新はサブスクリプションで自動的に処理されます
    } catch (err) {
      setError(
        "投票に失敗しました: " +
          (err instanceof Error ? err.message : "不明なエラー")
      );
    }
  };

  const handleSort = (newSortConfig: SortConfig) => {
    setSortConfig(newSortConfig);
    const sorted = [...filteredBooks].sort((a, b) => {
      const aValue = a[newSortConfig.field] || "";
      const bValue = b[newSortConfig.field] || "";

      if (newSortConfig.field === "votes") {
        return newSortConfig.direction === "asc"
          ? (a.votes || 0) - (b.votes || 0)
          : (b.votes || 0) - (a.votes || 0);
      }

      return newSortConfig.direction === "asc"
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
    setFilteredBooks(sorted);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">本の調査</h1>
        <p className="text-gray-600">
          本を検索し、投票し、人気の本を見つけよう
        </p>
      </div>

      {error && <ErrorAlert message={error} onClose={() => setError(null)} />}

      <div className="space-y-6">
        <VoteRanking books={books} loading={loading} />

        <SearchForm onSearch={handleSearch} />

        <BookTable
          books={filteredBooks}
          onVote={handleVote}
          sortConfig={sortConfig}
          onSort={handleSort}
          loading={loading}
        />
      </div>
    </div>
  );
}
