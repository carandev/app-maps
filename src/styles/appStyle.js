import { Dimensions, StyleSheet } from 'react-native'

const appStyle = StyleSheet.create({
  form: {
    padding: 15,
    minWidth: Dimensions.get('window').width - 100
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default appStyle
