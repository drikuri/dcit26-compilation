import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import SampleModal from './components/SampleModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>CLICK ME</Text>
      </TouchableOpacity>

      <SampleModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  button: { backgroundColor: '#2196F3', paddingVertical: 10, paddingHorizontal: 24, borderRadius: 4 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});