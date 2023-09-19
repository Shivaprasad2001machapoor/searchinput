import './index.css'

const SuggestionItem = ({suggestion}) => (
  <li className="suggestion-item">
    <p className="suggestion-text">{suggestion.suggestion}</p>
    <img
      src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
      alt="arrow"
      className="arrow"
      onClick="handletheclick(suggestion.suggestion)"
    />
  </li>
)

export default SuggestionItem
