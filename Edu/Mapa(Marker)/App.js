import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const locais = [
    {
        id: 1, titulo: 'Praia do Gonzaga', descricao: 'Praia',
        latitude: -23.9711, longitude: -46.3316
    },
    {
        id: 2, titulo: 'Jardim da Orla', descricao: 'Maior jardim frontal de praia do mundo',
        latitude: -23.9689, longitude: -46.3266
    },
    {
        id: 3, titulo: 'Aquário Municipal de Santos', descricao: 'Aquário',
        latitude: -23.9807, longitude: -46.3123
    },
    {
        id: 4, titulo: 'Museu do Café', descricao: 'Museu na antiga Bolsa Oficial do Café',
        latitude: -23.9354, longitude: -46.3282
    },
    {
        id: 5, titulo: 'Museu Pelé', descricao: 'Museu',
        latitude: -23.9343, longitude: -46.3277
    },
    {
        id: 6, titulo: 'Estádio Urbano Caldeira (Vila Belmiro)', descricao: 'Estádio do Santos FC',
        latitude: -23.9513, longitude: -46.3379
    },
    {
        id: 7, titulo: 'Morro de Monte Serrat', descricao: 'Ponto turístico com bondinho e mirante',
        latitude: -23.9350, longitude: -46.3245
    },
    {
        id: 8, titulo: 'Teatro Coliseu', descricao: 'Teatro histórico',
        latitude: -23.9370, longitude: -46.3270
    },
    {
        id: 9, titulo: 'Mercado Municipal de Santos', descricao: 'Restaurantes e comércio local',
        latitude: -23.9350, longitude: -46.3305
    },
    {
        id: 10, titulo: 'Orquidário Municipal', descricao: 'Parque',
        latitude: -23.9683, longitude: -46.3283
    },
    {
        id: 11, titulo: 'Emissário Submarino', descricao: 'Praça e ponto de encontro na orla',
        latitude: -23.9720, longitude: -46.3340
    },
];

const regiaoInicial = {
    latitude: -23.9530,
    longitude: -46.3250,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
};

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titulo}>📍 Turismo na Minha Cidade</Text>
                <Text style={styles.subtitulo}>Santos – SP</Text>
            </View>

            <MapView style={styles.map} initialRegion={regiaoInicial}>
                {locais.map((local) => (
                    <Marker
                        key={local.id}
                        coordinate={{ latitude: local.latitude, longitude: local.longitude }}
                        title={local.titulo}
                        description={local.descricao}
                    />
                ))}
            </MapView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 12,
        backgroundColor: '#0077b6',
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitulo: {
        fontSize: 14,
        color: '#caf0f8',
    },
    map: {
        flex: 1,
        width: '100%',
    },
});