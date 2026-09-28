import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
 
export default function TabLayout() {
 
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Inicio",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="config"
        options={{
          title: "Configurações",
          tabBarLabel: "Config",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="gear" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
 
 