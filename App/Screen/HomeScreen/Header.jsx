import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useUser } from '@clerk/clerk-expo';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
    const { user } = useUser();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {user && user.imageUrl && (
                    <Image
                        source={{ uri: user.imageUrl }}
                        style={styles.image}
                    />
                )}
            </View>
            <TouchableOpacity onPress={() => console.log("Filter button pressed")}>
                <FontAwesome name="filter" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 16,
    },
})
