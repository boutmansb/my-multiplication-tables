import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';


export default function ExerciseTest(props) {
    const [number, onChangeNumber] = React.useState(null);

    function renderNextButton() {
        if (props.result !== null) {
            return (
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onChangeNumber(''); props.handleNextPress()}}
                    >
                    <Text style={styles.buttonText}>Volgende</Text>
                </TouchableOpacity>
            );
        } else {
            return(
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.handleInputCheck(number)}
                    >
                    <Text style={styles.buttonText}>Klaar.</Text>
                </TouchableOpacity>
            );
        }
    }

    function renderResult() {
        if (props.result === true) {
            return (<Text style={styles.success}>Correct</Text>)
        }
        if (props.result === false) {
            return (<Text style={styles.fail}>Fout</Text>)
        }
    }


    return (
        <View>
            <Text style={styles.exercise}>{props.multiplier} x {props.root} =</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="resultaat"
                keyboardType="numeric"
            />
            {renderResult()}
            {renderNextButton()}
        </View>

    );
}

const styles = StyleSheet.create({
    exercise: {
      color: '#888',
      fontSize: 21,
      fontWeight: 'bold',
      marginBottom: 15
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    success: {
        color: 'green'
    },
    fail: {
        color:'red'
    }
  });