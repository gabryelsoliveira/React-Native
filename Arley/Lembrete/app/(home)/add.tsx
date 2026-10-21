import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Add() {
   
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Novo lembrete</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Título</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Pagar conta de luz"
                    placeholderTextColor="#9E9680"
                />

                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={[styles.input, styles.inputGrande]}
                    placeholder="Escreva os detalhes do lembrete"
                    placeholderTextColor="#9E9680"
                />

                <Pressable
                    style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
                >
                    <Text style={styles.botaoTexto}>Salvar</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8E1',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1C1C22',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#FFFDF5',
        padding: 18,
        borderRadius: 16,
        borderLeftWidth: 6,
        borderLeftColor: '#FFB300',
        shadowColor: '#B8860B',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 3,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#6D4C00',
        marginBottom: 6,
    },
    input: {
        backgroundColor: '#FFF8E1',
        borderWidth: 1,
        borderColor: '#FFE082',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        color: '#1C1C22',
        marginBottom: 16,
    },
    inputGrande: {
        height: 110,
        textAlignVertical: 'top',
    },
    botao: {
        backgroundColor: '#FFB300',
        padding: 14,
        borderRadius: 12,
        alignItems: 'center',
    },
    botaoPressionado: {
        backgroundColor: '#F9A825',
    },
    botaoTexto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1C1C22',
    },
});