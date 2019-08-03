import React, { Component } from 'react';
import { Container, View, Content, Text, Button, Icon, Fab } from 'native-base';
import ButtonGroup from '../components/ButtonGroup';
import HeaderComponent from '../components/HeaderComponent';

export default class MeasurementPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#1f3954' }}>
        <HeaderComponent title={'Measure'} {...this.props} />
        <Content contentContainerStyle={{ flex: 1 }}>
          <ButtonGroup />
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{
            backgroundColor: '#3d7ea4',
            width: 45,
            height: 45

            // position: 'absolute',
            // right: '5%'
          }}
          // position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}
        >
          <Icon name="pencil" type="FontAwesome" />

          <Button style={{ backgroundColor: '#2c6439' }}>
            <Icon name="coffee" type="FontAwesome" />
          </Button>
          <Button style={{ backgroundColor: '#DD5144' }}>
            <Icon name="heart" />
          </Button>
        </Fab>
      </Container>
    );
  }
}
