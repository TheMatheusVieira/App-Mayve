import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Card } from '@rneui/themed';
import { FlatList } from 'react-native'; 

import prod24 from '../../../assets/s24ultra.jpg';
import prodbjbl from '../../../assets/boomboxjbl.jpg';
import noteBook from '../../../assets/GalaxyBook.jpg';
import tabs6lite from '../../../assets/TabS6Lite.jpg';
import JBLgo3 from '../../../assets/JBLGo3.jpg';
import budslive from '../../../assets/budslive.jpg';

const data = [ 
{ id: '1', title: 'SAMSUNG S24', image: prod24, price: 'R$ 8,399' },
{ id: '2', title: 'JBL BOOMBOX', image: prodbjbl, price: 'R$ 1,199' },
{ id: '3', title: 'SAMSUNG BOOK', image: noteBook, price: 'R$ 7,199' },
{ id: '4', title: 'TABLET S6 LITE', image: tabs6lite, price: 'R$ 1999,00' },
{ id: '5', title: 'JBL GO 3', image: JBLgo3, price: 'R$ 350,00' },
{ id: '6', title: 'BUDS LIVE', image: budslive, price: 'R$ 299,00' },
];

export default function Visuali() {
  const renderItem = ({ item }) => ( // Render function for each card item
    <Card containerStyle={{}} wrapperStyle={{}}>
    <View style={{ position: "relative", alignItems: "center" }}>
        <Text style={styles.txtcard}>{item.title}</Text>
        <Image source={item.image} style={styles.Imagem} />
        <Text>{item.price}</Text>
    </View>
    </Card>
);

return (
    <View>
    <FlatList 
        data={data}
        renderItem={renderItem} 
        keyExtractor={item => item.id} 
    />
    </View>
);
}

const styles = StyleSheet.create({
Imagem: {
    width: 120,
    height: 120,
},
txtcard: {
    fontSize: 15,
    paddingBottom: 2,
    paddingTop: 12,
    fontWeight: "bold",
}
});
