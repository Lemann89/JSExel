class Dom {}

export function $() {
  return new Dom();
}

$.create = (tagName, className = "") => {
  const el = document.createElement(tagName);
  if (className) {
    el.className = className;
  }
  return el;
};
