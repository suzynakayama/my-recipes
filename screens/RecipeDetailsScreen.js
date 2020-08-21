import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RecipeDetailsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Recipe Detail Screen</Text>
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
