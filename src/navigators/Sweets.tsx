import * as React from 'react';
import {
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';
import {DetailsScreen, CommentScreen} from '../pages';
import {Text} from '../atomic/atoms';
import ShopTabs from './ShopTabs';
import colors from '../assets/colors';
import {Platform} from 'react-native';
import {useTranslation} from 'react-i18next';

const SweetsStack = createStackNavigator();

function SweetsStackScreen() {
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
    <SweetsStack.Navigator
      screenOptions={{
        headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
      }}>
      <SweetsStack.Screen
        name="Home"
        component={ShopTabs}
        options={headerOptions(t('shop.title'))}
      />
      <SweetsStack.Screen
        name="Comment"
        component={CommentScreen}
        options={{headerShown: false}}
      />
      <SweetsStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </SweetsStack.Navigator>
  );
}

export default SweetsStackScreen;
