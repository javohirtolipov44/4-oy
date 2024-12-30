export function randomNumber() {
  return Math.random();
}

export function randomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
