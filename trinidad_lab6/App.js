import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';

const PRODUCTS = [
  { key: '1', title: 'Xbox', description: 'Lorem ipsum', rating: 5 },
  { key: '2', title: 'PS5', description: 'Lorem ipsum', rating: 5 },
  { key: '3', title: 'Nintendo Switch', description: 'Lorem ipsum', rating: 4.5 },
];

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Product', { product: item })}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function ProductScreen({ route }) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.rating}/5</Text>
      <Text>{product.description}</Text>
      <Text>Key: {product.key}</Text>
    </View>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerLeft: () => <DrawerToggleButton /> }}
      />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Main" component={MainStack} options={{ title: 'Home' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f0f0f0' },
  card: { borderWidth: 1, borderColor: '#555', padding: 10, marginBottom: 10, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
});
