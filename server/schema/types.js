const graphql = require('graphql');
const _ = require('lodash');
const { authors, books } = require('./dummyDB');


const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLList } = graphql;

/* Types */
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args){
                return _.find(authors, { id: parent.authorId })
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: GraphQLList(BookType),
            resolve(parent, args){
                return _.filter(books, { authorId: parent.id })
            }
        }
    })
});


module.exports.BookType = BookType;
module.exports.AuthorType = AuthorType;