import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import AppMapView from './AppMapView';
import { UserLocationContext } from '../../Context/UserLocationContext';
import GlobalApi from '../../Utils/GlobalApi';

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);

  const GetNearByPlace = () => {
    const data = {
      includedTypes: ['*'],
      maxResultCount: 10,
      LocationRestricion: {
        circle: {
          center: {
            latitude: 37.7937,
            longitude: -122.3965
          },
          radius: 500.0
        }
      }
    };

    GlobalApi.NewNearByPlace(data)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.error('Error fetching nearby places:', error);
      });
  };

  return (
    <View>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar />
      </View>
      <AppMapView />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 20
  }
});
