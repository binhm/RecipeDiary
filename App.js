import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './App/Navigation/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>What are you making today?</Text> */}
      <NavigationContainer>
        <NavBar/>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
