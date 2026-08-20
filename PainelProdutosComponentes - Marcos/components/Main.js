import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Main() {
  return (
    <View>

      <Image
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZQpAwnOx2zt0HDkcsZFGVj-hRR9C369Q43zyvWjxoQ&s=10',
        }}
        style={styles.banner}
      />

      <Text style={styles.titulo}>Categorias</Text>

      <View style={styles.categorias}>
        <View style={styles.categoria}>
          <Text>HTML</Text>
        </View>

        <View style={styles.categoria}>
          <Text>CSS</Text>
        </View>

        <View style={styles.categoria}>
          <Text>JavaScript</Text>
        </View>

        <View style={styles.categoria}>
          <Text>React</Text>
        </View>

        <View style={styles.categoria}>
          <Text>Banco de Dados</Text>
        </View>
      </View>

      <Text style={styles.titulo}>Cursos</Text>

      <View style={styles.cursos}>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sJ78Wop4unoWJiq0i7HWL3d8RJw6oEd7Dg1TX1Q1DQ&s=10',
            }}
            style={styles.imagem}
          />
          <Text style={styles.nome}>HTML e CSS</Text>
          <Text>Professor: João César</Text>
          <Text>45 Aulas</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi6_0j_E5bNejqalVPBacOrfrMb-sCrAUyzqamoIgiyw&s=10',
            }}
            style={styles.imagem}
          />
          <Text style={styles.nome}>Especialista em Excel</Text>
          <Text>Professor: Vanessa</Text>
          <Text>25 Aulas</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfYnXXiHH0QR-XW1BOU23p_0MdXLPZxF-MebdDg8JO-g&s=10',
            }}
            style={styles.imagem}
          />
          <Text style={styles.nome}>Profissional em JavaScript</Text>
          <Text>Professor: Fábio Cunha</Text>
          <Text>40 Aulas</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNaGj1qhItTfhzonrhzNmWMZNW90iexoA5U3qGN6nm7Q&s=10',
            }}
            style={styles.imagem}
          />
          <Text style={styles.nome}>React e React Native</Text>
          <Text>Professor: Juan Mota</Text>
          <Text>50 Aulas</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26ltSlJF9w5o7Wi5_YnlptbwaG5lDGGPXCqDyaT0U2g&s=10',
            }}
            style={styles.imagem}
          />
          <Text style={styles.nome}>Banco de Dados</Text>
          <Text>Professor: Henry Gonçalves</Text>
          <Text>35 Aulas</Text>
        </View>

        <View style={styles.card}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJNGBVpwcHkqELsQD8ie-ZxL2bZ1cHrP8p2xadKOKCA&s=10',
            }}
            style={styles.imagem}
          />
          <Text style={styles.nome}>Técnico em Software</Text>
          <Text>Professor: Marcos Assunção</Text>
          <Text>60 Aulas</Text>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },

  categorias: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  categoria: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },

  cursos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },

  card: {
    width: '48%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },

  imagem: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },

  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
});