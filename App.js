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
import Header from './components/Header';
import Collaboration from './Screens/Collaboration';
import Galleryy from './Screens/Gallery';
import Events from './Screens/Events';
import Home from './Screens/HomeScreen';

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
  const [Tdata, setTData] = useState([
    {
      id: '1',
      name: 'Advait Karmakar',
      image: require('./Models/team/1.jpg'),
    },
    {
      id: '2',
      name: 'Atishay Jain',
      image: require('./Models/team/2.jpeg'),
    },
    {
      id: '3',
      name: 'Dev Sabharwal',
      image: require('./Models/team/3.jpg'),
    },
    {
      id: '4',
      name: 'Dhruv Shetty',
      image: require('./Models/team/4.jpg'),
    },
    {
      id: '5',
      name: 'Kaashvi Saxena',
      image: require('./Models/team/5.jpeg'),
    },
    {
      id: '6',
      name: 'Pratyush Agarwal',
      image: require('./Models/team/6.jpg'),
    },
    {
      id: '7',
      name: 'Sarthak Soral',
      image: require('./Models/team/7.jpg'),
    },
    {
      id: '8',
      name: 'Suparna Mukherji',
      image: require('./Models/team/8.jpg'),
    },
  ]);
  const pressIHandler = (id) => {
    console.log(id);
  };
  return (
    <SafeAreaView style={{flex: 1, paddingBottom: 50}}>
      <StatusBar barStyle="light-content" backgroundColor="#242424" />
      <Header titleName="Team" />
      <View
        style={{
          backgroundColor: '#121212',
          paddingVertical: 10,
        }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={Tdata}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.TeamCard}
              onPress={() => pressIHandler(item.id)}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.listText}>{item.name}</Text>
                <Image
                  style={{
                    borderRadius: 30,
                    height: 200,
                    width: 200,

                    resizeMode: 'center',
                    borderColor: '#F50514',

                    alignSelf: 'center',
                    alignItems: 'center',
                  }}
                  source={item.image}
                />
                <View
                  style={{
                    padding: 15,
                    width: '95%',
                    alignSelf: 'center',
                    borderBottomColor: '#2F2F2F',
                    borderColor: '#121212',
                    borderWidth: 1,
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

//EVENTS SCREEN//

function EventsScreen() {
  return <Events />;
}

//collaboration

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
                <Image
                  style={{height: 22, width: 22, resizeMode: 'contain'}}
                  source={require('./Models/home.png')}
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
                <Image
                  style={{height: 22, width: 22, resizeMode: 'contain'}}
                  source={require('./Models/gallery.png')}
                />
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
                <Image
                  style={{height: 22, width: 22, resizeMode: 'contain'}}
                  source={require('./Models/team.png')}
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
                <Image
                  style={{height: 22, width: 22, resizeMode: 'contain'}}
                  source={require('./Models/events.png')}
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
                <Image
                  style={{height: 25, width: 25, resizeMode: 'contain'}}
                  source={require('./Models/collab.png')}
                />
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
  TeamCard: {
    padding: 10,
    borderRadius: 12,
  },
  listText: {
    fontSize: 20,
    alignSelf: 'center',
    color: '#F50514',
    marginBottom: 10,
    fontFamily: 'NeueHaasDisplay-Mediu',
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
  listview1: {
    marginHorizontal: 20,
    marginVertical: 13,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#242424',
    color: '#FFFFFF',
    borderRadius: 12,
    borderColor: '#F50514',
    borderWidth: 0.5,
  },

  listText1: {
    fontFamily: 'NeueHaasDisplay-Roman',
    fontSize: 17,
    alignSelf: 'center',
    color: '#FFFFFF',
  },
});
