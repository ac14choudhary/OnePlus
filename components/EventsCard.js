import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function EventsCard() {
  return (
    <View style={styles.Background}>
      <TouchableOpacity style={styles.BaseCard}>
        <Image
          style={styles.EventsImage}
          source={require('../Models/oe1.jpg')}
        />

        <Text style={styles.EventsText}> Talent Unbox </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: '#121212',
    flexDirection: 'row',
  },

  BaseCard: {
    margin: 25,
    flex: 1,
    flexDirection: 'column',

    backgroundColor: '#242424',

    borderRadius: 15,
  },

  EventsImage: {
    flex: 12,
    margin: '10%',
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    resizeMode: 'contain',
    borderRadius: 15,
  },
  EventsText: {
    flex: 1,
    fontSize: 18,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontFamily: 'NeueHaasDisplay-Roman',
    alignContent: 'center',
    marginBottom: 10,
  },
});
