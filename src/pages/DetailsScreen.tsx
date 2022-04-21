import React from 'react';

import {useTranslation} from "react-i18next";
import {SafeAreaView, ScrollView, Text} from "react-native";

function DetailsScreen() {

    const { t } = useTranslation();
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <Text>
                    {t('details')}
                </Text>
            </ScrollView>
        </SafeAreaView>

    );
}

export default DetailsScreen