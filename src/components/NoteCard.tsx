import { Colors } from '@/constants/colors';
import { Pressable, StyleSheet, Text } from 'react-native';

export function NoteCard() {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={() => console.log('pressed')}
    >
      <Text>
        Live the way you want to, see the world that has the maximum potentical and I want to live
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.surface,
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    shadowColor: 'black',
  },
  pressed: {
    opacity: 0.8,
    elevation: 0,
  },
});
