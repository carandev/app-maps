import { Button, View } from 'react-native'
import React from 'react'

import panelStyle from '../styles/panelStyle'

export const Panel = ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    <View style={panelStyle.panel}>
      <Button color="#8b8" title={textLeft} onPress={onPressLeft} />
      <Button color="#88d" title="Mostrar / Ocultar" onPress={togglePointsFilter} />
    </View>
  )
}
