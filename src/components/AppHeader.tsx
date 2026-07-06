import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/colors';

export function AppHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Noteit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 34,
  },
  title: {
    fontWeight: '800',
    fontSize: 32,
    color: Colors.text,
  },
});
