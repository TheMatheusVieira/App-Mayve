import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from '../../../../assets/IconCel.png'; // Adapte o caminho conforme a estrutura do projeto
import Texto from '../../../componentes/Texto'; // Adapte conforme necessário
import Botao from '../../../componentes/Botao'; // Adapte conforme necessário
import prod24 from '../../../assets/s24ultra.jpg'; // Imagem do produto exemplo
import { scanFromURLAsync } from 'expo-camera';

export default function Inicial() {
  const handleWishList = () => {
    Alert.alert("Em breve!", "Estamos preparando uma novidade para você.");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Início</Text>
      </View>

      {/* Detalhes do produto */}
      <View style={styles.productDetails}>
        <Image source={Icon} style={styles.IconeCel} />
        <Texto style={styles.tituloprod}>Produto</Texto>
        <Texto style={styles.descricao}>
          Bem-vindo à era da IA móvel. Com o Galaxy S24 Ultra em suas mãos, você pode liberar níveis totalmente novos de criatividade, produtividade e potencial, começando com o dispositivo mais importante da sua vida: seu celular.
        </Texto>
        <Texto style={styles.preco}>R$ 8.399,00</Texto>

        {/* Exibindo imagem do produto */}
        <Image source={prod24} style={styles.produtoImage} />
        
        {/* Botão de ação */}
        <Botao textoBotao={"ADICIONAR NA LISTA DE DESEJOS"} acaoBotao={handleWishList} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    paddingVertical: 15,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  productDetails: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  IconeCel: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  tituloprod: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666666',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  preco: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  produtoImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});
