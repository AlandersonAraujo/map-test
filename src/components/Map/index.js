import React, {Component} from 'react';
import MapView from 'react-native-maps';
import {View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Rent from '../Rent';
export default class Map extends Component {
  state = {
    region: null,
  };

  async componentDidMount() {
    Geolocation.getCurrentPosition(
      ({coords: {latitude, longitude}}) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          }
        });
      },
      () => {},
      {
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000,
      }
    )
  }

  render() {
    const {region} = this.state;
    return (
     <View style={{ flex: 1 }}>
      <MapView
         style={{ flex: 1 }}
         region={region}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        loadingEnabled
      />
      <Rent />
    </View>
    );
  }
}
