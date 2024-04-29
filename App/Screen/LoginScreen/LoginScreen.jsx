import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';
import * as WebBrowser from "expo-web-browser";
import Colors from './../../Utils/Colors';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();

            if (createdSessionId) {
                setActive({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }
        } catch (err) {
            console.error("OAuth error", err);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('./../../../assets/Images/logo.png')}
                    style={styles.logoImage}
                />    
                <Text style={styles.heading}>ParkIt!</Text>
                <Text style={styles.desc}>Book Your Own Spot.</Text>
            </View>

            <Image
                source={require('./../../../assets/Images/ParkIt-car.png')}
                style={styles.bgImage}
            />

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Login With Google</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    logoImage: {
        width: '20%',
        height: 58,
        resizeMode: 'contain',
      },
    header: {
        alignItems: 'center',
        marginTop: 30,
    },
    bgImage: {
        width: '90%',
        height: 240,
        marginTop: 20,
        resizeMode: 'contain',
    },
    
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fcc501',
    },
    desc: {
        fontSize: 18,
        marginTop: 15,
        color: Colors.GRAY,
    },
    button: {
        backgroundColor: '#fcc501',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: 'black',
        fontSize: 17,
        fontWeight: '600',
    },
});
