import React from 'react'
import { StyleSheet, Text, View, Button, Platform } from 'react-native'
import { CATEGORIES, RECIPES } from "../data/dummy-data";
import { FlatList } from 'react-native-gesture-handler';
import RecipeItem from '../components/RecipeItem';
import RecipesList from '../components/RecipesList';


const CategoryRecipesScreen = (props) => {
  const catID = props.navigation.getParam('categoryID');

  const allRecipes = RECIPES.filter(recipe => recipe.categoryIDs.indexOf(catID) >= 0)

  return (
    <RecipesList listData={ allRecipes } navigation={ props.navigation }/>
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
