import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import ListaDesj from './../ListaDesejos/ListaD';

export default function Inicial() {
  const [listaDesejos, setListaDesejos] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Início</Text>

      {/* Lista de desejos no início */}
      <Text style={styles.subtitulo}>Seus Desejos</Text>
      {listaDesejos.length === 0 ? (
        <Text style={styles.listaVazia}>Você não tem itens na lista de desejos.</Text>
      ) : (
        <FlatList
          data={listaDesejos}
          renderItem={({ item }) => (
            <View style={styles.listaDesejoItem}>
              <Image source={item.imagem} style={styles.produtoImagem} />
              <Text style={styles.produtoNome}>{item.nome}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      {/* Lista de produtos para adicionar à lista de desejos */}
      <ListaDesj listaDesejos={listaDesejos} setListaDesejos={setListaDesejos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  listaVazia: {
    marginTop: 20,
    fontSize: 16,
    fontStyle: 'italic',
  },
  listaDesejoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  produtoImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  produtoNome: {
    fontSize: 16,
  },
});
