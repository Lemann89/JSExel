import { AppComponent } from "../../core/AppComponent";

export class Header extends AppComponent {
  constructor($root) {
    super($root, {
      name: "Header",
      listeners: ["input"],
    });
  }

  onInput(e) {
    console.log(e.target.value);
  }

  static className = "excel__header";

  toHTML() {
    return `
    <input type="text" class="input" value="Новая таблица" />
    <div>
      <div class="button">
        <i class="material-icons">delete</i>
      </div>
      <div class="button">
        <i class="material-icons">exit_to_app</i>
      </div>
    </div>`;
  }
}
