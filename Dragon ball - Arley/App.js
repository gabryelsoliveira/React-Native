import React, { useState } from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
} from 'react-native';

import personagens from './src/dados/personagens';

import CardPersonagem from './src/components/CardPersonagem';

import DetalhesPersonagem from './src/components/DetalhesPersonagem';


export default function App() {

    const [personagemSelecionado, setPersonagemSelecionado] =
        useState(null);


    return (

        <View style={styles.container}>

            <Text style={styles.titulo}>
                🐉 Dragon Ball
            </Text>

            <Text style={styles.subtitulo}>
                Personagens
            </Text>


            <ScrollView>

                {personagens.map((personagem) => (

                    <CardPersonagem
                        key={personagem.id}
                        personagem={personagem}
                        onPress={() =>
                            setPersonagemSelecionado(personagem)
                        }
                    />

                ))}

            </ScrollView>


            {personagemSelecionado && (

                <DetalhesPersonagem
                    personagem={personagemSelecionado}
                    fechar={() =>
                        setPersonagemSelecionado(null)
                    }
                />

            )}

        </View>

    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#111',
        padding: 15,
    },

    titulo: {
        color: '#ff9800',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },

    subtitulo: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
    },

});