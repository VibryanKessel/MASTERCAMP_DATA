import React, { useState } from "react";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native"
import { IconButton } from "react-native-paper";
import DatePicker from 'react-native-modern-datepicker';

import tw from "twrnc"

const bgImage = require("../../assets/logo.jpeg")
export default () => {
    const [pwdHidden,setPwdVisibility] = useState(true)
    const [cfPwdHidden,setCfPwdVisibility] = useState(true)
    const [dateInputHidden,setDateInputVisibility] = useState(true)
    const [birthDate,setBirthDate] = useState("")
    
    return(
            <View style = { tw`h-full`}>
                <ImageBackground source={bgImage} resizeMode="cover" style={ {...tw`flex-1 justify-center h-100 w-100 absolute top-50`} }/>
                <View style = { tw`bg-orange-500 flex-1 h-30 w-30 rounded-lg absolute bottom-5 right-50`}></View>
                <View style = { {...tw`bg-orange-500/90 rounded-full absolute right-0`,width : 200,height : 200} }></View>
                <View style = { {...tw`bg-orange-500/60 rounded-full absolute right-0 top-10`,width : 100,height : 50} }></View>
                
                <View style = {tw`h-5/6 flex flex-col rounded-md border w-1/2 self-center my-20 p-5`}>
                    <View>
                        <Text style = {tw`text-3xl font-black`}>
                            WELCOME AMONG US!
                        </Text>
                        <View style = { tw`flex flex-row` }>
                            <Text style = { tw`text-gray-500` }>
                                Already have an account ?
                            </Text>
                            <TouchableOpacity 
                                onPress={() => {}}
                                style = { tw`px-2` }
                                >
                                <Text style = {tw`font-bold underline text-indigo-500 `}>
                                    Sign in
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {tw`px-0 pt-5`}>    
                        <View style = {tw`py-1`}>
                            <Text style = {tw`text-lg text-left`}>
                                Last Name
                            </Text>
                            <TextInput placeholder="Enter your last name" style = {tw`border-2 text-md h-10 rounded `}/>
                        </View>
                        <View style = {tw`py-1`}>
                            <Text style = {tw`text-lg text-left`}>
                                First Name
                            </Text>
                            <TextInput placeholder="Enter your first name" style = {tw`border-2 text-md h-10 rounded `}/>
                        </View>
                        <View style = {tw`py-1`}>
                            <Text style = {tw`text-lg text-left`}>
                                Birth Date
                            </Text>
                            <View style = { tw`flex flex-row` }>
                                <TextInput 
                                    value = { birthDate }
                                    editable={false} 
                                    selectTextOnFocus={false}
                                    placeholder="Select a date" 
                                    style = {tw`border-2 border-gray-400 text-md h-10 w-full rounded `}
                                    />
                                <IconButton
                                    icon = {"calendar-month"}
                                    onPress =  { () =>setDateInputVisibility(!dateInputHidden) }
                                />
                            </View>
                            {(dateInputHidden)?
                            <View>
                                <View style = {tw`py-1`}>
                                    <Text style = {tw`text-lg text-left`}>
                                        Email
                                    </Text>
                                    <TextInput placeholder="Enter your Email" style = {tw`border-2 text-md h-10 rounded `}/>
                                </View>
                                <View style = {tw`py-1`}>
                                    <Text style = {tw`text-lg text-left`}>
                                        Password
                                    </Text>
                                    <View style = { tw`flex flex-row` }>
                                        <TextInput 
                                            secureTextEntry = { pwdHidden } 
                                            placeholder="Enter your Password" 
                                            style = {tw`border-2 text-md h-10 w-full rounded `}
                                            />
                                        <IconButton
                                            icon = {pwdHidden? "eye":"eye-off"}
                                            onPress =  { () =>setPwdVisibility(!pwdHidden) }
                                            />
                                    </View>
                                    <View style = {tw`py-1`}>
                                        <Text style = {tw`text-lg text-left`}>
                                            Confirm Password
                                        </Text>
                                        <View style = { tw`flex flex-row` }>
                                            <TextInput 
                                                secureTextEntry = { cfPwdHidden } 
                                                placeholder="Confirm your Password" 
                                                style = {tw`border-2 text-md h-10 w-full rounded `}
                                                />
                                            <IconButton
                                                icon = {cfPwdHidden? "eye":"eye-off"}
                                                onPress =  { () =>setCfPwdVisibility(!cfPwdHidden) }
                                                />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            :
                            <DatePicker
                                mode = "datepicker"
                                onDateChange={selectedDate => {setBirthDate(selectedDate);setDateInputVisibility(!dateInputHidden)}}
                                maximumDate = {(new Date().getFullYear() - 2)+"/12/31"}
                            />}
                        </View>
                        
                        <TouchableOpacity 
                            onPress={() => {}}
                            style = {tw`shadow-lg shadow-gray-500/50 border-2 border-orange-500 bg-orange-500 font-black h-10 rounded`}
                            >
                            <Text style = { tw` text-gray-100 text-xl text-center font-bold`}>
                                SIGN UP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            <Text style = { tw`absolute bottom-0 left-2 text-gray-500`}>
                ©_____________2022
            </Text>    
        </View>
  
    )
}