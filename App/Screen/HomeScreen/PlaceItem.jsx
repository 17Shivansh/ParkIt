// PlaceItem.jsx
import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Colors from '../../Utils/Colors';

export default function PlaceItem({ place }) {
  return (
    <View
    style={{
        backgroundColor:Colors.WHITE,
        margin:5,
        borderRadius:10,
        width:Dimensions.get('screen').width*0.9
    }}>
      <Image
        source={place.imageSource}
        style={{ width: '100%', borderRadius: 10, height: 130 }}
      />
      <View style={{padding:15}}>
        <Text style={{fontSize:23}}>{place.displayName?.text}</Text>
      </View>
      <Text>{place.name}</Text>
      <Text>Location: {place.details.location}</Text>
      <Text>Description: {place.details.description}</Text>
      <Text>Rating: {place.details.rating}</Text>
    </View>
  );
}
