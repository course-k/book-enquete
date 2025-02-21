/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBook = /* GraphQL */ `mutation CreateBook(
  $input: CreateBookInput!
  $condition: ModelBookConditionInput
) {
  createBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBookMutationVariables,
  APITypes.CreateBookMutation
>;
export const updateBook = /* GraphQL */ `mutation UpdateBook(
  $input: UpdateBookInput!
  $condition: ModelBookConditionInput
) {
  updateBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBookMutationVariables,
  APITypes.UpdateBookMutation
>;
export const deleteBook = /* GraphQL */ `mutation DeleteBook(
  $input: DeleteBookInput!
  $condition: ModelBookConditionInput
) {
  deleteBook(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBookMutationVariables,
  APITypes.DeleteBookMutation
>;
export const createVote = /* GraphQL */ `mutation CreateVote(
  $input: CreateVoteInput!
  $condition: ModelVoteConditionInput
) {
  createVote(input: $input, condition: $condition) {
    id
    bookIsbn
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateVoteMutationVariables,
  APITypes.CreateVoteMutation
>;
export const updateVote = /* GraphQL */ `mutation UpdateVote(
  $input: UpdateVoteInput!
  $condition: ModelVoteConditionInput
) {
  updateVote(input: $input, condition: $condition) {
    id
    bookIsbn
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateVoteMutationVariables,
  APITypes.UpdateVoteMutation
>;
export const deleteVote = /* GraphQL */ `mutation DeleteVote(
  $input: DeleteVoteInput!
  $condition: ModelVoteConditionInput
) {
  deleteVote(input: $input, condition: $condition) {
    id
    bookIsbn
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteVoteMutationVariables,
  APITypes.DeleteVoteMutation
>;
