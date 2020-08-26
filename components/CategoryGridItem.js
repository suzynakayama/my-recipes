import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native'

const CategoryGridItem = ({ title, color, onSelect }) => {
  let TouchableComponent = (Platform.OS === 'android' && Platform.Version >= 12) ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={styles.gridItem}>
      <TouchableComponent onPress={ onSelect } style={ { flex: 1 }}>
        <View style={{ ...styles.container, ...{ backgroundColor: color } }}>
          <Text style={ styles.title } numberOfLines={ 2 }>{title}</Text>
        </View>
      </TouchableComponent>
    </View>
  );
}

export default CategoryGridItem

const styles = StyleSheet.create({
  gridItem: {
    margin: 15,
    flex: 1,
    height: 100,
    borderRadius: 10,
    elevation: 3,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 18,
    textAlign: "right",
  },
});
