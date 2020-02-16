import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'

const TestCaseType = new GraphQLObjectType({
  name: 'TestCase',
  fields: () => ({
    functionCall: {
      type: GraphQLString
    },
    expectedResult: {
      type: GraphQLString
    }
  })
});

export { TestCaseType };
