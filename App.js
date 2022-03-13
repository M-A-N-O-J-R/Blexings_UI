import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './screens/RecordList'

export default function App() {
  return (
    <View style={styles.container}>
      <List/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(229,229,229)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
