// PlaceListView.jsx
import React from 'react';
import { View, FlatList } from 'react-native';
import PlaceItem from './PlaceItem';
import placesDatabase from './placesDatabase';

export default function PlaceListView() {
  return (
    <View>
      <FlatList
        data={placesDatabase}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <PlaceItem place={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Add keyExtractor
      />
    </View>
  );
}
