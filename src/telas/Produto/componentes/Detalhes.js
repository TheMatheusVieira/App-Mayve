import React from 'react';
import { StyleSheet, View, Alert, Image} from "react-native";

// import logo from
import Texto from '../../../componentes/Texto'
import Botao from '../../../componentes/Botao'  
import Icon from '../../../../assets/IconCel.png'
import Item from '../componentes/Item'

export default function Detalhes({preco, detalhes, nome}) {
  
  return <View style={styles.container}>

    <Texto style={styles.textProd}>{nome}</Texto>

      <Texto style={styles.textDescP}>{detalhes}</Texto>

    <Texto style={styles.textValor}>{preco}</Texto>
      
    <Image source={Icon} style={styles.IconeCel} />
    
    <Texto style={styles.tituloprod}>Produto</Texto>
    
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
    paddingBottom: 10,
    paddingLeft: 60,
    color: 'black',
    fontWeight: "bold",
  },
  
  textDescP: {
    fontSize: 14,
    color: "black",
    paddingTop: 30,
  },

  textValor: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    color: "black",
  },

  logotipo: {
    flexDirection: "row",
  },

  IconeCel: {
    position: "absolute",
    height: "1%",
    width: "1%",
    paddingTop: 60,
    paddingLeft: 60,
  },

  tituloprod: {
    fontSize: 25,
    position: "absolute",
    paddingLeft: 60,
    paddingTop: 15,
    
    
  }
});