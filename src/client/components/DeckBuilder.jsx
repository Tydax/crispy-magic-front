import React from 'react';

import Main from './Main';
import BigPane from './Main/BigPane';
import SmallPane from './Main/SmallPane';
import DeckCardList from '../containers/Card/deck-CardList';

const DeckBuilder = function DeckBuilder() {
  return (
    <Main>
      <BigPane>
        // TODO Remove placeholder
        <h1>Résultats de recherche</h1>
      </BigPane>
      // TODO Remove placeholder
      <SmallPane>

        <DeckCardList categories={['creature&planeswalker', 'artefact&enchantment', 'land']} />
      </SmallPane>
    </Main>
  );
};

export default DeckBuilder;
