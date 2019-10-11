import React from 'react';
import MapView from 'react-native-maps';
import {View} from 'react-native';

// import { Container } from './styles';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: -3.7648669,
          longitude: -38.5634646,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        followsUserLocation={true}
        loadingEnabled
      />
    </View>
  );
}

