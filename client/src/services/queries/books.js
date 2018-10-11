import { gql } from 'apollo-boost';

/* Queries */
const getBooksQuery = gql`
    {
        books{
            name
            genre
            id
        }
    }
`;


export { getBooksQuery };