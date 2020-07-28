import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import DailyPicksListHeader from './DailyPicksListHeader';
import DailyPicksCell from './DailyPicksCell';

const DailyPicks = () => {
    return (
        <View style={styles.container}>
            <FlatList
            data={[0,0,0]} 
            ListHeaderComponent={()=> <DailyPicksListHeader />}
            stickyHeaderIndices={[0]}
            renderItem={({item})=><DailyPicksCell />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
    
})
export default DailyPicks;
