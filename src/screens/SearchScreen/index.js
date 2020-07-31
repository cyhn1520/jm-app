import React from 'react';
import { View, ActivityIndicator, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { searchCards } from '../../actions/search';
import { ListItem } from '../../components';
import { selectCard } from '../../actions/detail';

export class SearchScreen extends React.Component {
  constructor(props) {
    super(props);

    this.timeout = null;
  }

  onPressCard = (card) => {
    this.props.selectCard(card);
    this.props.navigation.navigate('Detail');
  }

  onChangeText = (text) => {
    console.log('jeyson.text', text)
    this.timeout != null ? clearTimeout(this.timeout) : null;
    this.timeout = setTimeout(()=>this.props.searchCards(text),600)
  }

  renderItem = (card) => {
    return (
      <ListItem card={card} onPress={()=>this.onPressCard(card)}/>
    );
  };

  render() {
    const { searchedCards, loading } = this.props.search;
    return (
      <View style={{flex: 1}}>
        <View style={{ height:50, backgroundColor: 'grey', flexDirection: 'row' }}>
          <TextInput onChangeText={this.onChangeText} placeholder="you can search..." style={{ flex:1, color: 'white', marginLeft: 20 }} />
        </View>
        {!loading ? <FlatList
          style={{flex:10}}
          data={searchedCards}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        /> : 
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size="large" />
          </View>
        }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
};

export default connect(mapStateToProps, {
  searchCards,
  selectCard
})(SearchScreen);
