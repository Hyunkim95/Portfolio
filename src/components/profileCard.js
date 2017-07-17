import React from 'react';
import '../stylesheet/profileCard.css';
import { Grid, Card, Image } from 'semantic-ui-react';

const ProfileCard = (user) => {
  const extra = (
    <div>
      <a>
        16 Friends
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
