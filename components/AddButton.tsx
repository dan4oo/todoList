import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

export default function AddButton() {
    const addTask = () => {
        
        //pulna prostotiq ama ne znam kakvo da napisha chestno
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={addTask}>
                <Image
                    style={{ width: 100, height: 100 }}
                    source={require('./images/32360.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center'
    },
    button: {
        alignItems: 'center'
    }
})