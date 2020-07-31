import React from 'react';
import { View, Text, TouchableHighlight, FlatList, ActivityIndicator, Image } from 'react-native';
import { getAllCards } from '../../actions/cards';
import { selectType } from '../../actions/type';
import { connect } from 'react-redux';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.props.getAllCards();

    this.renderItem = this.renderItem.bind(this);
  }

  onPressCard = (card) => {
    console.log('card detail: ', card.item.mechanics)
    this.props.selectType(card.item)
    this.props.navigation.navigate('Cards');
  }

  onPressSearch = () => {
    this.props.navigation.navigate('Search');
  }

  renderItem = (card) => {
    return (
      <TouchableHighlight style={{backgroundColor:'grey', margin: 10, flexDirection: 'row',  borderRadius: 3, borderLeftWidth: 5, borderLeftColor: 'red', elevation: 5, }} onPress={() => this.onPressCard(card)}>
        <Text style={{ color: 'white', fontSize: 20, margin: 5}}>
          {card.item.type}
        </Text>
      </TouchableHighlight>
    );
  };

  renderSearchButton = () => {
    return (
      <TouchableHighlight underlayColor="transparent" onPress={()=>this.onPressSearch()} style={{position: 'absolute', borderRadius: 50, height: 50, width: 50, alignItems: 'center', justifyContent: 'center', elevation: 5, right: 20,bottom: 20, backgroundColor: 'white'}}>
        <Image style={{height: 30,width:30}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/font-awesome/1792/search-512.png'}}/>
      </TouchableHighlight>
    );
  }

  render() {
    const { cards, loading } = this.props.cards;
    return (
      <View style={{flex: 1}}>
      {!loading ?
        <FlatList
          data={cards}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
         : 
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" />
          </View>
        }
        {this.renderSearchButton()}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  };
};

export default connect(mapStateToProps, {
  getAllCards,
  selectType
})(HomeScreen);
