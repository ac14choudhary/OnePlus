import React, {useState} from 'react';
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

import Header from '../components/Header';

export default function Team() {
  const [Tdata, setTData] = useState([
    {
      id: '1',
      name: 'Advait Karmakar',
      image: require('../Models/team/1.jpg'),
    },
    {
      id: '2',
      name: 'Atishay Jain',
      image: require('../Models/team/2.jpeg'),
    },
    {
      id: '3',
      name: 'Dev Sabharwal',
      image: require('../Models/team/3.jpg'),
    },
    {
      id: '4',
      name: 'Dhruv Shetty',
      image: require('../Models/team/4.jpg'),
    },
    {
      id: '5',
      name: 'Kaashvi Saxena',
      image: require('../Models/team/5.jpeg'),
    },
    {
      id: '6',
      name: 'Pratyush Agarwal',
      image: require('../Models/team/6.jpg'),
    },
    {
      id: '7',
      name: 'Sarthak Soral',
      image: require('../Models/team/7.jpg'),
    },
    {
      id: '8',
      name: 'Suparna Mukherji',
      image: require('../Models/team/8.jpg'),
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
          paddingBottom: 10,
        }}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={Tdata}
          alignSelf="center"
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.TeamCard}
              onPress={() => pressIHandler(item.id)}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Image
                  style={{
                    borderRadius: 20,
                    height: 180,
                    width: 180,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}
                  source={item.image}
                />
                <Text style={styles.listText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
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
  TeamCard: {
    paddingTop: 30,
  },
  listText: {
    fontSize: 15,
    alignSelf: 'center',
    color: 'white',
    marginTop: 10,
    fontFamily: 'NeueHaasDisplay-Mediu',
  },
});

// <View
// style={{
//   padding: 15,
//   width: '95%',
//   alignSelf: 'center',
//   borderBottomColor: '#2F2F2F',
//   borderColor: '#121212',
//   borderWidth: 1,
// }}
// />
