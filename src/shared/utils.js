// @ flow

/**
 * Capitalises every words contained in the specified string.
 * @param {string} str - the string to capitalise.
 * @returns The capitalised string.
 */
const capitalise = function capitalise(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
};

/**
 * Converts the specified args to GET parameters.
 * Example: Calling with `{ name: 'value', foo: 'bar' , forbidden: unused}` as args
 * and `[name, foo]` as possibleValues will result in `name=value&foo=bar`.
 *
 * @param {Map<String, String>} args - the arguments to insert in the final string
 *                     (e.g. `name => value` will result in `name=value`).
 * @param {Array<String>} possibleValues - the authorised arguments to use.
 * @returns A formatted string containing the arguments and values,
            separated by '&'.
 */
const convertArgs = function convertArgs(args: Map<string, string>, ...possibleValues: Array<string>): string {
  const params = possibleValues.map(key => args[key] ? `${key}=${args[key]}` : undefined);
  return params.filter(param => param).join('&');
};

const fetchEntityData = function fetchEntityData(state, container, entityType) {
  const entityIds = state.containers.get(container).get('data').get(entityType);
  const entities = entityIds.map(id => (
    state.entities.get(entityType).get(id).toJS()
  ));
  return entities.toJS();
};


export { capitalise, convertArgs, fetchEntityData };
