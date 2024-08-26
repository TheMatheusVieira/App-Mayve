import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  Alert,
  Platform,
} from "react-native";

import { Camera } from "expo-camera";
import { Video, ResizeMode } from "expo-av";

export default function Perfil() {
  const [nomeuser, mudaNome] = React.useState("");
  const [sobrenomeuser, mudaSobrenome] = React.useState("");
  const [cidadeuser, mudaCidade] = React.useState("");
  const [profiuser, mudaProfi] = React.useState("");

  const video = React.useRef(null);

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const cameraRef = useRef(null);

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    } else {
      const { status } = await Camera.requestPermissionsAsync();
      setHasCameraPermission(status === "granted");
    }
  };

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
    }
  };

  React.useEffect(() => {
    requestCameraPermission();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.fundouser}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.profileImage} />
        ) : (
          <TouchableOpacity style={styles.fundoTouchable} onPress={takePhoto}>
            <Text style={styles.fundoText}>
              Clique aqui para tirar uma foto
            </Text>
          </TouchableOpacity>
        )}
      </View>

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

      <View>
        <Video
          ref={video}
          style={styles.video}
          source={require("../../../assets/videolojaapp.mp4")}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
        />
      </View>

      {hasCameraPermission && (
        <Camera style={styles.camera} ref={cameraRef}>
          <View style={styles.cameraButtonContainer}>
            <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}>
              <Text style={styles.cameraButtonText}>Tirar Foto</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    bottom: 20,
  },
  video: {
    width: 350,
    height: 275,
    alignSelf: "center",
  },
  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    marginBottom: 20,
  },
  input2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    marginBottom: 20,
  },
  fundouser: {
    marginBottom: 50,
    width: 150,
    height: 150,
    backgroundColor: "black",
    borderRadius: 80,
    marginTop: 70,
  },
  btsalvar: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 15,
    marginTop: 20,
  },
});
