import { StyleSheet, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import CheckoutForm from '../src/Components/CheckoutForm/CheckoutForm';

export default function Checkout() {

  return (
      <View style={styles.container}>
        <CheckoutForm />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#13171B',
    justifyContent: 'center',
  },
});
