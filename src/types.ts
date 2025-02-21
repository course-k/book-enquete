export interface JsonData {
  isbn: string;
  title: string;
  creator: string;
  publisher: string;
  description: string[];
  language: string;
}

export interface BookData {
  [k: string]: string | number | string[] | undefined;
  isbn: string;
  title: string;
  creator: string;
  publisher: string;
  description: string[];
  language: string;
  votes?: number;
}

export interface SearchCriteria {
  isbn: string;
  title: string;
  creator: string;
  publisher: string;
  description: string;
  language: string;
}

export interface SortConfig {
  field: keyof BookData | "votes";
  direction: "asc" | "desc";
}
