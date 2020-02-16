import { ProblemsModel } from '../../../models';
import { ProblemType } from '../types';
// import { node } from 'compile-run';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql'

// const funcExec = 'isTrue([1,2,3,4,5])'
// const sourcecode = `function isTrue(a) { return a.includes(6) }; console.log(${funcExec})`;
// let resultPromise = node.runSource(sourcecode);
// resultPromise
//   .then(result => {
//     console.log(result);
//   })
//   .catch(err => {
//     console.log(err);
//   });

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
        return ProblemsModel.save()
      }
    },
  }
});

export { Mutation };
