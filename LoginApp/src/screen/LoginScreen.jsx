import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons'
import { colors } from '../utils/colors'
import HomeScreen from './HomeScreen'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

  const navigation=useNavigation();

  const handleBack=()=>{
      navigation.navigate("HOME")
  }

  const handleForgetPass=()=>{
    navigation.navigate("HOME")
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={handleBack}>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.firsttext}>Hey,</Text>
        <Text style={styles.secondtext}>Welcome</Text>
        <Text style={styles.thirdtext}>Back!</Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textiInput} 
          placeholder='Enter your mail-id' 
          placeholderTextColor={colors.gray}
          keyboardType='email-address'/>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textiInput}
          placeholder='Enter your password' 
          placeholderTextColor={colors.gray}
          secureTextEntry={true}/>
        </View>
        <View>
          <TouchableOpacity onPress={handleForgetPass}>
            <Text style={[styles.forgotPassText]}>Forgot password</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={[styles.LoginButtonWrapper]}>
            <Text style={[styles.LoginText]}>Login</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.continueText}>or continue with</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.googleButtonWrapper}>
            <Text style={styles.googleText}>Google</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.continueText}>Don't have an account?
        <TouchableOpacity style={styles.signupContainer}>
          <Text style={styles.signupText}>   Sign-up</Text></TouchableOpacity>
        </Text>
        </View>
      </View>

    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container:{
    padding:10,
    height:'100%',
    //flex:1,
    backgroundColor: colors.white,
  },
  backButton:{
    fontWeight:"bold",
    fontSize:20,
    color:colors.secondary,
  },
  textContainer:{
    marginVertical:40,
    marginLeft:25,
    marginTop:60,
  },
  firsttext:{
    fontSize:32,
    fontWeight:"bold",
    color:colors.secondary,
    marginVertical:6,
  },
  secondtext:{
    fontSize:32,
    fontWeight:"bold",
    color:colors.secondary,
    marginVertical:6,
  },
  thirdtext:{
    fontSize:32,
    fontWeight:"bold",
    color:colors.secondary,
  },
  formContainer:{
    marginTop:5,
    //alignItems:"center",
    padding:25,
  },
  inputContainer:{
    borderWidth:1,
    borderColor:colors.secondary,
    paddingHorizontal:20,
    borderRadius:100,
    padding:2,
    marginVertical:20,
  },
  textiInput:{
    fontSize:17,
    flexDirection:"row",
    color:colors.gray,
    paddingHorizontal:5,
    fontWeight:"semibold",

  },
  forgotPassText:{
    fontSize:17,
    fontWeight:"bold",
    textAlign:"right",
    paddingRight:25,
    color:colors.secondary,
  },
  LoginButtonWrapper:{
    marginVertical:20,
    backgroundColor:colors.primary,
    borderRadius:100,
    //paddingRight:25,
    height:55,
    alignItems:"center",
  },
  LoginText:{
    padding:16,
    fontSize:17,
    fontWeight:"bold",
    textAlign:"center",
    color:colors.white,
  },
  continueText:{
    textAlign:"center",
    fontWeight:"semibold",
    fontSize:17,
  },
  signupContainer:{
    flex:1,
    flexDirection:"row",
    alignContent:"center",
  },
  signupText:{
    fontSize:17,
    fontWeight:"bold",
    color:colors.secondary,
  },
  googleButtonWrapper:{
    marginVertical:20,
    backgroundColor:colors.secondary,
    borderRadius:100,
    //paddingRight:25,
    height:55,
    alignItems:"center",
  },
  googleText:{
    padding:16,
    fontSize:17,
    fontWeight:"bold",
    textAlign:"center",
    color:colors.white,
  },
})