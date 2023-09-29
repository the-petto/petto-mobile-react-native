import React from 'react';
import {View} from 'react-native';
import {styled} from 'styled-components';

type BottomAppBarProps = {
  children?: React.ReactNode;
};

export const BottomAppBar = ({children}: BottomAppBarProps) => {
  return <AppBarWrap>{children}</AppBarWrap>;
};

const AppBarWrap = styled(View)`
  height: 60px;
  background-color: #e8e8e8;
  justify-content: center;
  align-items: center;
`;
