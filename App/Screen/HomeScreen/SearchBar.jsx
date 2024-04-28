import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchBar() {
  return (
    <View>

<GooglePlacesAutocomplete
      placeholder='Abhishek Ladu'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AqQ8TNk3KWBogGBGkZGHwGWqvXgL36daTl9qNdPfNGPHyFJnTgkCqMWk9FIc5vmQ',
        language: 'en',
      }}/>
    </View>
  );
}

