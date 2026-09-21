import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.texto}>
        © 2026 DevCursos
      </Text>

      <Text style={styles.subtexto}>
        Aprenda programação de forma simples.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    marginTop: 30,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4f46e5',
  },

  subtexto: {
    marginTop: 5,
    color: '#555',
  },
});