import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as WebBrowser from "expo-web-browser";
import React from 'react';
import Colors from './../../Utils/Colors'; // Importing Colors from a centralized file for consistent theming
import { useOAuth } from '@clerk/clerk-expo'; // Importing OAuth hook
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';// Importing custom hook for warm-up browser

WebBrowser.maybeCompleteAuthSession(); // Ensure any existing auth sessions are completed before starting a new one

export default function LoginScreen() {
    useWarmUpBrowser(); // Warm-up the browser on component mount

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" }); // OAuth hook for Google login

    const onPress = async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow(); // Initiate OAuth flow

            if (createdSessionId) {
                setActive({ session: createdSessionId }); // Set active session if created
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err); // Log any errors during OAuth flow
        }
    };

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.heading}>ParkIt!</Text>
                <Text style={styles.desc}>Book Your Own Spot.</Text>
            </View>

            {/* Image Section */}
            <Image
                source={require('./../../../assets/Images/ParkIt-car.png')}
                style={styles.bgImage}
            />

            {/* Login Button */}
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Login With Google</Text>
            </TouchableOpacity>
        </View>
    );
}

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE, // Background color
    },
    header: {
        alignItems: 'center',
        marginTop: 30, // Top margin for header
    },
    bgImage: {
        width: '90%',
        height: 240,
        marginTop: 20,
        resizeMode: 'contain', // Ensure the full image is visible
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold', // Bold font for heading
        color: '#fcc501', // Heading color
    },
    desc: {
        fontSize: 18,
        marginTop: 15,
        color: Colors.GRAY, // Description color
    },
    button: {
        backgroundColor: '#fcc501', // A red shade for the button background
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25, // Rounded corners
        elevation: 2, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: 'black', // Button text color
        fontSize: 17,
        fontWeight: '600',
         // Button text font weight
    },
});
