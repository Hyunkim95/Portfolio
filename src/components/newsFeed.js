import React, { Component } from 'react';
import { recentActivity } from '../lib/github.js';
import axios from 'axios';
import '../stylesheet/newsFeed.css'
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
      <div className="mobile-none">
        <Feed events={this.state.events} />
      </div>
    )
  }
}

export default NewsFeed;
