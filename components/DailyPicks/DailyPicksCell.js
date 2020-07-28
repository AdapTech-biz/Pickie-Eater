import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DailyPicksCell = () => {
    return (
        <View style={styles.container}>
            <Text>Daily Pick Cell</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default DailyPicksCell;
