import { StyleSheet, Text, TextInput, View, Alert, Switch } from 'react-native';
import { useState } from 'react';
import { router } from 'expo-router';
import { criarLembrete } from '../../services/lembrete';
import { Lembrete } from '../../types/lembrete';
import { Button } from '../../components/Button/button';

export default function Add() {

    const [titulo, setTitulo] = useState<string>('');
    const [corpo, setCorpo] = useState<string>('');
    const [status, setStatus] = useState<boolean>(false);

    async function handleLembreteAdd() {
        console.log(titulo + "  " + corpo + "  " + status);
        try {
            const novoLembrete: Omit<Lembrete, 'LembreteId'> = {
                "TituloLembrete": titulo,
                "CorpoLembrete": corpo,
                "StatusLembrete": status
            };
            await criarLembrete(novoLembrete);
            Alert.alert('Sucesso', 'Lembrete criado com sucesso!');
            router.replace('/(home)/list');
        } catch (error) {
            console.log(error);
            Alert.alert('Erro', 'Falha ao criar lembrete.');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Novo lembrete</Text>

            <View style={styles.card}>
                <Text style={styles.label}>Título</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex: Pagar conta de luz"
                    placeholderTextColor="#9E9680"
                    value={titulo}
                    onChangeText={setTitulo}
                />

                <Text style={styles.label}>Descrição</Text>
                <TextInput
                    style={[styles.input, styles.inputGrande]}
                    placeholder="Escreva os detalhes do lembrete"
                    placeholderTextColor="#9E9680"
                    value={corpo}
                    onChangeText={setCorpo}
                    multiline
                />

                <View style={styles.switchRow}>
                    <Text style={styles.label}>
                        {status ? 'Concluído' : 'Não concluído'}
                    </Text>
                    <Switch
                        value={status}
                        onValueChange={setStatus}
                        trackColor={{ false: '#E0D8B8', true: '#FFD54F' }}
                        thumbColor={status ? '#FFB300' : '#F5F0DC'}
                    />
                </View>

                <Button
                    title="Adicionar lembrete"
                    onPress={handleLembreteAdd}
                />
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
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
});