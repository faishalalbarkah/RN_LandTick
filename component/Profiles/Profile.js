import React, {Component} from 'react';

import {Image, View, Text} from 'react-native';
import {Icon} from 'native-base';
import Footers from '../Footers';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

class Profile extends Component {
  static navigationOptions = {header: null};
  render() {
    return (
      <>
        <ScrollView style={{flex: 1, backgroundColor: '#DCD8D7'}}>
          <View>
            <View>
              {/* Slder */}
              <Image
                style={{height: 100}}
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
                }}
              />
            </View>
            {/* Profile */}
            <View
              style={{
                width: '90%',
                height: 100,
                marginHorizontal: 22,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
                marginTop: -50,
                borderRadius: 10,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }}>
              <Image
                style={{
                  borderRadius: 200,
                  height: 90,
                  width: 90,
                  marginVertical: 5,
                  marginLeft: 10,
                }}
                source={{
                  uri:
                    'https://img.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg?size=338&ext=jpg',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginLeft: 30,
                  marginTop: -85,
                  zIndex: 1,
                }}>
                FAISHAL AL BARKAH
              </Text>
              <Text style={{textAlign: 'center', marginLeft: 40, marginTop: 5}}>
                faisalalbarkah04@gmail.com
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'blue',
                  textAlign: 'center',
                  marginTop: 2,
                }}>
                Lihat Profile Saya
              </Text>
            </View>
          </View>
          {/* End Slider and Profile */}

          <View style={{marginTop: 20, marginHorizontal: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6A6463'}}>
              Cek Tiket Saya
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('TiketSaya');
              }}>
              <View
                style={{
                  marginTop: 5,
                  height: 80,
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
                <View>
                  <Image
                    style={{
                      height: 45,
                      width: 45,
                      marginVertical: 15,
                      marginLeft: 15,
                    }}
                    source={{
                      uri:
                        'https://www.celladorales.com/wp-content/uploads/2017/07/ticket-clipart-purge-clipart-ticket-85041.jpg',
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: 80,
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginTop: -65,
                    }}>
                    Tiket Saya
                  </Text>
                  <Text
                    style={{
                      marginLeft: 80,
                      marginTop: 5,
                      color: 'blue',
                    }}>
                    Yuk!! Cek Tiket mu disini
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Fitur Member */}
          <View style={{marginTop: 20, marginHorizontal: 20, marginTop: 15}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#6A6463'}}>
              Fitur Member
            </Text>
            <View
              style={{
                marginTop: 5,
                height: 80,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <View>
                <Image
                  style={{
                    height: 45,
                    width: 45,
                    marginVertical: 15,
                    marginLeft: 15,
                    borderRadius: 230,
                  }}
                  source={{
                    uri:
                      'https://cdn3.vectorstock.com/i/1000x1000/08/52/refund-money-icon-vector-20470852.jpg',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 80,
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginTop: -65,
                  }}>
                  Refund Saya
                </Text>
                <Text style={{marginLeft: 80, marginTop: 5, color: 'blue'}}>
                  Atur Refund Anda di satu tempat
                </Text>
              </View>
            </View>
            {/* 2 */}
            <View
              style={{
                marginTop: 5,
                height: 80,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                marginTop: -3,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }}>
              <View>
                <Image
                  style={{
                    height: 45,
                    width: 45,
                    marginVertical: 15,
                    marginLeft: 15,
                  }}
                  source={{
                    uri:
                      'https://img2.pngdownload.id/20180629/l/kisspng-electronic-bill-payment-logo-service-e-commerce-pa-chhattisgarh-5b35ea2e712016.5145879315302600144634.jpg',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 80,
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginTop: -65,
                  }}>
                  Tagihan Saya
                </Text>
                <Text
                  style={{
                    marginLeft: 80,
                    marginTop: 5,
                    color: 'blue',
                  }}>
                  Yuk!! Selesaikan Pembayaran anda di sini
                </Text>
              </View>
            </View>
          </View>
          {/* Pusat Bantuan  */}
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 20,
              marginTop: 15,
              marginBottom: 20,
            }}>
            <View
              style={{
                marginTop: 5,
                height: 80,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}>
              <View>
                <Image
                  style={{
                    height: 45,
                    width: 45,
                    marginVertical: 15,
                    marginLeft: 15,
                    borderRadius: 230,
                  }}
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 80,
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginTop: -65,
                  }}>
                  Pusat Bantuan
                </Text>
                <Text style={{marginLeft: 80, marginTop: 5, color: 'blue'}}>
                  Temukan jawaban terbaik dari pertanyaan Anda
                </Text>
              </View>
            </View>
            {/* 2 */}
            <View
              style={{
                marginTop: 5,
                height: 80,
                borderWidth: 1,
                borderColor: '#EFEFEF',
                backgroundColor: 'white',
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                marginTop: -3,
                shadowColor: '#000',
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }}>
              <View>
                <Image
                  style={{
                    height: 45,
                    width: 45,
                    marginVertical: 15,
                    marginLeft: 15,
                  }}
                  source={{
                    uri:
                      'data:image/png;base64,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',
                  }}
                />
                <Text
                  style={{
                    marginLeft: 80,
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginTop: -65,
                  }}>
                  Pengaturan
                </Text>
                <Text
                  style={{
                    marginLeft: 80,
                    marginTop: 5,
                    color: 'blue',
                  }}>
                  Lihat dan atur preferensi akun Anda
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <Footers />
      </>
    );
  }
}

export default Profile;
