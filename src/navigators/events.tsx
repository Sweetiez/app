import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AccountScreen} from '../pages';

const EventsStack = createNativeStackNavigator();

function EventsStackScreen() {
  return (
    <EventsStack.Navigator screenOptions={{headerShown: false}}>
      <EventsStack.Screen name="Account" component={AccountScreen} />
    </EventsStack.Navigator>
  );
}

export default EventsStackScreen;
