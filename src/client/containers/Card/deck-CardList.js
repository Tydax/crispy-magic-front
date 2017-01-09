import { connect } from 'react-redux';

import CardList from '../../components/Card/CardList';

const mapStateToProps = state => ({
  cards: state.deck.get('cardList'),
});

const DeckCardList = connect(mapStateToProps)(CardList);

export default DeckCardList;
