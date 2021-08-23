let theme = "dark";
let delay_out = 0;
let delay_in = 0;
let dist = 10;

/*
* Attaching one mouseover and one mouseout listener to the document
* instead of listeners for each trigger
*/
document.body.addEventListener("mouseover", function (e) {
  if (!e.target.closest('[data-tooltip]')) return;
  const target = e.target.closest('[data-tooltip]')

  theme = target.getAttribute('data-theme') || theme
  dist = target.getAttribute('data-distance') || dist
  delay_in = target.getAttribute('data-delay_in') || delay_in
  delay_out = target.getAttribute('data-delay_out') || delay_out

  let tooltip = document.createElement("div");
  tooltip.className = "b-tooltip " + "b-tooltip-" + theme;
  tooltip.innerHTML = target.getAttribute('data-tooltip');

  setTimeout(function () {
    document.body.appendChild(tooltip);

    let pos = target.getAttribute('data-position') || "center top";
    let posHorizontal = pos.split(" ")[0];
    let posVertical = pos.split(" ")[1];

    positionAt(target, tooltip, posHorizontal, posVertical);
  }, delay_in);
});

document.body.addEventListener("mouseout", function (e) {
  if (e.target.closest('[data-tooltip]')) {
    setTimeout(function () {
      document.body.removeChild(document.querySelector(".b-tooltip"));
    }, delay_out);
  }
});

/**
 * Positions the tooltip.
 *
 * @param {object} parent - The trigger of the tooltip.
 * @param {object} tooltip - The tooltip itself.
 * @param {string} posHorizontal - Desired horizontal position of the tooltip relatively to the trigger (left/center/right)
 * @param {string} posVertical - Desired vertical position of the tooltip relatively to the trigger (top/center/bottom)
 *
 */
function positionAt(parent, tooltip, posHorizontal, posVertical) {
  let parentCoords = parent.getBoundingClientRect();
  let left;
  let top;

  switch (posHorizontal) {
    case "left":
      left = parseInt(parentCoords.left) - dist - tooltip.offsetWidth;
      if (parseInt(parentCoords.left) - tooltip.offsetWidth < 0) {
        left = dist;
      }
      break;

    case "right":
      left = parentCoords.right + dist;
      if (parseInt(parentCoords.right) + tooltip.offsetWidth > document.documentElement.clientWidth) {
        left = document.documentElement.clientWidth - tooltip.offsetWidth - dist;
      }
      break;

    default:
    case "center":
      left = parseInt(parentCoords.left) + ((parent.offsetWidth - tooltip.offsetWidth) / 2);
  }

  switch (posVertical) {
    case "center":
      top = (parseInt(parentCoords.top) + parseInt(parentCoords.bottom)) / 2 - tooltip.offsetHeight / 2;
      break;

    case "bottom":
      top = parseInt(parentCoords.bottom) + dist;
      break;

    default:
    case "top":
      top = parseInt(parentCoords.top) - tooltip.offsetHeight - dist;
  }

  left = (left < 0) ? parseInt(parentCoords.left) : left;
  top = (top < 0) ? parseInt(parentCoords.bottom) + dist : top;

  tooltip.style.left = left + "px";
  tooltip.style.top = top + pageYOffset + "px";
}
