import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryRecipesScreen from '../screens/CategoryRecipesScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import { Platform } from 'react-native';
import Colors from "../constants/Colors";

// create the stack navigator - so pages will stack on top of each other, and when you press `back` the page will pop.
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

// export the navigator wrapped with the createAppContainer method
export default createAppContainer(RecipesNavigator);