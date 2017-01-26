import React from 'react';

import Main from './Main';
import BigPane from './Main/BigPane';
import SmallPane from './Main/SmallPane';
import DeckCardList from '../containers/Card/deck-CardList';

// TODO remove placeholder name
const DeckBuilder = function DeckBuilder() {
  return (
    <Main golden={true}>
      <BigPane>
        <h1>Résultats de recherche</h1>
      </BigPane>
      <SmallPane>
        <DeckCardList
          categories={['creature&planeswalker', 'artefact&enchantment', 'land']}
          deckName="Nom du deck"/>
      </SmallPane>
    </Main>
  );
};

export default DeckBuilder;
