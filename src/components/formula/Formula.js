import { AppComponent } from "../../core/AppComponent";

export class Formula extends AppComponent {
  static className = "excel__formula";

  toHTML() {
    return `<div class="info">fx</div>
    <div class="input" contenteditable spellcheck="false"></div>`;
  }
}
