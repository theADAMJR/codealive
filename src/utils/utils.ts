export function toKebabCase(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
}

export function truncateWords(str: string, maxWords = 15) {
  return str
    .split(' ')
    .slice(0, maxWords)
    .join(' ');
}