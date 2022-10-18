import { Text, TextInput, View } from 'react-native'
import React from 'react'

import inputStyle from '../styles/inputStyle'

export const InputPointName = ({ title, ...props }) => {
  return (
    <View style={inputStyle.wrapper}>
      <Text style={inputStyle.label}>{title}</Text>
      <TextInput style={inputStyle.input} {...props} />
    </View>
  )
}
