import React, { createContext, useContext, useState } from 'react';
import data from '../mock.js'
import { ImageSourcePropType } from 'react-native';

interface ProductsType {
  products: { 
    id: number,
    price: number,
    text: string,
    description: string,
    imgSrc: ImageSourcePropType;
    quantity: number,
  }[],
  totalPrice: number,
  productsInCart: {
    id: number,
    price: number,
    text: string,
    description: string,
    imgSrc: ImageSourcePropType;
    quantity: number,
  }[],
  setProducts: React.Dispatch<React.SetStateAction<{ 
    id: number,
    price: number,
    text: string,
    description: string,
    imgSrc: ImageSourcePropType,
    quantity: number,
  }[]>>,
  setProductsInCart: React.Dispatch<React.SetStateAction<{ 
    id: number,
    price: number,
    text: string,
    description: string,
    imgSrc: ImageSourcePropType;
    quantity: number,
  }[]>>,
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>,
}

// Crie um novo contexto
const ProductsContext = createContext({} as ProductsType);

// Crie um provedor para o contexto
export const InfoProductsProvider = ({ children }) => {
  // Defina o estado
  const [products, setProducts] = useState(data);
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0)

  // Passe o estado e a função de atualização como valores para o provedor
  return (
    <ProductsContext.Provider value={{ products, setProducts, productsInCart, setProductsInCart, totalPrice, setTotalPrice }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Crie um hook personalizado para consumir o contexto
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error('useUser deve ser usado dentro de um UserProvider');
  }
  return context;
};
