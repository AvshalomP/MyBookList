import React, { Component } from 'react';
import { getBooksQuery } from "../services/queries/index";
import { graphql } from 'react-apollo';

class BookList extends Component {
    render() {
        const { data, handleBookSelection } = this.props;
        const books = data.loading ? (<div>Loading Books...</div>)
            : data.books.map( book => {
                const id = book.id;
                return (<li key={book.id} onClick={handleBookSelection.bind(this, id)}>{book.name}</li>)
        });

        return (
            <div id="book-list">
                <h1>My Book List</h1>
                <ul>
                    { books }
                </ul>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
