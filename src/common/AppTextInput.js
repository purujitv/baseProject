import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS} from '../constants';
import {horizontalScale, moderateScale, verticalScale} from '../utils/Metrics';

export default function AppTextInput({
  title,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
  autoCaptalizaton,
  autoCorrect,
  height,
  width,
  editable,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={COLORS.PLACEHOLDER}
        autoCapitalize={autoCaptalizaton}
        style={{
          ...styles.textInput,
          height: height ? height : horizontalScale(47),
          width: width ? width : verticalScale(350),
        }}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={autoCorrect}
        editable={editable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(10),
    gap: horizontalScale(10),
  },
  textInput: {
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    color: COLORS.BLACK,
    backgroundColor: COLORS.WHITE,
    fontSize: moderateScale(15),
  },
  titleText: {
    fontFamily: FONTS.w500,
    fontSize: moderateScale(17),
  },
});
