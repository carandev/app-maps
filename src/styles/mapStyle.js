import { Dimensions, StyleSheet } from 'react-native'

const mapStyle = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})

export default mapStyle
