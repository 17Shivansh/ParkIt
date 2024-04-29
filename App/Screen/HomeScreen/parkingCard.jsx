import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParkingCard = ({ parkingSpaces }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parking Spaces</Text>
      {parkingSpaces.map((parkingSpace, index) => (
        <View key={index} style={styles.parkingSpace}>
          <Text>{parkingSpace.name}</Text>
          <Text>{parkingSpace.location}</Text>
          {/* Add other relevant information */}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    flex: 1, // Key change for full width
    width: '100%', // Alternative approach (optional)
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
