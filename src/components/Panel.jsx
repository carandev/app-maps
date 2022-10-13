import { Button, StyleSheet, View } from 'react-native'
import React from 'react'

export const Panel = ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button title={textLeft} onPress={onPressLeft} />
      <Button title="Mostrar / Ocultar" onPress={togglePointsFilter} />
    </View>
  )
}

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
