/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBooksByVotes = /* GraphQL */ `query GetBooksByVotes($limit: Int) {
  getBooksByVotes(limit: $limit) {
    isbn
    title
    creator
    publisher
    description
    language
    votes
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBooksByVotesQueryVariables,
  APITypes.GetBooksByVotesQuery
>;
export const getBook = /* GraphQL */ `query GetBook($id: ID!) {
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
    id
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBookQueryVariables, APITypes.GetBookQuery>;
export const listBooks = /* GraphQL */ `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      id
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBooksQueryVariables, APITypes.ListBooksQuery>;
export const getVote = /* GraphQL */ `query GetVote($id: ID!) {
  getVote(id: $id) {
    id
    bookIsbn
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetVoteQueryVariables, APITypes.GetVoteQuery>;
export const listVotes = /* GraphQL */ `query ListVotes(
  $filter: ModelVoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      bookIsbn
      timestamp
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListVotesQueryVariables, APITypes.ListVotesQuery>;
