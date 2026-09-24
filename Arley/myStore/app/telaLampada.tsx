import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useState } from "react";

export default function telaLampada() {

    const [imagem, setImagem] = useState(1);
    function Interruptor() {
        if (imagem === 1) {
            setImagem(2);
        } else {
            setImagem(1);
        }
    }

    return (
        <SafeAreaView style={styles.container}>

            <View>

                {imagem === 1 ? (
                    <Image
                        source={require('../assets/apagada.jpg')}
                        style={styles.imagem}
                    />
                ) : (
                    <Image
                        source={require('../assets/acesa.jpg')}
                        style={styles.imagem}
                    />
                )}

                <Button
                  title={imagem === 1 ? "Acender" : "Apagar"}
                    onPress={Interruptor}
                />

            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    imagem: {
        width: 500,
        height: 600,
        marginBottom: 20
    }
});