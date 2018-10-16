import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import BookList from './components/BookList';
import BookDedatils from './components/BookDetails';
import AddBook from './components/AddBook';


// setup apollo
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});


class App extends Component {
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
        return (
            <ApolloProvider client={client} >
              <div id="main">
                <BookList handleBookSelection={this.handleBookSelection}/>
                <AddBook />
                <BookDedatils bookId={this.state.selected}/>
              </div>
            </ApolloProvider>
        );
    }
}

export default App;
