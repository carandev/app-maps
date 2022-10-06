import { StyleSheet, Modal, Text, View } from 'react-native'
import React from 'react'

const MyModal = ({ children, visibility}) => {
  return (
      <Modal
        animationType='slide'
        transparent={true}
        visible={visibility}
      >
        <View style={styles.center}>
          <View style={styles.modalView}>
            {children}
          </View>
        </View>
      </Modal>
  )
}

export default MyModal

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    }
  }
})