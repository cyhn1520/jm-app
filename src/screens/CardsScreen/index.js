import React from 'react';
import { View, Text, TouchableHighlight, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from '../../components';
import { selectCard } from '../../actions/detail';

export class CardsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  onPressCard = (card) => {
    this.props.selectCard(card);
    this.props.navigation.navigate('Detail');
  }

  renderItem = (card) => {
    return (
      <ListItem card={card} onPress={()=>this.onPressCard(card)}/>
    );
  };

  render() {
    const { selectedType } = this.props.type;
    return (
      <View style={{ flex: 1}}>
        <FlatList
          data={selectedType.mechanics}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    type: state.type
  };
};

export default connect(mapStateToProps, {
  selectCard
})(CardsScreen);
