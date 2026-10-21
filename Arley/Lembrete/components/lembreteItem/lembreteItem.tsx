import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { Lembrete } from "../../types/lembrete";

type Props = {
    lembrete: Lembrete;
    onAlternar: (id: number) => void;
    onAbrir: (id: number) => void;
};

export default function LembreteItem({ lembrete, onAlternar, onAbrir }: Props) {
    const concluido = lembrete.statusLembrete;

    return (
        <View style={[styles.card, concluido && styles.cardConcluido]}>
            <View style={styles.textos}>
                <Pressable
                    onPress={() => onAbrir(lembrete.lembreteId)}
                    accessibilityRole="button"
                    accessibilityLabel={`Editar lembrete: ${lembrete.tituloLembrete}`}
                >
                    <View style={styles.topo}>
                        <Text style={[styles.titulo, concluido && styles.riscado]}>
                            {lembrete.tituloLembrete}
                        </Text>

                        <View style={[styles.selo, concluido && styles.seloConcluido]}>
                            <Text style={[styles.seloTexto, concluido && styles.seloTextoConcluido]}>
                                {concluido ? "Concluído" : "Pendente"}
                            </Text>
                        </View>
                    </View>

                    <Text style={[styles.corpo, concluido && styles.riscado]}>
                        {lembrete.corpoLembrete}
                    </Text>
                </Pressable>
            </View>

            <Switch
                value={concluido}
                onValueChange={() => onAlternar(lembrete.lembreteId)}
                trackColor={{ false: "#E0D6B8", true: "#FFD54F" }}
                thumbColor={concluido ? "#F9A825" : "#FFFDF5"}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#FFFDF5",
        padding: 16,
        borderRadius: 16,
        marginBottom: 14,
        borderLeftWidth: 6,
        borderLeftColor: "#FFB300",
        shadowColor: "#B8860B",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 3,
    },
    cardConcluido: {
        backgroundColor: "#FFF3C4",
        borderLeftColor: "#F9A825",
    },

    textos: { flex: 1, marginRight: 12 },
    topo: {
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
        marginBottom: 6,
    },
    titulo: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#1C1C22",
    },
    corpo: { fontSize: 14, lineHeight: 20, color: "#5F5A4A" },
    riscado: { textDecorationLine: "line-through", opacity: 0.55 },

    selo: {
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 999,
        backgroundColor: "#FFE082",
    },
    seloConcluido: { backgroundColor: "#F9A825" },
    seloTexto: { fontSize: 11, fontWeight: "bold", color: "#6D4C00" },
    seloTextoConcluido: { color: "#1C1C22" },
});