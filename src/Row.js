import React, { useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { ThemeContext } from './contexts'

const styles = StyleSheet.create({
  container: {
    margin: 16,
    width: 240,
  },
  label: {
    fontSize: 24,
    color: 'gray',
  },
})

export default props => {
  const theme = useContext(ThemeContext)

  return (
    <View style={[styles.container, theme]}>
      <Text style={[styles.label, theme]}>{props.label}</Text>
      {props.children}
    </View>
  )
}
