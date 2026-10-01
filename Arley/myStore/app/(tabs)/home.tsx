import { View, Text, FlatList, SafeAreaView, Image, StyleSheet } from "react-native";
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/productItem/productItem";

export default function Home() {
 
  const products = getAllProducts();
 
  return (
    <SafeAreaView style={styles.container}>
    <FlatList
        data={products} 
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
    ></FlatList>

</SafeAreaView>
  );
}
 
const styles = StyleSheet.create({
container:{
    flex:1,
},
})