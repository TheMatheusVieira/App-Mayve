import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Texto({ children, style }) {
    //Determina a formatação padrão do componente
    let estilo = estilos.texto;

    //Verifica se deve exibir em Negrito
    if (style?.fontWeight === "bold") {
        estilo = estilos.textoNegrito;
    }

    return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "SpaceGregular",
        fontWeight: "normal",
    },
    textoNegrito: {
        fontFamily: "SpaceGbold",
        fontWeight: "normal",
    }
})