import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CategoriesScreen = (props) => {
  // console.log(props)
  
  //# can use with or without writing the routeName
  // const handlePress = () => props.navigation.navigate('CategoryRecipes')
  const handlePress = () => props.navigation.navigate({ routeName: 'CategoryRecipes' })
  //# can also use push, and then pass the name. The difference is that I can now navigate to the same page over and over again, it will just be added on top of the stack. Good for an app that uses the same screen with different content. So you will push the new screen, which is the same page, but with different content. Ex. dropbox
  // const handlePress = () => props.navigation.push('CategoryRecipes')

  return (
    <View style={styles.screen}>
      <Text>The Categories Screen</Text>
      <Button title='Go to Recipes' onPress={handlePress}/>
    </View>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
