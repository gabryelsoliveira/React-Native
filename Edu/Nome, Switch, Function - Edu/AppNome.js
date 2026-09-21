import React, { useState } from 'react';
 
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
export default function App() {
    const [nome, setNome] = useState('');
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Digite seu nome
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Digite aqui"
                value={nome}
                onChangeText={setNome}
            />
            <Text style={styles.resultado}>
                Olá, {nome}
            </Text>
        </View>
 
    );
 
}
 
 
const styles = StyleSheet.create({
 
    container: {
 
        flex: 1,
 
        justifyContent: 'center',
 
        padding: 20
 
    },
 
    titulo: {
 
        fontSize: 20,
 
        marginBottom: 10
 
    },
 
    input: {
 
        borderWidth: 1,
 
        borderColor: '#999',
 
        borderRadius: 8,
 
        padding: 12,
 
        fontSize: 18
 
    },
 
    resultado: {
 
        fontSize: 22,
 
        marginTop: 20
 
    }
 
});