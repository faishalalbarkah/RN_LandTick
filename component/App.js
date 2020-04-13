/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
// import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';

import Login from './User/Login';
import Register from './User/Register';
import Footers from './Footers';
import {
  Icon,
  Content,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Button,
  Right,
  Item,
  Input,
} from 'native-base';
import ImageSlider from 'react-native-image-slider';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     images:
  //       'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F28614%2Fpexels-photo.jpg%3Fcs%3Dsrgb%26dl%3Dbullet-train-locomotive-platform-public-transportation-28614.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fphoto%2Fbullet-train-locomotive-platform-public-transportation-28614%2F&tbnid=8-xReqIr8aXwGM&vet=12ahUKEwj38YW7j6boAhUDMnIKHQDDBdIQMygAegUIARDMAQ..i&docid=_qmp-7BQ80oVSM&w=6480&h=4320&q=image%20pexels%20train&ved=2ahUKEwj38YW7j6boAhUDMnIKHQDDBdIQMygAegUIARDMAQ',
  //   };
  // }
  static navigationOptions = {header: null};
  render() {
    return (
      <>
        <ScrollView style={{flex: 1, backgroundColor: '#DCD8D7'}}>
          <View>
            <View
              style={{
                height: 140,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: '#204DF1',
              }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: 'bold',
                  flex: 1,
                  marginTop: 10,
                  marginHorizontal: 20,
                  color: 'white',
                }}>
                Hallo Ticket Seekers!! ingin Pulkam dengan good Deal ? Masuk dan
                Daftar Sekarang
              </Text>
            </View>
          </View>
          {/* Slider */}
          <View
            style={{
              flex: 1,
              height: 140,
              width: 380,
              borderRadius: 50,
              marginHorizontal: 15,
              marginTop: -70,
            }}>
            <ImageSlider
              style={{flex: 1}}
              images={[
                'https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                'https://fcraland.com/wp-content/uploads/2018/10/pexels-photo-1527274.jpeg',
                'https://cdn.networkrail.co.uk/wp-content/uploads/2019/04/New-Measurement-Train-NMT-1024x538.jpg',
              ]}
              autoPlayWithInterval={3000}
            />
          </View>
          {/* Login */}
          <View>
            <View style={{marginTop: 10, marginHorizontal: 15}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'black',
                  textAlign: 'center',
                }}>
                Login / Register
              </Text>
            </View>
            <View style={{marginHorizontal: 10}}>
              <Button
                block
                style={{
                  marginTop: 10,
                  backgroundColor: '#204DF1',
                }}
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Login</Text>
              </Button>
              <Button
                block
                style={{marginTop: 10, backgroundColor: '#204DF1'}}
                onPress={() => {
                  this.props.navigation.navigate('Register');
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Register</Text>
              </Button>
            </View>
          </View>
          {/* Promo */}
          <View>
            <View style={{marginTop: 20, marginHorizontal: 15}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
                Promo
              </Text>
            </View>
            <ScrollView horizontal>
              <Card>
                <CardItem>
                  <Image
                    source={{
                      uri:
                        'https://giladiskon-uploads.s3-ap-southeast-1.amazonaws.com/images/deals/photo%20-%201507264961.jpg',
                    }}
                    style={{height: 200, width: 380, flex: 1}}
                  />

                  <Image
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSH2AfnMNlU0G3GtKkhuP5xbnRUe52DYzCbWy_BbKBhGL1ma8W',
                    }}
                    style={{height: 200, width: 380, flex: 1, marginLeft: 20}}
                  />

                  <Image
                    source={{
                      uri:
                        'https://img.hotelmurah.com/promo/banner-kereta-(2).jpg',
                    }}
                    style={{height: 200, width: 380, flex: 1, marginLeft: 20}}
                  />

                  <Image
                    source={{
                      uri:
                        'https://pegipegi.s3.amazonaws.com/asset/promo/banner/5e53ad0e27e7e.jpg',
                    }}
                    style={{height: 200, width: 380, flex: 1, marginLeft: 20}}
                  />
                </CardItem>
              </Card>
            </ScrollView>
          </View>
        </ScrollView>
        <Footers />
      </>
    );
  }
}

export default App;
