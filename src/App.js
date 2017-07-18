import React, { Component } from 'react';
import { Grid, Container, Segment} from 'semantic-ui-react';
import './stylesheet/App.css';
import axios from 'axios';
import { githubUserFormatter, githubRepoFormatter, findUniqueLanguages } from './lib/github';
import { URL } from './config/config'
import ToggleButton from './components/toggleButton';
import gitHubPane from './components/gitHubPane';
import contactForm from './components/contactForm';

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
        github: gitHubPane,
        contact: contactForm
      },
      user: {
        name:'',
        image:'',
        url:'',
        bio:'',
        info: {
          username: '',
          email: '',
          repos: '',
          location: ''
        }
      },
      languages: {},
      repos: [],
      form: {
        firstName: '',
        lastName: '',
        problem: '',
        success: false
      }
    }
  }

  changeTab = (tab) =>{
    this.setState(changeState('activeTab', tab))
  }

  fetchUserInfo = () =>{
    axios.get(URL)
      .then((response) => {
        this.setState(githubUserFormatter(response))
      });
  }

  fetchAllRepo = () => {
    axios.get(URL + "/repos?sort=created")
      .then((response) => {
        this.setState(githubRepoFormatter(response),
        () => this.setState(findUniqueLanguages(this.state.repos)))
      })
  }

  componentDidMount(){
    this.fetchUserInfo()
    this.fetchAllRepo()
  }

  handleChange = (e) => {
    var form = this.state.form
    form[e.target.name] = e.target.value
    this.setState({form: form})
  }

  handleSubmit = () => {
    this.setState({ form: {
        firstName: '',
        lastName: '',
        problem: '',
        success: true
      }
    })
  }

  render() {
    var TabContent = this.state.tabContent[this.state.activeTab]
    return (
      <div className="background padding-bottom">
        <div className="padding-top"></div>

            <div className="center">
              <ToggleButton
                changeTab = {this.changeTab}
                activeTab = {this.state.activeTab}
              />
            </div>

          <div className="spacer"></div>

          <Container>
            <Segment>
              <TabContent
                handleSubmit = {this.handleSubmit}
                activeTab = {this.state.activeTab}
                handleChange = {this.handleChange}
                form = {this.state.form}
                user = {this.state.user}
                languages = {this.state.languages}
                repos = {this.state.repos}
              />
            </Segment>
          </Container>

      </div>
    );
  }
}

export default App;
