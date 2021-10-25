import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SelectTableButton(props) {
    const [selected, setSelected] = React.useState(props.selectedTables.indexOf(props.value) > -1);

    let klikker;
        if(selected === true) {
        klikker =
            <TouchableOpacity
                style={styles.tableSelectedButton}
                onPress={() => {setSelected(false); props.onDeselectTablePress(props.value)}}
                >
                <Text style={styles.buttonText}>{props.value.toString()}</Text>
            </TouchableOpacity>
        } else {
        klikker=
            <TouchableOpacity
                style={styles.tableSelectButton}
                onPress={() => {setSelected(true); props.onSelectTablePress(props.value)}}
                >
                <Text style={styles.buttonText}>{props.value.toString()}</Text>
            </TouchableOpacity>
        }

    return (
        klikker
    );
}

const styles = StyleSheet.create({
    tableSelectButton: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
      margin: 5
    },
    tableSelectedButton: {
      backgroundColor: 'green',
      padding: 20,
      borderRadius: 5,
      margin: 5
    },
    buttonText: {
      fontSize: 20,
      color: '#fff'
    },
  });