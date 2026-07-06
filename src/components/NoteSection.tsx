import { StyleSheet, View } from 'react-native';

import { NoteCard } from './NoteCard';

export function NoteSection() {
  return (
    <View style={styles.row}>
      <NoteCard />
      <NoteCard />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
});
