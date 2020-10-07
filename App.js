import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Card from './Card.js'

function DetailScreen() {
  return <View>
    <Image source={{ uri: "https://bit.ly/2SENeIR" }} style={styles.image}></Image>

  </View>
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Image
          style={styles.avatar}
          source={require('./assets/avatar.jpg')}>
        </Image>
      </TouchableOpacity>

      <Text style={styles.textTitulo}>Felipe Aguirre</Text>
      <Text style={styles.textTitulo}>Ayudante</Text>

      <Card texto="+56 9 1234 5678" icono="phone" />
      <Card texto="faguirre@alumnos.inf.utfsm.cl" icono="email" />
      <Card texto="Español / Inglés" icono="language" />
      <Card texto="Av. Siempre Viva 746" icono="directions" />
      <Card texto="React JS / React Native" icono="code" />

    </SafeAreaView>
  );
}
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown: false
        }}
          name="Home" component={HomeScreen} />
        <Stack.Screen options={{
          title: "Detalle"
        }}
          name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(236,241,248)',
    alignItems: 'center',
    justifyContent: 'center'

  },
  image: {
    width: "90%",
    height: "90%",
    resizeMode: "contain",
    alignSelf: "center",

  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 400 / 2,
    margin: 20,
    borderWidth: 2,
    borderColor: "#CACACA"
  },
  textTitulo: {
    color: "rgb(64,65,79)",
    fontSize: 30
  }
})
