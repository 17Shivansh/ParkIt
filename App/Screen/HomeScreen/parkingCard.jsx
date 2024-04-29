import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ParkingCard = ({ parkingSpaces }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    // Navigate to the booking page when a card is clicked
    navigation.navigate('BookingPage');
  };

  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      {parkingSpaces.map((parkingSpace, index) => (
        <TouchableOpacity key={index} style={styles.container} onPress={handleCardPress}>
          <Text style={styles.title}>Parking Spaces</Text>
          <View style={styles.parkingSpace}>
            <Text>{parkingSpace.name}</Text>
            <Text>{parkingSpace.location}</Text>
            {/* Add other relevant information */}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
  },
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 200, // Adjust the width of each card as per your requirement
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  parkingSpace: {
    marginBottom: 5,
  },
});

export default ParkingCard;
