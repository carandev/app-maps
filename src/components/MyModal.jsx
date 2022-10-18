import { Modal, View } from 'react-native'
import React from 'react'

import modalStyle from '../styles/modalStyle'

export const MyModal = ({ children, visibility }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visibility}>
      <View style={modalStyle.center}>
        <View style={modalStyle.modalView}>{children}</View>
      </View>
    </Modal>
  )
}
