import React, { Component } from 'react';
import { getBooksQuery } from "../services/queries/index";
import { graphql } from 'react-apollo';
import BookDedatils from './BookDetails';

class BookList extends Component {
    constructor(props){
        super(props);

        this.state = {
            selected: null
        }
    }

    handleBookSelection = (id) => {
        this.setState({selected: id})
    };

    render() {
        const { data } = this.props;
        const books = data.loading ? (<div>Loading Books...</div>)
            : data.books.map( book => {
                const id = book.id;
                return (<li key={book.id} onClick={this.handleBookSelection.bind(this, id)}>{book.name}</li>)
        });

        return (
            <div>
                <ul id="book-list">
                    { books }
                </ul>
                <BookDedatils bookId={this.state.selected}/>
            </div>
        );
    }
}

export default graphql(getBooksQuery)(BookList);
