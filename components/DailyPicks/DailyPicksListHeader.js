import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DailyPicksListHeader = () => {
    return (
    <Text style={styles.listHeader}>
        Top Picks
    </Text>
    );

}

const styles = StyleSheet.create({
    listHeader: {
        width: 91,
        height: 27,
        // Webkit-textStroke: "solid 1 #686868",
        color: "#0f4c75",
        // fontFamily: "Spectral SC",
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 27,
        textAlign: "center",
        marginHorizontal: 10
    }
});

export default DailyPicksListHeader;