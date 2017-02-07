import { convertArgs } from './utils';
import Configuration from './configuration';

const Routes = {
  root: '/',
  home: '/',
  myLibrary: '/library/',
  myDecks: '/deck/',
  deckBuilder: '/deck/new',
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

const ImageUrl = (multiverseId) => {
  return `http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=${multiverseId}&type=card`
};


export { Routes, Images, ApiUrl, ImageUrl };
