import React, { Component } from 'react';
import { getBooksQuery } from "../services/queries/books";
import { graphql } from 'react-apollo';


class BookList extends Component {
    render() {
        const { data } = this.props;
        const books = data.loading ? (<div>Loading Books...</div>)
            : data.books.map( book => {
                return (<li key={book.id}>{book.name}</li>)
        });

        return (
            <div>
                <ul id="book-list">
                    { books }
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
