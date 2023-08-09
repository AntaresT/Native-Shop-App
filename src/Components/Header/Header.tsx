import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Logo from '../../assets/mi4ulogo.svg'
import { Ionicons } from '@expo/vector-icons'; 
import { useRouter } from 'expo-router'
import { Badge, Stack } from "@react-native-material/core";
import React from 'react';
import { useProducts } from '../../Providers/Products';

export default function Header(){

  const {productsInCart} = useProducts();
  
  const router = useRouter();
  const itemsInCartQuantity = productsInCart.length

  return(
    <View style={styles.header}>
      <TouchableOpacity onPress={() => { router.push('/') }}>
        <Logo />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { router.push('/Cart') }}>
        <Stack fill center spacing={4}>
          <Ionicons name="cart-outline" size={40} color="#7EF6B7" />
          <Badge label={itemsInCartQuantity} style={styles.badge} color='#1D83E2' tintColor='#7EF6B7' />
        </Stack>
      </TouchableOpacity>
    </View>   
  )

}

const styles = StyleSheet.create({
  header: {
    align: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    top: 80,
    paddingLeft: 15,
    paddingRight: 15,
    width: '90%'
  },
  badge:{
    bottom: 40,
    right: -12,
  }
});