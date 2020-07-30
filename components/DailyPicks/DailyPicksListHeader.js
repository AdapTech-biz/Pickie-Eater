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
        textShadowColor: "#686868",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 2,
        // Webkit-textStroke: "solid 1 #686868",
        color: "#0f4c75",
        fontFamily: "SpectralSC_400Regular",
        fontSize: 24,
        lineHeight: 27,
        marginHorizontal: 10
    }
});

export default DailyPicksListHeader;