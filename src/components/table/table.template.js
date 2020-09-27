const CODES = {
  A: 65,
  Z: 90,
};

const createCell = (_, col) => {
  return `<div class="cell" contenteditable data-col="${col}"></div>`;
};

const createColumn = (col, idx) => {
  return `
  <div class="column" data-type="resizable" data-col="${idx}">
      ${col}
    <div class="col-resize" data-resize="col"></div>
  </div>`;
};

const createRow = (idx, content) => {
  const resizer = idx ? '<div class="row-resize" data-resize="row"></div>' : "";
  return ` 
    <div class="row" data-type="resizable">
        <div class="row-info">
          ${idx ? idx : ""}
          ${resizer}
        </div>
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

  rows.push(createRow("", cols));

  for (let i = 0; i < rowsCount; i++) {
    const cels = new Array(colsCount).fill("").map(createCell).join("");
    rows.push(createRow(i + 1, cels));
  }

  return rows.join("");
}
