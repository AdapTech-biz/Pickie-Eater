import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const SearchButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Eat</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: "center",
        alignSelf: "center"
    },
    button: {
        width: 250,
        height: 250,
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: '#1B262C',
        borderRadius: 150,
        backgroundColor: "#3282B8"
    },
    buttonText: {
        alignSelf: "center",
        width: 120,
        height: 59,
        // textShadow: "0 2 4 rgba(100,100,100,0.5)",
        color: "#f9fcfb",
        // fontFamily: "Spectral SC",
        fontSize: 36,
        fontWeight: "400",
        lineHeight: 55,
        textAlign: "center",
    }
})
export default SearchButton;
