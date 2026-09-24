import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    SafeAreaView,
    Alert,
    StatusBar,
} from "react-native";

export default function App() {
    const [data, setData] = useState("");
    const [quilometragem, setQuilometragem] = useState("");
    const [valor, setValor] = useState("");

    const [abastecimentos, setAbastecimentos] = useState([]);

    function cadastrarAbastecimento() {
        // Verifica se todos os campos foram preenchidos
        if (!data || !quilometragem || !valor) {
            Alert.alert(
                "Campos obrigatórios",
                "Preencha a data, a quilometragem e o valor."
            );
            return;
        }

        // Converte os valores para número
        const km = Number(quilometragem.replace(/\./g, "").replace(",", "."));
        const valorNumerico = Number(valor.replace(/\./g, "").replace(",", "."));

        // Validação da quilometragem
        if (isNaN(km) || km <= 0) {
            Alert.alert("Quilometragem inválida", "Informe uma quilometragem maior que zero.");
            return;
        }

        // Validação do valor
        if (isNaN(valorNumerico) || valorNumerico <= 0) {
            Alert.alert("Valor inválido", "Informe um valor maior que zero.");
            return;
        }

        // Cria um novo abastecimento
        const novoAbastecimento = {
            id: Date.now().toString(),
            data: data,
            quilometragem: km,
            valor: valorNumerico,
        };

        setAbastecimentos((listaAtual) => [novoAbastecimento, ...listaAtual]);

        setData("");
        setQuilometragem("");
        setValor("");

        Alert.alert("Sucesso!", "Abastecimento cadastrado com sucesso.");
    }

    const totalGasto = abastecimentos.reduce(
        (total, abastecimento) => total + abastecimento.valor,
        0
    );

    function formatarMoeda(numero) {
        return numero.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });
    }

    function formatarKm(numero) {
        return numero.toLocaleString("pt-BR");
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.icone}>🚗</Text>
                <View>
                    <Text style={styles.tituloHeader}>Controle do Carro</Text>
                    <Text style={styles.subtituloHeader}>Registre seus abastecimentos</Text>
                </View>
            </View>

            {/* Formulário */}
            <View style={styles.formulario}>
                <Text style={styles.label}>Data do abastecimento</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Ex.: 18/09/2026"
                    placeholderTextColor="#64748b"
                    value={data}
                    onChangeText={setData}
                />

                <Text style={styles.label}>Quilometragem</Text>
                <View style={styles.inputComUnidade}>
                    <TextInput
                        style={styles.inputUnidade}
                        placeholder="Ex.: 52.350"
                        placeholderTextColor="#64748b"
                        keyboardType="numeric"
                        value={quilometragem}
                        onChangeText={setQuilometragem}
                    />
                    <Text style={styles.unidade}>km</Text>
                </View>

                <Text style={styles.label}>Valor pago</Text>
                <View style={styles.inputComUnidade}>
                    <TextInput
                        style={styles.inputUnidade}
                        placeholder="Ex.: 250,00"
                        placeholderTextColor="#64748b"
                        keyboardType="numeric"
                        value={valor}
                        onChangeText={setValor}
                    />
                    <Text style={styles.unidade}>R$</Text>
                </View>

                <TouchableOpacity style={styles.botao} onPress={cadastrarAbastecimento} activeOpacity={0.85}>
                    <Text style={styles.textoBotao}>CADASTRAR ABASTECIMENTO</Text>
                </TouchableOpacity>
            </View>

            {/* Histórico */}
            <Text style={styles.tituloHistorico}>Histórico de abastecimentos</Text>

            <FlatList
                data={abastecimentos}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                    <Text style={styles.listaVazia}>Nenhum abastecimento cadastrado.</Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Text style={styles.data}>{item.data}</Text>
                        <Text style={styles.info}>Quilometragem: {formatarKm(item.quilometragem)} km</Text>
                        <Text style={styles.valor}>{formatarMoeda(item.valor)}</Text>
                    </View>
                )}
            />

            {/* Resumo */}
            <View style={styles.resumo}>
                <Text style={styles.textoResumo}>TOTAL GASTO COM COMBUSTÍVEL</Text>
                <Text style={styles.total}>{formatarMoeda(totalGasto)}</Text>
                <Text style={styles.quantidade}>
                    {abastecimentos.length} abastecimento{abastecimentos.length !== 1 ? "s" : ""}
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0f172a",
        paddingHorizontal: 18,
    },

    header: {
        backgroundColor: "#1e293b",
        marginHorizontal: -18,
        paddingHorizontal: 25,
        paddingTop: 50,
        paddingBottom: 18,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    icone: {
        fontSize: 38,
        marginRight: 12,
    },

    tituloHeader: {
        color: "#f8fafc",
        fontSize: 20,
        fontWeight: "bold",
    },

    subtituloHeader: {
        color: "#94a3b8",
        fontSize: 13,
        marginTop: 2,
    },

    formulario: {
        backgroundColor: "#1e293b",
        borderRadius: 12,
        padding: 12,
        marginTop: 10,
        borderWidth: 1,
        borderColor: "#334155",
    },

    label: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#cbd5e1",
        marginBottom: 5,
        marginTop: 3,
    },

    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "#334155",
        borderRadius: 8,
        backgroundColor: "#0f172a",
        paddingHorizontal: 10,
        color: "#e2e8f0",
        marginBottom: 8,
    },

    inputComUnidade: {
        height: 40,
        borderWidth: 1,
        borderColor: "#334155",
        borderRadius: 8,
        backgroundColor: "#0f172a",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
    },

    inputUnidade: {
        flex: 1,
        height: 40,
        paddingHorizontal: 10,
        color: "#e2e8f0",
    },

    unidade: {
        color: "#64748b",
        fontSize: 12,
        marginRight: 10,
    },

    botao: {
        backgroundColor: "#2563eb",
        height: 40,
        borderRadius: 7,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
    },

    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12,
    },

    tituloHistorico: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#f1f5f9",
        marginTop: 13,
        marginBottom: 7,
    },

    card: {
        backgroundColor: "#1e293b",
        borderWidth: 1,
        borderColor: "#334155",
        borderRadius: 9,
        padding: 11,
        marginBottom: 7,
    },

    data: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#e2e8f0",
        marginBottom: 4,
    },

    info: {
        color: "#94a3b8",
        fontSize: 11,
        marginBottom: 3,
    },

    valor: {
        color: "#4ade80",
        fontSize: 12,
        fontWeight: "bold",
    },

    listaVazia: {
        textAlign: "center",
        color: "#64748b",
        fontSize: 13,
        marginVertical: 20,
    },

    resumo: {
        backgroundColor: "#1e293b",
        borderRadius: 10,
        paddingVertical: 13,
        alignItems: "center",
        marginTop: 5,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#334155",
    },

    textoResumo: {
        color: "#94a3b8",
        fontSize: 10,
        fontWeight: "500",
    },

    total: {
        color: "#60a5fa",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 3,
    },

    quantidade: {
        color: "#94a3b8",
        fontSize: 11,
        marginTop: 2,
    },
});