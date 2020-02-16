import { GraphQLSchema } from 'graphql';
import { QueryType } from './queries';
import { Mutation } from './mutations';

const RootQuery = new GraphQLSchema({
  query: QueryType,
  mutation: Mutation
});

export { RootQuery };
