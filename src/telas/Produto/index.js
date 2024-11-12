import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Index({ }) {
  return <>
    <View style={styles.container}>
      <Text style={styles.tiInicio}>Bem-vindo(a) à Mayve Shop.</Text>
      <Text style={styles.descInicio}>Sua loja de eletrônicos</Text> 
      </View>
</>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tiInicio: {
    fontSize: 20,
  },
  descInicio: {
    fontSize: 15,
  }
})

