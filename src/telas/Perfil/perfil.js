import React, {useState,  useEffect, useRef} from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, PixelRatio, Button} from 'react-native';

import { Video, ResizeMode } from 'expo-av';

// import {VideoLoja} from '../../../assets/videolojaapp.mp4'

export default function Perfil() {
    const [nomeuser, mudaNome] = React.useState('');
    const [sobrenomeuser, mudaSobrenome] = React.useState('');
    const [cidadeuser, mudaCidade] = React.useState('');
    const [profiuser, mudaProfi] = React.useState('');

    const video = React.useRef(null);

    return (
<View style={styles.container}>
        <View style={styles.fundouser}></View>

    <View style={styles.input}>
        <View>
        <Text>Nome</Text>
        <TextInput
        onChangeText={mudaNome}
        value={nomeuser}
        placeholder="Insira o seu nome"
        />
        </View>
                
        <View>
        <Text>Sobrenome</Text>
        <TextInput
        onChangeText={mudaSobrenome}
        value={sobrenomeuser}
        placeholder="Insira o seu sobrenome"
        />
        </View>  
    </View>
            
    <View style={styles.input2}>
    <View>
    <Text>Cidade</Text>
    <TextInput
    onChangeText={mudaCidade}
    value={cidadeuser}
    placeholder="Insira a sua cidade"
    />
    </View>

    <View>            
    <Text>Profissão</Text>
    <TextInput
    onChangeText={mudaProfi}
    value={profiuser}
    placeholder="Insira a sua profissão"
    />
    </View>           
</View> 

    <TouchableOpacity style={styles.btsalvar}>
        <Text>SALVAR INFORMAÇÕES</Text>
            </TouchableOpacity>

<View style={styles.quadroVideo}>
<Video
                ref={video}
                style={styles.video}
                source={require('../../../assets/videolojaapp.mp4')}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
            />
            </View>
</View>
  );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
    },
    video: {
        width: 350,
        height: 275,
        alignSelf: "center",
    },
    input: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 50,
        marginBottom: 20,
    },
    input2: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
        gap: 50,
        marginBottom: 20,
    },
    fundouser: {
        marginBottom: 70,
        width: 150,
        height: 150,
        backgroundColor: "black",
        borderRadius: 80,
        marginTop: 60,
    },
    btsalvar: {
        backgroundColor: "grey",
        padding: 10,
        borderRadius: 15,
    }
  });
  