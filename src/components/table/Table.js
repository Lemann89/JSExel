import { AppComponent } from "../../core/AppComponent";
import { createTable } from "./table.template";

export class Table extends AppComponent {
  static className = "excel__table";

  toHTML() {
    return createTable(34);
  }
}
