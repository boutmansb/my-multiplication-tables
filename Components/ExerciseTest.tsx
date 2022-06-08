import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';


export default function ExerciseTest(props) {
    const [number, onChangeNumber] = React.useState('');

    function renderNextButton() {
        if (props.result !== null) {
            return (
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {onChangeNumber(''); props.handleNextPress();}}
                    >
                    <Text style={styles.buttonText}>Volgende oefening!</Text>
                </TouchableOpacity>
            );
        } else {
            return(
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => props.handleInputCheck(number)}
                    >
                    <Text style={styles.buttonText}>Klaar!</Text>
                </TouchableOpacity>
            );
        }
    }

    function renderResult() {
        if (props.result === true) {
            return (<Text style={styles.success}>Goed gedaan!</Text>)
        }
        if (props.result === false) {
            return (<Text style={styles.fail}>Oeps, niet helemaal juist.</Text>)
        }
    }


    return (
        <View>
            <View style={styles.resultContainer}>
                {renderResult()}
            </View>
            <View style={styles.exerciseContainer}>
                <Text style={styles.exercise}>{props.multiplier} x {props.root} =</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="vul hier de oplossing in"
                    keyboardType="numeric"
                    editable={props.result === null}
                />
            </View>

            <View style={styles.buttonContainer}>
                {renderNextButton()}
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    exercise: {
      color: '#888',
      fontSize: 27,
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    success: {
        color: 'green',
        fontSize: 18,
        fontWeight: 'bold'
    },
    fail: {
        color:'red',
        fontSize: 18,
        fontWeight: 'bold'
    },
    exerciseContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonContainer: {
        alignItems: 'center'
    },
    resultContainer: {
        alignItems: 'center'
    }
  });