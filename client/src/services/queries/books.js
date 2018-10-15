import { gql } from 'apollo-boost';

/* Queries */
const getBooksQuery = gql`
    {
        books{
            name
            id
        }
    }
`;

const getBookQuery = gql `
    query($id: ID){
        book(id: $id) {
            name
            genre
            id
            author {
                name
                age
                id
                books {
                    name
                    id
                }
            }
        }
    }
`;


export { getBooksQuery, getBookQuery };