import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Container} from '../components/Container';
import {AppBarBottomBarLayout} from '../layout/AppBarBottomBarLayout';
import {styled} from 'styled-components';
import {FloatingButton} from '../components/FloatingButton';

export const WalkListScreen = ({navigation}: any) => {
  const navigateToWalkDetailScreen = () => {
    navigation.navigate('WalkDetailScreen');
  };

  const navigateToWalkFormScreen = () => {
    navigation.navigate('WalkFormScreen');
  };

  return (
    <AppBarBottomBarLayout isAppBar={true} isBottomBar={true}>
      <ScreenSubTitle>죽전동</ScreenSubTitle>
      <ScreenTitle>산책 해주세요</ScreenTitle>
      <Container>
        <BoxWrap>
          <ImageWrap onPress={navigateToWalkDetailScreen}>
            <Text style={styles.imageText}>🐶</Text>
          </ImageWrap>
          <TextWrap>
            <Pressable onPress={navigateToWalkDetailScreen}>
              <Title>
                오늘 저녁 저희 귀여운 리트리버 산책 시켜주실분 구해요
              </Title>
            </Pressable>
            <SubTitle>2023-03-12 18:00 ~ 20:00</SubTitle>
            <SubTitle>죽전동</SubTitle>
            <SubTitle>1500원</SubTitle>
          </TextWrap>
        </BoxWrap>
      </Container>
      <FloatingButton label={'+'} onPress={navigateToWalkFormScreen} />
    </AppBarBottomBarLayout>
  );
};
const styles = StyleSheet.create({
  imageText: {
    fontSize: 80,
  },
});

const ScreenSubTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0 10px 10px;
`;
const ScreenTitle = styled(Text)`
  font-size: 30px;
  font-weight: 700;
  margin: 10px 0 10px 10px;
`;

const BoxWrap = styled(View)`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageWrap = styled(Pressable)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 100%;
  margin-left: 10px;
  background-color: #d9d9d9;
`;

const TextWrap = styled(View)`
  display: flex;
  justify-content: center;
  width: 60%;
  margin-left: 10px;
`;

const Title = styled(Text)`
  font-size: 17px;
`;

const SubTitle = styled(Text)`
  font-size: 15px;
  padding-top: 5px;
`;
