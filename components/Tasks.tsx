import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Tasks = () => {
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
            fontSize: 50,
        },
        container: {
            borderColor: 'black',
            borderWidth: 2
            
        },
        kuraMi:{
            paddingTop: 10,
        }
  });
  
  export default Tasks;