import React, { useState } from 'react'
import { View } from 'react-native'

import Home from './src/screen/Home'
import appStyle from './src/styles/appStyle'

export default function App () {
  const [points, setPoints] = useState([])
  const [pointName, setPointName] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(true)
  const [temporalPoint, setTemporalPoint] = useState({})
  const [visibilityFilter, setVisibilityFilter] = useState('new_points')

  const handleLongPress = ({ nativeEvent }) => {
    setTemporalPoint(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = (text) => {
    setPointName(text)
  }

  const handleSubmit = () => {
    if (pointName.trim() !== '') {
      const newPoint = { coordinate: temporalPoint, name: pointName }

      setPoints((lastPoints) => lastPoints.concat(newPoint))
    }

    setVisibility(false)
    setPointName('')
  }

  const handleList = () => {
    setVisibilityFilter('all_points')
    setVisibility(true)
  }

  const handleCloseModal = () => {
    setVisibilityFilter('new_points')
    setVisibility(false)
  }

  const togglePointsFilter = () => {
    setPointsFilter(lastValue => !lastValue)
  }

  return (
    <View style={appStyle.container}>
        <Home
          handleChangeText={handleChangeText}
          handleCloseModal={handleCloseModal}
          handleList={handleList}
          handleLongPress={handleLongPress}
          handleSubmit={handleSubmit}
          points={points}
          pointsFilter={pointsFilter}
          togglePointsFilter={togglePointsFilter}
          visibility={visibility}
          visibilityFilter={visibilityFilter}
        />
    </View>
  )
}
