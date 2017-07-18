import React from 'react';
import '../stylesheet/profileCard.css';
import { Grid, Card, Image, Icon} from 'semantic-ui-react';

const ProfileCard = (user) => {
  const extra = (
    <div className="social-media">
      <a href="https://github.com/Hyunkim95"  target="_blank">
        <Icon large name="github"/>
      </a>

      <a href="https://www.linkedin.com/in/hyun-kim-71aa5897/" target="_blank">
        <Icon large name="linkedin"/>
      </a>
    </div>
  )
  var user = user.user
  return(
    <div>
      <Card fluid>
        <Image src={user.image}/>
        <Card.Content>
          <Card.Header>{user.name}</Card.Header>
          <Card.Meta>Developer</Card.Meta>
          <Card.Description>
            {Object.keys(user.info).map((key) =>
                <div><strong><span className="capitalize">{key} :</span></strong> {user.info[key]}</div>
            )}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          {extra}
        </Card.Content>
      </Card>
    </div>
  )
}

export default ProfileCard;
