import {Text, View} from 'react-native';
import React from 'react';
import styles from '../styles';
import AppButton from '../../../common/AppButton';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <AppButton title={'Login'}/>
    </View>
  );
}
