import React from 'react'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { StyleSheet, Text, Button, View } from 'react-native'
import { RECIPES } from "../data/dummy-data";
import HeaderBtn from '../components/HeaderBtn';

const RecipeDetailsScreen = ( props ) => {
  const recipeID = props.navigation.getParam('recipeID')

  const selectedRecipe = RECIPES.find(recipe => recipe.id = recipeID)

  const handlePress = () => props.navigation.popToTop();

  return (
    <View style={styles.screen}>
      <Text>{ selectedRecipe.title }</Text>
      <Button title="Go Back to Categories" onPress={handlePress} />
    </View>
  );
}

RecipeDetailsScreen["navigationOptions"] = (navigationData) => {
  const recipeID = navigationData.navigation.getParam('recipeID')
  const selectedRecipe = RECIPES.find(recipe => recipe.id = recipeID)
  return {
    title: selectedRecipe.title,
    headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderBtn}>
      <Item title='Favorite' iconName='ios-star' onPress={() => console.log('marked as favorite')}/>
    </HeaderButtons>)
  }
};

export default RecipeDetailsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
