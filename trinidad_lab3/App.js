import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim() === '') return;
    setItems([...items, text.trim()]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter Item"
          value={text}
          onChangeText={setText}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>

      <ScrollView>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#fff' },
  row: { flexDirection: 'row', marginBottom: 15 },
  input: {
    flex: 1, borderWidth: 1, borderColor: '#aaa',
    padding: 10, marginRight: 10, borderRadius: 6,
  },
  button: {
    backgroundColor: 'gray', paddingHorizontal: 18,
    justifyContent: 'center', borderRadius: 6,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  item: {
    backgroundColor: 'gray', padding: 14, marginBottom: 5,
    borderRadius: 8, borderLeftWidth: 6, borderLeftColor: 'black',
  },
  itemText: { color: '#fff', fontSize: 16 },
});