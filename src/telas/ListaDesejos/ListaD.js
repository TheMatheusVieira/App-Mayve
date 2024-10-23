import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { Card } from '@rneui/themed';

import noteBook from '../../../assets/GalaxyBook.jpg';
import prod24 from '../../../assets/s24ultra.jpg';
import prodbjbl from '../../../assets/boomboxjbl.jpg';
import tabs6lite from '../../../assets/TabS6Lite.jpg';
import JBLgo3 from '../../../assets/JBLGo3.jpg';
import budslive from '../../../assets/budslive.jpg';

// Simulação de dados dos produtos
const produtos = [
  { id: 1, nome: "Galaxy S24 Ultra", preco: "R$ 8.399,00", imagem: prod24 },
  { id: 2, nome: "Galaxy Book S", preco: "R$ 6.499,00", imagem: noteBook },
  { id: 3, nome: "JBL GO 3", preco: "R$ 350,00", imagem: JBLgo3 },
  { id: 4, nome: "BUDS LIVE", preco: "R$ 299,00", imagem: budslive },
  { id: 5, nome: "TABLET S6 LITE", preco: "R$ 1.999,00", imagem: tabs6lite },
  { id: 6, nome: 'JBL BOOMBOX', preco:"R$ 1.199,00", imagem: prodbjbl },
];

export default function ListaDesj({ listaDesejos, setListaDesejos }) {
  const adicionarAListaDesejos = (item) => {
    const itemExistente = listaDesejos.find((desejo) => desejo.id === item.id);
    if (itemExistente) {
      setListaDesejos((prevState) =>
        prevState.map((desejo) =>
          desejo.id === item.id ? { ...desejo, quantidade: desejo.quantidade + 1 } : desejo
        )
      );
    } else {
      setListaDesejos([...listaDesejos, { ...item, quantidade: 1 }]);
    }
  };

  const removerDaListaDesejos = (id) => {
    setListaDesejos((prevState) => prevState.filter((desejo) => desejo.id !== id));
  };

  const renderProduto = ({ item }) => (
    <TouchableOpacity onPress={() => adicionarAListaDesejos(item)}>
      <Card containerStyle={styles.card}>
        <View style={styles.cardContent}>
          <Image source={item.imagem} style={styles.produtoImagem} />
          <Text style={styles.produtoNome}>{item.nome}</Text>
          <Text>{item.preco}</Text>
        </View>
      </Card>
    </TouchableOpacity>
  );

  const renderItemDesejo = ({ item }) => (
    <View style={styles.listaDesejoItem}>
      <Image source={item.imagem} style={styles.produtoImagem} />
      <View style={styles.detalhesDesejo}>
        <Text style={styles.produtoNome}>{item.nome}</Text>
        <Text>Quantidade: {item.quantidade}</Text>
        <Button title="Remover" onPress={() => removerDaListaDesejos(item.id)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos Disponíveis</Text>
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />

      <Text style={styles.titulo}>Lista de Desejos</Text>
      {listaDesejos.length === 0 ? (
        <Text style={styles.listaVazia}>Sua lista de desejos está vazia.</Text>
      ) : (
        <FlatList
          data={listaDesejos}
          renderItem={renderItemDesejo}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    width: 200,
  },
  cardContent: {
    alignItems: 'center',
  },
  produtoImagem: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  produtoNome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  listaDesejoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  detalhesDesejo: {
    marginLeft: 20,
  },
  listaVazia: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
