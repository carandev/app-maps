import {
  Button,
  FlatList,
  Text,
  View
} from 'react-native'
import React from 'react'

import listStyle from '../styles/ListStyle'

export const List = ({ points, closeModal }) => {
  return (
    <>
      <View style={listStyle.list}>
        <FlatList
          data={points.map((point) => point.name)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={listStyle.item}>{item}</Text>}
        />
      </View>
      <View style={listStyle.button}>
        <Button color="#59d" title="Cerrar" onPress={closeModal} />
      </View>
    </>
  )
}
