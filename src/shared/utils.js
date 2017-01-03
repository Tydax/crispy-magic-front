// @ flow

/**
 * Capitalises every words contained in the specified string.
 * @param {str} - the string to capitalise.
 * @returns The capitalised string.
 */
const capitalise = function capitalise(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

export { capitalise };
