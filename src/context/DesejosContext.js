// src/context/DesejosContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DesejosContext = createContext();

export const useDesejos = () => useContext(DesejosContext);

export const DesejosProvider = ({ children }) => {
  const [listaDesejos, setListaDesejos] = useState([]);
  const [imagemDestaque, setImagemDestaque] = useState(null);

  // Carregar os dados salvos ao iniciar o aplicativo
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const desejosSalvos = await AsyncStorage.getItem('listaDesejos');
        const imagemSalva = await AsyncStorage.getItem('imagemDestaque');
        
        if (desejosSalvos) setListaDesejos(JSON.parse(desejosSalvos));
        if (imagemSalva) setImagemDestaque(JSON.parse(imagemSalva));
      } catch (error) {
        console.error('Erro ao carregar dados do AsyncStorage:', error);
      }
    };
    carregarDados();
  }, []);

  // Salvar a lista de desejos e a imagem em destaque sempre que forem atualizados
  useEffect(() => {
    AsyncStorage.setItem('listaDesejos', JSON.stringify(listaDesejos));
  }, [listaDesejos]);

  useEffect(() => {
    if (imagemDestaque) {
      AsyncStorage.setItem('imagemDestaque', JSON.stringify(imagemDestaque));
    } else {
      AsyncStorage.removeItem('imagemDestaque'); // Remove a imagem se for null
    }
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
    setListaDesejos((prevState) => {
      return prevState
        .map((desejo) => {
          if (desejo.id === id) {
            return { ...desejo, quantidade: desejo.quantidade - 1 };
          }
          return desejo;
        })
        .filter((desejo) => desejo.quantidade > 0); // Remove o item se a quantidade for zero
    });
  
    // Atualizar a imagem em destaque caso o item removido seja o destaque atual e a quantidade chegue a zero
    const itemRemovido = listaDesejos.find((desejo) => desejo.id === id);
    if (imagemDestaque === itemRemovido?.imagem && itemRemovido?.quantidade === 1) {
      setImagemDestaque(null);
    }
  };
  

  return (
    <DesejosContext.Provider
      value={{
        listaDesejos,
        imagemDestaque,
        adicionarAListaDesejos,
        removerDaListaDesejos,
        setImagemDestaque,
      }}
    >
      {children}
    </DesejosContext.Provider>
  );
};

