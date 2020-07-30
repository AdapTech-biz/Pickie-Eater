import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import SearchButton from '../components/SearchButton';
import DailyPicks from '../components/DailyPicks/DailyPicks';

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Filer placeholder</Text>
            </View>
            <SearchButton />
            <DailyPicks />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1b262c',
    }
})
export default HomeScreen;
