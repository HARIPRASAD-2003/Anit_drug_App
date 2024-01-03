// Homepage.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import SliderComponent from './SliderComponent';
import LeaderboardComponent from './LeaderBoardComponent';
import MotivationalQuoteComponent from './MotivationalQuote';
import RelevantLinksComponent from './ReleventLink';
import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
const Homepage = ({ navigation }) => {
  const navigateToDetails = () => {
    // Replace 'Details' with the desired screen name
    navigation.navigate('Details');
  };

//   const images = [ss,'../assets/ss.png', '../assets/ss.png', '../assets/ss.png', '../assets/ss.png'];
    const images = [s3, s1, s2];


  // Append a unique parameter to each image URL to prevent caching
//   const imagesWithTimestampQuery = images.map((img) => `${img}?timestamp=${new Date().getTime()}`);

  return (
    <ScrollView style={styles.container}>
      <SliderComponent images={images} />

      <View style={styles.gameHeader}>
        <Text style={styles.gameHeaderText}>Welcome to GameZone</Text>
      </View>

      <View style={styles.playButtonContainer}>
        <TouchableOpacity style={styles.playButton} onPress={navigateToDetails}>
          <Text style={styles.buttonText}>Play Now</Text>
        </TouchableOpacity>
      </View>

      <LeaderboardComponent />
      <MotivationalQuoteComponent />
      <RelevantLinksComponent />
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  gameHeader: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  gameHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  playButtonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  playButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Homepage;
