import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import Row from './Row'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    width: 240,
    fontSize: 36,
  },
})

export default props => {
  const [name, setName] = useState('Mary')
  const [surname, setSurname] = useState('Poppins')

  function handleNameChange(newValue) {
    setName(newValue)
  }
  function handleSurnameChange(newValue) {
    setSurname(newValue)
  }

  return (
    <View style={styles.container}>
      <Row label='Name'>
        <TextInput
          value={name}
          onChangeText={handleNameChange}
          style={styles.input}
        />
      </Row>
      <Row label='Surname'>
        <TextInput
          value={surname}
          onChangeText={handleSurnameChange}
          style={styles.input}
        />
      </Row>
    </View>
  )
}
