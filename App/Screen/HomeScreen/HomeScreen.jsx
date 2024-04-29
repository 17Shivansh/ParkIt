import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import AppMapView from './AppMapView';
import { UserLocationContext } from '../../Context/UserLocationContext';
import GlobalApi from '../../Utils/GlobalApi';
import ParkingCard from './parkingCard'; // Import the ParkingCard component

// Corrected JSON object
const parkingData = [
  {
    "id": "1",
    "name": "Car Parking",
    "embedding_link": `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1748.881120621022!2d77.49541014432907!3d28.756514862443378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf500198e19cd%3A0xe0d2ef36b6b6c!2sCar%20Parking!5e0!3m2!1sen!2sin!4v1714360197266!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    "rating": 4.5,
    "photo_url": `wsLCxzlz//Z`,
  },
  {
    "id": "2",
    "name": "Parking",
    "embedding_link": `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d437.21008228466025!2d77.5002438149131!3d28.758950020998924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf525dd859b8b%3A0xcdd541111422973!2sParking!5e0!3m2!1sen!2sin!4v1714360333854!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    "rating": 4.0,
    "photo_url": `6uqEFzUp9q6uoBFH3rj5UldQC578v1rTSrelrqAjJroJrq6gFg1wO9LXUAk1xNdXUAm9JOtdXUAma1VXGOJ92UpNxciyTBtPxDkBXV1UsVbP/9k=`,
  },
  {
    "id": "3",
    "name": "Parking Dr Manjeet Singh Avtar",
    "embedding_link": `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.62157767482782!2d77.48760960996154!3d28.751051788361394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf519622e7b71%3A0x953d88e8b2754c4f!2sParking%20Dr%20Manjeet%20Singh%20Avtar!5e0!3m2!1sen!2sin!4v1714360534741!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    "rating": 4.2,
    "photo_url": `bewxAd8djsZaTqMdjsdgP/2Q==`,
  }
];

export default function HomeScreen() {
  const { location, setLocation } = useContext(UserLocationContext);
  const [placeList, setPlaceList] = useState([]);
  const [parkingSpaces, setParkingSpaces] = useState([]);

  useEffect(() => {
    if (location) {
      GetNearByPlace();
    }
  }, [location]);

  useEffect(() => {
    // Replace mock parking spaces with actual data as needed
    setParkingSpaces(parkingData);
  }, []);

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
        <ParkingCard parkingSpaces={parkingSpaces} />
      </View>
      <View style={styles.tabNavigation}>{/* Add your tab navigation here */}</View>
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
