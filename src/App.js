import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
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
})

export default props => {
  return (
    <View style={styles.container}>
      <Row label='Name'>
        <Text>contents</Text>
      </Row>
    </View>
  )
}
