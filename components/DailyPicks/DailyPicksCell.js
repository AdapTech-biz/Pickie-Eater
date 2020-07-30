import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import RatingComponent from '../rating/RatingComponent';

const DailyPicksCell = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageThumbnail} source={{uri: "https://static.olocdn.net/menu/applebees/48cadc15e72bdf4c6acdc19dd1137c8e.jpg"}} />
            <View style={styles.bodyContainer}>
                <Text style={styles.locationName}>{props.locationName || "Location Name"}</Text>
                <RatingComponent ratingNumber={3} type={"Star"}/>
            </View>
            <View style={styles.detailsContainer}>
                <RatingComponent ratingNumber={2} type={"Money"}/>
                <Text style={styles.distanceText}>1.2 mi</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        margin: 5,
        alignItems: 'center'
        // height: 100
    },
    imageThumbnail: {
        flex: 1,
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    bodyContainer: {
        flex: 2,
        marginHorizontal: 10,
        padding: 10,
        justifyContent: 'space-between'
    },
    detailsContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    locationName: {
        color: "#f9fcfb",
        fontFamily: "SpectralSC_400Regular",
        fontSize: 18,
        lineHeight: 27,
    },
    distanceText: {
        color: "#f9fcfb",
        fontFamily: "Red_Rose",
        fontSize: 16,
        fontWeight: "300",
        lineHeight: 14,
        margin: 5
    }
});

export default DailyPicksCell;
