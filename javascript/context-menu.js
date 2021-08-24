let selectedText = ''

window.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  const father = event.target.closest('[data-href]');
  const $contextMenu = document.querySelector('#context-menu');
  if (father) {
    const url = father.dataset.href;
    $contextMenu.innerHTML = `
    <div class="item" name="open" onclick="contextMenu.open('${url}')"> Open </div>
    <div class="item" name="open new" onclick="contextMenu.open('${url}', '_blank')"> Open in new tab </div>
    <hr />
    <div class="item" name="copy" onclick="contextMenu.copy()"> Copy </div>
    <div class="item" onclick="contextMenu.refresh()"> Reload Page</div>
  `
  } else {
    $contextMenu.innerHTML = `
    <div class="item" name="copy" onclick="contextMenu.copy()"> Copy </div>
    <hr />
    <div class="item" onclick="contextMenu.refresh()"> Reload Page</div>
  `}
  selectedText = document.getSelection().toString() || " ";
  const contextElement = document.getElementById("context-menu");
  contextElement.classList.remove("active");
  contextElement.style.top = event.y + "px";
  contextElement.style.left = event.x + "px";
  contextElement.classList.add("active");
});

window.addEventListener("click", function (event) {
  const contextElement = document.getElementById("context-menu");
  contextElement.classList.remove("active");
});

window.contextMenu = {};
window.contextMenu.copy = () => {
  let textArea = document.createElement("textarea");
  textArea.value = selectedText;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
  } catch (err) { }
  document.body.removeChild(textArea);
}
window.contextMenu.refresh = () => window.location.reload();
window.contextMenu.open = (url, target) => {
  if (target) return window.open(url, target);
  window.location.href = url;
};

document.querySelector('#context-menu').insertAdjacentHTML('beforeend',/*html*/`
  <div class="item" name="copy" onclick="contextMenu.copy()"> Copy </div>
  <hr />
  <div class="item" onclick="contextMenu.refresh()"> Reload </div>
`);
