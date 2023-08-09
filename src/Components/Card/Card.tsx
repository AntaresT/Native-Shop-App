import { StyleSheet, TouchableOpacity, ImageSourcePropType, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AddCartBtn, CardBox, Container, ImageProd, Infobox, Price, PriceSection, PriceUnity, ProdDesc, ProdTitle } from './style';
import { useProducts } from '../../Providers/Products';
import { Button, Snackbar } from 'react-native-paper';
import { useState } from "react";

interface Products {
  id: number,
  price: number,
  text: string,
  description: string,
  imgSrc: ImageSourcePropType;
  quantity: number
}

export default function Card(props: Products){

  const {productsInCart, setProductsInCart} = useProducts();
  
  const [visible, setVisible] = useState(false);

  function handleAddToCart(itemSelected) {

    const itemToFind = productsInCart.find(product => product.id === itemSelected.id);

    if(itemToFind){
      setVisible(true)
      return <View style={{flex: 1}}>
              <Snackbar
                visible={visible}
                onDismiss={() => setVisible(false)}
                action={{
                  label: 'Undo',
                  onPress: () => {
                    // Do something
                  },
                }}>
                Hey there! I'm a Snackbar.
              </Snackbar>
            </View>
    }else{
      if(productsInCart.length == 0){
        setProductsInCart([itemSelected])
      }else{
        setProductsInCart(current => [...current, itemSelected])
      }
    }

  }
  
  return(
    <Container>
      <LinearGradient  
        colors={['#7EF6B7', '#1D83E2']}
        start={{x: 0.0, y: 1.0}} 
        end={{x: 1, y: 1}}
        style={styles.linearGradient}
      >
        <CardBox>
          <ImageProd source={props.imgSrc}/>
          <Infobox>

            <ProdTitle>{props.text}</ProdTitle>
            <ProdDesc>{props.description}</ProdDesc>

            <PriceSection>
              <Price>R$ {props.price},00</Price>
              <PriceUnity>por unidade</PriceUnity>
            </PriceSection>

            <TouchableOpacity onPress={() => { handleAddToCart(props) }}>
              <LinearGradient  
                colors={['#7EF6B7', '#1D83E2']}
                start={{x: 0.0, y: 1.0}} 
                end={{x: 1, y: 1}}
                style={styles.linearGradientBtn}
              >
                <AddCartBtn>Adicionar ao carrinho</AddCartBtn>
              </LinearGradient>
            </TouchableOpacity>

          </Infobox>
        </CardBox>

      </LinearGradient>
    </Container>
  )

}

const styles = StyleSheet.create({
  linearGradient: {
    height: 425,
    width: 300,
    borderRadius: 10,
    paddingVertical:3,
    paddingHorizontal: 2
  },
  linearGradientBtn:{
    justifyContent: 'center',
    height: 35,
    width: '100%',
    borderRadius: 10,
  }
});