import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import {horizontalScale, moderateScale, verticalScale} from '../utils/Metrics';

export default function AppButton({title, onPress, height, width,}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...styles.button,
          height: height ? height : horizontalScale(47),
          width: width ? width : verticalScale(343),
        }}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: COLORS.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(12),
  },
  buttonText: {
    color: COLORS.WHITE,
    fontFamily: FONTS.w500,
    fontSize: moderateScale(20),
  },
});
