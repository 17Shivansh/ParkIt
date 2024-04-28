import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';
import { MAPBOX_ACCESS_TOKEN } from '@env';

const PlaceAutocompleteExample = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  useEffect(() => {
    fetchSuggestions("luckn");
  }, []);

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json`, {
        params: {
          access_token: MAPBOX_ACCESS_TOKEN,
          autocomplete: true,
        }
      });

      if (response.data.features) {
        setSuggestions(response.data.features);
        console.log("Place Autocomplete suggestions:", response.data.features);
      }
    } catch (error) {
      console.error("Place Autocomplete error", error);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setSelectedPlace(suggestion);
    console.log("Selected place", suggestion);
  };

  return (
    <View>
      {suggestions.length > 0 && (
        <Button
          title="Select First Suggestion"
          onPress={() => handleSelectSuggestion(suggestions[0])}
        />
      )}
      {selectedPlace && (
        <Text>Selected Place: {selectedPlace.place_name}</Text>
      )}
    </View>
  );
};

export default PlaceAutocompleteExample;
