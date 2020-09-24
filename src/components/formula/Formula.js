import { AppComponent } from "../../core/AppComponent";

export class Formula extends AppComponent {
  static className = "excel__formula";

  constructor($root) {
    super($root, {
      name: "Formula",
      listeners: ["input"],
    });
  }

  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>`;
  }

  onInput(e) {
    console.log("onInput formula", e.target.textContent);
  }
}
