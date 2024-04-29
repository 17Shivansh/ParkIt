import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewStyle from './../../Utils/MapViewStyle.json';
import { UserLocationContext } from '../../Context/UserLocationContext';

export default function AppMapView() {
  const { location } = useContext(UserLocationContext);

  if (!location || !location.latitude) {
    // Render loading or empty state while waiting for location data
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Log the coordinates
  console.log('Current coordinates:', location.latitude, location.longitude);

  return (
    <View>
      <MapView 
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapViewStyle} 
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.022,
          longitudeDelta: 0.021
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude
          }}
        >
          <Image
            source={require('./../../../assets/Images/ParkIt-Car-Marker.png')}
            style={styles.markerImage}
          />
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerImage: {
    width: 40, // Adjust the width of the marker image
    height: 40, // Adjust the height of the marker image
    resizeMode: 'contain', // Ensure the image fits within the specified dimensions
  },
});
