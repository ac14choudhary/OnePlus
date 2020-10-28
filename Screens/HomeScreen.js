import React from 'react';
import {Linking} from 'react-native';
import {Avatar, Badge, withBadge} from 'react-native-elements';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  link,
  SafeAreaView,
} from 'react-native';
import Header from '../components/Header';

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#242424" />
      <Header titleName="Home" />
      <View style={styles.HomeScreen}>
        <View style={styles.UpperContainer}>
          <View style={{marginTop: '5%'}}>
            <Avatar
              rounded
              size="large"
              source={require('../Models/team/5.jpeg')}
            />

            <Badge
              size="large"
              status="success"
              containerStyle={{position: 'absolute', top: +5, right: +5}}
            />
          </View>
        </View>
        <View style={styles.LowerContainer}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', padding: 10}}
            onPress={() =>
              Linking.openURL(
                'https://open.spotify.com/playlist/1SeGoo6wWZFg4Kbz27475X?si=AZ-cyEL8Reuy7UMGYrwipQ',
              )
            }>
            <Image
              style={{
                height: 25,
                width: 25,
                alignItems: 'center',
              }}
              source={require('../Models/Spotify.png')}></Image>

            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: 'NeueHaasDisplay-Roman',
                padding: 10,
              }}>
              Sportify
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center', padding: 10}}
            onPress={() =>
              Linking.openURL(
                'https://www.instagram.com/oneplus_sap/?igshid=yeipvjydv0l7',
              )
            }>
            <Image
              style={{
                height: 25,
                width: 25,
                alignItems: 'center',
              }}
              source={require('../Models/instagram.png')}></Image>

            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: 'NeueHaasDisplay-Roman',
                padding: 10,
              }}>
              Instagram
            </Text>
          </TouchableOpacity>
        </View>
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
  UpperContainer: {flex: 5},
  LowerContainer: {flexDirection: 'row', flex: 1},
  Acc: {
    height: '50%',
    width: '50%',
  },

  //Image: {width: 100, height: 100, alignSelf: 'center'},
});

// <TouchableOpacity
// onPress={() => Linking.openURL('https://www.instagram.com/')}>
// <Image
//   style={styles.Image}
//   source={require('../Models/instagram.png')}></Image>
// </TouchableOpacity>
