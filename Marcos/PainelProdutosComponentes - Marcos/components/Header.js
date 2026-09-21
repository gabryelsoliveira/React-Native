import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>DevCursos</Text>
      <Text style={styles.oferta}>Ofertas do dia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});