import {View, Text} from 'react-native';
import React from 'react';
import styles from '../styles';
import AppButton from '../../../common/AppButton';

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text>SignUp</Text>
      <AppButton  title={'Signup'}/>
    </View>
  );
}
