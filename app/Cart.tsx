import { Text, View, StyleSheet } from "react-native";
import Header from "../src/Components/Header/Header";
import ItemInCart from "../src/Components/ItemInCart/ItemInCart";
import { StatusBar } from "expo-status-bar";

export default function Cart() {

  return (
    <View style={styles.container}>
      <Header />
      <ItemInCart />
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13171B',
    alignItems: 'center',
  },
});