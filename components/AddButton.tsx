import react from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default function AddButton() {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 100, height: 100 }}
                source={require('./images/32360.png')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'flex-start'
    },
})