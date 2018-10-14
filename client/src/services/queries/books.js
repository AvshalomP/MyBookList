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


export { getBooksQuery };