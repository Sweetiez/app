import React from 'react';

import {useTranslation} from "react-i18next";
import {Button, SafeAreaView, ScrollView, Text} from "react-native";

function AccountScreen({navigation}) {

    const { t } = useTranslation();
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Text>
                    {t('account')}
                </Text>
                <Button  title={t('welcome')}
                         onPress={() => navigation.navigate('Home')}/>
            </ScrollView>
        </SafeAreaView>

    );
}

export default AccountScreen