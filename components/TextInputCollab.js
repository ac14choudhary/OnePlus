import React from 'react';
import {View, TextInput} from 'react-native';

export default function TextInputCollab() {
  return (
    <View>
      <TextInput
        selectionColor="#ffffff"
        placeholderTextColor="#666670"
        style={{
          alignItems: 'center',
          color: '#666670',
          borderRadius: 10,
          backgroundColor: '#242424',
          minWidth: '100%',
          maxHeight: 60,
          marginTop: 10,
          marginBottom: 20,
          fontSize: 16,
          fontFamily: 'NeueHaasDisplay-Roman',
          paddingLeft: 7,
        }}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}
