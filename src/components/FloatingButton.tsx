import React from 'react';
import {Text} from 'react-native';
import {Pressable} from 'react-native';
import {styled} from 'styled-components';

type FloatingButtonProps = {
  label?: string;
  onPress: any;
};

export const FloatingButton = ({label, onPress}: FloatingButtonProps) => {
  return (
    <FloatingButtonWrap onPress={onPress}>
      <Label>{label}</Label>
    </FloatingButtonWrap>
  );
};

const FloatingButtonWrap = styled(Pressable)`
  position: absolute;
  right: 0;
  z-index: 90;
  bottom: 0;
  margin: 10px;
  background-color: #000000;
  width: 70px;
  height: 70px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Label = styled(Text)`
  color: white;
  font-size: 30px;
`;
