import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

const RecipeDetailsScreen = ({navigation}) => {
  const handlePress = () => navigation.popToTop();

  return (
    <View style={styles.screen}>
      <Text>The Recipe Detail Screen</Text>
      <Button title="Go Back to Categories" onPress={handlePress} />
    </View>
  );
}

export default RecipeDetailsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
