import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styled} from 'styled-components';
import {BottomAppBar} from '../components/BottomAppBar';

type ModalLayoutProps = {
  children: React.ReactNode;
};

export const ModalLayout = ({children}: ModalLayoutProps) => {
  const navigation = useNavigation();

  return (
    <ModalWrap>
      <Header>
        <Icon
          name="close"
          size={40}
          color="#000000"
          style={styles.closeIcon}
          onPress={() => navigation.goBack()}
        />
      </Header>
      <Contents>{children}</Contents>
      <BottomAppBar />
    </ModalWrap>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    margin: 10,
  },
});

const ModalWrap = styled(View)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Contents = styled(View)`
  flex: 1;
`;
const Header = styled(View)`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;
