import React from "react";
import { View } from "react-native";
import ElementDetailsCard from "../../components/ElementDetailsCard/ElementDetailsCard";
import styles from "./Styles"

const ElementDetailsScreen = ({ route }) => {
  const dataCard = route.params.card.card;

  return (
    <View style={styles.container}>
      <ElementDetailsCard card={dataCard} />
    </View>
  );
};

export default ElementDetailsScreen;
