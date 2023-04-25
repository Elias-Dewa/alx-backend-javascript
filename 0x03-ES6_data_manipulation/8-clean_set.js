export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || set.size === 0 || !(set instanceof Set)) return '';

  return [...set].filter((element) => element.startsWith(startString)).map((element) => element.slice(startString.length)).join('-');
}
