import React, { Component } from 'react';
import { getBookQuery } from "../services/queries/index";
import { graphql } from 'react-apollo';


class BookDetails extends Component {
    render(){
        const { book } = this.props.data;
        const details = !book ? (<div>No book selected...</div>)
                              : (<div>
                                      <h2>{book.name}</h2>
                                      <p>Genre: {book.genre}</p>
                                      <p>Author: {book.author.name}</p>
                                      <label>Other books by {book.author.name}: </label>
                                      <ul className="other-books">
                                          {book.author.books.map( book => {
                                              return <li key={book.id}>{book.name}</li>
                                          })}
                                      </ul>
                                  </div>
                                );

        return (
            <div id="book-details">
                { details }
            </div>

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