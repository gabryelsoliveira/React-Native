import React from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';


export default function Transformacao({
    transformacao,
}) {

    return (

        <View style={styles.card}>

            <View style={styles.imagemWrapper}>
                <Image
                    source={transformacao.imagem}
                    style={styles.imagem}
                />
            </View>

            <View style={styles.info}>

                <Text style={styles.nome}>
                    {transformacao.nome}
                </Text>

                <Text style={styles.descricao}>
                    {transformacao.descricao}
                </Text>

            </View>

        </View>

    );
}


const styles = StyleSheet.create({

    card: {
        backgroundColor: '#1c1c1c',
        borderRadius: 16,
        marginTop: 14,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#2e2e2e',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 4,
    },

    imagemWrapper: {
        backgroundColor: '#141414',
    },

    imagem: {
        width: '100%',
        height: 180,
        resizeMode: 'contain',
    },

    info: {
        padding: 14,
        borderTopWidth: 1,
        borderTopColor: '#2a2a2a',
    },

    nome: {
        color: '#ff9800',
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 5,
        letterSpacing: 0.2,
    },

    descricao: {
        color: '#bbb',
        fontSize: 14,
        lineHeight: 20,
    },

});