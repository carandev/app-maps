import { Dimensions, StyleSheet } from 'react-native'

const panelStyle = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#336',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('window').width
  }
})

export default panelStyle
