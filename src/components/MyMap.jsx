import { Dimensions, StyleSheet } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import React from 'react'

export const MyMap = ({ handleLongPress, points, pointsFilter }) => {
  return (
    <MapView style={styles.map} onLongPress={handleLongPress} >
      {
        pointsFilter && points.map(point =>
          <Marker
            key={point.name}
            coordinate={point.coordinate}
            title={point.name}
          />
        )
      }
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
})
