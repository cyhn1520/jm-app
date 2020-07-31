import React from 'react';
import { View, Text, TouchableHighlight, Image, Dimensions, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CardFlip from 'react-native-card-flip';

const { height, width } = Dimensions.get('window');

export class DetailScreen extends React.Component {
  constructor(props) {
    super(props);

  }

  onPress = () => {
    this.card.flip()
  }

  render() {
    const { name, playerClass, rarity, type, artist, attack, cost, health, img, flavor } = this.props.details.selectedCard.item;
    return (
      <View style={{ flex: 1 }}>
        <TouchableHighlight underlayColor="transparent" onPress={this.onPress} style={styles.container}>
            <View style={styles.card1Container}>
              <Image style={styles.bigImage} source={{ uri: img }} />
              <Image style={styles.loadImage} source={{ uri: 'https://purepng.com/public/uploads/large/purepng.com-mario-runningmariofictional-charactervideo-gamefranchisenintendodesigner-1701528634473reyw1.png' }} />
              <CardFlip flipDirection="x" style={styles.cardFlip} ref={(card) => this.card = card} >
              <View style={styles.detailContainer}>
                <Text style={styles.name}>
                  {name}
                </Text>
                <View style={styles.detail}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.detailTitle}>
                      Class
                    </Text>
                    <Text style={styles.detailValue}>
                      {playerClass}
                    </Text>
                    <Text style={styles.detailTitle}>
                      Rarity
                    </Text>
                    <Text style={styles.detailValue}>
                      {rarity}
                    </Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.detailTitle}>
                      Type
                    </Text>
                    <Text style={styles.detailValue}>
                      {type}
                    </Text>
                    <Text style={styles.detailTitle}>
                      Artist
                    </Text>
                    <Text style={styles.detailValue}>
                      {artist}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.card2Container}>
              <Text style={styles.descText}>
                {flavor}
              </Text>
            </View>
          </CardFlip>
            </View>
            
        </TouchableHighlight>
        <View style={styles.skillContainer}>
          <Text style={[styles.skilsPoint, { backgroundColor: '#999900' }]}>
            {attack}
          </Text>
          <Text style={[styles.skilsPoint, { backgroundColor: '#0080FF' }]}>
            {cost}
          </Text>
          <Text style={[styles.skilsPoint, { backgroundColor: '#CC0000' }]}>
            {health}
          </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'row',
    elevation: 4,
    flex: 1
  },
  card1Container: {
    flex: 1
  },
  card2Container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems:'center'
  },
  descText: {
    color: 'white'
  },
  skilsPoint: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 5,
    padding: 1,
    borderRadius: 20,
    width: 20,
    height: 20,
    textAlign: 'center'
  },
  bigImage: {
    width: width,
    height: 300,
    resizeMode: 'contain',
    zIndex:99
  },
  cardFlip: {
    flex: 1
  },
  detailContainer: {
    flex: 1,
    padding: 15,
    backgroundColor:'grey',
  },
  name: {
    color: 'white',
    fontSize: 18,
    margin: 5
  },
  skillContainer: {
    position: 'absolute',
    right: 5,
    top: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  detail: {
    flex: 1,
    flexDirection: 'row',
  },
  detailTitle: {
    color: 'orange',
    fontSize: 8
  },
  detailValue: {
    color: 'white',
    fontSize: 10
  },
  loadImage: {
    position: 'absolute',
    width: width,
    marginTop: 50,
    height: 150,
    resizeMode: 'contain'}
});

const mapStateToProps = (state) => {
  return {
    details: state.details
  };
};

export default connect(mapStateToProps, {

})(DetailScreen);
