// src/types/book.ts

export interface Book {
  isbn: string;
  title: string;
  creator: string;
  publisher: string;
  description: string[];
  language: string;
  votes: number;
  createdAt: string;
  updatedAt: string;
}

export interface Vote {
  id: string;
  bookIsbn: string;
  timestamp: string;
}

export interface SearchCriteria {
  isbn?: string;
  title?: string;
  creator?: string;
  publisher?: string;
  description?: string;
  language?: string;
}

export interface SortConfig {
  field: keyof Book | "votes";
  direction: "asc" | "desc";
}

// APIの戻り値の型定義
export interface ListBooksResponse {
  data: {
    listBooks: {
      items: Book[];
      nextToken?: string;
    };
  };
}

export interface GetBookResponse {
  data: {
    getBook: Book;
  };
}

export interface CreateVoteResponse {
  data: {
    createVote: Vote;
  };
}

// GraphQL Mutations/Queries/Subscriptions
export const graphqlOperations = {
  listBooks: `
  query ListBooks($limit: Int, $nextToken: String) {
    listBooks(limit: $limit, nextToken: $nextToken) {
      items {
        isbn
        title
        creator
        publisher
        description
        language
        votes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`,

  getBook: `
      query GetBook($id: ID!) {
        getBook(id: $id) {
          isbn
          title
          creator
          publisher
          description
          language
          votes
          createdAt
          updatedAt
        }
      }
    `,

  createVote: `
      mutation CreateVote($input: CreateVoteInput!) {
        createVote(input: $input) {
          id
          bookIsbn
          timestamp
        }
      }
    `,

  updateBook: `
      mutation UpdateBook($input: UpdateBookInput!) {
        updateBook(input: $input) {
          isbn
          votes
          updatedAt
        }
      }
    `,

  onUpdateBook: `
      subscription OnUpdateBook {
        onUpdateBook {
          isbn
          votes
          updatedAt
        }
      }
    `,
};
