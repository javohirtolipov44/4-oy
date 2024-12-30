export function toUpperCase(str) {
  return str.toUpperCase();
}

export function toLowerCase(str) {
  return str.toLowerCase();
}

export function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function max(arr) {
  return Math.max(...arr);
}

export function min(arr) {
  return Math.min(...arr);
}
