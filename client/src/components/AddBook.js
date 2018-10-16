import React, { Component } from 'react';
import { getAuthorsQuery, getBooksQuery, addBookMutation } from "../services/queries/index";
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

        this.setState({ name: "", genre: "", authorId: "" })
    };

    render() {
        const { name, genre, authorId } = this.state;
        const authors = this.getAuthors();

        return (
            <form id="add-book" onSubmit={this.handleSubmit}>
                <div className="field">
                    <label>Book name: </label>
                    <input type="text" name="name" onChange={this.handleChange} value={name} required/>
                </div>
                <div className="field">
                    <label>Genre: </label>
                    <input type="text" name="genre" onChange={this.handleChange} value={genre} required/>
                </div>
                <div className="field">
                    <label>Author: </label>
                    <select name="authorId" onChange={this.handleChange} value={authorId} required>
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
