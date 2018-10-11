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
            async resolve(parent, args){
                try {
                    //Get data from db
                    return await db.Book.findById(args.id);
                }
                catch (err) { console.log(err) }
            }
        },
        author: {
            type: AuthorType,
            args: { id: {type: GraphQLID } },
            async resolve(parent, args){
                try {
                    //Get data from db
                    return await db.Author.findById(args.id);
                }
                catch (err) { console.log(err) }
            }
        },
        books: {
            type: GraphQLList(BookType),
            async resolve(parent, args){
                try {
                    //Get data from db
                    return await db.Book.find({});
                }
                catch (err) { console.log(err) }
            }
        },
        authors: {
            type: GraphQLList(AuthorType),
            async resolve(parent, args){
                try {
                    //Get data from db
                    return await db.Author.find({});
                }
                catch (err) { console.log(err) }
            }
        }
    }
});

module.exports = RootQuery;