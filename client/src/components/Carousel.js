import { useState } from "react"
import { Text, View , Image, FlatList, TouchableOpacity} from "react-native"
import { IconButton } from "react-native-paper"
import tw from "twrnc"

export default ({ content }) => {
    const [data,setData] = useState(content)
    
    const numberOfSlidingItems = 3

    const range = (start, end) => {
        let tab = [];
        for (let i = start; i < end; i++) {
            tab.push(i);
        }
        return tab;
    }
    const switchIndex = (tab, i, j) => {
        const temp = tab[i]
        tab[i] = tab[j]
        tab[j] = temp
    }
    const slideLeft = (numberOfItems) => {
        let copy = data
        if(copy.length > numberOfItems && numberOfItems != 0){
            for (const i in range(0,numberOfItems)) {
                switchIndex(copy, i, copy.length-numberOfItems+parseInt(i))
            }
            setData([...copy])
        }
    }
    const slideRight = (numberOfItems) => {
        let copy = data
        if(copy.length > numberOfItems && numberOfItems != 0){
            for (const i in range(0,numberOfItems)) {
                switchIndex(copy, copy.length-numberOfItems+parseInt(i), i)
            }
            setData([...copy])
        }
    }
    
    return(
        <View style = { tw`flex flex-row my-3 p-2 justify-between` }>
            <IconButton
                style = { tw`self-center bg-orange-500 ` }
                icon = "arrow-left-circle"
                onPress={ () =>  slideLeft(numberOfSlidingItems) } 
            />
            {/* <View style = { tw`flex flex-row border-2 relative r-15 py-2 h-full w-5/6 overflow-hidden` }>
            {    
                content.map(
                    (el,idx) => 
                    <View
                        style = {tw`p-5 rounded bg-slate-100 h-30 w-1/3 mx-1`}
                        key = { idx }
                    >
                        <Text style = { tw`text-center text-xl font-bold` }>{ el }</Text>
                        <Image
                            style = {{
                                width: 80,
                                height: 80,
                            }}
                            source={{
                            uri: 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
                            }}
                        />
                    </View>
                )
            }
            </View> */}
            <FlatList
            numColumns={data.length}
            extraData = { data }
            style = { tw`self-center h-50` }
            data = { data }
            renderItem = { 
                ( { item } ) => <TouchableOpacity style = { tw`flex flex-col m-2 p-2 rounded bg-slate-100 w-1/3 h-45 overflow-hidden` }>
                                        <Text style = { tw`text-center text-xl font-bold` }>{ item.title }</Text>
                                        <Image
                                            style = {{
                                                width: 80,
                                                height: 80,
                                            }}
                                            source={{
                                            uri: 'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg',
                                            }}
                                        />
                                </TouchableOpacity>
             }
            />
            <IconButton
                style = { tw`self-center bg-orange-500` }
                icon = "arrow-right-circle"
                onPress={ () => slideRight(numberOfSlidingItems) }
            />
        </View>
    )
}