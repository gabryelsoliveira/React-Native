import { Pressable, Text } from 'react-native';
import { styles } from './buttonStyle';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

export function Button({ title, onPress }: ButtonProps) {
  return (
    <Pressable style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}