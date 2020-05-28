import React, { Component } from 'react'
import SearchArea from './SearchArea'
import request from 'superagent'
import BookList from './BookList'

class Books extends Component {

    state = {
        books: [],
        searchField: 'dogs'
    }

    // For Fetching The Data
    searchBook = e => {
        e.preventDefault()

        request.get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .then(data => {
                this.setState({
                    books: [...data.body.items]
                })
            })
    }

    handleSearch = e => {
        this.setState({
            searchField: e.target.value
        })
    }

    render() {
        return (
            <div className="books">
                <SearchArea handleSearch={this.handleSearch} searchBook={this.searchBook} />
                <BookList books={this.state.books} />
            </div>
        )
    }
}

export default Books