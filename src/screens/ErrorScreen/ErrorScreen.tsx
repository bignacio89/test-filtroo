import React from "react";
import { View } from "react-native";
import styles from "./Styles"
import ErrorCard from "../../components/ErrorCard/ErrorCard";

const ErrorScreen = () => {


  return (
    <View style={styles.container}>
      <ErrorCard />
    </View>
  );
};

export default ErrorScreen;
 