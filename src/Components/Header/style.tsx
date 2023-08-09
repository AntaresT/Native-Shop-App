import styled from 'styled-components/native'

export const Header = styled.View`
  flex: 1;
  flexDirection: 'row',
  justifyContent: 'space-between',
  top: 80,
  paddingLeft: 15,
  paddingRight: 15
`

export const BtnHeader = styled.TouchableOpacity`
  height: 42px;
  maxWidth: 42px;
  flex: 1;
  zIndex: 999;
`