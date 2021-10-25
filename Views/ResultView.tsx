import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ResultView(props) {

    function isCorrect(ex, index, array) {
        return ex.result === true;
    }

    function renderFinalResult() {
        let total = props.result.length;
        let correctOnes = props.result.filter(isCorrect).length;

        return `Je score is ${correctOnes}/${total}.`;
    }

    return (
        <View>
            <Text style={styles.instructions}>Hier komen dan de resultaten van de ingevulde oefeningen!</Text>
            <Text style={styles.instructions}>{renderFinalResult()}</Text>
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