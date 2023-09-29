import React from 'react';
import {Text, View} from 'react-native';
import {ModalLayout} from '../layout/ModalLayout';
import {styled} from 'styled-components';
import {Input} from '../components/Input';

export const WalkFormScreen = () => {
  return (
    <ModalLayout>
      <ImageWrap>
        <Image>
          <Text>🐶</Text>
        </Image>
      </ImageWrap>
      <InputWrap>
        <Input placeholder="기간" />
        <Input placeholder="총금액" />
        <Input placeholder="제목" />
        <Input placeholder="내용" />
        <Input placeholder="만남 희망 장소" />
      </InputWrap>
    </ModalLayout>
  );
};

const ImageWrap = styled(View)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: flex-end;
`;
const Image = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-left: 10px;
  background-color: #d9d9d9;
`;

const InputWrap = styled(View)`
  height: 100%;
  width: 100%;
  display: flex;
  padding-top: 10%;
  align-items: center;
`;
