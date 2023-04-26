
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

