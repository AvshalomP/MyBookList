import React, { Component } from 'react';


class BookDetails extends Component {
    render(){
        const { bookId } = this.props;
        console.log(bookId);

        return(
            <div>Book Details....</div>
        )
    }
}

export default BookDetails;