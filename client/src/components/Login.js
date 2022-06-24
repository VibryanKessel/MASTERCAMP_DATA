
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc"


export default () => {
    const navigation = useNavigation();
    const [email,setEmail] = useState("");
    const [pwd,setPwd] = useState("");
    const [msg,setMsg] = useState({
        text : null,
        err : true
    })
    const dispatch = useDispatch()

    const logIn = async () => {
        if ( email === "" || pwd === ""){
            setMsg({text : "Veuillez remplir tous les champs !",err : true});
        }else{
                const user = {email: email, mdp: pwd}
                const response = await axios.post("http://localhost:5000/login", 
                user)
                console.log(response)
                if(response.status === 200){
                    setMsg({text : "Vous etes connecté(e)",err :false})
                    setTimeout(
                        dispatch( {type:"LOGIN",user:user} ),5000            
                    )
                }else{
                    setMsg({text :"User introuvable !",err : true})
                }
        }
        console.log(msg)
    }
    
    return( 
    <View style = {tw`flex flex-row m-0 h-full w-full`}>
        <View style = {tw`h-full w-2/3 px-10 py-40`}>
            <View style = {tw`flex flex-col h-5/6 font-medium text-center rounded-lg`}>
                <Text style = {tw`text-3xl font-black`}>
                    WELCOME   BACK
                </Text>
                <Text style = {tw`text-gray-300 border-b border-gray-300 w-full`}>
                    Welcome back! Please enter your details. 
                </Text>
                <View style = {tw`px-0`}>    
                    <View style = {tw`py-5`}>
                        <Text style = {tw`text-lg text-left`}>
                            Email
                        </Text>
                        <TextInput 
                            value= { email }
                            onChangeText = { text => setEmail(text) }
                            placeholder="Enter your Email" 
                            style = {tw`border-2 text-md h-10 rounded `}
                        />
                    </View>
                    <View style = {tw`py-5`}>
                        <Text style = {tw`text-lg text-left`}>
                            Password
                        </Text>
                        <TextInput 
                            value= { pwd }
                            onChangeText = { text => setPwd(text) }
                            secureTextEntry = { true } 
                            placeholder="Enter your Password" 
                            style = {tw`border-2 text-md h-10 rounded `}
                            />
                    </View>
                    
                    <TouchableOpacity style = {tw`py-5 `}>
                        <Text style = {tw`font-bold text-right text-indigo-500 `}>
                            Forgot password
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => { logIn() }}
                        style = {tw`shadow-lg shadow-gray-500/50 border-2 border-orange-500 bg-orange-500 font-black h-10 rounded`}
                    >
                        <Text style = { tw` text-gray-100 text-xl text-center font-bold`}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                                <Text
                                style = { (msg.err)? {color : 'red'}:{color : 'green'}}
                                >
                                    {msg.text}
                                </Text>
                    <View style = {tw`flex flex-row py-5 self-center`}>
                        <Text>
                            Don't yet have an account ?
                        </Text>
                        <TouchableOpacity 
                            onPress={() => { navigation.navigate('Sign Up') }}
                            style = { tw`px-2` }
                        >
                            <Text style = {tw`font-bold underline text-indigo-500 `}>
                                Sign up
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text style = { tw`absolute bottom-2 left-2 text-gray-500`}>
                ©_____________2022
            </Text>    
        </View>
        <View style = {tw`h-full w-1/3 bg-gray-200 py-80`}>
            <Image source={ require('../../assets/logo.jpeg') }
            style = { {...tw`rounded-full self-center`,width : 200,height : 200} }
            />        
        </View>
    </View>
)}