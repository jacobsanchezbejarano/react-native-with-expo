import React from "react";
import { StyleSheet, View, Image } from "react-native";
import StyledText from "./StyledText";
const RepositoryItem = (props) => {
    return (
        <View style={styles.card} key={props.id}>
              <Image style={styles.image} source={{uri: props.imagePath}} />
              <StyledText color='primary' fontWeight='bold'>{props.name}</StyledText>
              <StyledText blue>Reviews {props.reviews}</StyledText>
        </View>
    )
}

export default RepositoryItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'darkgray',
        borderRadius: 10,
        padding: 10,
        margin: 3,
    },
    image: {
        width: 50,
        height: 50
    }
})