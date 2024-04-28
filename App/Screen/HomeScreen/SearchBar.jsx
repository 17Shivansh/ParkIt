import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { MAPBOX_ACCESS_TOKEN } from '@env';
import debounce from 'lodash.debounce';

const PlaceAutocompleteExample = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Function to fetch suggestions from Mapbox Geocoding API
  const fetchSuggestions = async (searchQuery) => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchQuery)}.json`, {
        params: {
          access_token: MAPBOX_ACCESS_TOKEN,
          autocomplete: true,
          limit: 3,  // Limit the number of suggestions to 3
        }
      });

      if (response.data.features) {
        setSuggestions(response.data.features);
        console.log("Place Autocomplete suggestions:", response.data.features);
      }
    } catch (error) {
      console.error("Place Autocomplete error", error);
      setSuggestions([]);
    }
  };

  // Debounced version of fetchSuggestions to limit the frequency of API calls
  const debouncedFetchSuggestions = useCallback(debounce(fetchSuggestions, 300), []);

  const handleSelectSuggestion = (suggestion) => {
    setSelectedPlace(suggestion);
    setSuggestions([]);
    setQuery(suggestion.place_name);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelectSuggestion(item)}>
      <Text style={styles.itemText}>{item.place_name}</Text>
      <Text style={styles.itemDetailText}>{item.properties?.category || 'No category'}</Text>
      <Text style={styles.coordinatesText}>Coordinates: {item.center.join(', ')}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a place"
        value={query}
        onChangeText={text => {
          setQuery(text);
          debouncedFetchSuggestions(text);
        }}
      />
      <FlatList
        data={suggestions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      {selectedPlace && (
        <View style={styles.selectedPlaceContainer}>
          <Text style={styles.selectedPlaceText}>Selected Place:</Text>
          <Text style={styles.selectedPlaceDetail}>{selectedPlace.place_name}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  searchBar: {
    height: 40,
    marginHorizontal: 12,
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  list: {
    maxHeight: 200,
  },
  item: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDetailText: {
    fontSize: 14,
    color: '#666666',
  },
  coordinatesText: {
    fontSize: 12,
    color: '#888888',
  },
  selectedPlaceContainer: {
    padding: 12,
  },
  selectedPlaceText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedPlaceDetail: {
    fontSize: 16,
    color: '#333333',
  },
});

export default PlaceAutocompleteExample;
