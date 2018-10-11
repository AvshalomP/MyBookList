import React, { Component } from 'react';
import { getBooksQuery } from "../services/queries/books";
import { graphql } from 'react-apollo';


class BookList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <ul id="book-list">
                    <li>Book Name</li>
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
