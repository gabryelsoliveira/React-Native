import React from 'react';
import {
    View, Text, Pressable, StyleSheet
} from "react-native";
import {
    NavigationContainer
} from '@react-navigation/native';
import {
    createNativeStackNavigator
} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function InicioScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Meus produtos
            </Text>
            <Text style={styles.subtitulo}>
                Encontre os melhores produtos para você.
            </Text>
            <Pressable style={styles.botao}
                onPress={() => navigation.navigate('Produtos')}>
                <Text style={styles.textoBotao}>
                    VER PRODUTOS
                </Text>
            </Pressable>

        </View>

    );
}

//TELA DE PRODUTOS

function ProdutoScreen({ navigation }) {
    const produtos = [
        {
            id: 1,
            nome: 'Notebook',
            preco: 3500
        },
        {
            id: 2,
            nome: 'Smartphone',
            preco: 200
        },
        {
            id: 3,
            nome: 'tablet',
            preco: 1500
        }
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Produtos
            </Text>
            {produtos.map((produto) => (
                <View
                    key={produto.id}
                    style={styles.card}>
                    <Text style={styles.nomeProduto}>
                        {produto.nome}
                    </Text>
                    <Text style={styles.preco}>
                        {produto.preco.toFixed(2)}
                    </Text>
                    <Pressable
                        style={styles.botao}
                        onPress={() =>
                            navigation.navigate('Detalhes',
                                { produto: produto }
                            )
                        }>
                        <Text style={styles.textoBotao}>
                            VER DETALHES
                        </Text>
                    </Pressable>
                </View>
            ))}
            <Pressable
                style={styles.botaoVoltar}
                onPress={() => navigation.goBack()}>
                <Text style={styles.textoBotao}>
                    VOLTAR
                </Text>
            </Pressable>

        </View>
    );

}
//TELA DETALHES

function DetalhesScreen({ route, navigation }) {
    const { produto } = route.params;
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Detalhes do Produto
            </Text>
            <View style={styles.cardDetalhe}>
                <Text style={styles.nomeProduto}>
                    {produto.nome}
                </Text>
                <Text style={styles.preco}>
                    {produto.preco.toFixed(2)}
                </Text>
                <Text style={styles.descricao}>
                    Este produto está disponível para compra.
                </Text>
                <Pressable
                    style={() => {
                        alert('Produto selecionado: ' +
                            produto.nome);
                    }}>
                    <Text style={styles.textoBotao}>
                        COMPRAR
                    </Text>
                </Pressable>
                <Pressable
                    style={styles.botaoVoltar}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.textoBotao}>
                        VOLTAR
                    </Text>
                </Pressable>


            </View>
        </View>
    );
}
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name="Inicio" component={InicioScreen} options={{ title: 'Início' }} />
                <Stack.Screen name="Produtos" component={ProdutoScreen} options={{ title: 'Produtos' }} />
                <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// ==================================================
// ESTILOS
// ==================================================

// StyleSheet.create() cria o objeto
// que armazenará todos os estilos.
//
// Os estilos ficam separados da estrutura
// dos componentes.
const styles = StyleSheet.create({

    // Estilo do container principal.
    container: {

        // Ocupa todo o espaço disponível.
        flex: 1,

        // Define a cor de fundo.
        backgroundColor: '#f2f2f2',

        // Espaçamento interno.
        padding: 20,

        // Centraliza os elementos verticalmente.
        justifyContent: 'center'
    },


    // Estilo do título.
    titulo: {

        // Tamanho da fonte.
        fontSize: 30,

        // Texto em negrito.
        fontWeight: 'bold',

        // Centraliza o texto.
        textAlign: 'center',

        // Espaço abaixo do título.
        marginBottom: 10
    },


    // Estilo do subtítulo.
    subtitulo: {

        // Tamanho da fonte.
        fontSize: 17,

        // Cor do texto.
        color: 'gray',

        // Centraliza o texto.
        textAlign: 'center',

        // Espaço abaixo do subtítulo.
        marginBottom: 30
    },


    // Estilo dos botões principais.
    botao: {

        // Cor de fundo.
        backgroundColor: '#007AFF',

        // Espaçamento interno.
        padding: 15,

        // Arredonda os cantos.
        borderRadius: 8,

        // Centraliza o conteúdo.
        alignItems: 'center',

        // Espaço acima do botão.
        marginTop: 10
    },


    // Estilo do botão voltar.
    botaoVoltar: {

        // Cor de fundo.
        backgroundColor: '#555',

        // Espaçamento interno.
        padding: 15,

        // Arredonda os cantos.
        borderRadius: 8,

        // Centraliza o conteúdo.
        alignItems: 'center',

        // Espaço acima do botão.
        marginTop: 15
    },


    // Estilo do texto dos botões.
    textoBotao: {

        // Cor branca.
        color: 'white',

        // Tamanho da fonte.
        fontSize: 16,

        // Texto em negrito.
        fontWeight: 'bold'
    },


    // Estilo dos cards dos produtos.
    card: {

        // Fundo branco.
        backgroundColor: 'white',

        // Espaçamento interno.
        padding: 20,

        // Arredonda os cantos.
        borderRadius: 10,

        // Espaço entre os cards.
        marginBottom: 15
    },


    // Estilo do card de detalhes.
    cardDetalhes: {

        // Fundo branco.
        backgroundColor: 'white',

        // Espaçamento interno.
        padding: 25,

        // Arredonda os cantos.
        borderRadius: 10,

        // Espaço abaixo do card.
        marginBottom: 20
    },


    // Estilo do nome do produto.
    nomeProduto: {

        // Tamanho da fonte.
        fontSize: 22,

        // Texto em negrito.
        fontWeight: 'bold',

        // Espaço abaixo do nome.
        marginBottom: 8
    },


    // Estilo do preço.
    preco: {

        // Tamanho da fonte.
        fontSize: 20,

        // Cor azul.
        color: '#007AFF',

        // Texto em negrito.
        fontWeight: 'bold',

        // Espaço abaixo do preço.
        marginBottom: 10
    },


    // Estilo da descrição.
    descricao: {

        // Tamanho da fonte.
        fontSize: 16,
        
        // Cor cinza.
        color: 'gray',

        // Altura de cada linha.
        lineHeight: 24
    }

});