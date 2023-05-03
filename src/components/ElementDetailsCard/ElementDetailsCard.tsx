import {  Image, Text, View, TouchableOpacity, Modal, Pressable, Alert } from "react-native"
import { IElementCard } from "../../entities/interfaces"
import React, { useState } from "react"
import styles from "./Styles"
const ElementDetailsCard = (card: IElementCard) => {

    const [showModal, setShowModal] = useState(false)

    const handleImagePress = () =>  setShowModal(true)

   return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert('Go back clicked')}>
          <Text style={styles.goBackLink}>{'Go back'}</Text>
        </TouchableOpacity>
        <Text style={styles.authorName}>{'Author Name'}</Text>
      </View>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          style={styles.image}
          source={{ uri: card.card.download_url }}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setShowModal(!showModal);
        }}>
        <View style={styles.modalContainer}>
         
            <Pressable
              style={[styles.closeButton]}
              onPress={() => 
                {Alert.alert('Funciona')
              setShowModal(!showModal)}}>
              <Text style={styles.closeButtonText}>Hide Modal</Text>
            </Pressable>
              <Image
            style={styles.modalImage}
            source={{ uri: card.card.download_url }}
          />    
        </View>
      </Modal>
    </View>
  );
};



    


export default ElementDetailsCard