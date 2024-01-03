// LeaderboardComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LeaderboardComponent = () => {
  return (
    <View style={styles.leaderboardContainer}>
      <Text style={styles.leaderboardTitle}>Leaderboard</Text>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.columnHeader}>Rank</Text>
          <Text style={styles.columnHeader}>Player</Text>
          <Text style={styles.columnHeader}>Points</Text>
        </View>

        {/* Display leaderboard entries dynamically */}
        <View style={styles.tableRow}>
          <Text style={styles.rankCell}>1</Text>
          <Text style={styles.playerCell}>Player1</Text>
          <Text style={styles.pointsCell}>500</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.rankCell}>2</Text>
          <Text style={styles.playerCell}>Player2</Text>
          <Text style={styles.pointsCell}>400</Text>
        </View>
        {/* Add more leaderboard entries as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leaderboardContainer: {
    marginTop: 20,
    backgroundColor: '#f2f2f2', // Light gray background
    padding: 15,
    borderRadius: 10,
    width: '90%'
  },
  leaderboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark text color
  },
  table: {
    width: '100%',
    marginTop: 10,
    borderColor: 'black',
},
tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 8,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // borderColor: 'black',
    // borderWidth: '2px',
    paddingVertical: 8,
  },
  rankCell: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    textAlign: 'center'
  },
  playerCell: {
    flex: 2,
    fontSize: 16,
    color: '#333',
    justifyContent: 'center',
    textAlign: 'center'
  },
  pointsCell: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    textAlign: 'right',
    justifyContent: 'center',
    textAlign: 'center'
  },
  columnHeader: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3498db', 
    
    justifyContent: 'center',
    textAlign: 'center'
    // width: '100px'
  },
});

export default LeaderboardComponent;
