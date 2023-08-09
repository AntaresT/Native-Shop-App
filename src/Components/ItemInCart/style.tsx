import styled from "styled-components/native";

export const Container = styled.View`
  alignItems: center;
  top: 100px;
`

export const Title = styled.Text`
  fontSize: 24px;
  textTransform: uppercase;
`

export const ProdBox = styled.View`
  alignSelf: center;
  backgroundColor: #13171B;
  width: 99%;
  borderRadius: 10px;
  flex: 1;
  alignItems: flex-start;
`

export const ImageProd = styled.Image`
  width: 100%;
  borderRadius: 10px;
  height: 97px;
`

export const ProdDesc = styled.Text`
  color: #E6E6E6;
  fontSize: 16px;
  padding: 16px;
`

export const AddRemoveAndValue = styled.View`
  paddingLeft: 11px;
  paddingBottom: 15px;
  flex: 1;
  alignItems: flex-end;
  justifyContent: space-between; 
  flexDirection: row;
  width: 100%;
`

export const CloseBtn = styled.TouchableOpacity`
  height: 42px;
  width: 42px;
  backgroundColor: #20262BCC;
  flex: 1;
  borderRadius: 8px;
  alignSelf: flex-end;
  position: absolute;
  zIndex: 1;
`

export const CloseBtnText = styled.Text`
  alignSelf: center;
  fontSize: 30px;

`

export const CartInformation = styled.View`
  alignItems: center;
  top: 10px;
`

export const SubTotalSection = styled.View`
  alignItems: flex-end;
  marginTop: 15px;
`

export const TextAndValueBox = styled.View`
  flexDirection: row;
  marginTop: 13px;
`

export const SubTotalText = styled.Text`
  fontSize: 16px;
  color: #738291;
  alignSelf: flex-end;
`

export const SubTotalValue = styled.Text`
  fontSize: 24px;
  fontWeight: 600;
  marginLeft: 10px;
`

export const FinishRequest = styled.TouchableOpacity`
  flex: 1;
  width: 300px;
  marginTop: 30px;
  justifyContent: flex-start;
`

export const FinishText = styled.Text`
  height: 90%;
  width: 98%;
  backgroundColor: #13171B;
  textAlignVertical: center;
  alignSelf: center;
  textAlign: center;
  borderRadius: 7px;
  color: #7EF6B7;
  fontSize: 24px;
`

export const CartItems = styled.View`
  height: 250px;
  alignSelf: center;
`

export const TotalValue = styled.View`
  paddingRight: 14px;
`

export const Price = styled.Text`
  fontSize: 14px;
  alignSelf: center;
  fontWeight: 400;
`

export const Total = styled.Text`
  fontSize: 24px;
  fontWeight: 600;
`

export const AddRemove = styled.View`
  height: 42px;
  width: 130px;
  border: 2px solid #E6E6E6;
  border-radius: 10px; 
  flexDirection: row;
  justifyContent: space-between;
  alignItems: center;
  boxSizing: border-box;
`

export const BtnStyle = styled.TouchableOpacity`
  height: 42px;
  width: 42px;
  border: 2px solid #E6E6E6;
  border-radius: 10px;
  alignItems: center;
  justifyContent: center;
`

export const BtnText = styled.Text`
  fontSize: 24px;
`