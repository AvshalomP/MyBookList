const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLSchema, GraphQLObjectType,
        GraphQLString, GraphQLID
      } = graphql;
// dummy data
const books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'},
];

/* Types */
const BookType = new GraphQLObjectType({
   name: 'Book',
   fields: () => ({
       id: { type: GraphQLID },
       name: { type: GraphQLString },
       genre: { type: GraphQLString }
   })
});


/* Query */
const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType',
   fields: {
       book: {
           type: BookType,
           args: { id: {type: GraphQLID } },
           resolve(parent, args){
               //code to get data from db
               return _.find(books, { id: args.id })
           }
       }
   }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});