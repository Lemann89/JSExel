import { $ } from "../../core/dom";
export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const cords = $parent.getCords();
  const type = $resizer.data.resize;
  let valueX, valueY;

  $resizer.css({
    opacity: 1,
    bottom: `${-$root.$el.clientHeight}px`,
  });

  document.onmousemove = (event) => {
    if (type === "col") {
      const deltaX = event.pageX - cords.right;
      valueX = cords.width + deltaX;
      $resizer.css({ right: `${-deltaX}px` });
    } else {
      const deltaY = event.pageY - cords.bottom;
      valueY = cords.height + deltaY;
      $resizer.css({
        bottom: `${-deltaY}px`,
        right: `${-$root.$el.clientWidth}px`,
      });
    }
  };
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    if (type === "col") {
      $parent.css({ width: `${valueX}px` });
      $root
        .findAll(`[data-col="${$parent.data.col}"]`)
        .forEach((el) => (el.style.width = `${valueX}px`));
    }
    if (type === "row") {
      $parent.css({ height: `${valueY}px` });
    }
    $resizer.css({ opacity: 0, bottom: 0, right: 0 });
  };
}
