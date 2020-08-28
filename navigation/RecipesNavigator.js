import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryRecipesScreen from '../screens/CategoryRecipesScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Platform } from 'react-native';
import Colors from "../constants/Colors";

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
    // mode: 'modal'   ==> to change the animation, it will slide from the bottom
    // initialRouteName: 'RecipeDetail'  ==> to start in a different screen
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "#fff" : Colors.primary,
    },
  }
);

const RecipesFavTabNavigator = createBottomTabNavigator({
  // you can set this to a specific component, a specific screen or event the stack navigator if you want all of them
  Recipes: RecipesNavigator,
  Favorites: FavoritesScreen
})

// export the navigator wrapped with the createAppContainer method
// only call the favorite one as a root navigator because within the favorite navigator you have the recipes navigator
export default createAppContainer(RecipesFavTabNavigator);