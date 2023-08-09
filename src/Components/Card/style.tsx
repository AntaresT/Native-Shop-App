import styled from "styled-components/native";

export const Container = styled.View`
  alignItems: center;
  flex: 1;
  justifyContent: center;
`

export const CardBox = styled.View`
  alignSelf: center;
  backgroundColor: #13171B;
  width: 99%;
  borderRadius: 10px;
  flex: 1;
`

export const ImageProd = styled.Image`
  width: 293px;
  maxHeight: 190px;
  borderRadius: 10px;
`

export const ProdTitle = styled.Text`
  textAlign: left;
  fontWeight: 500;
  lineHeight: 26px;
  fontSize: 25px;
  alignSelf: flex-start;
`

export const ProdDesc = styled.Text`
  textAlign: left;
  alignSelf: flex-start;
  color: #A1A3A5;
  fontSize: 16px;
  fontWeight: 400;
  marginTop: 25px;
  lineHeight: 20px; 
`
export const PriceSection = styled.View`
  flex: 1;
  flexDirection: row;
  justifyContent: flex-start;
  alignItems: baseline;
  marginTop: 28px;
`

export const Price = styled.Text`
  color: #E6E6E6;
  fontWeight: 600;
  fontSize: 32px;
  lineHeight: 39px;
  textAlign: center;
  marginRight: 9px;
`

export const PriceUnity = styled.Text`
  color: #A1A3A5;
`

export const Infobox = styled.View`
  flex: 1;
  padding: 15px;
`

export const AddCartBtn = styled.Text`
  alignSelf: center;
  borderRadius: 10px;
  fontSize: 24px;
  fontWeight: 500;
  width: 98%;
  textAlign: center;
  color: #7EF6B7;
  height: 93%;
  backgroundColor: #13171B;
  textTransform: uppercase;
`