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
        <View style={styles.resultContainer}>
            <Text style={styles.instructions}>Geweldig, je hebt alle oefeningen ingevuld!</Text>
            <Text style={styles.resultInstructions}>{renderFinalResult()}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => props.handleReturnToStartScreen()}
                >
                <Text style={styles.buttonText}>Terug naar begin!</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    resultContainer: {
        alignItems: 'center'
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginBottom: 15
    },
    resultInstructions: {
        color: '#888',
        fontSize: 27,
        marginBottom: 15,
        fontWeight: 'bold'
      },
    button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5,
        margin: 5
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
  });