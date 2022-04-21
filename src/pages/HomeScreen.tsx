import React from 'react';

import {useTranslation} from "react-i18next";
import {Button, SafeAreaView, ScrollView, Text} from "react-native";

function HomeScreen({navigation}) {

    const { t } = useTranslation();
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Text>
                    {t('welcome')}
                </Text>
                <Button  title={t('details')}
                         onPress={() => navigation.navigate('Details')}/>
            </ScrollView>
        </SafeAreaView>

    );
}

export default HomeScreen