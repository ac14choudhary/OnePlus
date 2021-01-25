import * as React from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  StatusBar,
  SafeAreaView,
} from 'react-native';

import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Collaboration from './Screens/Collaboration';
import Galleryy from './Screens/Gallery';
import Events from './Screens/Events';
import Home from './Screens/HomeScreen';
import Team from './Screens/Team';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
//HOMESCREEN//

function HomeScreen() {
  return <Home />;
}

//Gallery//

function GalleryScreen() {
  return <Galleryy />;
}

//TEAMSCREEN//

function TeamScreen() {
  return <Team />;
}

//EVENTS SCREEN//

function EventsScreen() {
  return <Events />;
}

//collaboration//

function CollaborateScreen() {
  return <Collaboration />;
}

//
//
//
//NAVIGATION//
//
//
//

const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#F50514',
          tabStyle: {
            backgroundColor: '#121212',
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <View>
                <Icon
                  name="home-variant"
                  style={{fontSize: 24, color: 'white'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            tabBarLabel: 'Gallery',
            fontFamily: 'NeueHaasDisplay-Roman',
            title: 'Gallery',
            tabBarIcon: ({color, size}) => (
              <View>
                <Icon name="image" style={{fontSize: 24, color: 'white'}} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Team"
          component={TeamScreen}
          options={{
            tabBarLabel: 'Team',
            tabBarIcon: ({color, size}) => (
              <View>
                <Icon
                  name="account-group"
                  style={{fontSize: 24, color: 'white'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({color, size}) => (
              <View>
                <MIcon
                  name="date-range"
                  style={{fontSize: 24, color: 'white'}}
                />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Collab"
          component={CollaborateScreen}
          options={{
            tabBarLabel: 'Collab',
            tabBarIcon: ({color, size}) => (
              <View>
                <Icon name="handshake" style={{fontSize: 24, color: 'white'}} />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//STYLES//

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  GalleryScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  TeamScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  EventsScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  CollaborateScreen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212',
    alignItems: 'center',
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
  EventText: {
    fontFamily: 'NeueHaasDisplay-Roman',
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
  },
});
