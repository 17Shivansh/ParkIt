import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import AppMapView from './AppMapView';
import { UserLocationContext } from '../../Context/UserLocationContext';
import GlobalApi from '../../Utils/GlobalApi';
import PlaceListView from './PlaceListView';

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList,setPlaceList]=useState([]);

  useEffect(() => {
    if (location) {
      GetNearByPlace();
    }
  }, [location]);

  const GetNearByPlace = () => {
    const data = {
      includedTypes: ['restaurant'],
      maxResultCount: 10,
      LocationRestricion: {
        circle: {
          center: {
            latitude: location.latitude,
            longitude: location.longitude
          },
          radius: 500.0
        }
      }
    };

    GlobalApi.NewNearByPlace(data)
      .then(resp => {
        console.log(resp.data);
        setPlaceList(resp.data?.places);
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
      <View>
        {placeList&&<PlaceListView placeList={placeList}/>}
      </View>
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
  },
  placeListContainer:{
    position:'absolute',
    bottom:0,
    zIndex:10,
    width:'100%'
  }
});
