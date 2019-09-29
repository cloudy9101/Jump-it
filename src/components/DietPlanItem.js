import React from 'react';
import { ListItem, Text, Icon, Left, Body, Right } from 'native-base';

const ItemComponent = props => {
  return (
    <ListItem icon>
      <Left>
        <Icon
          style={{ color: '#ffffff' }}
          type={props.iconType || 'Ionicons'}
          name={props.iconName}
        />
      </Left>
      <Body>
        <Text style={{ color: '#ffffff' }}>{props.itemName}</Text>
      </Body>
      <Right>
        <Text style={{ color: '#ffffff' }}>{props.itemSubname}</Text>
        <Icon
          style={{ color: '#d9534f' }}
          name={"trash"}
          onPress={props.del}
        />
      </Right>
    </ListItem>
  );
};

const DietPlanItem = props => {
  switch (props.name) {
    case 'sugar':
      return (
        <ItemComponent
          iconType="MaterialCommunityIcons"
          iconName="spray-bottle"
          itemName="Sugar"
          itemSubname={props.value}
          del={props.del}
        />
      );
      break;
    default:
      return (
        <ItemComponent
          iconType="MaterialCommunityIcons"
          iconName="notebook"
          itemName={props.name}
          itemSubname={props.value}
          del={props.del}
        />
      );
  }
};

export default DietPlanItem;
