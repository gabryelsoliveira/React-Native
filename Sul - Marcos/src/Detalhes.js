import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
} from 'react-native';

export default class Detalhes extends Component {

  render() {

    const produto = this.props.produto;

    if (!produto) {
      return null;
    }

    return (
      <View style={styles.container}>

        <Image
          source={produto.imagem}
          style={styles.imagem}
        />

        <Text style={styles.nome}>
          {produto.nome}
        </Text>

        <Text style={styles.descricao}>
          {produto.descricao}
        </Text>

        <Text style={styles.origem}>
          Origem: {produto.origem}
        </Text>

        <Text style={styles.preco}>
          {produto.preco}
        </Text>

        <Button
          title="Fechar"
          onPress={this.props.fechar}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'white',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  imagem: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },

  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    color: '#5C3A21',
    textAlign: 'center',
  },

  descricao: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    color: '#555',
  },

  origem: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#8B5A2B',
    textAlign: 'center',
  },

  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    color: '#5C3A21',
  },

});