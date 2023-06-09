import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppButton from './common/AppButton';
import {moderateScale} from './utils/Metrics';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <AppButton title={'hello'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: moderateScale(15),
    padding: moderateScale(15),
  },
});
