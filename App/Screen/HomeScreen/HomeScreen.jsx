import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './Header';
import SearchBar from './SearchBar';
import AppMapView from './AppMapView';
import { UserLocationContext } from '../../Context/UserLocationContext';
import GlobalApi from '../../Utils/GlobalApi';
import ParkingCard from './parkingCard'; // Import the ParkingCard component

// Corrected JSON object
const kiet = [
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
const banglore = [
  {
    "id": "1",
    "name": "St. Patrick's (Pay and Park near MG road)",
    "embedding_link": `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36988.07926036914!2d77.58423353742837!3d12.978700950221391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178561f8cab5%3A0xda6b46c2fed58a55!2sSt.%20Patrick&#39;s%20(Pay%20and%20Park%20near%20MG%20road)!5e0!3m2!1sen!2sin!4v1714364966254!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    "rating": 3,
    
  },
  {
    "id": "2",
    "name": "Cubbon Park 4 Wheeler Parking",
    "embedding_link": `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62207.235140538716!2d77.5508051239819!3d12.974909382185633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17a1c61490f9%3A0x921cbf60f655dc9f!2sCubbon%20Park%204%20Wheeler%20Parking!5e0!3m2!1sen!2sin!4v1714365007637!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    "rating": 4.1,
    
  },
  {
    "id": "3",
    "name": "Shanti Nagar parking",
    "embedding_link": `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62207.235140538716!2d77.5508051239819!3d12.974909382185633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15b0dfcca259%3A0x4a4770d3875bf98a!2sShanti%20Nagar%20parking!5e0!3m2!1sen!2sin!4v1714365045485!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    "rating": 3.5,
    
  }
];
const gurugram = [
  {
    "id": "1",
    "name": "Guru Dronacharya Metro Parking Area",
    "embedding_link": `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737.2440546237294!2d77.10017919412327!3d28.48124810432617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d192cbe955555%3A0x172ace3e35ad28f4!2sGuru%20Dronacharya%20Metro%20Parking%20Area!5e0!3m2!1sen!2sin!4v1714364683847!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    "rating": 5,
    
  },
  {
    "id": "2",
    "name": "Sikanderpur Parking",
    "embedding_link": `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1753.4570047917132!2d77.09726066987768!3d28.482136196501823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d192c45998999%3A0x2ab82328dcd1dc18!2sSikanderpur%20Parking!5e0!3m2!1sen!2sin!4v1714364776683!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    "rating": 3.0,
    
  },
  {
    "id": "3",
    "name": "Sikandarpur Metro Parking Area",
    "embedding_link": `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9265164217604!2d77.0881053060293!3d28.48175957400699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d192f0e155555%3A0x3be8e0d5ca63d5d8!2sSikandarpur%20Metro%20Parking%20Area!5e0!3m2!1sen!2sin!4v1714364807639!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
    "rating": 4.5,
    
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
