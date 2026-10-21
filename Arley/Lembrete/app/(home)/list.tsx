import { ActivityIndicator, StyleSheet, Text, View, FlatList } from "react-native";
import LembreteItem from "../../components/lembreteItem/lembreteItem";
import { getAllLembretesByAPI } from "../../services/lembrete";
import { useEffect, useState } from "react";

export default function ListScreen() {
  const [meusLembretes, setMeusLembretes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarLembretes() {
      try {
        const dados = await getAllLembretesByAPI();
        setMeusLembretes(dados);
      } catch (error) {
        console.error("Erro ao carregar dados na lista:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarLembretes();
  }, []);

  if (loading) {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: "center",
          alignItems: "center"
        }
      ]}
    >
      <ActivityIndicator size="large" color="#0056FF" />
    </View>
  );
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Lembretes</Text>
 
     
      <FlatList
        data={meusLembretes}
        keyExtractor={(item) => item.lembreteId.toString()}
        renderItem={({ item }) => (
         
          <LembreteItem lembrete={item} onAlternar={() => {}} onAbrir={() => {}} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1C1C22",
    marginBottom: 20,
  },
  listContent: { paddingBottom: 30 },
});