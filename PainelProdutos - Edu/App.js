import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

const cursos = [
  {
    nome: 'HTML e CSS',
    professor: 'João César',
    aulas: '45 Aulas',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sJ78Wop4unoWJiq0i7HWL3d8RJw6oEd7Dg1TX1Q1DQ&s=10',
  },
  {
    nome: 'Especialista em Excel',
    professor: 'Vanessa',
    aulas: '25 Aulas',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6_0j_E5bNejqalVPBacOrfrMb-sCrAUyzqamoIgiyw&s=10',
  },
  {
    nome: 'Profissional em JavaScript',
    professor: 'Fábio Cunha',
    aulas: '40 Aulas',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYnXXiHH0QR-XW1BOU23p_0MdXLPZxF-MebdDg8JO-g&s=10',
  },
  {
    nome: 'React e React Native',
    professor: 'Juan Mota',
    aulas: '50 Aulas',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaGj1qhItTfhzonrhzNmWMZNW90iexoA5U3qGN6nm7Q&s=10',
  },
  {
    nome: 'Banco de Dados',
    professor: 'Henry Gonçalves',
    aulas: '35 Aulas',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26ltSlJF9w5o7Wi5_YnlptbwaG5lDGGPXCqDyaT0U2g&s=10',
  },
  {
    nome: 'Técnico em Software',
    professor: 'Marcos Assunção',
    aulas: '60 Aulas',
    imagem:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJNGBVpwcHkqELsQD8ie-ZxL2bZ1cHrP8p2xadKOKCA&s=10',
  },
];

const categorias = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Banco de Dados',
];

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.header}>
        <Text style={styles.logo}>DevCursos</Text>
        <Text style={styles.oferta}>Ofertas do dia</Text>
      </View>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZQpAwnOx2zt0HDkcsZFGVj-hRR9C369Q43zyvWjxoQ&s=10',
        }}
        style={styles.banner}
      />

      <Text style={styles.titulo}>Categorias</Text>

      <View style={styles.categorias}>
        {categorias.map((categoria, index) => (
          <View style={styles.categoria} key={index}>
            <Text>{categoria}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.titulo}>Cursos</Text>

      <View style={styles.produtos}>
        {cursos.map((curso, index) => (
          <View style={styles.card} key={index}>

            <Image
              source={{ uri: curso.imagem }}
              style={styles.produtoImagem}
            />

            <Text style={styles.produtoNome}>
              {curso.nome}
            </Text>

            <Text style={styles.info}>
              Professor(a): {curso.professor}
            </Text>

            <Text style={styles.info}>
              {curso.aulas}
            </Text>

          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 20,
    backgroundColor: '#f5f5f5',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4f46e5',
  },

  oferta: {
    fontSize: 14,
    color: '#555',
  },

  banner: {
    width: '100%',
    height: 160,
    borderRadius: 12,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  categoria: {
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  produtos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },

  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },

  produtoImagem: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },

  produtoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },

  info: {
    fontSize: 13,
    color: '#555',
    marginTop: 5,
  },
});