import { BookData, SearchCriteria, SortConfig } from "./types";

export const saveVotesToStorage = (votes: Record<string, number>): void => {
  localStorage.setItem("bookVotes", JSON.stringify(votes));
};

export const loadVotesFromStorage = (): Record<string, number> => {
  const savedVotes = localStorage.getItem("bookVotes");
  return savedVotes ? JSON.parse(savedVotes) : {};
};

export const filterBooks = (
  books: BookData[],
  criteria: SearchCriteria
): BookData[] => {
  return books.filter((book) => {
    return Object.entries(criteria).every(([key, value]) => {
      if (!value) return true;
      if (key === "description") {
        return book.description.some((desc) =>
          desc.toLowerCase().includes(value.toLowerCase())
        );
      }
      if (typeof book[key] === "number") {
        return book[key] === value;
      }
      if (typeof book[key] === "string") {
        return book[key].toLowerCase().includes(value.toLowerCase());
      }
    });
  });
};

export const sortBooks = (
  books: BookData[],
  config: SortConfig
): BookData[] => {
  return [...books].sort((a, b) => {
    const aValue = a[config.field] || "";
    const bValue = b[config.field] || "";

    if (config.field === "votes") {
      return config.direction === "asc"
        ? (a.votes || 0) - (b.votes || 0)
        : (b.votes || 0) - (a.votes || 0);
    }

    return config.direction === "asc"
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });
};
