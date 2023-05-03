import React,  { useEffect, useState, useCallback } from "react";
import { FlatList, SafeAreaView, ScrollView, RefreshControl } from 'react-native'
import ElementCard from "../ElementCard/ElementCard";
import picturesServices from "../../services/images.services";
import { TElementCard } from "../../entities/types";
import styles from "./Styles";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const ElementsList = () => {

  const numColumns = 2;
  const [pictures, setPictures] = useState<TElementCard[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  const loadPictures = useCallback(async () => {
    try {
      const { data } = await picturesServices.getPictures();
      setPictures(data);
    } catch (error) {
      navigation.navigate('ErrorScreen');
    }
  }, [navigation]);

  useEffect(() => {
    loadPictures()
  }, [loadPictures]);

   useFocusEffect(
    useCallback(() => {
      loadPictures();
    }, [loadPictures])
  );

    const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false),
      loadPictures();
    }, 2000);
  }, [loadPictures]);

    return (
   <SafeAreaView style={styles.container}>
    
      <FlatList
        data={pictures}
        style={styles.flatList}
        renderItem={({ item }) => <ElementCard card={item} />}
        keyExtractor={(item: TElementCard) => item.id}
        numColumns={numColumns}
        getItemLayout={(data, index) => ({
          length: 150,
          offset: 150 * index,
          index,
        })}
        initialNumToRender={6}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};
    

export default ElementsList;