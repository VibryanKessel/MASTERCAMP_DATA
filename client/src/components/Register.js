import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import { IconButton } from "react-native-paper";
import DatePicker from 'react-native-modern-datepicker';

import tw from "twrnc"

export default () => {
    const [pwdHidden,setPwdVisibility] = useState(true)
    const [cfPwdHidden,setCfPwdVisibility] = useState(true)
    const [birthDate,setBirthDate] = useState("")
    
    return(
        <View style = {tw`h-3/4 rounded-md border w-1/2 self-center my-20 p-5`}>
            <View style = {tw`flex flex-col h-5/6 font-medium  rounded-lg`}>
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
                                onPress =  { () =>setCfPwdVisibility(!cfPwdHidden) }
                            />
                        </View>
                        <DatePicker
                            mode = "datepicker"
                            onDateChange={selectedDate => setDate(selectedDate)}
                            maximumDate = {(new Date().getFullYear() - 2)+"/"+new Date().getMonth()+"/"+new Date().getDate()}
                        />
                    </View>
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

                    <TouchableOpacity 
                        onPress={() => {}}
                        style = {tw`shadow-lg shadow-gray-500/50 border-2 border-orange-500 bg-orange-500 font-black h-10 rounded`}
                    >
                        <Text style = { tw` text-gray-100 text-xl text-center font-bold`}>
                            SIGN IN
                        </Text>
                    </TouchableOpacity>
                    <View style = {tw`flex flex-row py-5 self-center`}>
                        <Text>
                            Don't yet have an account ?
                        </Text>
                        <TouchableOpacity 
                            onPress={() => {}}
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
  
    )
}