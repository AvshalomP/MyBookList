import { gql } from 'apollo-boost';

/* Queries */
const getAuthorsQuery = gql`
    {
        authors{
            name
            id
        }
    }
`;


export { getAuthorsQuery };