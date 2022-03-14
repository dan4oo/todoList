import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Tasks() {
    return (
        <View style={styles.kuraMi}>
            <View style={styles.container}>
                <TextInput style={styles.input}/>
            </View>
        </View>
    );
  };
  
    const styles = StyleSheet.create({
        input: {
            padding: 20,
            paddingHorizontal: 20,
            fontSize: 50,
        },
        container: {
            borderColor: 'black',
            borderWidth: 2,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
        },
        kuraMi:{
            paddingTop: 10,
        }
  });