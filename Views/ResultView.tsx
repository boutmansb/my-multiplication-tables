import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultView(props) {

    return (
        <View>
            <Text style={styles.instructions}>Hier komen dan de resultaten van de ingevulde oefeningen!</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    instructions: {
      color: '#888',
      fontSize: 18,
      marginBottom: 15
    }
  });