import MapView, { Marker } from 'react-native-maps'
import React from 'react'

import mapStyle from '../styles/mapStyle'

export const MyMap = ({ handleLongPress, points, pointsFilter }) => {
  const colors = ['red', 'tomato', 'orange', 'yellow', 'gold', 'wheat', 'tan', 'linen', 'green', 'blue', 'aqua', 'violet', 'indigo']
  const randomNumber = Math.floor(Math.random() * colors.length)

  return (
    <MapView style={mapStyle.map} onLongPress={handleLongPress} >
      {
        pointsFilter && points.map(point =>
          <Marker
            key={point.name}
            coordinate={point.coordinate}
            pinColor={colors[randomNumber]}
            title={point.name}
          />
        )
      }
    </MapView>
  )
}
