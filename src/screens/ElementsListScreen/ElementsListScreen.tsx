import React from "react";
import { Text, View } from "react-native";
import ElementsList from "../../components/ElementsList/ElementsList";
import styles from "./Styles";

const ElementsListScreen = () => {

    return (
        <View style={styles.container}>
          <ElementsList />
        </View>
           
    )
};

export default ElementsListScreen