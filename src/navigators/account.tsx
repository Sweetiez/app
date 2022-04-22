
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AccountScreen} from "../pages";

const AccountStack = createNativeStackNavigator();

function HomeStackScreen() {
    return (
        <AccountStack.Navigator screenOptions={{ headerShown: false }}>
            <AccountStack.Screen name="Account" component={AccountScreen} />
        </AccountStack.Navigator>
    );
}

export default HomeStackScreen