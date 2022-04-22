
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {DetailsScreen, HomeScreen} from "../pages";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Details" component={DetailsScreen} />
        </HomeStack.Navigator>
    );
}

export default HomeStackScreen