import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

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

const RelatedProblemsType = new GraphQLObjectType({
  name: 'RelatedProblems',
  fields: () => ({
    problemID: {
      type: GraphQLString
    }
  })
});

const CodeType = new GraphQLObjectType({
  name: 'Code',
  fields: () => ({
    snippet: {
      type: GraphQLString
    },
    testCase: {
      type: new GraphQLList(TestCaseType)
    },
    children: {
      type: new GraphQLList(RelatedProblemsType)
    }
  })
});

export { CodeType };