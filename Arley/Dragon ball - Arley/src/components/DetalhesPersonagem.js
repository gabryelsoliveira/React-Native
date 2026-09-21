import React from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native';

import Transformacao from './transformacao';


export default function DetalhesPersonagem({
    personagem,
    fechar,
}) {

    return (

        <Modal
            animationType="slide"
            transparent={false}
            visible={true}
            onRequestClose={fechar}
        >

            <SafeAreaView style={styles.fundo}>

                <TouchableOpacity
                    style={styles.botaoFecharTopo}
                    activeOpacity={0.7}
                    onPress={fechar}
                >
                    <Text style={styles.botaoFecharTopoTexto}>✕</Text>
                </TouchableOpacity>

                <View style={styles.modal}>

                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scrollContent}
                    >

                        <View style={styles.imagemWrapper}>
                            <Image
                                source={personagem.imagem}
                                style={styles.imagem}
                            />
                        </View>

                        <Text style={styles.nome}>
                            {personagem.nome}
                        </Text>

                        <View style={styles.infoGrid}>

                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>🧬 Raça</Text>
                                <Text style={styles.infoValor}>{personagem.raca}</Text>
                            </View>

                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>⚧ Gênero</Text>
                                <Text style={styles.infoValor}>{personagem.genero}</Text>
                            </View>

                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>🎂 Idade</Text>
                                <Text style={styles.infoValor}>{personagem.idade}</Text>
                            </View>

                            <View style={styles.infoItem}>
                                <Text style={styles.infoLabel}>🌎 Planeta</Text>
                                <Text style={styles.infoValor}>{personagem.planeta}</Text>
                            </View>

                        </View>

                        <View style={styles.divisor} />

                        <Text style={styles.secao}>
                            Características
                        </Text>

                        <Text style={styles.texto}>
                            {personagem.caracteristicas}
                        </Text>


                        <Text style={styles.secao}>
                            Técnicas
                        </Text>

                        <Text style={styles.texto}>
                            {personagem.tecnicas}
                        </Text>


                        <Text style={styles.secao}>
                            ⚡ Transformações
                        </Text>


                        {personagem.transformacoes.map((transformacao) => (

                            <Transformacao
                                key={transformacao.nome}
                                transformacao={transformacao}
                            />

                        ))}


                        <TouchableOpacity
                            style={styles.botao}
                            activeOpacity={0.85}
                            onPress={fechar}
                        >

                            <Text style={styles.textoBotao}>
                                Fechar
                            </Text>

                        </TouchableOpacity>

                    </ScrollView>

                </View>

            </SafeAreaView>

        </Modal>

    );
}


const styles = StyleSheet.create({

    fundo: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },

    botaoFecharTopo: {
        position: 'absolute',
        top: 16,
        right: 16,
        zIndex: 10,
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: 'rgba(0,0,0,0.55)',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2e2e2e',
    },

    botaoFecharTopoTexto: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
        lineHeight: 18,
    },

    modal: {
        flex: 1,
        backgroundColor: '#1c1c1c',
    },

    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },

    imagemWrapper: {
        backgroundColor: '#141414',
        borderRadius: 18,
        overflow: 'hidden',
        marginBottom: 16,
    },

    imagem: {
        width: '100%',
        height: 280,
        resizeMode: 'contain',
    },

    nome: {
        color: '#ff9800',
        fontSize: 30,
        fontWeight: '800',
        textAlign: 'center',
        marginBottom: 18,
        letterSpacing: 0.3,
    },

    infoGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 6,
    },

    infoItem: {
        width: '48%',
        backgroundColor: '#141414',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#2a2a2a',
    },

    infoLabel: {
        color: '#888',
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 3,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },

    infoValor: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },

    divisor: {
        height: 1,
        backgroundColor: '#2e2e2e',
        marginVertical: 14,
    },

    secao: {
        color: '#ff9800',
        fontSize: 20,
        fontWeight: '800',
        marginTop: 18,
        marginBottom: 6,
    },

    texto: {
        color: '#ccc',
        fontSize: 16,
        lineHeight: 24,
    },

    botao: {
        backgroundColor: '#ff9800',
        padding: 15,
        borderRadius: 14,
        marginTop: 26,
        marginBottom: 6,

        shadowColor: '#ff9800',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 5,
    },

    textoBotao: {
        color: '#111',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: '800',
        letterSpacing: 0.3,
    },

});