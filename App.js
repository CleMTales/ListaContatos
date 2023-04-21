
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/components/Home';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <Home/>
      <StatusBar/>
    </>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    width: '100%',
  },
}); */
