import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import Header from '../components/Header';

export default function Galleryy() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#242424" />
      <Header titleName="Gallery" />
      <View style={styles.HomeScreen}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: 'NeueHaasDisplay-Roman',
            color: 'white',
          }}>
          ! Reload to access Gallery !
        </Text>
      </View>
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
