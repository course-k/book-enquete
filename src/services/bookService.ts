// src/services/bookService.ts
import { generateClient } from "aws-amplify/api";
import awsconfig from "../aws-exports";
import {
  Book,
  ListBooksResponse,
  GetBookResponse,
  graphqlOperations,
} from "../types/book";
import { Amplify } from "aws-amplify";

Amplify.configure(awsconfig);

const client = generateClient();

export class BookService {
  static async listBooks(): Promise<Book[]> {
    try {
      let allBooks: Book[] = [];
      let nextToken: string | null | undefined = null;

      do {
        const response = (await client.graphql({
          query: graphqlOperations.listBooks,
          variables: {
            limit: 100, // 1回のリクエストで取得する最大件数
            nextToken: nextToken,
          },
        })) as ListBooksResponse;

        allBooks = [...allBooks, ...response.data.listBooks.items];
        nextToken = response.data.listBooks.nextToken;
      } while (nextToken);

      return allBooks;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw error;
    }
  }

  static async getBook(isbn: string): Promise<Book> {
    try {
      const response = (await client.graphql({
        query: graphqlOperations.getBook,
        variables: { id:isbn },
      })) as GetBookResponse;

      return response.data.getBook;
    } catch (error) {
      console.error(`Error fetching book with ISBN ${isbn}:`, error);
      throw error;
    }
  }

  static async voteForBook(isbn: string): Promise<void> {
    try {
      // まず投票を記録
      await client.graphql({
        query: graphqlOperations.createVote,
        variables: {
          input: {
            bookIsbn: isbn,
            timestamp: new Date().toISOString(),
          },
        },
      });

      // 本の投票数を更新
      const book = await this.getBook(isbn);
      await client.graphql({
        query: graphqlOperations.updateBook,
        variables: {
          input: {
            isbn,
            votes: (book.votes || 0) + 1,
          },
        },
      });
    } catch (error) {
      console.error(`Error voting for book ${isbn}:`, error);
      throw error;
    }
  }

  static async searchBooks(searchTerm: string): Promise<Book[]> {
    try {
      const response = (await client.graphql({
        query: graphqlOperations.listBooks,
        variables: {
          filter: {
            or: [
              { title: { contains: searchTerm } },
              { creator: { contains: searchTerm } },
              { publisher: { contains: searchTerm } },
              { description: { contains: searchTerm } },
            ],
          },
        },
      })) as ListBooksResponse;

      return response.data.listBooks.items;
    } catch (error) {
      console.error("Error searching books:", error);
      throw error;
    }
  }

  static subscribeToBookUpdates(
    onUpdate: (book: Book) => void,
    onError?: (error: Error) => void
  ) {
    try {
      const observable = client.graphql({
        query: graphqlOperations.onUpdateBook,
      }) as any;

      const subscription = observable.subscribe({
        next: (data: any) => {
          const book = data.data?.onUpdateBook;
          if (book) {
            onUpdate(book);
          }
        },
        error: (error: Error) => {
          console.error("Subscription error:", error);
          if (onError) onError(error);
        },
      });

      return subscription;
    } catch (error) {
      console.error("Error setting up subscription:", error);
      throw error;
    }
  }
}
