/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import { useTranslation } from "react-i18next";
import './src/i18n/index'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { t } = useTranslation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
      <React.StrictMode>
        <SafeAreaView style={backgroundStyle}>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={backgroundStyle}>
            <Text>
              {t('welcome')}
            </Text>
          </ScrollView>
        </SafeAreaView>
      </React.StrictMode>
  );
};

const styles = StyleSheet.create({
  // TODO
});

export default App;
