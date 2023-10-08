import React from 'react';
import {AppBarBottomBarLayout} from '../layout/AppBarBottomBarLayout';
import {Text, View} from 'react-native';
import {styled} from 'styled-components';

export const WalkDetailScreen = () => {
  return (
    <AppBarBottomBarLayout isAppBar={true} isBottomBar={true} login={true}>
      <ImageWrap>
        <Image>
          <Text>🐶</Text>
        </Image>
      </ImageWrap>
      <InputWrap>
        <Title>오늘 저녁 저희 귀여운 리트리버 산책 시켜주실분 구해요 </Title>
        <SubText>
          저희집 귀여운 리트리버 산책 해 주실 분 구합니다~~~ 저희 집 강아지는
          물지도 않아요
        </SubText>
      </InputWrap>
    </AppBarBottomBarLayout>
  );
};

const ImageWrap = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
const Image = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #d9d9d9;
`;

const InputWrap = styled(View)`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding-top: 10%;
`;
const Title = styled(Text)`
  height: 80px;
  font-size: 20px;
`;

const SubText = styled(Text)``;
