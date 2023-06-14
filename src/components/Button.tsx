import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Text} from 'react-native';
import {styled} from 'styled-components';

export const Button = ({label, onPress}: any) => {
  return (
    <ButtonWrap onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </ButtonWrap>
  );
};

const ButtonWrap = styled(TouchableOpacity)`
  width: 300px;
  background-color: black;
  border-radius: 10px;
  padding: 10px 20px;
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  text-align: center;
`;
