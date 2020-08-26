import React from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native'
import { CATEGORIES, RECIPES } from "../data/dummy-data";
import { FlatList } from 'react-native-gesture-handler';
import RecipeItem from '../components/RecipeItem';


const CategoryRecipesScreen = (props) => {
  const catID = props.navigation.getParam('categoryID');

  const allRecipes = RECIPES.filter(recipe => recipe.categoryIDs.indexOf(catID) >= 0)

  const renderRecipeItem = (itemData) => (
    <RecipeItem
      title={itemData.item.title}
      duration={itemData.item.duration}
      complexity={itemData.item.complexity}
      affordability={itemData.item.affordability}
      imageUrl={itemData.item.imageUrl}
      onSelect={() =>
        props.navigation.navigate({
          routeName: "RecipeDetails",
          params: {
            recipeID: itemData.item.id,
          },
        })
      }
    />
  );

  return (
    <View style={styles.screen}>
      <FlatList data={ allRecipes } renderItem={ renderRecipeItem } style={{width: '100%'}} />
    </View>
  );
}

CategoryRecipesScreen['navigationOptions'] = (navigationData) => {
  const catID = navigationData.navigation.getParam("categoryID");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  return {
    title: selectedCategory.title
  };
}

export default CategoryRecipesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15
  },
});