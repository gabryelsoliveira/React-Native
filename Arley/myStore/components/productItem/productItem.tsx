import { Pressable, Image, View, Text } from 'react-native';
import { styles } from "./productItemStyle";
import { Product } from '../../types/product';
import { Link } from 'expo-router';

type Props = {
        product: Product
};

export function ProductItem({product} : Props) {
    return (
        <Link
            href={{
                pathname: '/product/[id]',
                params: { id: String(product.id) },
            }}
            asChild
        >
        <Pressable style={styles.pressableContainer}>
            <Image
                style={styles.image}
                source={{ uri: product.image }}
                resizeMode="cover"
            />

            <View style={styles.textContainer}>
                <Text style={[styles.title, styles.destaque]}>
                    {product.title}
                </Text>

                <Text style={styles.description}>
                    {product.description}
                </Text>

                <Text style={[styles.price, styles.destaque]}>
                    R$ {product.price.toFixed(2)}
                </Text>
            </View>
        </Pressable>
        </Link>
    );
};