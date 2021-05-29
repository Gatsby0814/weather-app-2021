import React from 'react';
import PropTypes from 'prop-types'
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm:{
        iconName:"weather-lightning",
        gradient:['#3c1053','#ad5389'],
        title:"It's Thunderstorm",
        subtitle:"",

    },
    Drizzle:{
        iconName:"weather-partly-rainy",
        gradient:['#4e54c8','#8f94fb'],
        title:"It's Drizzle",
        subtitle:"",

    },
    Rain:{
        iconName:"weather-rainy",
        gradient:['#667db6','#0082c8','#0082c8','#667db6'],
        title:"It's Rain",
        subtitle:"",

    },
    Snow:{
        iconName:"weather-snowy-heavy",
        gradient:['#2980B9','#6DD5FA','#FFFFFF'],
        title:"It's Snow",
        subtitle:"",

    },
    Atmosphere:{
        iconName:"weather-sunset",
        gradient:['#005AA7','#FFFDE4'],
        title:"It's Atmosphere",
        subtitle:"",

    },
    Clear:{
        iconName:"weather-sunny",
        gradient:['#2193b0','#6dd5ed'],
        title:"It's Clear",
        subtitle:"",

    },
    Clouds:{
        iconName:"weather-cloudy",
        gradient:['black', 'transparent'],
        title:"It's Clouds",
        subtitle:"",

    }
    ,


}


export default function Weather({temp, condition}){

    return (
        <LinearGradient style = {Styles.container}
        // Background Linear Gradient
        colors={weatherOptions['Clear'].gradient} style={Styles.container}>
 
        <StatusBar barStyle="light-content"/>

        <View style = {Styles.halfContainer}>        
        <Text><MaterialCommunityIcons name={weatherOptions[condition].iconName} size = {50} style = {Styles.weatherIcon} /></Text>
        <Text style = {Styles.condition}>  {condition}  </Text>
        <Text style = {Styles.temp} color = 'white'>{temp} ℃</Text>
        </View>
        
        <View style={{ ...Styles.halfContainer, ...Styles.textContainer }}>
        <Text style={Styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={Styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
        </View>
       
    
    </LinearGradient>
    )

}

Weather.propTypes = {
temp: PropTypes.number.isRequired,
condition: PropTypes.oneOf(["Thunderstorm","Drizzle","Rain","Snow","Atmosphere","Clear","Clouds"]).isRequired
}

const Styles = StyleSheet.create({
    container:{
        flex :1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    halfContainer:{
        flex :1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    weatherIcon:{
        color : 'white',

    },
    temp:{
        fontSize : 40,
        color : 'white',

    },
    condition:{
        fontSize : 40,
        color : 'white',

    },
    title:{
        fontSize : 22,
        fontWeight: "600",
        color : 'white',
        marginBottom: 10

    },
    subTitle:{
        fontSize : 18,
        fontWeight: "600",
        color : 'white',

    },
    textContainer: {
      paddingHorizontal: 20,
      alignItems: "flex-start"

    }
})