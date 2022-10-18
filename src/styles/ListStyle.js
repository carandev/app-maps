import { Dimensions, StyleSheet } from 'react-native'

const listStyle = StyleSheet.create({
  button: {
    paddingBottom: 15
  },
  list: {
    height: Dimensions.get('window').height - 250
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#aaf',
    color: '#eee',
    textTransform: 'uppercase',
    textAlign: 'center',
    height: 50,
    justifyContent: 'center',
    padding: 15
  }
})

export default listStyle
