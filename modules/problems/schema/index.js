import { GraphQLSchema } from 'graphql';
import { QueryType } from './queries';
import { Mutation } from './mutations';

const ProblemQuery = new GraphQLSchema({
  query: QueryType,
  mutation: Mutation
});

export { ProblemQuery };
