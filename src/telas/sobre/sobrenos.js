import React from 'react';
import {StatusBar, StyleSheet, View, Text, Image, ScrollView } from 'react-native';

import Icon from '../../../assets/Icone.png'
import LojaMayve from '../../../assets/lojamayve.png'

export default function SobreNos() {
    return <>
        <StatusBar />
        <ScrollView>
        <View style={styles.containerS}>
        <Image source={Icon} style={styles.IconeCel}/>
            <Text style={styles.textosobre}> Bem-vindo à Mayve Store, o seu destino definitivo para a mais recente
                tecnologia e inovação eletrônica! Na Mayve, estamos empenhados em oferecer uma ampla variedade
                de produtos eletrônicos de alta qualidade, desde smartphones e laptops até gadgets
                inteligentes e acessórios de última geração.</Text>
            
                <Image source={LojaMayve} style={styles.ImageLoja}/>
            </View>
            </ScrollView>     
</>
}

const styles = StyleSheet.create({
    containerS: {
    flex: 1,
    backgroundColor: "f5f5f5",
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: "top",
    },
    IconeCel: {
        width: 200,
        height: 200,
        marginLeft: 90,
    },
    ImageLoja: {
        width: 400,
        height: 200,
        shadowColor: "black",
        shadowRadius: 10,
    },
    textosobre: {
        color: "black",
        paddingTop: 10,
        paddingBottom: 20,
        marginLeft: 6,
        marginRight: 6,
        fontSize: 22,
        textShadowRadius: 2,
        textShadowColor: "black",
        textAlign: "center",
        textTransform: "uppercase",
        textAlign: "justify",
    },



})

