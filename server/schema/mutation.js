const graphql = require('graphql');
const { AuthorType } = require('./types');
const db = require('../models');


const { GraphQLObjectType, GraphQLString, GraphQLInt } = graphql;

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: { type: GraphQLString },
                age: { type: GraphQLInt },
            },
            resolve(parent, args){
                let author = db.Author({
                    name: args.name,
                    age: args.age,
                });
                return author.save();
            }
        }
    }
});


module.exports = Mutation;