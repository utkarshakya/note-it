import { Colors } from '@/constants/colors';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
      }}
    >
      <Text style={{ color: Colors.text, fontSize: 22, fontWeight: '600' }}>Welcome To Noteit</Text>
    </View>
  );
}
