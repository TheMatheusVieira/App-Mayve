import React from 'react';
import { StyleSheet, View, Alert } from "react-native";

// import logo from
import Texto from '../../../componentes/Texto'
import Botao from '../../../componentes/Botao'  

export default function Detalhes({preco, detalhes, prod}) {
  
  return <View style={styles.container}>

    <Texto style={styles.textProd}>{prod}</Texto>

      <Texto style={styles.textDescP}>{detalhes}</Texto>

    <Texto style={styles.textValor}>{preco}</Texto>
      
      <View style={styles.logotipo}></View>
      <Botao textoBotao={"ADICIONAR NA LISTA DE DESEJOS"} acaoBotao={() => { Alert.alert("Em breve!", "Estamos preparando uma novidade para você."); }}></Botao>
  </View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  textProd: {
    fontSize: 19,
    paddingTop: 10,
    paddingBottom: 10,
    color: "red",
    fontWeight: "bold",
  },
  textDescP: {
    fontSize: 14,
    color: "black",
    // position: "absolute",
    // paddingTop: 550,
  },
  textValor: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    color: "black",
    //position: "absolute",
    //paddingRight: 280,
  },
  logotipo: {
    flexDirection: "row",
  },
});