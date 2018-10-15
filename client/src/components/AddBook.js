import React, { Component } from 'react';
import { getAuthorsQuery, getBooksQuery } from "../services/queries/index";
import { addBookMutation } from "../services/queries/mutations";
import { graphql, compose } from 'react-apollo';


class AddBook extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            genre: "",
            authorId: ""
        }
    }

    getAuthors(){
        const data = this.props.getAuthorsQuery;

        return data.loading ? (<option disabled>Loading Authors...</option>)
                            : data.authors.map( author => {
                                return (<option key={author.id} value={author.id}>{author.name}</option>)
                            })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit = (event) => {
        const { name, genre, authorId } = this.state;

        event.preventDefault();
        this.props.addBookMutation({
            variables: { name, genre, authorId },
            refetchQueries: [{ query: getBooksQuery }]
        });
    };

    render() {
        const authors = this.getAuthors();
        return (
            <form id="add-book" onSubmit={this.handleSubmit}>
                <div className="input">
                    <label>Book name:</label>
                    <input type="text" name="name" onChange={this.handleChange} required/>
                </div>
                <div className="input">
                    <label>Genre</label>
                    <input type="text" name="genre" onChange={this.handleChange} required/>
                </div>
                <div>
                    <label>Author:</label>
                    <select name="authorId" onChange={this.handleChange} required>
                        <option label="Select author" defaultValue/>
                        { authors }
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default compose(
    graphql(getAuthorsQuery, {name: "getAuthorsQuery"}),
    graphql(addBookMutation, {name: "addBookMutation"})
)(AddBook);
