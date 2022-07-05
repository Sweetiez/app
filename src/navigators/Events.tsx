import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EventsScreen} from '../pages';
import colors from '../assets/colors';
import {StackNavigationOptions} from '@react-navigation/stack';
import {Text} from '../atomic/atoms';
import {useTranslation} from 'react-i18next';
import {Platform} from 'react-native';

const EventsStack = createNativeStackNavigator();

function EventsStackScreen() {
  const headerStyle = {
    backgroundColor: colors.yellow,
    shadowColor: colors.white,
    elevation: 10,
  };
  const headerOptions = (title: string): StackNavigationOptions => ({
    headerStyle,
    headerTintColor: colors.white,
    headerBackTitleVisible: false,
    headerLeft: () => null,
    headerTitle: (): React.ReactNode => (
      <Text content={title} size={30} color={colors.white} />
    ),
    headerTitleAlign: 'center',
  });

  const {t} = useTranslation();
  return (
    <EventsStack.Navigator
      screenOptions={{headerMode: Platform.OS === 'ios' ? 'float' : 'screen'}}>
      <EventsStack.Screen
        name="Events"
        component={EventsScreen}
        options={headerOptions(t('events.title'))}
      />
    </EventsStack.Navigator>
  );
}

export default EventsStackScreen;
