import { GraphQLInputObjectType, GraphQLNonNull, 
  GraphQLObjectType, GraphQLString } from 'graphql';
import { UUIDType } from './uuid.js';

export const Post = new GraphQLObjectType ({
    name: 'Post',
    fields: () => ({
      id: {
        type: new GraphQLNonNull(UUIDType),
      },
      title: {
        type: new GraphQLNonNull(GraphQLString),
      },
      content: {
        type: new GraphQLNonNull(GraphQLString),
      },  
      authorId: {
        type: new GraphQLNonNull(GraphQLString),
      }  
    })
});

export const CreatePostInput = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: () => ({
    title: { 
      type: new GraphQLNonNull(GraphQLString) 
    },
    content: { 
      type: new GraphQLNonNull(GraphQLString) 
    },
    authorId: { 
      type: new GraphQLNonNull(UUIDType) 
    },
  }),
});

  