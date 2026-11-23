import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Student Profile</Text>

      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>Decerie Kaye Trinidad</Text>

      <Text style={styles.label}>Age:</Text>
      <Text style={styles.value}>20</Text>

      <Text style={styles.label}>Course/Year/Section:</Text>
      <Text style={styles.value}>BS Computer Science, 3rd Year, Section 3-5</Text>

      <Text style={styles.label}>About Me:</Text>
      <Text style={styles.value}>
        I really love sleeping and staying at home. 
      </Text>

      <Text style={styles.label}>Achievements:</Text>
      <Text style={styles.value}>- Dean's Lister (2024, 2025)</Text>
      <Text style={styles.value}>- Best in Sleeping (since birth hehe)</Text>
      <Text style={styles.value}>- Student Council Member (2022)</Text>

      <Text style={styles.label}>Skills:</Text>
      <Text style={styles.value}>- sleeping</Text>
      <Text style={styles.value}>- eating</Text>
      <Text style={styles.value}>- zoning out</Text>
      <Text style={styles.value}>- web development(since i made this hehe)</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 14 },
  value: { fontSize: 14, color: '#333', marginTop: 2 },
});