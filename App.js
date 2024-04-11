import {useFonts, SpaceGrotesk_300Light, SpaceGrotesk_700Bold} from "@expo-google-fonts/space-grotesk";
import { View } from "react-native";

import Produto from './src/telas/Produto';
import mock from './src/mocks/produto';

export default function App() {

  const [fonteCarregada] = useFonts({
    "SpaceGregular": SpaceGrotesk_300Light,
    "SpaceGbold": SpaceGrotesk_700Bold
  });

  //Verifica se a fonte já foi carregada
  if (!fonteCarregada) {
    return <View />;
  }
  //return < Produto />
  return <Produto {...mock} />
}













/*import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Image, View } from "react-native";

import Icone from "./assets/Icone.png";
/>*/

/*
  return (
    <View style={styles.container}>
      <Text style={styles.saudacoes}>Bem-Vindo à Mayve!</Text>
      <Image source={Icone} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  }
  saudacoes: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
  },
}); />*/
