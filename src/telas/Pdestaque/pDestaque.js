// pDestaque.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDesejos } from '../../context/DesejosContext';

export default function PDestaque() {
  const { imagemDestaque } = useDesejos();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produto em Destaque</Text>
      {imagemDestaque ? (
        <Image source={imagemDestaque} style={styles.produtoImagem} />
      ) : (
        <Text style={styles.aviso}>Selecione um produto para ver o destaque.</Text>
          )}
          
           {/* Informações do produto */}
      <View style={styles.infoContainer}>
        <Text style={styles.productTitle}>Produto em destaque</Text>
        <Text style={styles.description}>
          Bem-vindo à era da IA móvel. Com o Galaxy S24 Ultra em suas mãos, você pode liberar níveis totalmente novos de criatividade, produtividade e potencial, começando com o dispositivo mais importante da sua vida: seu celular.
        </Text>
        <Text style={styles.price}>R$ 8.399,00</Text>
        
        {/* Botão de adicionar à lista de desejos */}
        <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>ADICIONAR NA LISTA DE DESEJOS</Text>
              </TouchableOpacity>
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
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  aviso: {
    fontSize: 16,
    color: 'gray',
  },
});
