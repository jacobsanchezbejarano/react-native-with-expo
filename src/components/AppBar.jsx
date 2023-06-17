import React from "react";
import { TouchableWithoutFeedback, View, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import StyledText from "./StyledText";
import { Link } from "react-router-native";
import theme from "./theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
        flexDirection: 'row'
    },
    text: {
        color: theme.appBar.textPrimary
    }
})

const AppBarTab = ({active, children, to}) => {
    return (
        <Link to={to} component={TouchableWithoutFeedback}>
            <StyledText fontWeight='bold' style={styles.text}>
                {children}
            </StyledText>
        </Link>
    )
}

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab active to='/'>Repositories</AppBarTab>
            <AppBarTab active to='/recipes'>Recipes</AppBarTab>
            <AppBarTab active to='/signin'>Sign In</AppBarTab>
        </View>
    )
}

export default AppBar