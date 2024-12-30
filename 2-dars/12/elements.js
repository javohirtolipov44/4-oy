export function createDiv(className, textContent) {
  const div = document.createElement("div");
  div.className = className;
  div.textContent = textContent;
  return div;
}

export function createParagraph(className, textContent) {
  const p = document.createElement("p");
  p.className = className;
  p.textContent = textContent;
  return p;
}

export function createButton(className, textContent) {
  const button = document.createElement("button");
  button.className = className;
  button.textContent = textContent;
  return button;
}
