import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CommonStack from './src/navigators/common';
import './src/i18n/index';
import TabStack from "./src/navigators/tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import moment from "moment";
import "moment/min/locales";
import i18next from "i18next";

const App: () => Node = () => {

  const locale =  i18next.language
  moment.locale(locale);

  const Stack = createNativeStackNavigator();
  return (
    <React.StrictMode>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name="Tab"
                  component={TabStack}
                  options={{ headerShown: false }}
              />
              <Stack.Screen name="Common" component={CommonStack}
                            options={{ headerShown: false }}/>
          </Stack.Navigator>
      </NavigationContainer>
    </React.StrictMode>
  );
};

export default App;
