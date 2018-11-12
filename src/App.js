import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

export default (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>start from here</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    textAlign: 'center',
    fontSize: 36,
    color: '#333333',
  },
})
