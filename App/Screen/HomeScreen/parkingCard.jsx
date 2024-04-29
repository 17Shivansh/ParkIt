import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ParkingCard = ({ parkingSpaces }) => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView}>
      {parkingSpaces.map((parkingSpace, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.title}>Parking Spaces</Text>
          <View style={styles.parkingSpace}>
            <Text>{parkingSpace.name}</Text>
            <Text>{parkingSpace.location}</Text>
            {/* Add other relevant information */}
          </View>
        </View>
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
