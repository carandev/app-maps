import React, { useState } from 'react'
import { StyleSheet, View, Button, Dimensions } from 'react-native'

import { MyMap, InputPointName, MyModal, Panel, List } from './src/components'

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
    <View style={styles.container}>
      <MyMap handleLongPress={handleLongPress} points={points} pointsFilter={pointsFilter} />
      <Panel textLeft="List" togglePointsFilter={togglePointsFilter} onPressLeft={handleList} />
      <MyModal visibility={visibility}>
        {visibilityFilter === 'new_points'
          ? <View style={styles.form}>
              <InputPointName
                placeholder="Nombre del punto"
                title="Nombre"
                onChangeText={handleChangeText}
              />
              <Button title="Aceptar" onPress={handleSubmit} />
          </View>

          : <List closeModal={handleCloseModal} points={points} />
            }
      </MyModal>
    </View>
  )
}

const styles = StyleSheet.create({
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
