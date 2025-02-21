/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBookInput = {
  isbn: string,
  title: string,
  creator?: string | null,
  publisher?: string | null,
  description?: Array< string | null > | null,
  language?: string | null,
  votes?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  id?: string | null,
};

export type ModelBookConditionInput = {
  isbn?: ModelIDInput | null,
  title?: ModelStringInput | null,
  creator?: ModelStringInput | null,
  publisher?: ModelStringInput | null,
  description?: ModelStringInput | null,
  language?: ModelStringInput | null,
  votes?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Book = {
  __typename: "Book",
  isbn: string,
  title: string,
  creator?: string | null,
  publisher?: string | null,
  description?: Array< string | null > | null,
  language?: string | null,
  votes?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  id: string,
};

export type UpdateBookInput = {
  isbn?: string | null,
  title?: string | null,
  creator?: string | null,
  publisher?: string | null,
  description?: Array< string | null > | null,
  language?: string | null,
  votes?: number | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  id: string,
};

export type DeleteBookInput = {
  id: string,
};

export type CreateVoteInput = {
  id?: string | null,
  bookIsbn: string,
  timestamp: string,
};

export type ModelVoteConditionInput = {
  bookIsbn?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  and?: Array< ModelVoteConditionInput | null > | null,
  or?: Array< ModelVoteConditionInput | null > | null,
  not?: ModelVoteConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Vote = {
  __typename: "Vote",
  id: string,
  bookIsbn: string,
  timestamp: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateVoteInput = {
  id: string,
  bookIsbn?: string | null,
  timestamp?: string | null,
};

export type DeleteVoteInput = {
  id: string,
};

export type ModelBookFilterInput = {
  isbn?: ModelIDInput | null,
  title?: ModelStringInput | null,
  creator?: ModelStringInput | null,
  publisher?: ModelStringInput | null,
  description?: ModelStringInput | null,
  language?: ModelStringInput | null,
  votes?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelBookConnection = {
  __typename: "ModelBookConnection",
  items:  Array<Book | null >,
  nextToken?: string | null,
};

export type ModelVoteFilterInput = {
  id?: ModelIDInput | null,
  bookIsbn?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelVoteFilterInput | null > | null,
  or?: Array< ModelVoteFilterInput | null > | null,
  not?: ModelVoteFilterInput | null,
};

export type ModelVoteConnection = {
  __typename: "ModelVoteConnection",
  items:  Array<Vote | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBookFilterInput = {
  isbn?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  creator?: ModelSubscriptionStringInput | null,
  publisher?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  language?: ModelSubscriptionStringInput | null,
  votes?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBookFilterInput | null > | null,
  or?: Array< ModelSubscriptionBookFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionVoteFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  bookIsbn?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVoteFilterInput | null > | null,
  or?: Array< ModelSubscriptionVoteFilterInput | null > | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook?:  {
    __typename: "Book",
    isbn: string,
    title: string,
    creator?: string | null,
    publisher?: string | null,
    description?: Array< string | null > | null,
    language?: string | null,
    votes?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    id: string,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook?:  {
    __typename: "Book",
    isbn: string,
    title: string,
    creator?: string | null,
    publisher?: string | null,
    description?: Array< string | null > | null,
    language?: string | null,
    votes?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    id: string,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook?:  {
    __typename: "Book",
    isbn: string,
    title: string,
    creator?: string | null,
    publisher?: string | null,
    description?: Array< string | null > | null,
    language?: string | null,
    votes?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    id: string,
  } | null,
};

export type CreateVoteMutationVariables = {
  input: CreateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type CreateVoteMutation = {
  createVote?:  {
    __typename: "Vote",
    id: string,
    bookIsbn: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateVoteMutationVariables = {
  input: UpdateVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type UpdateVoteMutation = {
  updateVote?:  {
    __typename: "Vote",
    id: string,
    bookIsbn: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteVoteMutationVariables = {
  input: DeleteVoteInput,
  condition?: ModelVoteConditionInput | null,
};

export type DeleteVoteMutation = {
  deleteVote?:  {
    __typename: "Vote",
    id: string,
    bookIsbn: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBooksByVotesQueryVariables = {
  limit?: number | null,
};

export type GetBooksByVotesQuery = {
  getBooksByVotes?:  Array< {
    __typename: "Book",
    isbn: string,
    title: string,
    creator?: string | null,
    publisher?: string | null,
    description?: Array< string | null > | null,
    language?: string | null,
    votes?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    id: string,
  } | null > | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook?:  {
    __typename: "Book",
    isbn: string,
    title: string,
    creator?: string | null,
    publisher?: string | null,
    description?: Array< string | null > | null,
    language?: string | null,
    votes?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    id: string,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks?:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      isbn: string,
      title: string,
      creator?: string | null,
      publisher?: string | null,
      description?: Array< string | null > | null,
      language?: string | null,
      votes?: number | null,
      createdAt?: string | null,
      updatedAt?: string | null,
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetVoteQueryVariables = {
  id: string,
};

export type GetVoteQuery = {
  getVote?:  {
    __typename: "Vote",
    id: string,
    bookIsbn: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListVotesQueryVariables = {
  filter?: ModelVoteFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVotesQuery = {
  listVotes?:  {
    __typename: "ModelVoteConnection",
    items:  Array< {
      __typename: "Vote",
      id: string,
      bookIsbn: string,
      timestamp: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnCreateBookSubscription = {
  onCreateBook?:  {
    __typename: "Book",
    isbn: string,
    title: string,
    creator?: string | null,
    publisher?: string | null,
    description?: Array< string | null > | null,
    language?: string | null,
    votes?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    id: string,
  } | null,
};

export type OnUpdateBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook?:  {
    __typename: "Book",
    isbn: string,
    title: string,
    creator?: string | null,
    publisher?: string | null,
    description?: Array< string | null > | null,
    language?: string | null,
    votes?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    id: string,
  } | null,
};

export type OnDeleteBookSubscriptionVariables = {
  filter?: ModelSubscriptionBookFilterInput | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook?:  {
    __typename: "Book",
    isbn: string,
    title: string,
    creator?: string | null,
    publisher?: string | null,
    description?: Array< string | null > | null,
    language?: string | null,
    votes?: number | null,
    createdAt?: string | null,
    updatedAt?: string | null,
    id: string,
  } | null,
};

export type OnCreateVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnCreateVoteSubscription = {
  onCreateVote?:  {
    __typename: "Vote",
    id: string,
    bookIsbn: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnUpdateVoteSubscription = {
  onUpdateVote?:  {
    __typename: "Vote",
    id: string,
    bookIsbn: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteVoteSubscriptionVariables = {
  filter?: ModelSubscriptionVoteFilterInput | null,
};

export type OnDeleteVoteSubscription = {
  onDeleteVote?:  {
    __typename: "Vote",
    id: string,
    bookIsbn: string,
    timestamp: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
