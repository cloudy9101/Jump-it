import React from 'react';
import { ListItem, Text, Icon, Left, Body, Right, Button } from 'native-base';

const ItemComponent = props => {
  return(
    <ListItem icon>
      <Left>
        <Button style={{ backgroundColor: props.backgroundColor || "#FF9501" }}>
          <Icon active type={ props.iconType || "Ionicons" } name={ props.iconName } />
        </Button>
      </Left>
      <Body>
        <Text>{ props.itemName }</Text>
      </Body>
      <Right>
        <Text>{ props.itemSubname }</Text>
      </Right>
    </ListItem>
  )
}

const PlanItemComponent = props => {
  switch(props.name) {
    case "running":
      return(
        <ItemComponent iconType="FontAwesome5" iconName="running" itemName="Running" itemSubname={props.value} />
      )
      break;
    default:
      return(
        <ItemComponent iconType="FontAwesome5" iconName="running" itemName={props.name} itemSubname={props.value} />
      );
  }
}

export default PlanItemComponent;