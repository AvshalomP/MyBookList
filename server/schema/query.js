const graphql = require('graphql');
const { BookType, AuthorType } = require('./types');
const db = require('../models');

const { GraphQLObjectType, GraphQLID, GraphQLList} = graphql;

/* Query */
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLID } },
            resolve(parent, args){
                //Get data from db
                return db.Book.findById(args.id);
            }
        },
        author: {
            type: AuthorType,
            args: { id: {type: GraphQLID } },
            resolve(parent, args){
                //Get data from db
                return db.Author.findById(args.id);
            }
        },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args){
                //Get data from db
                return db.Book.find({});
            }
        },
        authors: {
            type: GraphQLList(AuthorType),
            resolve(parent, args){
                //Get data from db
                return db.Author.find({});
            }
        }
    }
});

module.exports = RootQuery;