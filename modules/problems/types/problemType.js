import { CodeType } from './codeType';
import { DocumentationType } from './documentation';
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
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
    documentation: {
      type: DocumentationType
    },
    code: {
      type: CodeType
    }
  })
});

export { ProblemType };
 