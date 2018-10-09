const graphql = require('graphql');
const db = require('../models');


const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = graphql;

/* Types */
// BookType
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args){
                //Get data from db
                return db.Author.findById(parent.authorId);
            }
        }
    })
});
// AuthorType
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args){
                //Get data from db
                return db.Book.find({authorId: parent.id});
            }
        }
    })
});


module.exports.BookType = BookType;
module.exports.AuthorType = AuthorType;