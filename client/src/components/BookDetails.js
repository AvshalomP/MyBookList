import React, { Component } from 'react';
import { getBookQuery } from "../services/queries/index";
import { graphql } from 'react-apollo';

class BookDetails extends Component {
    render(){
        const { data } = this.props;
        console.log("data: ", data);

        return(
            <div>Book Details....</div>
        )
    }
}

export default graphql(getBookQuery, {
    options: props => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails);