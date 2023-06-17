import React from "react";
import { StyleSheet, View, Image } from "react-native";
import StyledText from "./StyledText";
const RecipesItem = (props) => {
    return (
        <View style={styles.card} key={props._id}>
              <StyledText color='primary' fontWeight='bold'>{props.recipe_name}</StyledText>
              <StyledText blue>Ingredients {props.ingredients}</StyledText>
        </View>
    )
}

export default RecipesItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'darkgray',
        borderRadius: 10,
        padding: 10
    }
})