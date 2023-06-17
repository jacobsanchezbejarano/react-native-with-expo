import React from "react";
import Constants from 'expo-constants';
import { Text, View } from "react-native";
import RepositoryList from "./RepositoryList";
import RecipesList from "./RecipesList";
import AppBar from "./AppBar";
import { Redirect, Route, Switch } from "react-router-native";

const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
        <AppBar/>
            {/* <Switch> */}
                {/* <Route path="/" exact> */}
                    <RepositoryList />
                {/* </Route> */}
                {/* <Route path="/recipes" exact> */}
                    <RecipesList />
                {/* </Route> */}
                {/* <Route path="/signin" exact> */}
                    <Text>Working on it</Text>
                {/* </Route> */}
                {/* <Redirect to='/' /> */}
            {/* </Switch> */}
        </View>
    )
}

export default Main