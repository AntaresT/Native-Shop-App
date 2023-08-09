import { StyleSheet, View } from 'react-native'
import { TextInput } from "@react-native-material/core";
import { Container, FinishRequest, FinishText, InlineContainer, TextAndValueBox, Title, TotalText, TotalValue } from "./style";
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useProducts } from '../../Providers/Products';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';

export default function CheckoutForm() {

  const [clientName, setClientName] = useState<string>('');
  const [clientLastName, setClientLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [card, setCard] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');
  const [show, setShow] = useState(false);
  const [dateCheckout, setDateCheckout] = useState(new Date());
  const [dateString, setDateString] = useState<string>('');
  const {totalPrice, productsInCart} = useProducts();

  const router = useRouter();

  const onChange = (event, selectedDate) => {
    setDateCheckout(selectedDate)
    const mes = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const ano = String(selectedDate.getFullYear());
    const formatedDate = `${mes}/${ano}`;

    setDateString(formatedDate)
    setShow(false)
  };

  function handleChangeDate() {
    setShow(true)
  }

  function handleFinishRequest(){
    const finalRequest = {
      clientName,
      clientLastName,
      email,
      card,
      cvv,
      productsInCart,
      totalPrice
    }

    console.log(finalRequest)
  }
  
  return( 
    <Container>
      <Title>Pague com o cartão</Title>

        <InlineContainer>
          <TextInput
            label="First Name" 
            variant="outlined" 
            style={styles.name}
            color='#1D83E2'
            inputStyle={styles.inputVoucher}
            onChangeText={text => setClientName(text)}
          />

          <TextInput
            label="Last Name" 
            variant="outlined" 
            style={styles.name}
            color='#1D83E2'
            inputStyle={styles.inputVoucher}
            onChangeText={text => setClientLastName(text)}
          />
        </InlineContainer>


        <TextInput
          label="Email" 
          variant="outlined" 
          style={styles.voucher}
          color='#1D83E2'
          inputStyle={styles.inputVoucher}
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          label="Credit Card" 
          variant="outlined" 
          style={styles.voucher}
          color='#1D83E2'
          keyboardType='numeric'
          inputStyle={styles.inputVoucher}
          onChangeText={number => setCard(number)}
        />

      <InlineContainer>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={dateCheckout}
            mode={'date'}
            onChange={onChange}
          />
        )}

        <TextInput
          label="Date" 
          variant="outlined" 
          style={styles.date}
          color='#1D83E2'
          keyboardType='numeric'
          inputStyle={styles.inputVoucher}
          maxLength={9}
          value={dateString}
          onTouchEnd={() => handleChangeDate()}
        />
        
        <TextInput
          label="CVV" 
          variant="outlined" 
          style={styles.cvv}
          color='#1D83E2'
          keyboardType='numeric'
          inputStyle={styles.inputVoucher}
          onChangeText={number => setCvv(number)}
          maxLength={3}
        />
      </InlineContainer>

      <TextAndValueBox>
        <TotalText>Total</TotalText>
        <TotalValue>R$ {totalPrice},00</TotalValue>
      </TextAndValueBox>

      <FinishRequest onPress={() => { handleFinishRequest() }}>
        <LinearGradient  
          colors={['#7EF6B7', '#1D83E2']}
          start={{x: 0.0, y: 1.0}} 
          end={{x: 1, y: 1}}
          style={styles.linearGradientBtn}
        >
          <FinishText>Comprar</FinishText>
        </LinearGradient>
      </FinishRequest>

    </Container>
  )
}

const styles = StyleSheet.create({
  voucher: {
    marginTop: 32,
    width: 310,
  },
  inputVoucher: {
    color: 'white',
  },
  textVoucher: {
    color: '#7EF6B7'
  },
  cvv: {
    width: 75,
    marginTop: 32,
  },
  date: {
    width: 100,
    marginRight: 10,
    marginTop: 32,
  },
  name: {
    width: 150,
    marginRight: 10,
    marginTop: 32,
  },
  linearGradientBtn:{
    justifyContent: 'center',
    height: 42,
    width: '100%',
    borderRadius: 10,
  },
});
