import React  from 'react'
import {Text,View,StyleSheet} from 'react-native'

const button = () => {
  return (
    <View>
      <Text style={styles.button}>button</Text>
    </View>
  )
}

export default button

const styles = StyleSheet.create({
        button:{
            backgroundColor:'red',
            padding:10
        }
})