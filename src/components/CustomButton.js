import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {yellow} from '../colour';

const CustomButton = props => (
  <TouchableOpacity onPress={props.onPress} style={style.buttonContainer}>
    <Text style={style.title}>{props.title}</Text>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: yellow,
    width: '100%',
  },
  title: {
    fontSize: 14,
    color: yellow,
  },
});
export default CustomButton;
