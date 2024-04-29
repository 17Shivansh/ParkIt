import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from "react-router-dom";

const NotificationScreen = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Order Received!', message: 'Your order #12345 has been placed.' },
    { id: 2, title: 'Delivery Update', message: 'Your order #12345 is out for delivery.' },
    { id: 3, title: 'Promotional Offer', message: 'Get 20% off your next purchase!' },
  ]);

  const handleMarkAllRead = () => {
    setNotifications([]); // Update state to clear all notifications
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationItem}>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationMessage}>{item.message}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        <Link to="/notification">Notifications</Link>
        <a href="/notification"></a></Text>
      <TouchableOpacity style={styles.markAllReadButton} onPress={handleMarkAllRead}>
        <Text style={styles.markAllReadText}>Mark All Read</Text>
      </TouchableOpacity>
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          renderItem={renderItem}
          keyExtractor={item => item.id} // Extract unique key for each item
        />
      ) : (
        <Text style={styles.noNotificationsText}>No notifications yet.</Text>
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
  markAllReadButton: {
    marginBottom: 15,
  },
  markAllReadText: {
    color: '#ccc', // A subtle color for the "Mark All Read" text
  },
  notificationItem: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 16,
  },
  noNotificationsText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default NotificationScreen;