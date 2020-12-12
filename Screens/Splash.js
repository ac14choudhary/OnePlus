import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LottieView from 'lottie-react-native';
export default function Splash() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#121212'}}>
      <LottieView source={require('../assets/Splash4.json')} autoPlay loop />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
});
