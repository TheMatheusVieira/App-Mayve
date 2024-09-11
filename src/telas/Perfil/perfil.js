import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
  ScrollView
} from "react-native";
import { Camera, CameraType } from "expo-camera/legacy";
import { Video } from "expo-av";

export default function Perfil() {
  const [nomeuser, mudaNome] = useState("");
  const [sobrenomeuser, mudaSobrenome] = useState("");
  const [cidadeuser, mudaCidade] = useState("");
  const [profiuser, mudaProfi] = useState("");
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const cameraRef = useRef(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();


  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(status === "granted");
    };

    requestCameraPermission();
  }, []);

  const takePhoto = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhotoUri(photo.uri);
      setIsCameraActive(false); // Fecha a câmera após tirar a foto
    }
  };

  const handleOpenCamera = () => {
    if (hasCameraPermission) {
      setIsCameraActive(true);
    } else {
      console.log("Permissão da câmera não concedida.");
    }
  };

  const switchCamera = () => {
    setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  };
  
  return (
    <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity style={styles.cameraContainer} onPress={handleOpenCamera}>
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.profileImage} />
        ) : (
          <Text style={styles.cameraPlaceholderText}>Clique para abrir a câmera</Text>
        )}
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <Text>Nome</Text>
          <TextInput
            onChangeText={mudaNome}
            value={nomeuser}
            placeholder="Insira o seu nome"
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text>Sobrenome</Text>
          <TextInput
            onChangeText={mudaSobrenome}
            value={sobrenomeuser}
            placeholder="Insira o seu sobrenome"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <Text>Cidade</Text>
          <TextInput
            onChangeText={mudaCidade}
            value={cidadeuser}
            placeholder="Insira a sua cidade"
            style={styles.input}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text>Profissão</Text>
          <TextInput
            onChangeText={mudaProfi}
            value={profiuser}
            placeholder="Insira a sua profissão"
            style={styles.input}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.btsalvar}>
        <Text>SALVAR INFORMAÇÕES</Text>
      </TouchableOpacity>

      <View style={styles.videoContainer}>
        <Video
          style={styles.video}
          source={require("../../../assets/videolojaapp.mp4")}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      </View>

      {isCameraActive && (
  <Camera style={styles.camera} ref={cameraRef}>
    <View style={styles.cameraButtonContainer}> 
      <TouchableOpacity style={styles.cameraButton} onPress={takePhoto}> 
        <Text style={styles.cameraButtonText}>Tirar Foto</Text> 
      </TouchableOpacity> 
              
      <TouchableOpacity onPress={() => switchCamera()}>
        <Text style={styles.switchCamIcon}>↻</Text>
      </TouchableOpacity>
        
      <TouchableOpacity style={styles.cameraButton} onPress={() => setIsCameraActive(false)}>
        <Text style={styles.cameraButtonText}>Cancelar</Text> 
      </TouchableOpacity> 
    </View> 
 </Camera>
        )} 
      </View>
      </ScrollView>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraContainer: {
    marginBottom: 20,
    width: 150,
    height: 150,
    borderRadius: 75,
    overflow: "hidden",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    width:"100%",
    height: "100%",
    position: "absolute",
    borderRadius: 75,
  },
  cameraButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 300,
    flexDirection: "row",
    gap: 20,
  },
  cameraButton: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 7,
  },
  cameraButtonText: {
    fontSize: 18,
    color: "rgba(255, 255, 255, 0.5)",
  },
  switchCamIcon: {
    color: "white",
    fontSize: 38,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  cameraPlaceholderText: {
    color: "white",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    flexWrap: "wrap",
    gap: 20,
  },
  inputGroup: {
    marginHorizontal: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
    paddingHorizontal: 5,
    width: 150,
  },
  btsalvar: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
  },
  videoContainer: {
    marginTop: 20,
  },
  video: {
    width: 350,
    height: 275,
  },
});
