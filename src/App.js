import React, { Component } from 'react';
import { Grid, Container, Segment} from 'semantic-ui-react';
import './stylesheet/App.css';
import ToggleButton from './components/toggleButton';
import githubPane from './components/githubPane';
import linkedInPane from './components/linkedInPane';

function changeState(key,value) {
  return function update(state){
    state[key] = value
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      activeTab: 'github',
      tabContent: {
        github: githubPane,
        linkedin: linkedInPane
      }
    }
  }

  changeTab = (tab) =>{
    this.setState(changeState('activeTab', tab))
  }

  render() {
    var TabContent = this.state.tabContent[this.state.activeTab]
    return (
      <div className="background padding-bottom">
        <div className="padding-top"></div>
          <Container textAlign='center'>
            <ToggleButton
              changeTab = {this.changeTab}
              activeTab = {this.state.activeTab}
            />
          </Container>

          <div className="spacer"></div>

          <Container>
            <Segment>
              <TabContent
                activeTab = {this.state.activeTab}
              />
            </Segment>
          </Container>

      </div>
    );
  }
}

export default App;
