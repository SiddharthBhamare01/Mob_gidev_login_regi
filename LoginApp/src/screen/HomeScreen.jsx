import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors';
import { Image } from 'react-native';
import { fonts } from '../utils/fonts';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleLogin=()=>{
        navigation.navigate("LOGIN")
    }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/scriptix.png")} style={styles.logo}/>
      <Image source={require("../assets/single_person.png")} style={styles.bannerImage}/>
      <Text style={styles.title}>Welcome to Sciptix</Text>
      <Text style={styles.subTitle}>Innovating Complexity, Delivering Excellence</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.LoginButtonWrapper]} onPress={handleLogin}>
            <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={styles.SignupButtonWrapper}>
            <Text style={styles.SignupButtonText}>Sign-up</Text>
        </TouchableOpacity>

      </View>
    
    </View>
  ); 
};

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.white,
        alignItems: 'center',
        
    },
    logo:{
        height:40,
        width:140,
        marginVertical:20,
    },
    bannerImage:{
        marginVertica:20,
        height:400, //250
        width:350, //231
    },
    title:{
        fontSize:40,
        fontFamily: fonts.Bold,
        paddingHorizontal:20,
        textAlign: "center",
        color: colors.primary,
        marginTop:40,
        fontWeight:"bold",
    },
    subTitle:{
        fontSize:20,
        paddingHorizontal:20,
        textAlign:'center',
        color: colors.gray,
        fontFamily: fonts.Bold,
        marginVertical:20,
        marginTop: 50,
        fontWeight:"medium",
    },
    buttonContainer:{
        marginTop:60,
        flexDirection:"row",
        borderColor:colors.primary,
        width:"90%",
        height:60,
        borderWidth:1,
        borderRadius:100,
    },
    LoginButtonWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:"50%",
        backgroundColor:colors.primary,
        borderRadius:100,
    },
    LoginButtonText:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize:20,
    },
    SignupButtonText:{
        color:colors.secondary,
        fontWeight:"bold",
        fontSize:20,
    },
    SignupButtonWrapper:{
        justifyContent:"center",
        alignItems:"center",
        width:"50%",
        borderRadius:100, 
    }
});