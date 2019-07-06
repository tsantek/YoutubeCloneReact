import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from './apis/youtube';
import VideoList from './VideoList';

class App extends Component {

    state = {
        videos: []
    }

    onTermSubmit = async (term) =>{
    const response =  await youtube.get('/search', {
            params:{
                q: term
            }
        })
        this.setState({videos: response.data.items})
        console.log(response)

    }

    render() { 
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
          );
    }
}
 
export default App;



// npm install axios@0.18.1