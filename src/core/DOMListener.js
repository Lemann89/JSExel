export class DOMListener {
  constructor($root) {
    if (!$root) {
      return new Error("No root");
    }
    this.$root = $root;
  }
}
