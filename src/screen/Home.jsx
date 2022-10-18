import React from 'react'
import { View, Button } from 'react-native'

import appStyle from '../styles/appStyle'
import { MyMap, InputPointName, MyModal, Panel, List } from '../components'

const Home = ({
  handleChangeText,
  handleCloseModal,
  handleList,
  handleLongPress,
  handleSubmit,
  points,
  pointsFilter,
  togglePointsFilter,
  visibility,
  visibilityFilter
}) => {
  return (
    <>
        <MyMap handleLongPress={handleLongPress} points={points} pointsFilter={pointsFilter} />
        <Panel textLeft="List" togglePointsFilter={togglePointsFilter} onPressLeft={handleList} />
        <MyModal visibility={visibility}>
            {visibilityFilter === 'new_points'
              ? <View style={appStyle.form}>
                <InputPointName
                    placeholder="Nombre del punto"
                    title="Nombre"
                    onChangeText={handleChangeText}
                />
                <Button color="#47d" title="Aceptar" onPress={handleSubmit} />
            </View>

              : <List closeModal={handleCloseModal} points={points} />
                }
        </MyModal>
    </>
  )
}

export default Home
