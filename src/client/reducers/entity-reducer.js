import { fromJS } from 'immutable';

import { RECEIVE_ENTITIES } from '../actions/entity-actions';

const entityInitialState = fromJS({
  cards: {},
  decks: {},
  sets: {},
});

const storeEntities = (state, entityType, entities) => {
  // Create "id => entity" formatted map
  const values = entities.reduce((map, entity, index) => {
    entity.id = index; // FIXME delete that line
    map[index] = entity; // FIXME use id instead of index
    return map;
  }, {});

  let convertedEntities = fromJS(values);
  let newState = state;

  // We need to store separately the sets from the cards
  if (entityType == 'cards') {
    // convertedEntities currently contains the sets, so we need to extract the cards
    const cards = convertedEntities.flatMap(set => (
      // For each set, create a Map containing 'card.id => card'
      set.get('cards').reduce((map, card) => (
        map.set(card.get('id'), card.set('setId', set.get('id'))) // Give set's id to the card
      ), new Map())
    ));

    // Remove the cards attribute from the set
    convertedEntities.forEach(set => set.delete('cards'));

    // Add the sets to the entities objects
    newState = newState.update('sets', set => set.merge(convertedEntities));
    convertedEntities = cards;
  }

  return newState.update(entityType, entities => entities.merge(convertedEntities));
};

const entityReducer = (state = entityInitialState, action) => {
  switch (action.type) {
    case RECEIVE_ENTITIES:
      return storeEntities(state, action.payload.entityType, action.payload.entities);

    default: return state;
  }
};

export default entityReducer;
