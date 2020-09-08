import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity, Platform } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridItem from '../components/CategoryGridItem';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderBtn from '../components/HeaderBtn';

const CategoriesScreen = (props) => {
  // console.log(props)
  
  //# can use with or without writing the routeName
  // const handlePress = () => props.navigation.navigate('CategoryRecipes')
  // const handlePress = () => props.navigation.navigate({ routeName: 'CategoryRecipes' })
  //# can also use push, and then pass the name. The difference is that I can now navigate to the same page over and over again, it will just be added on top of the stack. Good for an app that uses the same screen with different content. So you will push the new screen, which is the same page, but with different content. Ex. dropbox
  // const handlePress = () => props.navigation.push('CategoryRecipes')
  //# if you want to replace the screen on the stack, you can use the replace. You will not have the back button option for free because the stack is empty, you replace what you had before and no animation. Good for a login page, when the user clicks on login you replace it with the new page. After the use logged in, he is not supposed to go back to the login page.
  // const handlePress = () => props.navigation.replace('CategoryRecipes')

  //# use goBack() to go back to the previous page.
  // const handleBack = () => props.navigation.goBack()
  //# or if handling a StackNavigator, you can also use the option below
  // const handleBack = () => props.navigation.pop()

  const renderGridItem = itemData => <CategoryGridItem
    title={ itemData.item.title }
    color={itemData.item.color}
    onSelect={ () =>
    props.navigation.navigate({
      routeName: "CategoryRecipes",
      params: {
        categoryID: itemData.item.id,
      },
    }) }/>

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    // Prev dummy page just to learn routing
    // <View style={styles.screen}>
    //   <Text>The Categories Screen</Text>
    //   <Button title='Go to Recipes' onPress={handlePress}/>
    //   {/* <Button title='Go Back' onPress={handleBack}/> */}
    // </View>
  )
}

//# to change the title and style
CategoriesScreen['navigationOptions'] = (navData) => {
  return {
    title: "Recipe Categories",
    headerLeft: () => <HeaderButtons HeaderButtonComponent={ HeaderBtn }>
      <Item title='Menu' iconName='ios-menu' onPress={ () => navData.navigation.toggleDrawer() } />
    </HeaderButtons>
    // headerStyle: {
    //   backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    // },
    // headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primary
  }
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
