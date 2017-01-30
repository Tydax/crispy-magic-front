import React from 'react';

import Main from './Main';
import BigPane from './Main/BigPane';
import SmallPane from './Main/SmallPane';
import DeckCardList from '../containers/Card/deck-CardList';
import SearchCardBlockList from '../containers/Card/search-CardBlockList';
import CardBlockList from '../components/Card/CardBlockList';

// TODO remove placeholder name
const DeckBuilder = function DeckBuilder() {
  return (
    <Main golden={true}>
      <BigPane>
        <SearchCardBlockList containerToAdd="deckbuilder"/>
      </BigPane>
      <SmallPane>
        <DeckCardList
          containerToAdd="deckbuilder"
          categories={['creature&planeswalker', 'artefact&enchantment', 'land']}
          deckName="Nom du deck"/>
      </SmallPane>
    </Main>
  );
};

export default DeckBuilder;
