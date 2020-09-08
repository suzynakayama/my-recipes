import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import RecipeItem from './RecipeItem';

const RecipesList = ({ listData, navigation }) => {
    const renderRecipeItem = (itemData) => (
        <RecipeItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            imageUrl={itemData.item.imageUrl}
            onSelect={() =>
            navigation.navigate({
                routeName: "RecipeDetails",
                params: {
                recipeID: itemData.item.id,
                },
            })
            }
        />
    );
    return (
        <View style={styles.list}>
            <FlatList
            data={listData}
            renderItem={renderRecipeItem}
            style={{ width: "100%" }}
            />
        </View>
    );
}

export default RecipesList

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
});
