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
  magnifyingIcon: 'img/icons/',
};

const cardParams = ['name', 'types', 'cmc'];

const ApiUrl = {
  Cards: {
    retrieve: (name, types, cmc) => `${Configuration.urlServer}/api/cards?${convertArgs({name, types, cmc}, ...cardParams)}`,
  }
};

export { Routes, Images, ApiUrl };
