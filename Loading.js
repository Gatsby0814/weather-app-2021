import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading(){
    return <View style = {styles.container}>
        
        <StatusBar barStyle="light-content"/>
        <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,1)', 'transparent']}
        style={styles.background}
      />
        <Text style = {styles.text}>Loading Now....</Text>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        paddingHorizontal : 30,
        backgroundColor : "#6495ED",

    
    },
    text : {
        color : 'black',
        fontSize : 30,
    },

})