import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import Row from './Row'
import { ThemeContext, LocaleContext } from './contexts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    fontSize: 36,
  },
  locale: {
    height: 40,
    fontSize: 36,
  },
})

export default props => {
  const [name, setName] = useState('Mary')
  const [surname, setSurname] = useState('Poppins')
  const theme = useContext(ThemeContext)
  const locale = useContext(LocaleContext)

  function handleNameChange(newValue) {
    setName(newValue)
  }
  function handleSurnameChange(newValue) {
    setSurname(newValue)
  }

  console.log(theme, locale)

  return (
    <View style={[styles.container, theme]}>
      <Row label='Name'>
        <TextInput
          value={name}
          onChangeText={handleNameChange}
          style={[styles.input, theme]}
        />
      </Row>
      <Row label='Surname'>
        <TextInput
          value={surname}
          onChangeText={handleSurnameChange}
          style={[styles.input, theme]}
        />
      </Row>
      <Row label='Locale'>
        <Text style={[styles.locale, theme]}>{locale}</Text>
      </Row>
    </View>
  )
}
