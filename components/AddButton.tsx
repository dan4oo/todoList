import react from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function AddButton() {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 80, height: 80 }}
                source={require('./images/32360.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center'
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },
})