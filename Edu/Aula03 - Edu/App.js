import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet, SafeAreaView, SafeAreaViewBase} from 'react-native';

export default function App(){
  return(
 <SafeAreaView>
  <ScrollView>
    <View style={styles.container}>
      <Image source={{uri:'https://i.pinimg.com/736x/21/29/e8/2129e82eb9fff9f10e209f2691cd8bb0.jpg'}} style={styles.avatar}/>

    <Text style={styles.nome}>
      Byel Pedra
    </Text>

    <Text style={styles.profissao}>
      Pedreiro
    </Text>

    <Text style={styles.bio}>
    Maior batedor de laje da história  
    </Text>
     <View style={styles.info}>
            <Text>Arriba - México󠁭󠁸󠁭🌶️</Text>
            <Text>📧byelzinhocimento@gmail.com</Text>
            <Text>📞(13) 99666-6666</Text>
 
          </View>
    </View>
  </ScrollView>
 </SafeAreaView>






  );
}

const styles = StyleSheet.create({
container:{
  paddingTop:60,
  paddingHorizontal:20,
  paddingBottom:40,
  backgroundColor:'#f2f2f2',
  alignItems:'center'
},
avatar:{
  width:150,
  height:150,
  borderRadius:75
},
nome:{
  fontSize:28,
  fontWeight:'bold',
  marginTop:15
},
profissao:{
  fontSize:18,
  color:'gray',
  marginTop:5
},
bio:{
  fontSize:16,
  textAlign:'center',
  marginVertical:20,
  lineHeight:24
},
info:{
  width:'100%',
  fontSize:22,
  fontWeight:'bold',
  marginTop:20,
  marginBottom:10
}

});