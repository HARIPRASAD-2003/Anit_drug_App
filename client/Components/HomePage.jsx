import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Homepage = ({ navigation }) => {
  const [buttonColor, setButtonColor] = useState('#3498db');
  const [counter, setCounter] = useState(0);

  const changeButtonColor = () => {
    const newColor = buttonColor === '#3498db' ? '#2ecc71' : '#3498db';
    setButtonColor(newColor);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Your App</Text>
      </View>

      <View style={styles.card}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonColor }]}
          onPress={changeButtonColor}>
          <Text style={styles.buttonText}>Change Color</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={incrementCounter}>
          <Text style={styles.buttonText}>Increment Counter</Text>
        </TouchableOpacity>

        <Text style={styles.counterText}>Counter: {counter}</Text>
      </View>

      <Image
        style={styles.image}
        source={{ uri: 'https://example.com/your-image-url.jpg' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1', // Light gray background color
    paddingHorizontal: 20,
    paddingTop: 50, // Adjusted padding for a header
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db', // Blue color for the header
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 18,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default Homepage;
