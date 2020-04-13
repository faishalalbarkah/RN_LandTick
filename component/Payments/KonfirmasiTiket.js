import React, {Component} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Icon, Button} from 'native-base';

class KonfirmasiTiket extends Component {
  //   static navigationOptions = {header: null};
  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: '#DCD8D7'}}>
        <View>
          {/* Alert */}
          <View
            style={{
              width: '100%',
              height: 80,
              borderWidth: 1,
              borderColor: '#EFEFEF',
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 5,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
                color: '#37EC16',
                marginTop: 15,
              }}>
              Harga telah dikonfirmasi. Silahkan periksa kembali pesanan Anda
              sebelum melanjutkan ke pembayaran
            </Text>
          </View>
          {/* Kereta Pergi */}
          <View style={{marginTop: 25}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#6A6463',
                marginLeft: 10,
              }}>
              Kereta Pergi
            </Text>
            <View
              style={{
                marginTop: 5,
                height: 150,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
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
                  flexDirection: 'row',
                  flex: 1,
                  marginTop: 10,
                  marginLeft: 15,
                }}>
                <View style={{flex: 1}}>
                  {/* Berangkat */}
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 15,
                      fontWeight: '800',
                    }}>
                    15.40
                  </Text>
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    14 April 2020
                  </Text>
                  {/* Durasi */}
                  <Text style={{marginTop: 20, textAlign: 'center'}}>
                    2j 50m
                  </Text>
                  {/* Sampe */}
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 15,
                      fontWeight: '800',
                      marginTop: 20,
                    }}>
                    18.30
                  </Text>
                  <Text style={{fontSize: 10, textAlign: 'center'}}>
                    14 April 2020
                  </Text>
                </View>
                <View style={{flex: 2, marginLeft: 20}}>
                  {/* Stasiun Berangkat */}
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '800',
                    }}>
                    Jakarta
                  </Text>
                  <Text style={{fontSize: 13}}>Stasiun Gambir</Text>
                  {/* Kereta */}
                  <View
                    style={{
                      marginTop: 13,
                      flexDirection: 'row',
                    }}>
                    <Icon
                      name="train-variant"
                      type="MaterialCommunityIcons"
                      style={{height: 40}}
                    />
                    <Text
                      style={{
                        marginLeft: 5,
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: -8,
                      }}>
                      Argo
                    </Text>
                    <Text
                      style={{
                        position: 'relative',
                        marginTop: 17,
                        marginLeft: -42,
                        fontSize: 15,
                      }}>
                      Eksekutif
                    </Text>
                  </View>

                  {/* stasiun Sampe */}
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '800',
                    }}>
                    Bandung
                  </Text>
                  <Text style={{fontSize: 13}}>Stasiun Bandung</Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    position: 'relative',
                    paddingHorizontal: 25,
                    //   paddingRight: 40,
                    flex: 1,
                  }}>
                  <Image
                    style={{width: 80, height: 80}}
                    source={{
                      uri:
                        'data:image/png;base64,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',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* PENUMPANG */}
          <View style={{marginTop: 25}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#6A6463',
                marginLeft: 10,
              }}>
              Penumpang
            </Text>
            <View
              style={{
                marginTop: 5,
                minHeight: 115,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
                flex: 1,
                // position: 'absolute',
              }}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <View
                  style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    flex: 1,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Faishal
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 7}}>
                    <Text style={{fontSize: 17, fontWeight: '800'}}>
                      No.TP :{' '}
                    </Text>
                    <Text style={{fontSize: 17, fontWeight: '800'}}>
                      218321381293
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 7}}>
                    <Text style={{fontSize: 17, fontWeight: '800'}}>GMR</Text>
                    <Text style={{fontSize: 17, fontWeight: 'bold'}}> - </Text>
                    <Text style={{fontSize: 17, fontWeight: '800'}}>BD</Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,

                    marginVertical: 10,
                    marginHorizontal: 10,
                  }}>
                  <View style={{flexDirection: 'row', marginTop: 7}}>
                    <Text style={{fontSize: 17, fontWeight: '800'}}>
                      No.HP :{' '}
                    </Text>
                    <Text style={{fontSize: 17, fontWeight: '800'}}>
                      085921311291
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 7}}>
                    <Text style={{fontSize: 17, fontWeight: '800'}}>
                      Email :{' '}
                    </Text>
                    <Text style={{fontSize: 17, fontWeight: '800'}}>
                      faishalalbarkah04@gmail.com
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#6A6463',
                marginLeft: 10,
              }}>
              Rincian Harga
            </Text>
            <View
              style={{
                marginTop: 5,
                height: 50,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
              }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text
                    style={{fontSize: 17, fontWeight: '1000', marginLeft: 10}}>
                    Argo{' '}
                  </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text
                    style={{
                      textAlign: 'right',
                      marginRight: 15,
                      fontWeight: '1000',
                      fontSize: 17,
                    }}>
                    Rp.150.000
                  </Text>
                </View>
              </View>
            </View>
            {/* 2 */}
            <View
              style={{
                marginTop: -5,
                height: 50,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: '#AFB4AD',
                marginBottom: 20,
              }}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View
                  style={{flex: 1, justifyContent: 'center', marginLeft: 10}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                    Harga Total :{' '}
                  </Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text
                    style={{
                      textAlign: 'right',
                      marginRight: 15,
                      fontWeight: 'bold',
                      fontSize: 20,
                    }}>
                    Rp.135.500
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <Button
            block
            style={{marginBottom: 20, marginHorizontal: 20, borderRadius: 10}}>
            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
              Bayar Sekarang
            </Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export default KonfirmasiTiket;
