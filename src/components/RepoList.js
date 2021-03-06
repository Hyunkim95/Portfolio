import React, { Component } from 'react';
import { skills_obj } from '../lib/skill.js';
import { Item, Label, Menu} from 'semantic-ui-react';

class RepoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }

  previousPage = () =>{
    var count = this.state.counter
    if((count - 1) >= 0){
      count = count - 1
      this.setState({counter: count})
    }
  }

  nextPage = () =>{
    var count = this.state.counter
    if(count + 1 <= (Math.ceil(this.props.repos.length / 5)-2)){
      count = count + 1
      this.setState({counter: count})
    }
  }

  render(){
    var min = 0
    if (this.state.counter == 0){
      min = 0
    }else{
      min = (this.state.counter*6) + 1
    }
    var max = (this.state.counter + 1)*6
    var repos = this.props.repos.slice(min,max)
    return(
      <div>
        <Item.Group divided>
          {repos.map((repo, i) =>
            <Item href={repo.url} target="_blank">
              <Item.Image src={repo.image} floated='left'/>
              <Item.Content>
                <Item.Header as='a'>{repo.name}</Item.Header>
                <Item.Meta>
                  <span>{repo.created_at}</span>
                </Item.Meta>
                {/* .replace(/portfolio/, '') */}
                <Item.Description>{repo.description}</Item.Description>
                <Item.Extra>
                  <Label as='a' color={skills_obj(repo.language).color} image>
                    {repo.language == null ? (null) : <img src={skills_obj(repo.language).image} />}
                    {repo.language == null ? ("Miscellaneous") : repo.language}
                  </Label>
                </Item.Extra>
              </Item.Content>
            </Item>
          )}
        </Item.Group>
        <div className="center-children">
          <Menu pagination>
            <Menu.Item disabled={this.state.counter == 0} name='previous' onClick={this.previousPage} />
            <Menu.Item disabled={this.state.counter == (Math.ceil(this.props.repos.length / 5)-2)} name='next' onClick={this.nextPage}/>
          </Menu>
        </div>
      </div>
    )
  }
}

export default RepoList;
