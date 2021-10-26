import React, { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ExerciseTest from '../Components/ExerciseTest';



export default function ExerciseView(props) {
    interface Exercise {
        root: number,
        multiplier: number,
        result: null|boolean
    }

    const [tables, setTables] = React.useState<Exercise[]>(generateShuffledExercises());
    const [currentExercise, setCurrentExercise] = React.useState(0);
    const [lastResult, setLastResult] = React.useState(null)
    const [multiplier, setMultiplier] = React.useState(tables[currentExercise].multiplier)
    const [root, setRoot] = React.useState(tables[currentExercise].root)

    function generateShuffledExercises() {
        var root:any;
        var sortedTables = [];
        for(root in props.selectedTables) {
            for(var i = 1;i<=10;i++) {
                sortedTables.push({root: props.selectedTables[root], multiplier: i, result: null});
             }
         }

        return(shuffle(sortedTables));
    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function handleNextPress() {
        if ((tables.length -1) > currentExercise) {
            setCurrentExercise(currentExercise + 1);
            setLastResult(null);
            setMultiplier(tables[currentExercise + 1].multiplier);
            setRoot(tables[currentExercise + 1].root);
        } else {
            props.saveFinalExercises(tables);
        }
    }

    function handleInputCheck(input) {
        let oldTables = tables;
        let currentEx = oldTables[currentExercise];
        let test = currentEx.multiplier * currentEx.root;

        currentEx.result = test == input;

        oldTables[currentExercise] = currentEx;
        setTables(oldTables);
        setLastResult(currentEx.result);
    }

    function renderExcerciseTest() {
        if (tables !== []) {
            return (<ExerciseTest multiplier={multiplier} root={root} result={lastResult} handleNextPress={handleNextPress} handleInputCheck={handleInputCheck} />);
        }
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => props.handleReturnToStartScreen()}
                >
                <Text style={styles.buttonText}>Terug naar begin</Text>
            </TouchableOpacity>

            <Text style={styles.instructions}>Hier komen dan de oefeningen!</Text>
            {renderExcerciseTest()}
        </View>

    );
}

const styles = StyleSheet.create({
    instructions: {
        color: '#888',
        fontSize: 18,
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
  });