import { GraphQLResolveInfo } from "graphql";
import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: "Mutation";
  createTodo?: Maybe<Todo>;
  createTodoCategory?: Maybe<TodoCategory>;
  deleteTodo?: Maybe<Todo>;
  deleteTodoCategory?: Maybe<Todo>;
  updateTodo?: Maybe<Todo>;
  updateTodoCategory?: Maybe<TodoCategory>;
};

export type MutationCreateTodoArgs = {
  input: TodoCreateInput;
};

export type MutationCreateTodoCategoryArgs = {
  input: TodoCategoryCreateInput;
};

export type MutationDeleteTodoArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationDeleteTodoCategoryArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationUpdateTodoArgs = {
  input: TodoUpdateInput;
};

export type MutationUpdateTodoCategoryArgs = {
  input: TodoCategoryUpdateInput;
};

export type Query = {
  __typename?: "Query";
  getCategories?: Maybe<Array<Maybe<Todo>>>;
  getCategory?: Maybe<Todo>;
  getTodo?: Maybe<Todo>;
  getTodoList?: Maybe<Array<Maybe<Todo>>>;
};

export type QueryGetCategoryArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type QueryGetTodoArgs = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type Todo = {
  __typename?: "Todo";
  category?: Maybe<TodoCategory>;
  completed: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
};

export type TodoCategory = {
  __typename?: "TodoCategory";
  id: Scalars["ID"]["output"];
  title: Scalars["String"]["output"];
};

export type TodoCategoryCreateInput = {
  title: Scalars["String"]["input"];
};

export type TodoCategoryUpdateInput = {
  id: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type TodoCreateInput = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  completed: Scalars["Boolean"]["input"];
  title: Scalars["String"]["input"];
};

