import { View, Text } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "./src/screens/LoginScreen"
import HomeScreen from "./src/screens/HomeScreen"
import DetailsScreen from './src/screens/DetailsScreen'           
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerTitleAlingn: 'center' }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: "Tela de Login" }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Cursos" }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: "Detalhes do Curso" }} />
        {/* Cada Screen recebe uma navigation como prop (propiedade) */}


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App