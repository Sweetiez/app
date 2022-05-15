import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventsScreen} from '../pages';

const EventsStack = createNativeStackNavigator();

function EventsStackScreen() {
  return (
    <EventsStack.Navigator screenOptions={{headerShown: false}}>
      <EventsStack.Screen name="Events" component={EventsScreen} />
    </EventsStack.Navigator>
  );
}

export default EventsStackScreen;
