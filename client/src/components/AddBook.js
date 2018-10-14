import React, { Component } from 'react';
import { getAuthorsQuery } from "../services/queries/authors";
import { graphql } from 'react-apollo';


class AddBook extends Component {
    constructor(props){
        super(props);

        this.state = {
            book: "",
            genre: "",
            authorId: ""
        }
    }

    getAuthors(){
        const { data } = this.props;

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
        event.preventDefault();
        console.log(this.state);
    };

    render() {
        const authors = this.getAuthors();
        return (
            <form id="add-book" onSubmit={this.handleSubmit}>
                <div className="input">
                    <label>Book name:</label>
                    <input type="text" name="book" onChange={this.handleChange}/>
                </div>
                <div className="input">
                    <label>Genre</label>
                    <input type="text" name="genre" onChange={this.handleChange}/>
                </div>
                <div>
                    <label>Author:</label>
                    <select name="authorId" onChange={this.handleChange}>
                        <option label="Select author"/>
                        { authors }
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    }
}

export default graphql(getAuthorsQuery)(AddBook);
