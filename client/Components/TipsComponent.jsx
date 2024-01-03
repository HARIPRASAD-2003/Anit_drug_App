// TipsComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TipsComponent = () => {
  return (
    <View style={styles.tipsContainer}>
      <Text style={styles.tipsTitle}>Helpful Tips</Text>
      <Text style={styles.tip}>1. Stay connected with supportive friends and family.</Text>
      <Text style={styles.tip}>2. Engage in activities that bring you joy and fulfillment.</Text>
      {/* Add more tips as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  tipsContainer: {
    marginTop: 20,
  },
  tipsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tip: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default TipsComponent;
