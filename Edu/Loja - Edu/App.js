import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    Switch,
    StyleSheet,
    ScrollView
} from 'react-native';
export default function App() {

    const [pesquisa, setPesquisa] = useState('');
    const [somenteDisponiveis, setSomenteDisponiveis] =
        useState(false);
    const [carrinho, setCarrinho] = useState([]);

    const produtos = [
        {
            id: 1,
            nome: 'Notebook',
            preco: 3500,
            disponivel: true
        },
        {
            id: 2,
            nome: 'Mouse',
            preco: 80,
            disponivel: true
        },
        {
            id: 3,
            nome: 'Teclado',
            preco: 150,
            disponivel: false
        },
        {
            id: 4,
            nome: 'Monitor',
            preco: 1200,
            disponivel: true
        }
    ];

    function adicionarCarrinho(produto) {
        // Verifica se o produto já está no carrinho
        const itemExistente = carrinho.find(
            (item) => item.produto.id === produto.id
        );

        if (itemExistente) {
            // Se já existe, apenas aumenta a quantidade em 1
            setCarrinho(
                carrinho.map((item) =>
                    item.produto.id === produto.id
                        ? { ...item, quantidade: item.quantidade + 1 }
                        : item
                )
            );
        } else {
            // Se não existe, adiciona um novo item com quantidade 1
            setCarrinho([
                ...carrinho,
                { produto: produto, quantidade: 1 }
            ]);
        }
    }

    function aumentarQuantidade(idProduto) {
        setCarrinho(
            carrinho.map((item) =>
                item.produto.id === idProduto
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            )
        );
    }

    function diminuirQuantidade(idProduto) {
        setCarrinho(
            carrinho.map((item) =>
                item.produto.id === idProduto
                    ? {
                        ...item,
                        // A quantidade nunca pode ficar menor que 1
                        quantidade: Math.max(1, item.quantidade - 1)
                    }
                    : item
            )
        );
    }

    function finalizarCompra() {
        if (carrinho.length === 0) {
            alert('O carrinho está vazio.');
            return;
        }
        alert('Compra realizada com sucesso!');
        setCarrinho([]);
    }

    const produtosFiltrados = produtos.filter((produto) => {
        const correspondePesquisa =
            produto.nome
                .toLowerCase()
                .includes(pesquisa.toLowerCase());

        const correspondeDisponibilidade =
            !somenteDisponiveis ||
            produto.disponivel;
        return correspondePesquisa &&
            correspondeDisponibilidade;
    });

    const total = carrinho.reduce(
        (soma, item) => soma + item.produto.preco * item.quantidade,
        0
    );

    const quantidadeItens = carrinho.reduce(
        (soma, item) => soma + item.quantidade,
        0
    );

    return (
        <ScrollView
            contentContainerStyle={styles.container}
        >
            <Text style={styles.titulo}>
                Minha Loja
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Pesquisar produto"
                value={pesquisa}
                onChangeText={setPesquisa}
            />
            <View style={styles.filtro}>
                <Text style={styles.textoFiltro}>
                    Somente disponíveis
                </Text>
                <Switch
                    value={somenteDisponiveis}
                    onValueChange={setSomenteDisponiveis}
                />
            </View>
            <Text style={styles.subtitulo}>
                Produtos
            </Text>
            {produtosFiltrados.length === 0 ? (
                <Text style={styles.mensagem}>
                    Nenhum produto encontrado.
                </Text>
            ) : (
                produtosFiltrados.map((produto) => (
                    <View
                        key={produto.id}
                        style={styles.produto}
                    >
                        <Text style={styles.nomeProduto}>
                            {produto.nome}
                        </Text>
                        <Text style={styles.preco}>
                            R$ {produto.preco.toFixed(2)}
                        </Text>
                        <Text style={styles.status}>
                            {produto.disponivel
                                ? 'Disponível'
                                : 'Indisponível'}
                        </Text>
                        <Button
                            title="Adicionar"
                            onPress={() =>
                                adicionarCarrinho(produto)
                            }
                            disabled={!produto.disponivel}
                        />
                    </View>
                ))
            )}

            <Text style={styles.subtitulo}>
                Carrinho
            </Text>

            {carrinho.length === 0 ? (
                <Text style={styles.mensagem}>
                    O carrinho está vazio.
                </Text>
            ) : (
                carrinho.map((item) => (
                    <View
                        key={item.produto.id}
                        style={styles.itemCarrinho}
                    >
                        <Text style={styles.nomeProduto}>
                            {item.produto.nome}
                        </Text>
                        <Text style={styles.preco}>
                            R$ {item.produto.preco.toFixed(2)}
                        </Text>
                        <Text style={styles.quantidadeTexto}>
                            Quantidade: {item.quantidade}
                        </Text>
                        <View style={styles.botoesQuantidade}>
                        <Button
                            title="-"
                            onPress={() =>
                                diminuirQuantidade(item.produto.id)
                            }
                        />
                            <Button
                                title="+"
                                onPress={() =>
                                    aumentarQuantidade(item.produto.id)
                                }
                            />
                        </View>
                        <Text style={styles.subtotal}>
                            Subtotal: R${' '}
                            {(item.produto.preco * item.quantidade).toFixed(2)}
                        </Text>
                    </View>
                ))
            )}

            <View style={styles.carrinho}>
                <Text style={styles.carrinhoTitulo}>
                    Carrinho: {quantidadeItens} itens
                </Text>
                <Text style={styles.total}>
                    Total: R$ {total.toFixed(2)}
                </Text>
                <Button
                    title="Finalizar compra"
                    onPress={finalizarCompra}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#f2f2f2',
        flexGrow: 1
    },

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 25
    },

    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 15
    },

    filtro: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20
    },

    textoFiltro: {
        fontSize: 16
    },

    subtitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },

    produto: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15
    },

    nomeProduto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },

    preco: {
        fontSize: 18,
        marginBottom: 5
    },

    status: {
        marginBottom: 10
    },

    mensagem: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 16
    },

    itemCarrinho: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15
    },

    quantidadeTexto: {
        fontSize: 16,
        marginBottom: 10
    },

    botoesQuantidade: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },

    subtotal: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    carrinho: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 30
    },

    carrinhoTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    total: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15
    }
});