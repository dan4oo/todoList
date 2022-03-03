import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddButton from './components/AddButton';
import Tasks from './components/Tasks';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Today's Tasks</Text>
        <View style={styles.line} />
        <Tasks />
        <Tasks />
        <Tasks />
        <AddButton />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    paddingTop: 70,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 3,
  }
});
