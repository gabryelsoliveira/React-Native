import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal
} from 'react-native';

import Detalhes from './src/Detalhes';

const produtos = [
  {
    id: '1',
    nome: 'Cerveja Capivara',
    preco: 'R$ 12,00',
    descricao: 'Cerveja artesanal produzida com ingredientes selecionados.',
    origem: 'Santa Catarina',
    imagem: require('./assets/cervejaCapivara.jpg'),
  },
  {
    id: '2',
    nome: 'Doce de Abóbora',
    preco: 'R$ 18,00',
    descricao: 'Doce tradicional feito com abóbora e açúcar.',
    origem: 'Rio Grande do Sul',
    imagem: require('./assets/doceDeAbobora.jpg'),
  },
  {
    id: '3',
    nome: 'Eisbein',
    preco: 'R$ 30,00',
    descricao: 'Prato de origem alemã feito com joelho de porco.',
    origem: 'Santa Catarina',
    imagem: require('./assets/eisbein.jpg'),
  },
  {
    id: '4',
    nome: 'Chimarrão',
    preco: 'R$ 25,00',
    descricao: 'Bebida tradicional preparada com erva-mate.',
    origem: 'Rio Grande do Sul',
    imagem: require('./assets/ervaMate.jpg'),
  },
  {
    id: '5',
    nome: 'Galeto',
    preco: 'R$ 12,00',
    descricao: 'Frango assado tradicional da culinária do Sul.',
    origem: 'Rio Grande do Sul',
    imagem: require('./assets/galeto.jpg'),
  },
  {
    id: '6',
    nome: 'Pinhão',
    preco: 'R$ 15,00',
    descricao: 'Semente da araucária muito consumida no inverno.',
    origem: 'Paraná e Santa Catarina',
    imagem: require('./assets/pinhao.jpg'),
  },
  {
    id: '7',
    nome: 'Polenta',
    preco: 'R$ 28,00',
    descricao: 'Prato feito à base de farinha de milho.',
    origem: 'Rio Grande do Sul',
    imagem: require('./assets/polenta.jpg'),
  },
  {
    id: '8',
    nome: 'Queijo Serrano',
    preco: 'R$ 12,00',
    descricao: 'Queijo artesanal tradicional das regiões serranas.',
    origem: 'Rio Grande do Sul e Santa Catarina',
    imagem: require('./assets/queijoSerrano.png'),
  },
  {
    id: '9',
    nome: 'Sopa Capeletti',
    preco: 'R$ 12,00',
    descricao: 'Sopa preparada com massa recheada de origem italiana.',
    origem: 'Rio Grande do Sul',
    imagem: require('./assets/sopaCapeletti.jpg'),
  },
  {
    id: '10',
    nome: 'Strudel',
    preco: 'R$ 12,00',
    descricao: 'Sobremesa feita com massa fina e recheio de frutas.',
    origem: 'Santa Catarina',
    imagem: require('./assets/strudel.jpg'),
  },
];

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      produtoSelecionado: null
    };

    this.abrir = this.abrir.bind(this);
    this.fechar = this.fechar.bind(this);
  }

  abrir(produto) {
    this.setState({
      modalVisible: true,
      produtoSelecionado: produto
    });
  }

  fechar(visible) {
    this.setState({
      modalVisible: visible
    });
  }

  mostrarProduto({ item }) {
    return (
      <View style={styles.card}>

        <Image
          source={item.imagem}
          style={styles.imagem}
        />

        <Text style={styles.nome}>
          {item.nome}
        </Text>

        <Text style={styles.preco}>
          {item.preco}
        </Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => this.abrir(item)}
        >
          <Text style={styles.textoBotao}>
            Detalhes
          </Text>
        </TouchableOpacity>

      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cabecalho}>

          <Text style={styles.titulo}>
            🧉 Sabores do Sul
          </Text>

          <Text style={styles.subtitulo}>
            Produtos tradicionais da Região Sul
          </Text>

        </View>

        <FlatList
          data={produtos}
          renderItem={this.mostrarProduto.bind(this)}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.lista}
        />

        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.modalVisible}
        >

          <View style={styles.fundoModal}>

            <Detalhes
              produto={this.state.produtoSelecionado}
              fechar={() => this.fechar(false)}
            />

          </View>

        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5E6D3',
  },

  cabecalho: {
    backgroundColor: '#5C3A21',
    alignItems: 'center',
    padding: 30,
    paddingTop: 43,
    paddingBottom:30
  },

  titulo: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },

  subtitulo: {
    color: '#F5E6D3',
    fontSize: 14,
    marginTop: 5,
  },

  lista: {
    padding: 10,
  },

  card: {
    backgroundColor: 'white',
    flex: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  imagem: {
    width: 120,
    height: 100,
    borderRadius: 8,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },

  preco: {
    marginTop: 5,
    color: '#5C3A21',
    fontWeight: 'bold',
  },

  botao: {
    backgroundColor: '#8B5A2B',
    padding: 8,
    marginTop: 10,
    borderRadius: 6,
  },

  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },

  fundoModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});