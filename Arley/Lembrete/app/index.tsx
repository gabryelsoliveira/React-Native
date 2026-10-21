import { View, Image, StyleSheet, Text } from 'react-native';
import { router } from 'expo-router';
import { Button } from '../components/Button/button';

export default function Welcome() {
  function navigate() {
    router.replace('/list');
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/agenda.png')}
        style={styles.logo}
        resizeMode="cover"
      />

      <Text style={styles.textName}> App Lembrete </Text>


      <Button title="Começar" onPress={navigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF8E1',
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 34,
    marginBottom: 20,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C22',
  },
});