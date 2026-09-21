import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

export default function CardPersonagem({ personagem, onPress }) {
    return (
        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.85}
            onPress={onPress}
        >

            <View style={styles.imagemWrapper}>
                <Image
                    source={personagem.imagem}
                    style={styles.imagem}
                />
            </View>

            <View style={styles.info}>

                <Text style={styles.nome}>
                    {personagem.nome}
                </Text>

                <View style={styles.badge}>
                    <Text style={styles.badgeTexto}>
                        🧬 {personagem.raca}
                    </Text>
                </View>

                <Text
                    style={styles.caracteristica}
                    numberOfLines={2}
                >
                    {personagem.caracteristicas}
                </Text>

            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#1c1c1c',
        borderRadius: 20,
        marginBottom: 18,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#2e2e2e',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 10,

        elevation: 6,
    },

    imagemWrapper: {
        backgroundColor: '#141414',
    },

    imagem: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
    },

    info: {
        padding: 16,
    },

    nome: {
        color: '#fff',
        fontSize: 24,
        fontWeight: '800',
        letterSpacing: 0.3,
    },

    badge: {
        alignSelf: 'flex-start',
        backgroundColor: 'rgba(255, 152, 0, 0.15)',
        borderWidth: 1,
        borderColor: '#ff9800',
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 4,
        marginTop: 8,
        marginBottom: 10,
    },

    badgeTexto: {
        color: '#ff9800',
        fontSize: 13,
        fontWeight: '600',
    },

    caracteristica: {
        color: '#aaa',
        fontSize: 14,
        lineHeight: 20,
    },

});
