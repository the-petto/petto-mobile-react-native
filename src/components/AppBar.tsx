import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styled} from 'styled-components';
import Icon from 'react-native-vector-icons/Ionicons';

type AppBarProps = {
  title?: string;
};

export const AppBar = ({title}: AppBarProps) => {
  const navigation = useNavigation();

  return (
    <AppBarWrap>
      <Start>
        <Icon
          name="chevron-back-outline"
          size={30}
          style={styles.backIcon}
          color="#000000"
          onPress={() => navigation.goBack()}
        />
      </Start>
      <Center>{title ?? '🐶'}</Center>
      <End>
        <Icon name="search" size={30} style={styles.backIcon} color="#000000" />
      </End>
    </AppBarWrap>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    display: 'flex',
  },
});

const AppBarWrap = styled(View)`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Start = styled(View)`
  font-weight: 700;
  padding-left: 10px;
`;

const Center = styled(Text)`
  font-size: 25px;
  font-weight: 700;
  display: flex;
`;

const End = styled(View)`
  font-weight: 700;
  padding-right: 10px;
`;
