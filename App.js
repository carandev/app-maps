import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { MyMap, InputPointName, MyModal, Panel, List } from './src/components';

export default function App() {
  const [points, setPoints] = useState([])
  const [pointName, setPointName] = useState('')
  const [visibility, setVisibility] = useState(false)
  const [temporalPoint, setTemporalPoint] = useState({})
  const [visibilityFilter, setVisibilityFilter] = useState('new_points')

  const handleLongPress = ({ nativeEvent }) => {

    setTemporalPoint(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleChangeText = text => {
    setPointName(text)
  }

  const handleSubmit = () => {
    const newPoint = {coordinate: temporalPoint, name: pointName}
    setPoints(lastPoints => lastPoints.concat(newPoint))
    setVisibility(false)
    setPointName('')
  }

  const handleList = () => {
    setVisibilityFilter('all_points')
    setVisibility(true)
  }

  return (
    <View style={styles.container}>
      <MyMap handleLongPress={handleLongPress} />
      <Panel onPressLeft={handleList} textLeft='List'/>
      <MyModal visibility={visibility}>
        {
          visibilityFilter === 'new_points'
          ? 
          <View style={styles.form}>
            <InputPointName 
            title='Nombre'
            placeholder='Nombre del punto'
            onChangeText={handleChangeText}
            />
            <Button 
              title='Aceptar'
              onPress={handleSubmit}
            />
          </View>
          : <List points={points} closeModal={() => setVisibility(false)} />
        }
        
      </MyModal>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
