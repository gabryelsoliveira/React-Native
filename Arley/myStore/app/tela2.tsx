import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from 'react';
import { router } from 'expo-router';

export default function Tela2(){

    function handleEntrar(){
            router.push('/telaLampada')
            // mantem histórico de navegação
        }

   // let contador=1000;
   const[contador,setContador]=useState(1000);

    function handleAdicionar(){
     // return contador++;
     setContador(contador + 1);
    }

    return(
        <SafeAreaView style={styles.container}>
           <View>
            <Text>Olá Expo Router - Tela Dois</Text>
            <Text style={styles.texto}>{contador}</Text>
            <Button title="Adicionar" onPress={handleAdicionar}/>
            </View>
            <Button title="Ir para tela 3" onPress={handleEntrar}/>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create ({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20
    },
    texto:{
        fontSize:40,
    },
    
})