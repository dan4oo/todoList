import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function RemoveButton() {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 100, height: 100 }}
                source={require('./images/minus-sign-icon-6.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'flex-end'
    },
})