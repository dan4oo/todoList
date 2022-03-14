import React, {useState} from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RemoveButton() {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Image
                    style={{ width: 125, height: 125 }}
                    source={require('./images/minus-sign-icon-6.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '1.5%',
        paddingHorizontal: '45%'
    },
})