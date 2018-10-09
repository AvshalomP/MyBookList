const graphql = require('graphql');
const _ = require('lodash');
const { books, authors } = require('./dummyDB');
const { BookType, AuthorType } = require('./types');

const { GraphQLObjectType, GraphQLID, GraphQLList} = graphql;

/* Query */
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLID } },
            resolve(parent, args){
                //code to get data from db
                return _.find(books, { id: args.id });
            }
        },
        author: {
            type: AuthorType,
            args: { id: {type: GraphQLID } },
            resolve(parent, args){
                //code to get data from db
                return _.find(authors, { id: args.id });
            }
        },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args){
                return books;
            }
        },
        authors: {
            type: GraphQLList(AuthorType),
            resolve(parent, args){
                return authors;
            }
        }
    }
});

module.exports = RootQuery;