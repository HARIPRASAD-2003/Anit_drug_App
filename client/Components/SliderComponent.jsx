// SliderComponent.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

// import { Image } from 'react-native';

const SliderComponent = ({ images }) => {
//   const resolveAssetSource = (source) => Image.resolveAssetSource(source);

  return (
    <Swiper style={styles.eventSlider} autoplay>
      {images.map((img, ind) => {
        return (
        <View style={styles.eventSlide} key={ind}>
          <Image style={styles.image} source={img} />
        </View>

        );
      }
      )}
    </Swiper>
  );
};

const styles = StyleSheet.create({
  eventSlider: {
    width: '100%',
    height: 500, // Set a fixed height for the slider
  },
  eventSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 10,
  },
});

export default SliderComponent;
