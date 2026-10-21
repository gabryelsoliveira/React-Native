import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// TELA INÍCIO
function InicioScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Tech Solutions</Text>
            <Text style={styles.subtitulo}>
                Soluções em tecnologia para empresas.
            </Text>

            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Sobre')}>
                <Text style={styles.textoBotao}>SOBRE A EMPRESA</Text>
            </Pressable>

            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Contato')}>
                <Text style={styles.textoBotao}>CONTATO</Text>
            </Pressable>
        </View>
    );
}

// TELA SOBRE
function SobreScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Sobre a Empresa</Text>

            <View style={styles.card}>
                <Text style={styles.nomeEmpresa}>Tech Solutions</Text>
                <Text style={styles.descricao}>
                    Somos uma empresa de tecnologia que desenvolve sistemas,
                    aplicativos e soluções digitais para ajudar empresas a
                    crescer e ganhar eficiência.
                </Text>
                <Text style={styles.descricao}>
                    Nossa missão é transformar ideias em soluções práticas,
                    com qualidade e inovação.
                </Text>
            </View>

            <Pressable
                style={styles.botao}
                onPress={() => navigation.navigate('Contato')}>
                <Text style={styles.textoBotao}>CONTATO</Text>
            </Pressable>

            <Pressable
                style={styles.botaoVoltar}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>VOLTAR</Text>
            </Pressable>
        </View>
    );
}

// TELA CONTATO
function ContatoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Contato</Text>

            <View style={styles.card}>
                <Text style={styles.rotulo}>E-mail</Text>
                <Text style={styles.dado}>contato@techsolutions.com</Text>

                <Text style={styles.rotulo}>Telefone</Text>
                <Text style={styles.dado}>(13) 99999-9999</Text>

                <Text style={styles.rotulo}>Endereço</Text>
                <Text style={styles.dado}>Rua da Tecnologia, 100 - Santos/SP</Text>
            </View>

            <Pressable
                style={styles.botao}
                onPress={() => alert('Mensagem enviada para Tech Solutions!')}>
                <Text style={styles.textoBotao}>ENVIAR MENSAGEM</Text>
            </Pressable>

            <Pressable
                style={styles.botaoVoltar}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>VOLTAR</Text>
            </Pressable>
        </View>
    );
}

// NAVEGAÇÃO
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen
                    name="Inicio"
                    component={InicioScreen}
                    options={{ title: 'Início' }}
                />
                <Stack.Screen
                    name="Sobre"
                    component={SobreScreen}
                    options={{ title: 'Sobre' }}
                />
                <Stack.Screen
                    name="Contato"
                    component={ContatoScreen}
                    options={{ title: 'Contato' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 20,
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    subtitulo: {
        fontSize: 17,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 30
    },
    botao: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
    botaoVoltar: {
        backgroundColor: '#555',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 15
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15
    },
    nomeEmpresa: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 8
    },
    descricao: {
        fontSize: 16,
        color: 'gray',
        lineHeight: 24,
        marginBottom: 10
    },
    rotulo: {
        fontSize: 14,
        color: 'gray',
        marginTop: 10
    },
    dado: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});