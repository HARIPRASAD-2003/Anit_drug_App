// MotivationalQuoteComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MotivationalQuoteComponent = () => {
  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>
        "Your future is created by what you do today, not tomorrow."
      </Text>
      <Text style={styles.quoteAuthor}>- Robert Kiyosaki</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteContainer: {
    marginTop: 20,
    backgroundColor: '#f2f2f2', // Light gray background
    padding: 15,
    borderRadius: 10,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 5,
  },
  quoteAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

export default MotivationalQuoteComponent;
