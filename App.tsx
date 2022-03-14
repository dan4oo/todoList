import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, ProgressViewIOSComponent } from 'react-native';
import AddButton from './components/AddButton';
import Test from './components/Test';
import Tasks from './components/Tasks';

export default function App() {
  const addTask = () => {

  }
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Today's Tasks </Text>
        <View style={styles.line} />
        <View style={styles.items}>
          <Tasks />
          <Tasks />
          <Tasks />
        </View>
        <View style={styles.button}>
          <AddButton />
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'AmericanTypewriter',
    fontSize: 50,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
  },
  button: {
    alignItems: 'center'
  },
  items: {},
});
