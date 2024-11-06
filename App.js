import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, Text } from "react-native";

import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { DesejosProvider } from "./src/context/DesejosContext";
// import TabsMenu from "./src/TabsMenu";
// 
import { Audio } from "expo-av";

import Produto from './src/telas/Produto';
import mock from './src/mocks/produto';
import SobreNos from "./src/telas/sobre/sobrenos";
import ListaDesj from "./src/telas/ListaDesejos/ListaD";
import Cards from "./src/telas/ViewProuto/Visuali"; 
import perfil from "./src/telas/Perfil/perfil";

import Destaque from "./src/telas/Pdestaque/pDestaque";

function MenuKit() {
  return <Produto {...mock} />
}

function SobreN() {
  return <SobreNos />
}

function MenuAudio() {
  const [audioStatus, setAudioStatus] = useState(false)
  const [sound, setSound] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      console.log('status', audioStatus);
      if (audioStatus) {
        setLoading(true);
        const { sound } = await Audio.Sound.createAsync(require('./assets/Crazy_ElectronicPop.mp3'));
        setSound(sound);
        try {
          await sound.playAsync();
        } catch (e) {
          console.log(e);
        }
        setLoading(false);
      } else {
        if (sound) {
          try {
            await sound.stopAsync();
            await sound.unloadAsync();
          } catch (e) {
            console.log(e);
          }
        }
      }
    })();
  }, [audioStatus]);

  return <TouchableOpacity onPress={(e) => {if(!loading){setAudioStatus(!audioStatus);}}}>
    <Text>🔊 ON/OFF</Text>
  </TouchableOpacity>
}

function ViewProd() {
  return <Cards />
}

function ListaD() {
  return <ListaDesj />
}

function PDestaque() { 
  return <Destaque/>
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Início") {
          iconName = focused
            ? 'hardware-chip'
            : 'hardware-chip-outline';
        } else if (route.name === "Sobre nós") {
          iconName = focused
            ? 'reader'
            : 'reader-outline';
        } else if (route.name === "Produtos") {
          iconName = focused
            ? 'list'
            : 'list-outline';
        } else if (route.name === "Lista de Desejos") {
          iconName = focused
            ? 'heart'
            : 'heart-outline';
        } else if (route.name === "Perfil") {
          iconName = focused
            ? 'person'
            : 'person-circle-outline'
        } else if (route.name === "Destaque") {
          iconName = focused
            ? 'star'
            : 'star-outline'
        }

        return <Ionicons name={iconName} size={size} color={color} />
      },
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: 'gray',
      tabBarHideOnKeyboard: true,
      headerShown: true,
    })}>
    <Tab.Screen name="Início" component={MenuKit} />
    <Tab.Screen name="Destaque" component={PDestaque} />
    <Tab.Screen name="Sobre nós" component={SobreN} />
    <Tab.Screen name="Produtos" component={ViewProd} />
    <Tab.Screen name="Lista de Desejos" component={ListaD} />
    <Tab.Screen name="Perfil" component={perfil} />
    </Tab.Navigator>
}

export default function App() {
  //return < Produto />
  return (
    <DesejosProvider>
      <NavigationContainer>
        <TabsMenu />
      </NavigationContainer>
    </DesejosProvider>
  );
}
