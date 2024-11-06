// src/context/DesejosContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DesejosContext = createContext();

export const DesejosProvider = ({ children }) => {
  const [listaDesejos, setListaDesejos] = useState([]);
  const [imagemDestaque, setImagemDestaque] = useState(null);

  // Carregar os dados salvos ao iniciar o aplicativo
  useEffect(() => {
    const carregarDados = async () => {
      const desejosSalvos = await AsyncStorage.getItem('listaDesejos');
      const imagemSalva = await AsyncStorage.getItem('imagemDestaque');
      if (desejosSalvos) setListaDesejos(JSON.parse(desejosSalvos));
      if (imagemSalva) setImagemDestaque(imagemSalva);
    };
    carregarDados();
  }, []);

  // Salvar a lista de desejos e a imagem em destaque sempre que forem atualizados
  useEffect(() => {
    AsyncStorage.setItem('listaDesejos', JSON.stringify(listaDesejos));
  }, [listaDesejos]);

  useEffect(() => {
    AsyncStorage.setItem('imagemDestaque', imagemDestaque);
  }, [imagemDestaque]);

  const adicionarAListaDesejos = (item) => {
    setListaDesejos((prevState) => {
      const itemExistente = prevState.find((desejo) => desejo.id === item.id);
      if (itemExistente) {
        return prevState.map((desejo) =>
          desejo.id === item.id
            ? { ...desejo, quantidade: desejo.quantidade + 1 }
            : desejo
        );
      }
      return [...prevState, { ...item, quantidade: 1 }];
    });
    setImagemDestaque(item.imagem); // Definir a imagem em destaque
  };

  const removerDaListaDesejos = (id) => {
    setListaDesejos((prevState) => prevState.filter((desejo) => desejo.id !== id));
  };

  return (
    <DesejosContext.Provider
      value={{
        listaDesejos,
        imagemDestaque,
        adicionarAListaDesejos,
        removerDaListaDesejos,
        setImagemDestaque
      }}
    >
      {children}
    </DesejosContext.Provider>
  );
};

export const useDesejos = () => useContext(DesejosContext);
