import React, { Component } from 'react';
import { recentActivity } from '../lib/github.js';
import axios from 'axios';
import { Feed } from 'semantic-ui-react';

class NewsFeed extends Component {
  constructor(props){
    super(props)
    this.state={
      events:[]
    }
  }

  newsfeed = () => {
    const URL = 'https://api.github.com/users/hyunkim95/events'
    axios.get(URL)
      .then((response) => {
        this.setState(recentActivity(response))
      })
  }

  componentDidMount(){
    this.newsfeed()
  }

  render(){
    return(
      <Feed events={this.state.events} />
    )
  }
}

export default NewsFeed;
