import { StyleSheet } from "react-native";
import { Container, Title, ImageProd, ProdDesc, ProdBox, 
  AddRemoveAndValue, 
  CloseBtn, CloseBtnText, SubTotalSection, TextAndValueBox, 
  SubTotalText, SubTotalValue, FinishRequest, 
  FinishText, CartInformation, CartItems, TotalValue, Price, Total,
  AddRemove,  
  BtnStyle,
  BtnText} from "./style";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { TextInput } from "@react-native-material/core";
import { useProducts } from "../../Providers/Products";
import Carousel from "react-native-snap-carousel";

export default function ItemInCart() {

  const router = useRouter();

  const [voucherText, setVoucherText] = useState<string>('');
  const [total, setTotal] = useState<number>();
  const {productsInCart, setTotalPrice} = useProducts();
  const [index, setIndex] = useState<number>(0);

  const cupomValue = 20;

  function handleRemoveItem(index){
    const itemsArray = productsInCart
    delete itemsArray[index]
    return productsInCart
  }

  function handleDecrease(item){
    if(item.quantity === 1){
      return 1
    }

    const itemUpdated = {...item, quantity: item.quantity-1}
    
    if(index !== -1){
      productsInCart[index] = itemUpdated
    }

    handleProductPrice(item)
    return productsInCart

  }

  function handleIncrease(item){
    const itemUpdated = {...item, quantity: item.quantity+1}

    if(index !== -1){
      productsInCart[index] = itemUpdated
    }
    
    handleProductPrice(item)
    return productsInCart
  }

  function handleProductPrice(item){
    let totalItemPrice = 0
    if(productsInCart.length === 1){
      totalItemPrice = productsInCart[0].quantity * item.productsInCart[0].price
    }else{
      for (let i = 0; i < productsInCart.length; i++) {
        const item = productsInCart[i];
        const itemTotal = item.quantity * item.price;
        totalItemPrice += itemTotal;
      }
    }
    setTotal(totalItemPrice)
    setTotalPrice(totalItemPrice)
    return totalItemPrice
  }

  function ItemCart({item}) {
    return (
      <LinearGradient  
        colors={['#7EF6B7', '#1D83E2']}
        start={{x: 0, y: 1}} 
        end={{x: 1, y: 1}}
        style={styles.linearGradient}
      >
        <ProdBox>
          <CloseBtn onPress={() => { handleRemoveItem(index) }}>
            <CloseBtnText>X</CloseBtnText>
          </CloseBtn>
          <ImageProd source={item.imgSrc}/>
            <ProdDesc>
              {item.text}
            </ProdDesc>
          <AddRemoveAndValue>

            <AddRemove>
              <BtnStyle onPress={() => {handleDecrease(item)} }>
                <BtnText> - </BtnText>
              </BtnStyle>

              <BtnText>{item.quantity}</BtnText>

              <BtnStyle onPress={() => {handleIncrease(item)} }>
                <BtnText> + </BtnText>
              </BtnStyle>
            </AddRemove>

            <TotalValue>
              <Price>{item.quantity} x R$ {item.price} = </Price>
              <Total>R$ { item.price * item.quantity }</Total>
            </TotalValue>

          </AddRemoveAndValue>
        </ProdBox>
      </LinearGradient>
    )
  }

  useEffect(() => {
    handleProductPrice({productsInCart});
  }, []);

  return(

    <Container>
      <Title>Meu carrinho</Title>

      <CartItems>
        {<Carousel
          layout={"stack"}
          data={productsInCart}
          sliderWidth={400}
          itemWidth={310}
          renderItem={ItemCart}
          onSnapToItem={(position) => setIndex(position)}
        />}
      </CartItems>

      <CartInformation>
        <TextInput 
          label="Cupom" 
          variant="outlined" 
          style={styles.voucher}
          color='#1D83E2'
          inputStyle={styles.inputVoucher}
          onChangeText={text => setVoucherText(text)}
        />

        <SubTotalSection>
          <TextAndValueBox>
            <SubTotalText>Subtotal</SubTotalText>
            <SubTotalValue>R$ {total},00</SubTotalValue>
          </TextAndValueBox>

        { (voucherText === 'mi4u') ?
          <TextAndValueBox>
            <SubTotalText>Cupom aplicado</SubTotalText>
            <SubTotalValue>-R$ {cupomValue},00</SubTotalValue>
          </TextAndValueBox>
          :
          <></>
        } 

          <LinearGradient  
          colors={['#7EF6B7', '#1D83E2']}
          start={{x: 0, y: 1}} 
          end={{x: 1, y: 1}}
          style={styles.linearGradientLine}
          ></LinearGradient>

          <TextAndValueBox>
            <SubTotalText>Total</SubTotalText>
            <SubTotalValue>R$ {voucherText === 'mi4u'? total - cupomValue : total},00</SubTotalValue>
          </TextAndValueBox>

        </SubTotalSection>

        <FinishRequest onPress={() => { router.push('/Checkout') }}>
          <LinearGradient  
            colors={['#7EF6B7', '#1D83E2']}
            start={{x: 0.0, y: 1.0}} 
            end={{x: 1, y: 1}}
            style={styles.linearGradientBtn}
          >
            <FinishText>Finalizar pedido</FinishText>
          </LinearGradient>
        </FinishRequest>
      </CartInformation>

      
    </Container>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 230,
    width: 320,
    borderRadius: 10,
    paddingVertical:3,
    paddingHorizontal: 3,
    marginTop: 15,
  },
  linearGradientBtn:{
    justifyContent: 'center',
    height: 42,
    width: '100%',
    borderRadius: 10,
  },
  voucher: {
    marginTop: 32,
    height: 42,
    width: 235,
    left: -50
  },
  inputVoucher: {
    color: 'white',
  },
  textVoucher: {
    color: '#7EF6B7'
  },
  linearGradientLine: {
    width: 300,
    flex: 1,
    maxHeight: 2,
    marginTop: 14,
  }
});