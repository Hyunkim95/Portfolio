import React, { Component } from 'react';
import ProfileCard from './profileCard';
import NewsFeed from './newsFeed';
import InfoCard from './infoCard';
import RepoList from './RepoList';
import { Grid, Feed, Tab} from 'semantic-ui-react';

class GitHubPane extends Component {
  constructor(){
    super()
  }

  render() {
    var user = this.props.user
    var languages = this.props.languages
    var projects = this.props.projects
    var tutorials = this.props.tutorials

    const panes = [
      { menuItem: 'Projects', render: () =>
      <Tab.Pane attached={false}>
        <RepoList
          repos={projects}
        />
      </Tab.Pane> },
      { menuItem: 'Tutorials', render: () =>
      <Tab.Pane attached={false}>
        <RepoList
          repos={tutorials}
        />
      </Tab.Pane> },
    ]

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
              <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default GitHubPane;
