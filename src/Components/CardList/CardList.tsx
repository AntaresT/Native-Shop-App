import { Container } from "./style";
import { useProducts } from '../../Providers/Products';
import Card from "../Card/Card";
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { useRef, useState } from "react";
import Header from "../Header/Header";
import { Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function CardList() {

  const {products} = useProducts();
  const [index, setIndex] = useState<number>(0);
  const router = useRouter();

  function CardComponent({item}) {

    return  <Card 
              id={item.id}
              description={item.description}
              imgSrc={item.imgSrc}
              price={item.price}
              text={item.text} 
              quantity={item.quantity}
            />
  }

  return (
    <Container>
      <Header />
      <Carousel
        layout={"stack"}
        data={products}
        sliderWidth={400}
        itemWidth={310}
        renderItem={CardComponent}
        onSnapToItem={(position) => setIndex(position)}
      />
      <Pagination
        dotsLength={products.length}
        activeDotIndex={index}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: '#e5dedc'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
      <TouchableOpacity onPress={() => { router.push('/Cart') }}>
        <Text>Carrinho</Text>
      </TouchableOpacity>
    </Container>
  )
}