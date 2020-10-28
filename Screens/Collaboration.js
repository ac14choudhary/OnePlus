import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  ScrollView,
  Keyboard,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Header from '../components/Header';
import TextInputCollab from '../components/TextInputCollab';

export default function Collaboration() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#242424" />
        <Header titleName="Collaborations" />
        <ScrollView
          style={{
            backgroundColor: '#121212',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              padding: '5%',
            }}>
            <Text style={styles.TextCollab}>First Name :</Text>
            <TextInputCollab />
            <Text style={styles.TextCollab}>Last Name :</Text>
            <TextInputCollab />
            <Text style={styles.TextCollab}>E-Mail :</Text>
            <TextInputCollab />
            <Text style={styles.TextCollab}>Phone no :</Text>
            <TextInputCollab />
            <Text style={styles.TextCollab}>Event For Collaboration :</Text>
            <TextInputCollab />
            <Text style={styles.TextCollab}>
              Why should we collaborate with you?
            </Text>
            <TextInput
              placeholderTextColor="#666670"
              selectionColor="#666670"
              style={{
                alignItems: 'center',
                color: '#666670',
                borderRadius: 10,
                backgroundColor: '#242424',
                minWidth: '100%',
                minHeight: 100,
                marginTop: 10,
                marginBottom: 20,
                fontSize: 16,
                textAlignVertical: 'top',
                fontFamily: 'NeueHaasDisplay-Roman',
                paddingLeft: 7,
              }}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={styles.TouchableOpacityCollab}
              onPress={() =>
                Alert.alert(
                  'Thank-You So Much , We will revert back to you soon',
                )
              }>
              <Text style={{color: 'white', fontSize: 20, fontStyle: 'normal'}}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  TextCollab: {
    fontSize: 16,
    fontFamily: 'NeueHaasDisplay-Roman',
    color: 'white',
    alignSelf: 'flex-start',
    letterSpacing: 1,
  },
  TouchableOpacityCollab: {
    borderRadius: 12,
    borderColor: 'white',
    borderWidth: 1,
    padding: '3%',
    width: '40%',
    backgroundColor: '#242424',
    fontSize: 16,
    fontFamily: 'NeueHaasDisplay-Roman',
    alignItems: 'center',
  },
});
