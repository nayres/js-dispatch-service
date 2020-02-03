import { ProblemModel } from '../../../models';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql'

const ProblemType = new GraphQLObjectType({
  name: 'Problem',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    difficulty: {
      type: GraphQLString
    },
    author: {
      type: GraphQLString
    },
    language: {
      type: GraphQLString
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    example: {
      type: GraphQLString
    },
    snippet: {
      type: GraphQLString
    },
    testCase: {
      type: GraphQLString
    }
  })
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    problem: {
      type: ProblemType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parent, args) {
        return ProblemModel.findById(args.id)
      }
    },
    problems: {
      type: new GraphQLList(ProblemType),
      resolve: () => {
        return ProblemModel.find({})
      }
    },
  })
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addProblem: {
      type: ProblemType,
      args: {
        difficulty: {
          type: new GraphQLNonNull(GraphQLString)
        },
        author: {
          type: new GraphQLNonNull(GraphQLString)
        },
        language: {
          type: new GraphQLNonNull(GraphQLString)
        },
        title: {
          type: new GraphQLNonNull(GraphQLString)
        },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        },
        example: {
          type: new GraphQLNonNull(GraphQLString)
        },
        snippet: {
          type: new GraphQLNonNull(GraphQLString)
        },
        testCase: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        const problem = new Problem({
          difficulty: args.difficulty,
          author: args.author,
          language: args.language,
          title: args.title,
          description: args.description,
          example: args.example,
          snippet: args.snippet,
          testCase: args.testCase
        });
        return ProblemModel.save()
      }
    },
  }
});

const RootQuery = new GraphQLSchema({
  query: QueryType,
  mutation: Mutation
});

export { RootQuery };