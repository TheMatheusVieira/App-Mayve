import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Topo from './componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item'
import Texto from '../../componentes/Texto';

export default function Index({ topo, detalhes, itens }) {
  return <>
    <Texto style={styles.tiprod}>{itens.prod}</Texto>
  <FlatList
    data={itens.lista}
      renderItem={Item}
      keyExtractor={itens.lista.nome}
      ListHeaderComponent={() => {
        return <>
    <Topo {...topo} />
          <Detalhes {...detalhes} />
        </>
      }}
    />
</>
}

const styles = StyleSheet.create({
tiprod: {
    color: "red",
},
})


//

