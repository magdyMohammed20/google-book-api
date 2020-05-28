import React, { Component } from 'react'
import SearchArea from './SearchArea'
import request from 'superagent'
import BookList from './BookList'

class Books extends Component {

    state = {
        books: [],
        searchField: 'dogs',
        sort: ''
    }

    // For Fetching The Data
    searchBook = e => {
        e.preventDefault()

        request.get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .then(data => {
                const cleanedData = this.cleanData(data)
                console.log(cleanedData)
                this.setState({
                    books: [...cleanedData]
                })
            })
    }

    handleSearch = e => {
        this.setState({
            searchField: e.target.value
        })
    }

    handleSort = e => {
        this.setState({
            sort: e.target.value
        })
    }


    // Clean Data If Book Not Have Specific Property
    cleanData = data => {
        const cleanedData = data.body.items.map(book => {
            if (book.volumeInfo.hasOwnProperty('authors') === false) {
                book.volumeInfo.authors = ['No Author']
            }
            if (book.volumeInfo.imageLinks === undefined) {
                book.volumeInfo.imageLinks = { thumbnail: "https://via.placeholder.com/128x189" }
            }
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo.publishedDate = '0000'
            }
            if (book.volumeInfo.hasOwnProperty('pageCount') === false) {
                book.volumeInfo.pageCount = 'Unknown'
            }

            return book
        })

        return cleanedData
    }


    render() {

        // Sort Depending On Sort Value
        const sortedBooks = this.state.books.sort((a, b) => {
            if (this.state.sort === 'Newest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0, 4)) - parseInt(a.volumeInfo.publishedDate.substring(0, 4))
            }
            if (this.state.sort === 'Oldest') {
                return parseInt(a.volumeInfo.publishedDate.substring(0, 4)) - parseInt(b.volumeInfo.publishedDate.substring(0, 4))
            }
        })
        return (
            <div className="books">
                <SearchArea handleSearch={this.handleSearch} searchBook={this.searchBook} handleSort={this.handleSort} />
                <BookList books={sortedBooks} />
            </div>
        )
    }
}

export default Books