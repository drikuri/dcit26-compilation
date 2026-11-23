import { Modal, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus at urna condimentum mattis pellentesque. Ut diam quam nulla porttitor massa id neque. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Tortor aliquam nulla facilisi cras fermentum. Nibh nisl condimentum id venenatis. Id aliquet risus feugiat in. Suspendisse in est ante in nibh mauris. Auctor elit sed vulputate mi sit amet mauris commodo quis.';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../hanni.png')}
        />

        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>{LOREM}</Text>
          <Text style={styles.text}>{LOREM}</Text>
          <Text style={styles.text}>{LOREM}</Text>
        </ScrollView>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  image: { width: 100, height: 100, marginBottom: 20 },
  scroll: { flex: 1, width: '100%' },
  text: { fontSize: 14, marginBottom: 12, textAlign: 'justify' },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginTop: 15,
    marginBottom: 20,
  },
  closeText: { color: 'black', fontWeight: 'bold' },
});