import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  top: 80px;
`

export const Title = styled.Text`
  alignSelf: center;
  fontSize: 24px;
  textTransform: uppercase;
`

export const InlineContainer = styled.View`
  flexDirection: row;
`

export const TextAndValueBox = styled.View`
  flexDirection: row;
  marginTop: 13px;
`

export const TotalText = styled.Text`
  fontSize: 16px;
  color: #738291;
  alignSelf: flex-end;
`

export const TotalValue = styled.Text`
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

