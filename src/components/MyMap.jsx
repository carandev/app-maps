import { Dimensions,  StyleSheet } from 'react-native'
import MapView from 'react-native-maps';
import React from 'react'

export const MyMap = ({ handleLongPress }) => {
  return (
    <MapView 
        style={styles.map} 
        onLongPress={handleLongPress}
    />
  )
}

const styles = StyleSheet.create({
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
    },
})