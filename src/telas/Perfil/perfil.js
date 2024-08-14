import React, {useState,  useEffect, useRef} from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text, PixelRatio } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

// const videoSource =
//   'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

export default function Perfil() {
    const [nomeuser, mudaNome] = React.useState('');
    const [sobrenomeuser, mudaSobrenome] = React.useState('');
    const [cidadeuser, mudaCidade] = React.useState('');
    const [profiuser, mudaProfi] = React.useState('');

    // const ref = useRef(null);
    // const [isPlaying, setIsPlaying] = useState(true);
    // const player = useVideoPlayer(videoSource, player => {
    //   player.loop = true;
    //   player.play();
    // });
  
    // useEffect(() => {
    //   const subscription = player.addListener('playingChange', isPlaying => {
    //     setIsPlaying(isPlaying);
    //   });
  
    //   return () => {
    //     subscription.remove();
    //   };
    // }, [player]);

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
            
    {/* <VideoView
    ref={ref}
    style={styles.video}
    player={player}
    allowsFullscreen
    allowsPictureInPicture
    /> */}

    <TouchableOpacity style={styles.btsalvar}>
        <Text>SALVAR INFORMAÇÕES</Text>
    </TouchableOpacity>      
</View>
  );
  }
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
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
  