import React, { Component } from 'react';


class SearchBar extends Component {
    state = { 
        term: ''
     }

     onInputChange = (e) =>{
         this.setState({ term: e.target.value})
     }


    render() { 
        return (
        <div className="ui search-bar segment">
            <form className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input value={this.state.term} onChange={this.onInputChange }  />
                </div>
            </form>
        </div>  );
    }
}
 
export default SearchBar;