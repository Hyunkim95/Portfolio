import React, { Component } from 'react';
import ProfileCard from './profileCard';
import NewsFeed from './newsFeed';
import InfoCard from './infoCard';
import RepoList from './RepoList';
import { githubUserFormatter, githubRepoFormatter, findUniqueLanguages } from '../lib/github';
import { Grid, Feed} from 'semantic-ui-react';
import axios from 'axios';

class GitHubPane extends Component {
  constructor(){
    super()
    this.state = {
      user: {
        name:'',
        image:'',
        url:'',
        bio:'',
        info: []
      },
      languages: {},
      repos: []
    }
  }

  fetchUserInfo = () =>{
    const URL = 'https://api.github.com/users/hyunkim95'
    axios.get(URL)
      .then((response) => {
        this.setState(githubUserFormatter(response))
      });
  }

  fetchAllRepo = () => {
    const URL = 'https://api.github.com/users/hyunkim95/repos?sort=created'
    axios.get(URL)
      .then((response) => {
        this.setState(githubRepoFormatter(response),
        () => this.setState(findUniqueLanguages(this.state.repos)))
      })
  }

  componentDidMount(){
    this.fetchUserInfo()
    this.fetchAllRepo()
  }

  render() {
    return (
      <div>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={6}>
             <ProfileCard
               user={this.state.user}
             />
             <div className="spacer"></div>
             <NewsFeed/>
            </Grid.Column>
            <Grid.Column width={10}>
              <InfoCard
                user={this.state.user}
                languages={this.state.languages}
                type="Github"
              />
              <div className="spacer"></div>
              <RepoList
                repos={this.state.repos}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default GitHubPane;
