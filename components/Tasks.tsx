import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";

const Tasks = () => {
    return (
        <View style={styles.airContainer}>
            <View style={styles.container}>
                <TextInput 
                    multiline={true}
                    placeholder={'write a task'}
                    style={styles.input}
                />
            </View>
            <View style={styles.checkBoxContainer}>
                <TouchableOpacity style={styles.checkMarkBox}>
                    <Text style={styles.checkMark}> ✓ </Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
  };
  
    const styles = StyleSheet.create({
        input: {
            flexShrink: 1,
            fontFamily: 'AmericanTypewriter',
            padding: 20,
            paddingHorizontal: 20,
            fontSize: 50,
        },
        container: {
            backgroundColor: '#fff',
            borderColor: 'black',
            borderWidth: 2,
            borderTopRightRadius: 40,
            borderBottomLeftRadius: 40,
            borderStartWidth: 10,
            flex: 1,
        },
        airContainer:{
            flexDirection: 'row',
            paddingTop: 20,
        },
        checkMark: {
            fontSize: 60,
            fontWeight: 'bold'
        },
        checkMarkBox: {
            backgroundColor: '#fff',
            borderWidth: 2,
            borderRadius: 40,
        },
        checkBoxContainer: {
            alignSelf: 'center',
            paddingLeft: 5,
        }
  });

  export default Tasks;