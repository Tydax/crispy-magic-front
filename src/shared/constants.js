import { convertArgs } from './utils';
import Configuration from './configuration';

const Routes = {
  home: '/',
  myLibrary: '/',
  myDecks: '/',
  deckBuilder: '/',
  signUp: '/',
  signIn: '/',
  signOut: '/',
};

const Images = {
  magnifyingIcon: 'img/icons/magnifying-glass.svg',
};

const cardParams = ['name', 'types', 'cmc'];

const ApiUrl = {
  cards: {
    retrieve: criteria => (
      `${Configuration.urlServer}/api/cards?${convertArgs(criteria, ...cardParams)}`
    ),
  }
};

export { Routes, Images, ApiUrl };
