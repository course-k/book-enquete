import { memo } from "react";
import { Book, SortConfig } from "../types/book";
import { LoadingOverlay } from "./LoadingOverlay";

interface BookTableProps {
  books: Book[];
  onVote: (isbn: string) => Promise<void>;
  sortConfig: SortConfig;
  onSort: (config: SortConfig) => void;
  loading: boolean;
}

// ソートインジケーターコンポーネント
const SortIndicator = memo(({ direction }: { direction: "asc" | "desc" }) => (
  <span className="ml-1">{direction === "asc" ? "▲" : "▼"}</span>
));

// テーブルヘッダーセル
const TableHeaderCell = memo(
  ({
    label,
    field,
    sortConfig,
    onSort,
  }: {
    label: string;
    field: keyof Book | "votes";
    sortConfig: SortConfig;
    onSort: (field: keyof Book | "votes") => void;
  }) => (
    <th
      onClick={() => onSort(field)}
      className="px-4 py-2 text-left cursor-pointer hover:bg-gray-200 transition-colors"
    >
      <div className="flex items-center">
        {label}
        {sortConfig.field === field && (
          <SortIndicator direction={sortConfig.direction} />
        )}
      </div>
    </th>
  )
);

// 説明タグ
const DescriptionTag = memo(({ description }: { description: string }) => (
  <span className="inline-block px-2 py-1 text-xs bg-gray-100 rounded mr-1 mb-1">
    {description}
  </span>
));

function BookTable({
  books,
  onVote,
  sortConfig,
  onSort,
  loading,
}: BookTableProps) {
  const handleSort = (field: keyof Book | "votes") => {
    onSort({
      field,
      direction:
        sortConfig.field === field && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const tableHeaders = [
    { field: "isbn" as const, label: "ISBN" },
    { field: "title" as const, label: "タイトル" },
    { field: "creator" as const, label: "作者" },
    { field: "publisher" as const, label: "出版社" },
    { field: "description" as const, label: "説明" },
    { field: "language" as const, label: "言語" },
    { field: "votes" as const, label: "投票数" },
  ];

  return (
    <LoadingOverlay loading={loading}>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-gray-100">
              {tableHeaders.map(({ field, label }) => (
                <TableHeaderCell
                  key={field}
                  label={label}
                  field={field}
                  sortConfig={sortConfig}
                  onSort={handleSort}
                />
              ))}
              <th className="px-4 py-2">アクション</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr
                key={book.isbn}
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-2 font-mono text-sm">{book.isbn}</td>
                <td className="px-4 py-2 font-medium">{book.title}</td>
                <td className="px-4 py-2">{book.creator}</td>
                <td className="px-4 py-2">{book.publisher}</td>
                <td className="px-4 py-2">
                  <div className="flex flex-wrap">
                    {book.description?.map((desc, index) => (
                      <DescriptionTag key={index} description={desc} />
                    ))}
                  </div>
                </td>
                <td className="px-4 py-2">{book.language}</td>
                <td className="px-4 py-2">
                  <span className="font-semibold">{book.votes || 0}</span>
                </td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => onVote(book.isbn)}
                    className="px-3 py-1 bg-green-500 text-white rounded 
                             hover:bg-green-600 transition-colors
                             focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                  >
                    投票
                  </button>
                </td>
              </tr>
            ))}
            {books.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-8 text-center text-gray-500">
                  本が見つかりませんでした
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </LoadingOverlay>
  );
}

// メモ化してパフォーマンスを最適化
export default memo(BookTable);
