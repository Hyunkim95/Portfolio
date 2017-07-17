import React, { Component } from 'react';
import { Grid, Container, Segment} from 'semantic-ui-react';
import './stylesheet/App.css';
import ToggleButton from './components/toggleButton';
import ProfileCard from './components/profile-card';
import TabPane from './components/tabPane';

function changeState(key,value) {
  return function update(state){
    state[key] = value
  }
}

class App extends Component {
  constructor(){
    super()
    this.state = {
      activeTab: 'github'
    }
  }

  changeTab = (tab) =>{
    this.setState(changeState('activeTab', tab))
  }

  render() {
    return (
      <div className="background">
        <div className="padding-top"></div>
          <Container textAlign='center'>
            <ToggleButton
              changeTab = {this.changeTab}
            />
          </Container>

          <div className="spacer"></div>

          <Container>
            <Segment>
              <TabPane/>
            </Segment>
          </Container>
      </div>
    );
  }
}

export default App;
