import React, { Component } from 'react';

import { Button } from 'semantic-ui-react';


class ToggleButton extends Component {
  render() {
    var changeTab = this.props.changeTab
    return (
      <div>
        <Button.Group size='massive'>
          <Button
            onClick={()=>changeTab('github')}>GitHub</Button>
            <Button.Or />
          <Button
            onClick={()=>changeTab('linkedin')}>LinkedIn</Button>
        </Button.Group>
      </div>
    );
  }
}

export default ToggleButton;
