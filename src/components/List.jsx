import {
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'

export const List = ({ points, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={points.map((point) => point.name)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal} />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 15
  },
  list: {
    height: Dimensions.get('window').height
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 50,
    justifyContent: 'center',
    padding: 15
  }
})
