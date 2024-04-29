import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'; // Assuming you have `react-native-elements` installed

const HistoryScreen = ({ navigation }) => {
  const [history, setHistory] = useState([]);

  // Simulate fetching history data (replace with your actual API call)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://your-api.com/history'); // Replace with your API endpoint
      const data = await response.json();
      setHistory(data);
    };
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.historyItem} onPress={() => navigation.navigate('HistoryDetail', { item })}>
      <Text style={styles.historyTitle}>{item.title}</Text>
      <Text style={styles.historyDate}>{item.date}</Text>
      <Icon name={item.icon} type="material" size={24} color="#ccc" style={styles.historyIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>History</Text>
      {history.length > 0 ? (
        <FlatList
          data={history}
          renderItem={renderItem}
          keyExtractor={item => item.id} // Extract unique key for each item
        />
      ) : (
        <Text style={styles.noHistoryText}>No history yet.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    flexDirection: 'row', // Arrange elements horizontally
    alignItems: 'center', // Align text and icon vertically
  },
  historyTitle: {
    flex: 1, // Allow title to occupy most space
    fontSize: 16,
  },
  historyDate: {
    fontSize: 14,
    color: '#ccc', // A subtle color for the date
  },
  historyIcon: {
    marginLeft: 10, // Add margin between text and icon
  },
  noHistoryText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default HistoryScreen;