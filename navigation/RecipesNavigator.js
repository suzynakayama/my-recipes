import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryRecipesScreen from '../screens/CategoryRecipesScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import { Platform } from 'react-native';
import Colors from "../constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const defaultStackNavOptions = {
  // mode: 'modal'   ==> to change the animation, it will slide from the bottom
  // initialRouteName: 'RecipeDetail'  ==> to start in a different screen
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primary : "",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
  },
};


// create the stack navigator - so pages will stack on top of each other, and when you press `back` the page will pop. Use when you need screens that you change from/to
const RecipesNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryRecipes: {
      screen: CategoryRecipesScreen,
    },
    RecipeDetails: RecipeDetailsScreen,
  },
  //# the second argument is the navigation Options that will be applied to every page
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const FavoritesStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    RecipeDetails: RecipeDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const tabScreenConfig = {
  // you can set this to a specific component, a specific screen or event the stack navigator if you want all of them
  Recipes: {
    screen: RecipesNavigator,
    // use the long way to configure so you can add icons
    navigationOptions: {
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      ),
      // the tab bar color below only works when the shifting is true
      tabBarColor: Colors.primary,
    },
  },
  Favorites: {
    screen: FavoritesStackNavigator,
    navigationOptions: {
      // to overwrite the label
      // tabBarLabel: 'Favorites!'
      tabBarIcon: (tabInfo) => (
        <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      ),
      // the tab bar color below only works when the shifting is true
      tabBarColor: Colors.accent,
    },
  },
};

const RecipesFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: Colors.white,
      // the label will always show if false
      shifting: true,
      // the background color below only works if shifting is false
      barStyle: {
          backgroundColor: Colors.primary
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.white,
        },
    });

const FiltersTabNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  // use navigationOptions to override the name 'AllFilters'
  {
    navigationOptions: {
      drawerLabel: "Filters",
    },
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    RecipesFavs: {
      screen: RecipesFavTabNavigator,
      // use navigationOptions to override the name 'RecipesFavs'
      navigationOptions: {
        drawerLabel: "Recipes",
      },
    },
    AllFilters: FiltersTabNavigator,
  },
  // use contentOptions to override the style of the Drawer
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: "open-sans-bold",
      },
    },
  }
);

// export the navigator wrapped with the createAppContainer method
// only call the favorite one as a root navigator because within the favorite navigator you have the recipes navigator
export default createAppContainer(MainNavigator);