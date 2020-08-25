import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'

const RecipeItem = ({ title, duration, complexity, affordability, imageUrl, onSelect }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={onSelect}>
        <View>
          <View style={ { ...styles.recipeRow, ...styles.recipeHeader } }>
            <ImageBackground source={ { uri: imageUrl } } style={ styles.bgImage }>
              <Text style={styles.title} numberOfLines={1}>{ title }</Text>
              </ImageBackground>
          </View>
          <View style={{ ...styles.recipeRow, ...styles.recipeDetails }}>
            <Text>{duration}m</Text>
            <Text>{complexity.toUpperCase()}</Text>
            <Text>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeItem

const styles = StyleSheet.create({
  itemContainer: {
    height: 200,
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: 'center'
  },
  recipeRow: {
    flexDirection: "row",
  },
  recipeHeader: {
    height: '85%',
  },
  recipeDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: 'center'
  }
});
