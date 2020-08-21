import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryRecipesScreen from '../screens/CategoryRecipesScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';

// create the stack navigator - so pages will stack on top of each other, and when you press `back` the page will pop.
const RecipesNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryRecipes: {
    screen: CategoryRecipesScreen
  },
  RecipeDetails: RecipeDetailsScreen
})

// export the navigator wrapped with the createAppContainer method
export default createAppContainer(RecipesNavigator);