export type TodoUpdateInput = {
  categoryId?: InputMaybe<Scalars["ID"]["input"]>;
  completed?: InputMaybe<Scalars["Boolean"]["input"]>;
  id: Scalars["ID"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  Todo: ResolverTypeWrapper<Todo>;
  TodoCategory: ResolverTypeWrapper<TodoCategory>;
  TodoCategoryCreateInput: TodoCategoryCreateInput;
  TodoCategoryUpdateInput: TodoCategoryUpdateInput;
  TodoCreateInput: TodoCreateInput;
  TodoUpdateInput: TodoUpdateInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  ID: Scalars["ID"]["output"];
  Mutation: {};
  Query: {};
  String: Scalars["String"]["output"];
  Todo: Todo;
  TodoCategory: TodoCategory;
  TodoCategoryCreateInput: TodoCategoryCreateInput;
  TodoCategoryUpdateInput: TodoCategoryUpdateInput;
  TodoCreateInput: TodoCreateInput;
  TodoUpdateInput: TodoUpdateInput;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]> = {
  createTodo?: Resolver<Maybe<ResolversTypes["Todo"]>, ParentType, ContextType, RequireFields<MutationCreateTodoArgs, "input">>;
  createTodoCategory?: Resolver<
    Maybe<ResolversTypes["TodoCategory"]>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateTodoCategoryArgs, "input">
  >;
  deleteTodo?: Resolver<Maybe<ResolversTypes["Todo"]>, ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, "id">>;
  deleteTodoCategory?: Resolver<Maybe<ResolversTypes["Todo"]>, ParentType, ContextType, RequireFields<MutationDeleteTodoCategoryArgs, "id">>;
  updateTodo?: Resolver<Maybe<ResolversTypes["Todo"]>, ParentType, ContextType, RequireFields<MutationUpdateTodoArgs, "input">>;
  updateTodoCategory?: Resolver<
    Maybe<ResolversTypes["TodoCategory"]>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTodoCategoryArgs, "input">
  >;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]> = {
  getCategories?: Resolver<Maybe<Array<Maybe<ResolversTypes["Todo"]>>>, ParentType, ContextType>;
  getCategory?: Resolver<Maybe<ResolversTypes["Todo"]>, ParentType, ContextType, Partial<QueryGetCategoryArgs>>;
  getTodo?: Resolver<Maybe<ResolversTypes["Todo"]>, ParentType, ContextType, Partial<QueryGetTodoArgs>>;
  getTodoList?: Resolver<Maybe<Array<Maybe<ResolversTypes["Todo"]>>>, ParentType, ContextType>;
};

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes["Todo"] = ResolversParentTypes["Todo"]> = {
  category?: Resolver<Maybe<ResolversTypes["TodoCategory"]>, ParentType, ContextType>;
  completed?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TodoCategoryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["TodoCategory"] = ResolversParentTypes["TodoCategory"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Todo?: TodoResolvers<ContextType>;
  TodoCategory?: TodoCategoryResolvers<ContextType>;
};

export type GetTodoListQueryVariables = Exact<{ [key: string]: never }>;

export type GetTodoListQuery = {
  __typename?: "Query";
  getTodoList?: Array<{ __typename?: "Todo"; id: string; title: string; completed: boolean } | null> | null;
};

export type GetTodoQueryVariables = Exact<{
  getTodoId?: InputMaybe<Scalars["ID"]["input"]>;
}>;

export type GetTodoQuery = { __typename?: "Query"; getTodo?: { __typename?: "Todo"; id: string; title: string; completed: boolean } | null };

export type CreateTodoMutationVariables = Exact<{
  input: TodoCreateInput;
}>;

export type CreateTodoMutation = {
  __typename?: "Mutation";
  createTodo?: { __typename?: "Todo"; id: string; title: string; completed: boolean } | null;
};

export type DeleteTodoMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type DeleteTodoMutation = {
  __typename?: "Mutation";
  deleteTodo?: { __typename?: "Todo"; id: string; title: string; completed: boolean } | null;
};

export type UpdateTodoMutationVariables = Exact<{
  input: TodoUpdateInput;
}>;

export type UpdateTodoMutation = {
  __typename?: "Mutation";
  updateTodo?: { __typename?: "Todo"; id: string; title: string; completed: boolean } | null;
};

export const GetTodoListDocument = gql`
  query GetTodoList {
    getTodoList {
      id
      title
      completed
    }
  }
`;

/**
 * __useGetTodoListQuery__
 *
 * To run a query within a React component, call `useGetTodoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoListQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, options);
}
export function useGetTodoListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, options);
}
export function useGetTodoListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, options);
}
export type GetTodoListQueryHookResult = ReturnType<typeof useGetTodoListQuery>;
export type GetTodoListLazyQueryHookResult = ReturnType<typeof useGetTodoListLazyQuery>;
export type GetTodoListSuspenseQueryHookResult = ReturnType<typeof useGetTodoListSuspenseQuery>;
export type GetTodoListQueryResult = Apollo.QueryResult<GetTodoListQuery, GetTodoListQueryVariables>;
export const GetTodoDocument = gql`
  query GetTodo($getTodoId: ID) {
    getTodo(id: $getTodoId) {
      id
      title
      completed
    }
  }
`;

/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *      getTodoId: // value for 'getTodoId'
 *   },
 * });
 */
export function useGetTodoQuery(baseOptions?: Apollo.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
}
export function useGetTodoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
}
export function useGetTodoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
}
export type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export type GetTodoSuspenseQueryHookResult = ReturnType<typeof useGetTodoSuspenseQuery>;
export type GetTodoQueryResult = Apollo.QueryResult<GetTodoQuery, GetTodoQueryVariables>;
export const CreateTodoDocument = gql`
  mutation CreateTodo($input: TodoCreateInput!) {
    createTodo(input: $input) {
      id
      title
      completed
    }
  }
`;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
}
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
  mutation DeleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
      completed
    }
  }
`;
export type DeleteTodoMutationFn = Apollo.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, options);
}
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = Apollo.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = Apollo.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const UpdateTodoDocument = gql`
  mutation UpdateTodo($input: TodoUpdateInput!) {
    updateTodo(input: $input) {
      id
      title
      completed
    }
  }
`;
export type UpdateTodoMutationFn = Apollo.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, options);
}
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = Apollo.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = Apollo.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
