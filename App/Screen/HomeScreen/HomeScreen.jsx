import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import AppMapView from './AppMapView';
import { UserLocationContext } from '../../Context/UserLocationContext';
import GlobalApi from '../../Utils/GlobalApi';
// import PlaceListView from './PlaceListView';
import ParkingCard from './parkingCard'; // Import the ParkingCard component

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([]);
  const [parkingSpaces, setParkingSpaces] = useState([]); // State for parking spaces

  useEffect(() => {
    if (location) {
      GetNearByPlace();
    }
  }, [location]);

  useEffect(() => {
    // Simulating parking spaces data, replace with actual data
    const mockParkingSpaces = [
      { name: 'Dlf Parking', location: 'Location 1' },
      { name: 'Parking 2', location: 'Location 2' },
      { name: 'Parking 3', location: 'Location 3' },
    ];
    setParkingSpaces(mockParkingSpaces);
  }, []); // Fetch or update parking spaces data as needed

  const GetNearByPlace = () => {
    const data = {
      includedTypes: ['restaurant'],
      maxResultCount: 10,
      LocationRestricion: {
        circle: {
          center: {
            latitude: location.latitude,
            longitude: location.longitude,
          },
          radius: 500.0,
        },
      },
    };

    GlobalApi.NewNearByPlace(data)
      .then((resp) => {
        console.log(resp.data);
        setPlaceList(resp.data?.places);
      })
      .catch((error) => {
        console.error('Error fetching nearby places:', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
        <SearchBar />
      </View>
      <AppMapView />
      <View style={styles.parkingContainer}>
       
      </View>
      <View style={styles.tabNavigation}><ParkingCard parkingSpaces={parkingSpaces} /></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    position: 'absolute',
    zIndex: 10,
    padding: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  parkingContainer: {
    position: 'absolute',
    zIndex: 10,
    bottom: 100, // Adjust as needed
    width: '100%',
    alignItems: 'center',
  },
  tabNavigation: {
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    width: '100%',
    // Add styles for tab navigation
  },
});