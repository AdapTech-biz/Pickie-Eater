import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, ImageBackground} from 'react-native';

const SearchButton = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center'}} >
            <ImageBackground imageStyle={{resizeMode:"contain"}}  style={styles.button} source={require('../assets/searchButton/Ellipse.png')}>
                <Text style={styles.buttonText}>Eat</Text>
            </ImageBackground>
            
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: "center",
        alignSelf: "center",
        
    },
    button: {
        width: 300,
        resizeMode: 'cover',
        alignSelf: "center",
        justifyContent: "center",
        overflow: 'visible',
        aspectRatio: 1
        // backgroundColor: '#1B262C',
        // borderRadius: 150,
        // backgroundColor: "#3282B8",
        
    },
    buttonText: {
        alignSelf: "center",
        width: "100%",
        textShadowColor: "rgba(100,100,100,0.5)",
        textShadowOffset: {width: 1, height: 5},
        textShadowRadius: 4,
        color: "#f9fcfb",
        fontFamily: "SpectralSC_400Regular",
        fontSize: 40,
        lineHeight: 55,
        textAlign: "center",
    }
})
export default SearchButton;
