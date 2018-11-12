import React from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    color: 'gray',
  },
})

export default props => {
  return (
    <View>
      <Text style={styles.label}>{props.label}</Text>
      {props.children}
    </View>
  )
}
