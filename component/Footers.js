import React, {Component} from 'react';
import {Header, Footer, FooterTab, Button, Icon, Text} from 'native-base';
import {withNavigation} from 'react-navigation';

class Footers extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('App');
            }}>
            <Icon name="apps" />
            <Text>Home</Text>
          </Button>
          <Button vertical>
            <Icon name="payment" type="MaterialIcons" />
            <Text>Payment</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('Profile');
            }}>
            <Icon name="user" type="FontAwesome5" />
            <Text>Profile</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default withNavigation(Footers);
