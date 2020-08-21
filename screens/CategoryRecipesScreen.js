import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const CategoryRecipesScreen = (props) => {

  const handlePress = () =>
    props.navigation.navigate('RecipeDetails');
  return (
    <View style={styles.screen}>
      <Text>The Categories Recipes Screen</Text>
      <Button title="Go to Detail" onPress={handlePress} />
    </View>
  );
}

export default CategoryRecipesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});