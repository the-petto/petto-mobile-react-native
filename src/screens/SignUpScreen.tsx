import React, {useState} from 'react';
import {CenterContainer} from '../components/CenterContainer';
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import {sign} from '../api/auth';
import {AppBarBottomBarLayout} from '../layout/AppBarBottomBarLayout';

export const SignUpScreen = ({navigation}: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickName] = useState('');

  const navigateToWalkListScreen = async (
    username: string,
    password: string,
    nickname: string,
  ) => {
    let signResult = await sign({
      username,
      password,
      nickname,
    });
    if (!signResult) {
      return;
    }
    if (signResult.message === 'success') {
      navigation.navigate('LogInScreen');
    }
  };

  const handleNickNameChange = (text: string) => {
    setNickName(text);
  };

  const handleUsernameChange = (text: string) => {
    setUsername(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <AppBarBottomBarLayout isAppBar={true} isBottomBar={false} login={false}>
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
          placeholder="nickname"
          value={nickname}
          onChangeText={handleNickNameChange}
        />
        <Button
          label="SignUp"
          onPress={() => navigateToWalkListScreen(username, password, nickname)}
        />
      </CenterContainer>
    </AppBarBottomBarLayout>
  );
};
