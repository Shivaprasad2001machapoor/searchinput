import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  handletheclick(suggestion) {
    this.setState({
      searchInput: suggestion,
    })
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const filtered = suggestionsList.filter(suggestion =>
      suggestion.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="google-suggestions">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-icon"
        />
        <div className="container-bg">
          <div className="search-box-container">
            <img
              className="searchbar"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="suggestions-list">
            {filtered.map(suggestion => (
              <SuggestionItem key={suggestion.id} suggestion={suggestion} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
