import { connect } from 'react-redux';

import CardList from '../../components/Card/CardList';

const mapStateToProps = state => ({
  cards: state.entities.get('cards'),
});

const DeckCardList = connect(mapStateToProps)(CardList);

export default DeckCardList;
