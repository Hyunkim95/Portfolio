import React, { Component } from 'react';
import _ from 'lodash';
import { Item, Label } from 'semantic-ui-react';

class RepoList extends Component {
  render(){
    var repos = this.props.repos.slice(0,6)
    return(
      <div>
        <Item.Group divided>
          {repos.map((repo) =>
            <Item>
              <Item.Image src='https://react.semantic-ui.com/assets/images/wireframe/image.png' />

              <Item.Content>
                <Item.Header as='a'>12 Years a Slave</Item.Header>
                <Item.Meta>
                  <span className='cinema'>Union Square 14</span>
                </Item.Meta>
                <Item.Description>something</Item.Description>
                <Item.Extra>
                  <Label as='a' color='yellow' image>
                    <img src='https://react.semantic-ui.com/assets/images/avatar/small/joe.jpg' />
                    Joe
                  </Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          )}
        </Item.Group>
      </div>
    )
  }
}

export default RepoList;
