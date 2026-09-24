import { View, Text, StyleSheet } from "react-native";

export default function Config(){
    return(
        <View style={styles.container}>
            <Text>Sou a Config</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        gap:20,
    },
});

