import {  Image, Text, View, Alert, Pressable } from "react-native"
import React from "react"
import styles from "./Styles"
import { useNavigation } from "@react-navigation/native"

const ErrorCard = () => {

    const navigation = useNavigation()
    
    // const handlePress = () => {
    //                 navigation.navigate(screen: 'ElementsListScreen')
    //             }

 
    return (
        <View style={styles.itemContainer}>
             <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../assets/errorIcon.png')} />
            </View>
            <View>
                <Text style={styles.text}>Ha ocurrido un error cargando los datos</Text>
            </View> 
                
      <Pressable style={styles.button} onPress={() => navigation.navigate('ElementsListScreen')}>
      <Text style={styles.textButton}>Volver a Intentar</Text>
    </Pressable>
    
        </View>
    ) 
}

export default ErrorCard