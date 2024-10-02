import React from 'react';
import { StatusBar, StyleSheet, View, Image } from 'react-native';
import Texto from '../../../componentes/Texto';
import Topos24 from '../../../../assets/s24ultra.jpg';

export default function Topo({ titulo, tituloprod }) {
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
    justifyContent: "center",
  },

  Imagem: {
    width: "100%",
    height: "88%",
    paddingBottom: 400,
  },

  textImage: {
    width: "100%",
    fontSize: 15,
    color: "white",
    position: "absolute",
    textAlign: "right",
    paddingBottom: 315,
    paddingRight: 6,
  },
})
