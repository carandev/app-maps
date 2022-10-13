import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export const InputPointName = ({ title, ...props }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{title}</Text>
      <TextInput style={styles.input} {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    marginBottom: 50
  },
  input: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc'
  }
})
