import React from 'react'
import { Card } from 'semantic-ui-react'

const playerCard = (props) => (
  <Card style={{height: 'inherit'}}>

    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Highest Rank: {props.highest_rank}</span>// 
        <span className='date'> Lowest Rank: {props.lowest_rank}</span>
      </Card.Meta>
      <Card.Description>
        {props.name}'s is a {props.position}.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
    Average Rank: {props.rank}
      
    </Card.Content>
  </Card>
)

export default playerCard