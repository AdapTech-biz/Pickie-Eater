import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const RatingComponent = (props) => {
    //number of images
    //type of image
    //flex-start || flex-end
    return (
        <View style={[styles.container, props.style]}>
            {generateRating({ratingNumber: props.ratingNumber, ratingIcon: props.type})}
        </View>
    );
} 

const generateRating = (ratingInfo) => {
    let images = [];
    const imageURL = ratingInfo.ratingIcon === "Star" ? require('../../assets/ratingIcons/Star-Filled-icon-Copy-2.png') : require('../../assets/ratingIcons/Money-Bag-icon.png')
    for(let i=0; i<ratingInfo.ratingNumber; i++) {
        
        const image = <Image key={i} style={styles.ratingIcon} source={imageURL} />
        images.push(image);
    }
    return images
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    ratingIcon: {
        width: 20,
        height: 20,
        margin: 5,
        resizeMode: 'contain'
    }
});

export default RatingComponent;

