import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" //alias de la pantalla que apunta a un componente
          component={HomeScreen}
          options={{ title: 'inicio' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'perfil del usuario' }}
        />
        <Stack.Screen
          name="DashBoard"
          component={DashboardScreen}
          options={{ title: 'tablero del administrador' }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

//generar los componentes de HomeScreen, ProfileScreen y Dashboard
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ backgroundColor: 'green', padding: 10, borderRadius: 10 }}
        onPress={() => {
          navigation.navigate('Profile', { name: 'tatiana de los rios', rol: 1 })
        }}
      >
        <Text style={{ color: 'white' }}>ir a perfil del usuario</Text>

      </TouchableOpacity>
    </View >
  )
};
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={{ backgroundColor: 'black', color: 'white' }}>este es el perfil de {route.params.name}, y tiene el rol: {route.params.rol == 1 ? ("administrador") : ("usuario final")}
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: 'orange', padding: 10, borderRadius: 10 }}
        onPress={() => {
          { route.params.rol == 1 ? (navigation.navigate('DashBoard')) : (navigation.navigate('Home')) }

        }}
      >
        <Text style={{ color: 'white' }}>ir a DashBoard</Text>

      </TouchableOpacity>
    </View>
  )
}

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ backgroundColor: 'purple', padding: 10, borderRadius: 10 }}
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <Text style={{ color: 'white' }}>ir a inicio</Text>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
