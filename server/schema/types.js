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
            async resolve(parent, args){
                try {
                    //Get data from db
                    return await db.Author.findById(parent.authorId);
                }
                catch (err) { console.log(err) }
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
            async resolve(parent, args){
                try{
                    //Get data from db
                    return await db.Book.find({authorId: parent.id});
                }
                catch (err) { console.log(err) }
            }
        }
    })
});


module.exports.BookType = BookType;
module.exports.AuthorType = AuthorType;