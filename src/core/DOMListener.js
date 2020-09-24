import { Header } from "../components/header/Header";
import { capitalize } from "./utils";

export class DOMListener {
  constructor($root, listeners = []) {
    if (!$root) {
      return new Error("No root");
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  getMethodName(eventName) {
    return "on" + capitalize(eventName);
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const methodName = this.getMethodName(listener);
      const name = this.name || "";
      if (!this[methodName]) {
        throw new Error(`Реализуй метод ${methodName} в ${name}`);
      }
      this[methodName] = this[methodName].bind(this);
      this.$root.on(listener, this[methodName].bind(this));
    });
  }

  removeDOMListeners() {
    this.listeners.forEach((listener) => {
      const methodName = this.getMethodName(listener);
      this.$root.off(listener, this[methodName]);
    });
  }
}
