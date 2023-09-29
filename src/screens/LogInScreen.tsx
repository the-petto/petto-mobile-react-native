import React, {useState} from 'react';
import styled from 'styled-components/native';
import {CenterContainer} from '../components/CenterContainer';
import {Input} from '../components/Input';
import {Button} from '../components/Button';

export const LogInScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigateToWalkListScreen = () => {
    navigation.navigate('WalkListScreen');
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate('SignUpScreen');
  };

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <CenterContainer>
      <Logo>🐶</Logo>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
      />
      <Button label="Login" onPress={navigateToWalkListScreen} />
      <SignUpText onPress={navigateToSignUpScreen}>회원가입</SignUpText>
    </CenterContainer>
  );
};

const Logo = styled.Text`
  font-size: 80px;
  padding-bottom: 20px;
`;

const SignUpText = styled.Text`
  padding-top: 10px;
  width: 300px;
  text-align: right;
`;
