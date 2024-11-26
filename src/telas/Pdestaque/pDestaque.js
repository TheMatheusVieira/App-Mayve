// pDestaque.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDesejos } from '../../context/DesejosContext';

export default function PDestaque() {
  const { imagemDestaque } = useDesejos();

  return (
    <View style={styles.container}>
     
     <Text style={styles.productTitle}>ÚLTIMO FAVORITO</Text>

      {imagemDestaque ? (
        <Image source={imagemDestaque} style={styles.produtoImagem} />
      ) : (
        <Text style={styles.aviso}>Você ainda não selecionou um favorito.</Text>
          )}
          
           {/* Informações do produto */}
      <View>
        <Text style={styles.productTitle}>Produto em destaque</Text>
        <Text style={styles.description}>
          Bem-vindo à era da IA móvel. Com o Galaxy S24 Ultra em suas mãos, você pode liberar níveis totalmente novos de criatividade, produtividade e potencial, começando com o dispositivo mais importante da sua vida: seu celular.
        </Text>
        <Text style={styles.textValor}>R$ 8.399,00</Text>
        
        {/* Botão de adicionar à lista de desejos */}
        {/* <TouchableOpacity style={styles.botao}> */}
                  {/* <Text style={styles.botaoTexto}>ADICIONAR NA LISTA DE DESEJOS</Text> */}
              {/* </TouchableOpacity> */}
          </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  produtoImagem: {
    flex: 1,
    marginVertical: 20,
    width: "100%",
    height: "75%",
  },
  aviso: {
    fontSize: 16,
    color: 'gray',
    paddingBottom: 150,
  },
  productTitle: {
    color: "black",
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 6,
    fontSize: 22,
    textShadowRadius: 2,
    textShadowColor: "black",
    textAlign: "center",
    textTransform: "uppercase",
    textAlign: "justify",
  },
  textValor: {
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    color: "black",
  },
  botao: {
    marginTop: 1,
    backgroundColor: "grey",
    paddingVertical: 16,
    borderRadius: 6,
},
botaoTexto: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 26,
    fontWeight: "bold",
}
});
