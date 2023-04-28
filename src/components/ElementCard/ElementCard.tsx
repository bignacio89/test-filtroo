import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import { IElementCard } from "../../entities/interfaces"
import React from "react"
import styles from "./Styles"
import ElementDetailsScreen from "../../screens/ElementDetailsScreen/ElementDetailsScreen"
import { useNavigation } from "@react-navigation/native"


const ElementCard = (card: IElementCard) => {

    const navigation = useNavigation()
    
    const handlePress = () => {
                    navigation.navigate('ElementDetailsScreen', {card})
                }

    
    return (
        <>
            <TouchableOpacity style={styles.itemContainer} onPress={() => handlePress()}>
                
                <Image style={styles.image} source={{uri:card.card.download_url}} resizeMode="cover"/>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{card.card.author}</Text>
                </View>
                </TouchableOpacity>
        </>
    )
}

export default ElementCard