import React, { useState } from 'react';
 
import {
    View,
    Text,
    Switch,
    StyleSheet
} from 'react-native';
 
 
export default function App() {
 
    const [notificacoes, setNotificacoes] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Receber notificações
            </Text>
            <Switch
                value={notificacoes}
                onValueChange={setNotificacoes}
            />
            <Text style={styles.status}>
                {notificacoes
                    ? 'Notificações ativadas'
                    : 'Notificações desativadas'}
            </Text>
        </View>
 
    );
 
}
 
 
const styles = StyleSheet.create({
 
    container: {
 
        flex: 1,
 
        justifyContent: 'center',
 
        alignItems: 'center'
 
    },
 
    titulo: {
 
        fontSize: 20,
 
        marginBottom: 20
 
    },
 
    status: {
 
        fontSize: 18,
 
        marginTop: 20
 
    }
 
});