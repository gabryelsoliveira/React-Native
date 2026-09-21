import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
<SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.texto}>Gabryel Santana Oliveira</Text>
    </View>

      <View style={styles.imagens}>
        <Text style={styles.produto}> Produto 01</Text>
        <Text style={styles.produto}> Produto 02</Text>
        <Text style={styles.produto}> Produto 03</Text>
      </View>
</SafeAreaView>
  );
}

const styles= StyleSheet.create({
container:{
  marginTop:50,
  padding: 10,
  backgroundColor: '#008B8B',

},
texto:{
  fontSize:30,
  textAling:'center',
  color:'cyan',
  fontWeight:'bold'
},
imagens:{
  backgroundColor:'#2ab4b4b4',
  borderRadius:10,
  margin:5,
  padding:10,
  flexDirection:'row',
  gap:20,
  justifyContent:'center',
  alingItens:'center'
},
produto:{
  fontSize:15,
  fontFamily:'Times new Roman',
}
});