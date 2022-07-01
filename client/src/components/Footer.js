import { Text, TouchableOpacity, View } from "react-native"
import tw from "twrnc"

const blocks = [
    {
        title : 'ABOUT US',
        content : [
            'Who are us ?',
            'Our solution',
            'Our products',
            'Join us'
        ]
    },{
        title : 'LEGAL',
        content : [
            'Term of source',
            'Term of sales',
            'Privacy/Cookies',
            'Rights and obligations'
        ]
    },{
        title : 'FAQ',
        content : [
            'Assistance',
            'Seek advice from community'
        ]
    }
]
const Section = ( {block} ) => {
    return(
        <View style = { tw`flex flex-col` }>
            <Text style = { tw`h-1/3 font-bold text-xl text-center` }>
                {block.title}
            </Text>
            {
                block.content.map(
                    (item,idx) => 
                    <TouchableOpacity key = { idx }>
                        <Text style = { tw`underline h-1/3 text-center` }>
                            {item}
                        </Text>
                    </TouchableOpacity>
                )
            }                                                   
        </View>
    )
}

export default () => {
    return( 
        <View style = { tw`flex flex-row bg-gray-600 w-full py-2 self-center h-60 justify-around` }>
            {
                blocks.map(
                    (block,idx) => {
                        return <Section key = { idx } block = { block }/>
                    }
                )
            }            
        </View>
    )
}