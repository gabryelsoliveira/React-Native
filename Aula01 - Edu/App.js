import react from "react";  
import {View, Text, StyleSheet} from 'react-native';
export default function App() {
  return(
    <View style={styles.container}>    
    <Text style={styles.titulo}> Minha apresentação </Text>
    <Text style={styles.nome}> Gabryel Santana Oliveira</Text>
    <Text style={styles.informacao}> Curso: Desenvolvimento de Sistema</Text>
    <Text style={styles.informacao}> Disciplina: Mobile(React native)</Text>
    <Text style={styles.informacao}> Meu objetivo </Text>
    <Text style={styles.texto}> Aprender a desenvolver aplivativos utilizando React Native</Text>

    </View>
  );
}
const styles = StyleSheet.create({
container:{
  flex:1,
  justifyContent:'center',
  padding:20,
  backgroudColor:'#f7f7f7'
},
titulo:{
  fontSize:30,
  fontWeight:'bold',
  textAlign:'center',
  marginBottom:25
},
nome:{
  fontSize:24,
  fontWeight:'bold',
  textAlign:'center',
  marginBottom:25
}

});
