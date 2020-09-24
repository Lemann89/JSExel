const CODES = {
  A: 65,
  Z: 90,
};

const createCell = () => {
  return `<div class="cell" contenteditable></div>`;
};

const createColumn = (col) => {
  return `<div class="column">${col}</div>`;
};

const createRow = (count, content) => {
  return ` 
    <div class="row">
        <div class="row-info">${count}</div>
        <div class="row-data"> ${content} </div>
    </div>
    `;
};

const toChar = (_, idx) => {
  return String.fromCharCode(CODES.A + idx);
};

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
    .fill("")
    .map(toChar)
    .map(createColumn)
    .join("");

  const cels = new Array(colsCount).fill(createCell()).join("");

  rows.push(createRow("", cols));

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow(i + 1, cels));
  }

  return rows.join("");
}
