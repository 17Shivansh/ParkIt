import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'; // Assuming you have `react-native-elements` installed

const SupportScreen = () => {

  const openFAQ = () => {
    Linking.openURL('https://your-app.com/faq'); // Replace with your FAQ URL
  };

  const openEmail = () => {
    Linking.openURL('mailto:support@your-app.com'); // Replace with your support email
  };

  const openCall = () => {
    Linking.openURL('tel:+1234567890'); // Replace with your support phone number
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Support</Text>
      <Text style={styles.description}>Need help? We're here for you.</Text>

      {/* FAQ Section */}
      <TouchableOpacity style={styles.supportItem} onPress={openFAQ}>
        <Icon name="question-answer" type="material" size={24} color="#000" style={styles.icon} />
        <Text style={styles.supportText}>FAQs</Text>
      </TouchableOpacity>

      {/* Email Support Section */}
      <TouchableOpacity style={styles.supportItem} onPress={openEmail}>
        <Icon name="email" type="material" size={24} color="#000" style={styles.icon} />
        <Text style={styles.supportText}>Email Support</Text>
      </TouchableOpacity>

      {/* Phone Support Section (Optional) */}
      <TouchableOpacity style={styles.supportItem} onPress={openCall}>
        <Icon name="phone" type="material" size={24} color="#000" style={styles.icon} />
        <Text style={styles.supportText}>Phone Support</Text>
      </TouchableOpacity>
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
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  supportItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  supportText: {
    fontSize: 16,
  },
});

export default SupportScreen;