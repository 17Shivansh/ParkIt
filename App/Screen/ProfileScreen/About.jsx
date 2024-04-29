import React from 'react';
import { View, Text, Image, StyleSheet, Linking } from 'react-native';
import { Icon } from 'react-native-elements'; // Assuming you have `react-native-elements` installed

const AboutScreen = () => {
  const openWebsite = () => {
    Linking.openURL('https://your-app.com'); // Replace with your website URL
  };

  return (
    <View style={styles.container}>
      <Image source={require('./../../../assets/Images/logo.png')} style={styles.logoImage} />
      <Text style={styles.appNameText}>ParkIt!</Text>
      <Text style={styles.descriptionText}>Making parking easy and convenient.</Text>

      {/* About Us Section */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutTitle}>About Us</Text>
        <Text style={styles.aboutText}>
          ParkIt! is a mobile app that simplifies parking for everyone. 
          Our mission is to provide a seamless and stress-free parking experience, 
          whether you're a driver looking for a spot or a property owner with parking 
          spaces to rent out. 

          We connect drivers with available parking options in real-time, 
          allowing them to book and pay for parking directly through the app. 
          For property owners, ParkIt! offers a platform to monetize their unused 
          parking spaces and reach a wider audience of potential renters.

          With ParkIt!, parking is no longer a hassle. Download the app today and 
          experience the future of parking!
        </Text>
      </View>

      {/* Contact Us Section */}
      <View style={styles.contactSection}>
        <Text style={styles.contactTitle}>Contact Us</Text>
        <TouchableOpacity style={styles.contactItem} onPress={openWebsite}>
          <Icon name="link" type="material-community" size={24} color="#000" style={styles.contactIcon} />
          <Text style={styles.contactText}>Website</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactItem}>
          <Icon name="email" type="material" size={24} color="#000" style={styles.contactIcon} />
          <Text style={styles.contactText}>support@parkitapp.com</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  appNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  aboutSection: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
  },
  contactSection: {
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  contactIcon: {
    marginRight: 10,
  },
  contactText: {
    fontSize: 16,
  },
});

export default AboutScreen;