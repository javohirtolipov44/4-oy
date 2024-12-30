export function juftSon(arr) {
  return arr.filter((num) => num % 2 === 0);
}

export function toqSon(arr) {
  return arr.filter((num) => num % 2 !== 0);
}

export function ikkiXonaliSonlar(arr) {
  return arr.filter((num) => num > 10);
}
