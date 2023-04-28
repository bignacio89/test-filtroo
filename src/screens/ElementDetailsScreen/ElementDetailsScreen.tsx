import React from "react";
import { Image, Text, View } from "react-native";



const ElementDetailsScreen = ({route}) => {
    console.log('AQUIIIII NO ARRIESSGOOOOO Dossss', route.params.card.card)

    const dataCard = route.params.card.card

    return (
        <>
   
                
                <View>
                    <Image source={{uri:route.params.card.card.download_url}} resizeMode="cover"/>
                    <Text>{route.params.card.card.author}</Text>
                </View>
                
        
            
        </>

    )
}

export default ElementDetailsScreen