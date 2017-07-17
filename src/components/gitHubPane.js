import React, { Component } from 'react';
import { Grid, Card } from 'semantic-ui-react';

const extra = (
  <div>
    <a>
      16 Friends
    </a>
  </div>
)

class GitHubPane extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Card
                image="https://react.semantic-ui.com/assets/images/avatar/large/elliot.jpg"
                header='Elliot Baker'
                meta='Friend'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
                extra = {extra}
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Card
                fluid
                header='Daniel RadCliffe'
                description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default GitHubPane;
