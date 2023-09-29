import React from 'react';
import {View} from 'react-native';
import {AppBar} from '../components/AppBar';
import {BottomAppBar} from '../components/BottomAppBar';
import {styled} from 'styled-components';

type AppBarBottomBarLayoutProps = {
  isAppBar?: boolean;
  isBottomBar?: boolean;
  children: React.ReactNode;
};
export const AppBarBottomBarLayout = ({
  isAppBar,
  isBottomBar,
  children,
}: AppBarBottomBarLayoutProps) => {
  return (
    <LayoutWrap>
      {isAppBar && <AppBar />}
      <ChildrenWrap>{children}</ChildrenWrap>
      {isBottomBar && <BottomAppBar />}
    </LayoutWrap>
  );
};

const LayoutWrap = styled(View)`
  width: 100%;
  height: 100%;
`;

const ChildrenWrap = styled(View)`
  flex: 1;
`;
