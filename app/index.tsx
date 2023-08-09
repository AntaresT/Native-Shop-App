import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { InfoProductsProvider } from '../src/Providers/Products';
import CardList from '../src/Components/CardList/CardList';
import { useRouter } from 'expo-router';

export default function App() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      <CardList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13171B'
  },
});

// Aqui vai ter um mock com os dados do Card
// O provider pode ficar no App.tsx que ficaria na raiz 
// e esse arquivo nao existiria mais.
// 