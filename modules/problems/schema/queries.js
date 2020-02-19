import { ProblemsModel } from '../../../models';
import { node } from 'compile-run';
import { ProblemType } from '../types';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql'

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    problem: {
      type: ProblemType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return ProblemsModel.findById(args.id)
      }
    },
    problems: {
      type: new GraphQLList(ProblemType),
      resolve: () => {
        return ProblemsModel.find({})
      }
    },
  })
});

export { QueryType };
