import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, Image, FlatList, TouchableOpacity, Button } from 'react-native';

import { Card } from '@rneui/themed';
import noteBook from '../../../assets/GalaxyBook.jpg';
import prod24 from '../../../assets/s24ultra.jpg';
import prodbjbl from '../../../assets/boomboxjbl.jpg';
import tabs6lite from '../../../assets/TabS6Lite.jpg';
import JBLgo3 from '../../../assets/JBLGo3.jpg';
import budslive from '../../../assets/budslive.jpg';

import { useDesejos } from '../../context/DesejosContext';

export default function ListaDesj() {
  const { listaDesejos, adicionarAListaDesejos, removerDaListaDesejos } = useDesejos();

  const produtos = [
    { id: 1, nome: "Galaxy S24 Ultra", preco: "R$ 8.399,00", imagem: prod24 },
    { id: 2, nome: "Galaxy Book S", preco: "R$ 6.499,00", imagem: noteBook },
    { id: 3, nome: "JBL GO 3", preco: "R$ 350,00", imagem: JBLgo3 },
    { id: 4, nome: "BUDS LIVE", preco: "299,00", imagem: budslive },
    { id: 5, nome: "TABLET S6 LITE", preco: "1999,00", imagem: tabs6lite },
    { id: 6, nome: 'JBL BOOMBOX', preco:"1199,00", imagem: prodbjbl },
  ];

  const descProds = [
    { id: 1, descri: "Bem-vindo à era da IA móvel. Com o Galaxy S24 Ultra em suas mãos, você pode liberar níveis totalmente novos de criatividade, produtividade e potencial, começando com o dispositivo mais importante da sua vida: seu celular." },
    { id: 2, descri: "Liberte seu potencial com o Galaxy Book S. Elegante, poderoso e portátil, ele transforma a forma como você trabalha e cria, permitindo que você leve produtividade e inspiração para qualquer lugar." },
    { id: 3, descri: "Curta a vida ao máximo com a JBL GO 3. Compacta e estilosa, essa caixa de som leva suas músicas favoritas para onde quer que você vá, com som poderoso e design à prova d'água para cada momento." },
    { id: 4, descri: "Eleve sua experiência auditiva com o BUDS LIVE. Com um design ergonômico e um som imersivo, esses fones oferecem conforto e qualidade para o seu dia a dia, fazendo você mergulhar na música como nunca." },
    { id: 5, descri: "Descubra o poder da versatilidade com o TABLET S6 LITE. Com uma tela vibrante e uma S Pen prática, ele é ideal para estudar, desenhar, e criar, adaptando-se ao seu estilo de vida." },
    { id: 6, descri: "Leve a festa para qualquer lugar com a JBL BOOMBOX. Potente e resistente, esta caixa de som oferece graves profundos e uma bateria duradoura para acompanhar cada momento épico." },
  ];

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
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.titulo}>Produtos disponíveis</Text>
        <FlatList
          data={produtos}
          renderItem={renderProduto}
          keyExtractor={(item) => item.id.toString()}
          horizontal
        />
        
        <Text style={styles.titulo}>Lista de desejos</Text>
        {listaDesejos.length === 0 ? (
          <Text style={styles.listaVazia}>Sua lista de desejos está vazia.</Text>
        ) : (
          <View style={styles.listaDesejosContainer}>
            <FlatList
              data={listaDesejos}
              renderItem={renderItemDesejo}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled
            />
          </View>
        )}
      </View>
    </>
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
  listaDesejosContainer: {
    maxHeight: 250, // Limite de altura para a lista de desejos
  },
});
