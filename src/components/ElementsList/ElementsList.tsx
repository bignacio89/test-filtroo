import React,  { useEffect, useState } from "react";
import { View, FlatList } from 'react-native'
import ElementCard from "../ElementCard/ElementCard";
import picturesServices from "../../services/images.services";
import { TElementCard } from "../../entities/types";
import styles from "./Styles";

const ElementsList = () => {

  const numColumns = 2;
  const [pictures, setPictures] = useState<TElementCard[]>([]);

  useEffect(() => {
    loadPictures()
  }, []);

  const loadPictures = () => {
    picturesServices
    .getPictures()
    .then(({data}) =>
    setPictures(data))
    .catch(err => console.log(err))

  }; 
    

    return (

        <>
         <View style={styles.container}>
       <FlatList 
        data={pictures}
        style={styles.flatList}
        renderItem={({ item }) => <ElementCard card={item}/>}
        keyExtractor={(item: TElementCard) => item.id}
        numColumns={numColumns}
        getItemLayout={(data, index) => ({length: 150, offset: 150 * index, index}
          )}
        initialNumToRender={6}

      />
    </View>
        </>

    )
}

export default ElementsList