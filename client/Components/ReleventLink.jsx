// RelevantLinksComponent.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const RelevantLinksComponent = () => {
  const openExternalLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.linksContainer}>
      <Text style={styles.linksTitle}>Relevant Links</Text>
      <TouchableOpacity onPress={() => openExternalLink('https://example.com/link1')}>
        <Text style={styles.link}>Link 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openExternalLink('https://example.com/link2')}>
        <Text style={styles.link}>Link 2</Text>
      </TouchableOpacity>
      {/* Add more relevant links as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  linksContainer: {
    marginTop: 20,
  },
  linksTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  link: {
    fontSize: 16,
    color: '#3498db', // Blue color for links
    marginBottom: 5,
  },
});

export default RelevantLinksComponent;
