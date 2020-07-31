import React from 'react';
import { View, TouchableHighlight, Text, Image, StyleSheet } from 'react-native';
import CardFlip from 'react-native-card-flip';

const ListItem = ({ card, onPress }) => {
  let flipCard = null;
  console.log('card info: ', card)
  return (
    <TouchableHighlight underlayColor="grey" onPress={onPress} style={styles.container}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ backgroundColor: 'orange' }}>
          <Image style={styles.image} source={{ uri: card.item.img }} />
          <Image style={styles.loadImage} source={{ uri: 'https://purepng.com/public/uploads/large/purepng.com-mario-runningmariofictional-charactervideo-gamefranchisenintendodesigner-1701528634473reyw1.png' }} />
        </View>
        <View style={{ flex: 1, padding: 5 }}>
          <Text style={styles.name}>
            {card.item.name}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={styles.detailTitle}>
                Class
              </Text>
              <Text style={styles.detailValue}>
                {card.item.playerClass}
              </Text>
              <Text style={styles.detailTitle}>
                Rarity
              </Text>
              <Text style={styles.detailValue}>
                {card.item.rarity}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.detailTitle}>
                Type
              </Text>
              <Text style={styles.detailValue}>
                {card.item.type}
              </Text>
              <Text style={styles.detailTitle}>
                Artist
              </Text>
              <Text style={styles.detailValue}>
                {card.item.artist}
              </Text>
            </View>
          </View>
        </View>
      </View>

    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    backgroundColor: 'grey',
    margin: 10,
    flexDirection: 'row',
    borderRadius: 4,
    borderLeftWidth: 5,
    borderLeftColor: 'red',
    elevation: 4
  },
  detailTitle: {
    color: 'orange',
    fontSize: 8
  },
  detailValue: {
    color: 'white',
    fontSize: 10
  },
  name: {
    color: 'white',
    fontSize: 14,
    margin: 5
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    zIndex: 99
  },
  loadImage: {
    position: 'absolute',
    margin: 30,
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
});


export default ListItem;