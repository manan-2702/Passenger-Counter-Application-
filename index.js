let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let click = 0;
function reset() {
  click = 0;
  countEl.innerText = click;
}

function increment() {
  click = click + 1;
  countEl.innerText = click;
}

function save() {
  let count = click +" "+"-"+" ";
  saveEl.textContent += count;
  console.log(click);
}
