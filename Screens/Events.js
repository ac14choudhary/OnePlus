import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Header from '../components/Header';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import EventsCard from '../components/EventsCard';

function Past() {
  return <EventsCard />;
}

function Ongoing() {
  return (
    <View style={styles.EventsScreen}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'NeueHaasDisplay-Roman',
          color: 'white',
        }}>
        Ongoing Events
      </Text>
    </View>
  );
}

function Future() {
  return (
    <View style={styles.EventsScreen}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'NeueHaasDisplay-Roman',
          color: 'white',
        }}>
        Future Events
      </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Events() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor="#242424" />
      <Header titleName="Events" />
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 12,
            color: 'white',
            fontFamily: 'NeueHaasDisplay-Roman',
            alignContent: 'center',
          },
          tabStyle: {height: 56},
          style: {
            backgroundColor: '#121212',
            alignContent: 'center',
          },
        }}>
        <Tab.Screen name="Past" component={Past} />
        <Tab.Screen name="Ongoing" component={Ongoing} />
        <Tab.Screen name="Future" component={Future} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  EventsScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  EventScreenButtons: {
    borderRadius: 10,
    opacity: 10,
    padding: 20,
    margin: 10,
    backgroundColor: '#242424',
    width: '80%',
    height: '22%',
  },
});
