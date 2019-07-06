import React, { Component } from 'react';


class SearchBar extends Component {
    state = { 
        term: ''
     }

     onInputChange = (e) =>{
         this.setState({ term: e.target.value})
     }


     onFormSubmit = (e) =>{
         e.preventDefault();
         this.props.onFormSubmit(this.state.term)
     }

    render() { 
        return (
        <div className="ui search-bar segment">
            <form onSubmit={this.onFormSubmit}  className="ui form" >
                <div className="field">
                    <label>Video Search</label>
                    <input value={this.state.term}  onChange={this.onInputChange }  />
                </div>
            </form>
        </div>  );
    }
}
 
export default SearchBar;