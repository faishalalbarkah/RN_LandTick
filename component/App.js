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
              height: 140,
              width: 380,
              borderRadius: 20,
              marginHorizontal: 15,
              marginTop: -70,
            }}>
            <ImageSlider
              style={{borderRadius: 20}}
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
          {/* Daftar Tiket */}
          <View style={{marginTop: 20, marginHorizontal: 15}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>
              Daftar Tiket yang Tersedia
            </Text>
          </View>
          {/* Tiket */}
          <View style={{flex: 1, marginHorizontal: 15, marginBottom: 20}}>
            <View
              style={{
                marginTop: 5,
                height: 150,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }}>
              <View style={{marginLeft: 17, position: 'absolute'}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
                  09.00
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginTop: 45,
                  }}>
                  12.00
                </Text>
              </View>
              {/* Berangkat */}
              <View style={{marginLeft: 85, marginTop: 15}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Jakarta</Text>
                <Text>(Manggarai)</Text>
              </View>
              {/* Sampai */}
              <View style={{marginLeft: 85, marginTop: 20}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                  Tangerang
                </Text>
                <Text>(Daru)</Text>
              </View>
              {/* Durasi */}

              <View style={{marginRight: 40}}>
                <Image
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                  style={{
                    height: 55,
                    width: 55,
                    marginLeft: 270,
                    marginTop: -125,
                  }}
                />
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 20,
                    fontWeight: 'bold',
                  }}>
                  Eksekutif
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 15,
                    fontWeight: '800',
                  }}>
                  50.000/Orang
                </Text>
                <Text
                  style={{
                    textAlign: 'right',
                    fontSize: 15,
                    fontWeight: '800',
                    marginRight: 20,
                  }}>
                  3 Jam
                </Text>
              </View>
            </View>
            {/* End Tiket */}
          </View>
        </ScrollView>
        <Footers />
      </>
    );
  }
}

export default App;
