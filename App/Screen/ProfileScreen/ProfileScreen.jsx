import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useClerk } from '@clerk/clerk-react';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '@clerk/clerk-expo';

const ProfileScreen = () => {
  const { signOut } = useClerk();
  const navigation = useNavigation();
  const { user } = useUser();

  // Log user object
  console.log("User:", user);

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const navigateToNotifications = () => {
    navigation.navigate('Notification');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        {user && user.imageUrl && (
          <Image source={{ uri: user.imageUrl }} style={styles.profileImage} />
        )}
        <Text style={styles.userInfo}>Name: {user && user.fullName}</Text>
        <Text style={styles.userInfo}>Email: {user && user.emailAddress}</Text>
      </View>
      <TouchableOpacity onPress={navigateToNotifications}>
        <Text style={styles.title}>Notifications</Text>
      </TouchableOpacity>
      <Text style={styles.title}>History</Text>
      <Text style={styles.title}>Support</Text>
      <Text style={styles.title}>About</Text>
      <View style={styles.logoutContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcc501',
    padding: 40,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  userInfo: {
    fontSize: 16,
    marginTop: 5,
  },
  logoutContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  logoutText: {
    color: '#fcc501',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
