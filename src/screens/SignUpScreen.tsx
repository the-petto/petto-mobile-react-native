import React, {useState} from 'react';
import {CenterContainer} from '../components/CenterContainer';
import {Input} from '../components/Input';
import {Button} from '../components/Button';

export const SignUpScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigateToWalkListScreen = () => {
    navigation.navigate('LogInScreen');
  };

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handlePasswordConfirmChange = (text: string) => {
    setPasswordConfirm(text);
  };

  return (
    <CenterContainer>
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
      <Input
        placeholder="Password confirm"
        value={passwordConfirm}
        onChangeText={handlePasswordConfirmChange}
      />
      <Button label="SignUp" onPress={navigateToWalkListScreen} />
    </CenterContainer>
  );
};
