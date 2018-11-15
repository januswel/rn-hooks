import React, {
  useContext,
  useEffect,
  useState,
} from 'react'
import {
  Alert,
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
  const name = useTextInput('Mary')
  const surname = useTextInput('Poppins')
  const theme = useContext(ThemeContext)
  const locale = useContext(LocaleContext)

  useEffect(() => {
    Alert.alert('corresponds componentDidMount')
  }, [])

  return (
    <View style={[styles.container, theme]}>
      <Row label='Name'>
        <TextInput
          {...name}
          style={[styles.input, theme]}
        />
      </Row>
      <Row label='Surname'>
        <TextInput
          {...surname}
          style={[styles.input, theme]}
        />
      </Row>
      <Row label='Locale'>
        <Text style={[styles.locale, theme]}>{locale}</Text>
      </Row>
    </View>
  )
}

function useTextInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  function handleChange(newValue) {
    setValue(newValue)
  }

  return {
    value,
    onChangeText: handleChange,
  }
}
