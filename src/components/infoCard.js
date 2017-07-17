import React, { Component } from 'react';
import _ from 'lodash';
import '../stylesheet/infoCard.css';
import { skills_obj } from '../lib/skill.js';
import { Grid, Card, Image, Label} from 'semantic-ui-react';

class InfoCard extends Component {
  render(){
    var user = this.props.user
    var languages = this.props.languages
    return(
      <div>
        <Card fluid>
          <Card.Content>
            <Card.Header>
              Bio
            </Card.Header>
            <Card.Description>
              <div>
                {user.bio}
              </div>

              <div className="skill-tag">
                According to <i>{this.props.type}</i> Hyun is good at:
                <br/>
                <br/>
                {Object.keys(languages).map((key) =>
                  <Label as='a' color={skills_obj(key).color} image>
                    <img src={skills_obj(key).image} />
                    {key}
                  </Label>
                )}
              </div>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default InfoCard;
