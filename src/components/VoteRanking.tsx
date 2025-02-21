import { memo } from "react";
import { Book } from "../types/book";
import { LoadingOverlay } from "./LoadingOverlay";

interface VoteRankingProps {
  books: Book[];
  loading: boolean;
}

function VoteRanking({ books, loading }: VoteRankingProps) {
  const topBooks = [...books]
    .sort((a, b) => (b.votes || 0) - (a.votes || 0))
    .filter((v) => v.votes > 0)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">投票数トップ3の本</h2>

      <LoadingOverlay loading={loading}>
        <div className="space-y-3">
          {topBooks.map((book, index) => (
            <div
              key={book.isbn}
              className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-8 h-8 flex items-center justify-center 
                              bg-blue-500 text-white rounded-full font-bold"
                >
                  {index + 1}
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="font-medium text-gray-900 truncate">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600 truncate">
                    {book.creator}
                  </p>
                  <div className="mt-1 text-sm">
                    <span className="text-gray-500">出版社:</span>
                    <span className="ml-1 text-gray-900">{book.publisher}</span>
                  </div>
                  <div className="mt-1 flex items-center">
                    <span className="text-sm text-gray-500">投票数:</span>
                    <span
                      className="ml-2 px-2 py-1 bg-green-100 text-green-800 
                                   rounded-full text-sm font-medium"
                    >
                      {book.votes || 0}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {topBooks.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <p>まだ投票がありません</p>
              <p className="text-sm mt-1">
                お気に入りの本に投票して、ここに表示させましょう！
              </p>
            </div>
          )}
        </div>
      </LoadingOverlay>
    </div>
  );
}

export default memo(VoteRanking);
