import { gql } from 'apollo-boost';

/* Mutations */
const addBookMutation = gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;


export { addBookMutation };