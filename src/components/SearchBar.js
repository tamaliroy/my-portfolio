import React from 'react';

class SearchBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
      }

    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.onTermChanged(this.state.searchTerm);
    }

    render() {
        return (
          <form className="ui form" onSubmit = {this.onInputSubmit}>
            <div className="field">
                <label htmlFor ="searchField">Search Term</label>
                <input type="text" name="searchField" value={this.state.searchTerm} 
                onChange={(e) => this.setState({searchTerm: e.target.value})}/>
            </div>    
          </form>
        )
    }
}

export default SearchBar;