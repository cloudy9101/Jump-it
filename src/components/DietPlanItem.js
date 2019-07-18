import React from 'react';
import { ListItem, Text, Icon, Left, Body, Right } from 'native-base';

const ItemComponent = props => {
  return(
    <ListItem icon>
      <Left>
        <Icon style={{color: "#FF9501"}} type={ props.iconType || "Ionicons" } name={ props.iconName } />
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

const DietPlanItem = props => {
  switch(props.name) {
    case "sugar":
      return(
        <ItemComponent iconType="MaterialCommunityIcons" iconName="spray-bottle" itemName="Sugar" itemSubname={props.value} />
      )
      break;
    default:
      return(
        <ItemComponent iconType="MaterialCommunityIcons" iconName="notebook" itemName={props.name} itemSubname={props.value} />
      );
  }
}

export default DietPlanItem;
