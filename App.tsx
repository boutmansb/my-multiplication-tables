import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SelectTableButton from './Components/SelectTableButton';
import ExerciseView from './Views/ExerciseView';
import ResultView from './Views/ResultView';

type ViewState = "selection" | "exercise" | "results";

export default function App() {
  const [selectedTables] = React.useState([]);
  const [viewState, setViewState] = React.useState<ViewState>("selection");

  function addNumberToSelectedTables(num) {
    if (selectedTables.indexOf(num) === -1) {
      selectedTables.push(num);
    }
  }

  function removeNumberFromSelectedTables(num) {
    selectedTables.splice(selectedTables.indexOf(num), 1);
  }

  if(viewState === "selection") {
    return (
      <View style={styles.container}>

        <Text style={styles.instructions}>Selecteer de tafels doe je wilt oefenen.</Text>

        <View style={styles.tablesSelector}>
          <SelectTableButton value={1} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
          <SelectTableButton value={2} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
          <SelectTableButton value={3} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
          <SelectTableButton value={4} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
          <SelectTableButton value={5} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
          <SelectTableButton value={6} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
          <SelectTableButton value={7} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
          <SelectTableButton value={8} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
          <SelectTableButton value={9} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
          <SelectTableButton value={10} selectedTables={selectedTables} onSelectTablePress={addNumberToSelectedTables} onDeselectTablePress={removeNumberFromSelectedTables} />
        </View>

        <TouchableOpacity
            style={styles.button}
            onPress={() => setViewState("exercise")}
            >
              <Text style={styles.buttonText}>Invullen!</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }
  else if (viewState === "exercise") {
    return(
      <View style={styles.container}>
        <ExerciseView selectedTables={selectedTables} />

        <StatusBar style="auto" />
      </View>
    );
  }
  else if (viewState === "results") {
    return(
      <View style={styles.container}>
        <ResultView selectedTables={selectedTables} />

        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tablesSelector: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
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
