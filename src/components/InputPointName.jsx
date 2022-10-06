import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputPointName = ({ title, ...props}) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...props} />
    </View>
  )
}

export default InputPointName

const styles = StyleSheet.create({
    wrapper: {
        height: 40,
    },
})