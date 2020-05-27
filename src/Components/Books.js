import React, { Component } from 'react'
import SearchArea from './SearchArea'

class Books extends Component {

    state = {
        books: [],
        searchField: ''
    }

    handleSearch = e => {
        this.setState({
            searchField: e.target.value
        })
    }

    render() {
        return (
            <div className="books">
                <SearchArea handleSearch={this.handleSearch} />
            </div>
        )
    }
}

export default Books