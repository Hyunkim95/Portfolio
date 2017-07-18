import React, { Component } from 'react';
import ProfileCard from './profileCard';
import NewsFeed from './newsFeed';
import InfoCard from './infoCard';
import RepoList from './RepoList';
import { Grid, Feed} from 'semantic-ui-react';

class GitHubPane extends Component {
  constructor(){
    super()
  }

  render() {
    var user = this.props.user
    var languages = this.props.languages
    var repos = this.props.repos
    return (
      <div>
        <Grid doubling centered stackable>
          <Grid.Row>
            <Grid.Column width={6}>
             <ProfileCard
               user={user}
             />
             <div className="spacer mobile-none"></div>
             <NewsFeed/>
            </Grid.Column>
            <Grid.Column width={10}>
              <InfoCard
                user={user}
                languages={languages}
                type="Github"
              />
              <div className="spacer"></div>
              <RepoList
                repos={repos}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default GitHubPane;
