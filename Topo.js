import React from 'react';
import { StatusBar, StyleSheet, View, Image } from "react-native";

import Topos24 from '../../../../assets/s24ultra.jpg';
import Texto from '../../../componentes/Texto'
  
export default function Topo({titulo, tituloprod}) {
  return <>
    <StatusBar />
    <View style={styles.container}>
      <Texto style={styles.tipag}>{titulo}</Texto>
      <Image source={Topos24} style={styles.Imagem} />

      <Texto style={styles.textImage}>{tituloprod}</Texto>
    </View>
  </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 8,

   // alignItems: "center",
   // justifyContent: "center",
  },
  tipag: {
    fontSize: 25,
    //fontWeight: "bold",
    color: "grey",
    paddingTop: 8,
    paddingBottom: 13,
    paddingLeft: 2,
    fontWeight: "bold",
  },
  Imagem: {
    width: "100%",
    height: "88%",

   // position: "absolute",
   // padding: 195,
  },
  textImage: {
    width: "100%",
    fontSize: 15,
    color: "white",
    position: "absolute",
    textAlign: "right",
    paddingTop: 80,
    paddingRight: 6,

    //paddingBottom: 340,
   // paddingLeft: 190,
    
  }
})
