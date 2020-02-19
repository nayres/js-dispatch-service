import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'

const DocumentationType = new GraphQLObjectType({
  name: 'Documentation',
  fields: () => ({
    description: {
      type: GraphQLString
    },
    example: {
      type: GraphQLString
    },
    tags: {
      type: new GraphQLList(GraphQLString)
    }
  })
});

export { DocumentationType };
