export class TableSelection {
  static className = "selected";

  constructor() {
    this.cellsGroup = [];
    this.currentCell = null;
  }

  selectCell($el) {
    this.clear();
    this.cellsGroup.push($el);
    this.currentCell = $el;
    $el.focus().addClass(TableSelection.className);
  }

  clear() {
    this.cellsGroup.forEach(($el) => $el.removeClass(TableSelection.className));
  }

  selectCellsGroup($cells = []) {
    this.clear();
    this.cellsGroup = $cells;
    $cells.forEach(($cell) => {
      $cell.addClass(TableSelection.className);
    });
  }
}
