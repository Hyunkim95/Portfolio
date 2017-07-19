import React, { Component } from 'react';
import { skills_obj } from '../lib/skill.js';
import { Popup, Label } from 'semantic-ui-react';
import '../stylesheet/bar.css'

class Bar extends Component {
  constructor(){
    super()
  }

  getStyles = (key) => {
    return{
      width:`${Math.floor(this.props.languages[key]/this.props.total * 100)}%`,
      backgroundColor: skills_obj(key).bg,
      height: "1em"
    }
  }

  render(){
    var languages = this.props.languages
    return(
      <div className="total-bar">
        {Object.keys(languages).map((key) =>
          <Popup
            trigger={<div style={this.getStyles(key)} ></div>}
            content={<div>
              {Math.floor(this.props.languages[key]/this.props.total * 100)}% of repos main language is
              <img className="popup-image" src={skills_obj(key).image}/>
            </div>}
          />
        )}
      </div>
    )
  }
}

export default Bar;
