import { Stack } from "expo-router";

export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen name="categories" options={{ title: "Lista de Categorias" }} />
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
