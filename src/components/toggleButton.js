import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class ToggleButton extends Component {
  render() {
    var changeTab = this.props.changeTab
    var activeTab = this.props.activeTab
    return (
      <div>
        <Button.Group size='massive'>
          <Button
            color={activeTab == 'github' ? 'linkedin' : 'grey'}
            onClick={()=>changeTab('github')}>
            <Icon name='github alternate'/>
            GitHub
          </Button>
            <Button.Or />
          <Button
            color={activeTab == 'linkedin' ? 'linkedin' : 'grey'}
            onClick={()=>changeTab('linkedin')}>
            <Icon name='linkedin' />
            LinkedIn
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default ToggleButton;
