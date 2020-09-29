import { AppComponent } from "../../core/AppComponent";
import { createTable } from "./table.template";
import { resizeHandler } from "./table.resize";
import { isCell, shouldResize, matrix, nextSelector } from "./table.functions";
import { TableSelection } from "./TableSelection";
import { $ } from "../../core/dom";

export class Table extends AppComponent {
  constructor($root, options) {
    super($root, {
      name: "Table",
      listeners: ["mousedown", "keydown", "input"],
      ...options,
    });
  }

  static className = "excel__table";

  toHTML() {
    return createTable(34);
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();
    this.selection = new TableSelection();
    const $cell = this.$root.find('[data-id="0:0"]');
    console.log($cell);
    this.selectCell($cell);
    this.$on("formula-input", (text) => {
      this.selection.currentCell.text(text);
    });
    this.$on("formula-done", () => {
      this.selection.currentCell.focus();
    });
  }

  selectCell($cell) {
    this.selection.selectCell($cell);
    this.$emit("table-select", $cell);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }

    if (isCell(event)) {
      const $cell = $(event.target);
      if (event.shiftKey) {
        const target = $cell.id(true);
        const current = this.selection.currentCell.id(true);

        const $cells = matrix(target, current).map((id) =>
          this.$root.find(`[data-id="${id}"]`)
        );

        this.selection.selectCellsGroup($cells);
      } else {
        this.selection.selectCell($cell);
        this.$emit("table-select", $cell);
      }
    }
  }

  onKeydown(event) {
    const keys = [
      "Enter",
      "Tab",
      "ArrowLeft",
      "ArrowDown",
      "ArrowRight",
      "ArrowUp",
    ];

    const { key } = event;

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();
      const id = this.selection.currentCell.id(true);
      const $next = this.$root.find(nextSelector(key, id));
      this.selectCell($next);
    }
  }

  onInput(event) {
    this.$emit("table-input", $(event.target));
  }
}
