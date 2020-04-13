import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Footers from '../Footers';

class TiketSaya extends Component {
  static navigationOptions = {header: null};
  render() {
    return (
      <>
        <ScrollView style={{flex: 1, backgroundColor: '#DCD8D7'}}>
          <View>
            <ImageSlider
              style={{
                height: 170,
              }}
              images={[
                'https://asset.kompas.com/crops/gqhdy8rFWxZ9qOa0126qvOrUwYA=/0x0:780x390/750x500/data/photo/2017/04/21/173514259.jpg',
                'data:image/jpeg;base64,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',
              ]}
              autoPlayWithInterval={3000}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('KonfirmasiTiket');
            }}>
            <View
              style={{
                width: '90%',
                marginTop: 15,
                height: 150,
                borderWidth: 1,
                marginHorizontal: 22.5,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
                flex: 1,
                // position: 'absolute',
              }}>
              <View
                style={{
                  position: 'absolute',
                  flex: 1,
                }}>
                <View
                  style={{
                    height: 28,
                    width: 100,
                    backgroundColor: '#6269FB',
                    borderBottomRightRadius: 25,
                    borderTopLeftRadius: 5,
                  }}>
                  <Text
                    style={{
                      marginLeft: 10,
                      top: 2,
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    LandTick
                  </Text>
                </View>
                <Text
                  style={{
                    left: 250,
                    top: 3,
                    fontSize: 13,
                    fontWeight: '600',
                    position: 'absolute',
                  }}>
                  24 Febuari 2020
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  top: 30,
                  marginHorizontal: 8,
                }}>
                {/* Nama */}
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 13, fontWeight: '600'}}>Nama</Text>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    Faishal
                  </Text>
                  {/* Status */}
                  <View
                    style={{
                      backgroundColor: 'blue',
                      height: 30,
                      width: 70,
                      borderRadius: 4,
                    }}>
                    <Text
                      style={{
                        marginLeft: 3,
                        top: 1,
                        fontSize: 17,
                        fontWeight: 'bold',
                        color: 'yellow',
                      }}>
                      Pending
                    </Text>
                  </View>
                  {/* No Tanda Pengenal */}
                  <Text style={{fontSize: 13, fontWeight: '600'}}>No.TP</Text>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    31032123
                  </Text>
                </View>
                {/* Keberangkatan */}
                <View style={{flex: 1}}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    Jakarta
                  </Text>
                  <Text style={{fontSize: 13, fontWeight: '600'}}>
                    (Gambir)
                  </Text>

                  <Text
                    style={{fontSize: 17, fontWeight: 'bold', marginTop: 10}}>
                    Yogyakarta
                  </Text>
                  <Text style={{fontSize: 13, fontWeight: '600'}}>(Setu)</Text>
                </View>
                {/* Jam */}
                <View style={{flex: 1}}>
                  <View style={{marginTop: -10}}>
                    <Image
                      style={{width: 55, height: 55, marginLeft: 30}}
                      source={{
                        uri:
                          'data:image/png;base64,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',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Eksekutif
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Jam
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                      }}>
                      <Text>10.00 </Text>
                      <Text>-</Text>
                      <Text>12.00</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <Footers />
      </>
    );
  }
}

export default TiketSaya;
