// import React from 'react';
// import * as React from "react";
// import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
// import Header from '../components/Header';

// export default function Team1() {

//       return (
//         <View style={{flex: 1, paddingBottom: 50}}>
//           <Header titleName="Team" />
//           <View
//             style={{
//               backgroundColor: '#121212',

//             }}>
//             <FlatList
//               keyExtractor={(item) => item.id}
//               data={Tdata}
//               renderItem={({item}) => (
//                 <TouchableOpacity
//                   style={styles.TeamCard}
//                   onPress={() => pressIHandler(item.id)}>
//                   <View style={{flexDirection: 'column'}}>
//                     <Text style={styles.listText}>{item.name}</Text>
//                     <Image
//                       style={{
//                         borderRadius: 30,
//                         height: 200,
//                         width: 200,

//                         resizeMode: 'center',
//                         borderColor: '#F50514',

//                         alignSelf: 'center',
//                         alignItems: 'center',
//                       }}
//                       source={item.image}
//                     />
//                     <View
//                       style={{
//                         padding: 15,
//                         width: '95%',
//                         alignSelf: 'center',
//                         borderBottomColor: '#2F2F2F',
//                         borderColor: '#121212',
//                         borderWidth: 1,
//                       }}
//                     />
//                   </View>
//                 </TouchableOpacity>
//               )}
//             />
//           </View>
//         </View>

//   );
// }
// const styles = StyleSheet.create({

//     listText: {
//         fontSize: 20,
//         alignSelf: 'center',
//         color: '#F50514',
//         marginBottom: 10,
//         fontFamily: 'NeueHaasDisplay-Mediu',
//       },
//       TeamCard: {
//         padding: 10,
//         borderRadius: 12,
//       },

// });
