import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Item, Input, Button, Picker, Icon, Form, Textarea} from 'native-base';
import Footers from '../Footers';
import {ScrollView} from 'react-native-gesture-handler';

class Register extends Component {
  static navigationOptions = {header: null};

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }
  render() {
    return (
      <>
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{alignItems: 'center', marginTop: 30}}>
            <Image
              style={{height: 80, width: 80}}
              source={{
                uri:
                  'data:image/png;base64,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',
              }}
            />
            <Text style={{fontSize: 30, fontWeight: 'bold', marginTop: 20}}>
              Register
            </Text>
            <View style={{marginTop: 20}}>
              <Item
                style={{
                  width: '90%',
                  borderWidth: 10,
                  borderColor: 'blue',
                }}
                rounded>
                <Input placeholder="Nama" />
              </Item>
              <Item
                style={{
                  width: '90%',
                  borderWidth: 10,
                  borderColor: 'blue',
                  marginTop: 10,
                }}
                rounded>
                <Input placeholder="Username" />
              </Item>
              <Item
                style={{
                  width: '90%',
                  borderWidth: 10,
                  borderColor: 'blue',
                  marginTop: 10,
                }}
                rounded>
                <Input placeholder="Email" />
              </Item>
              <Item
                style={{
                  width: '90%',
                  borderWidth: 10,
                  borderColor: 'blue',
                  marginTop: 10,
                }}
                rounded>
                <Input placeholder="Password" />
              </Item>
              <Item
                style={{
                  width: '90%',
                  borderWidth: 10,
                  borderColor: 'blue',
                  marginTop: 10,
                }}
                rounded>
                <Picker
                  placeholder="Gender"
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined}}
                  placeholderStyle={{color: '#bfc6ea'}}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}>
                  <Picker.Item label="Male" value="key0" />
                  <Picker.Item label="Female" value="key1" />
                </Picker>
              </Item>
              <Item
                style={{
                  width: '90%',
                  borderWidth: 10,
                  borderColor: 'blue',
                  marginTop: 10,
                }}
                rounded>
                <Input placeholder="Phone" />
              </Item>
              <Form
                style={{
                  borderColor: 'blue',
                  marginTop: 10,
                }}>
                <Textarea rowSpan={5} bordered placeholder="Address" />
              </Form>

              <Button
                style={{marginTop: 15, borderRadius: 15, marginBottom: 20}}
                full>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>Register</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
        <Footers />
      </>
    );
  }
}

export default Register;
