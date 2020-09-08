import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import RecipesList from '../components/RecipesList';
import { RECIPES } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderBtn from '../components/HeaderBtn';

const FavoritesScreen = (props) => {
  const favRecipes = RECIPES.filter(rec => rec.id === 'm1' || rec.id === 'm2')

  return (
      <RecipesList listData={ favRecipes } navigation={ props.navigation }/>
  );
}

export default FavoritesScreen

FavoritesScreen["navigationOptions"] = (navData) => {
  return {
    title: "Favorites Recipes",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderBtn}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};