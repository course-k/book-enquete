/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBook = /* GraphQL */ `subscription OnCreateBook($filter: ModelSubscriptionBookFilterInput) {
  onCreateBook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBookSubscriptionVariables,
  APITypes.OnCreateBookSubscription
>;
export const onUpdateBook = /* GraphQL */ `subscription OnUpdateBook($filter: ModelSubscriptionBookFilterInput) {
  onUpdateBook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBookSubscriptionVariables,
  APITypes.OnUpdateBookSubscription
>;
export const onDeleteBook = /* GraphQL */ `subscription OnDeleteBook($filter: ModelSubscriptionBookFilterInput) {
  onDeleteBook(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBookSubscriptionVariables,
  APITypes.OnDeleteBookSubscription
>;
export const onCreateVote = /* GraphQL */ `subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
  onCreateVote(filter: $filter) {
    id
    bookIsbn
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateVoteSubscriptionVariables,
  APITypes.OnCreateVoteSubscription
>;
export const onUpdateVote = /* GraphQL */ `subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
  onUpdateVote(filter: $filter) {
    id
    bookIsbn
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateVoteSubscriptionVariables,
  APITypes.OnUpdateVoteSubscription
>;
export const onDeleteVote = /* GraphQL */ `subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
  onDeleteVote(filter: $filter) {
    id
    bookIsbn
    timestamp
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteVoteSubscriptionVariables,
  APITypes.OnDeleteVoteSubscription
>;
