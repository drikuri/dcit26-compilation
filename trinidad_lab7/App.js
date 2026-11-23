import { useState, useEffect, useCallback } from 'react';
import {
  View, Text, Image, TouchableOpacity, ScrollView,
  ActivityIndicator, Button, StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://randomuser.me/api');
      const json = await res.json();
      setUser(json.results[0]);
    } catch (e) {
      setError('Could not load user. Check your connection.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <View style={styles.center}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <>
          <TouchableOpacity onPress={() => navigation.navigate('Profile', { user })}>
            <Image source={{ uri: user.picture.large }} style={styles.homeImage} />
          </TouchableOpacity>
          <Text style={styles.homeName}>
            {user.name.first} {user.name.last}
          </Text>
        </>
      )}
      <View style={{ marginTop: 15 }}>
        <Button title="RANDOM USER" onPress={fetchUser} />
      </View>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function ProfileScreen({ route }) {
  const { user } = route.params;
  const { name, picture, dob, gender, location, email, phone, cell, registered, login } = user;

  return (
    <ScrollView style={styles.profile} contentContainerStyle={{ padding: 20 }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: picture.large }} style={styles.profileImage} />
        <Text style={styles.profileName}>
          {name.title} {name.first} {name.last}
        </Text>
        <Text style={styles.username}>@{login.username}</Text>
      </View>

      <Section title="About">
        <Text style={styles.detail}>Age: {dob.age}</Text>
        <Text style={styles.detail}>Birthday: {dob.date}</Text>
        <Text style={styles.detail}>Gender: {gender}</Text>
        <Text style={styles.detail}>
          Address: {location.street.number} {location.street.name}, {location.city},{' '}
          {location.state}, {location.country}
        </Text>
      </Section>

      <Section title="Contact">
        <Text style={styles.detail}>Email: {email}</Text>
        <Text style={styles.detail}>Phone: {phone}</Text>
        <Text style={styles.detail}>Cell: {cell}</Text>
      </Section>

      <Section title="Other">
        <Text style={styles.detail}>Date registered: {registered.date}</Text>
      </Section>
    </ScrollView>
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
      <Stack.Screen name="Profile" component={ProfileScreen} />
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
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
  homeImage: { width: 150, height: 150 },
  homeName: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  profile: { flex: 1, backgroundColor: '#f0f0f0' },
  profileImage: { width: 120, height: 120, borderRadius: 8 },
  profileName: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  username: { color: '#666', marginTop: 2 },
  section: { marginTop: 20 },
  sectionTitle: {
    fontSize: 16, fontWeight: '600', color: '#555',
    borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 4, marginBottom: 8,
  },
  detail: { fontSize: 14, marginBottom: 4 },
});