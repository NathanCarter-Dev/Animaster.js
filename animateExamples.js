const logo = document.querySelectorAll("#logo")
let previousClass = null;

function hoverFunc() {
  if(previousClass) {
    logo.forEach((e) => e.classList.remove(previousClass))
  } 
  const hover = document.querySelector("#hover").value
  previousClass = hover
  logo.forEach((e) => e.classList.add(hover))
}


function eventFunc() {
  if(previousClass) {
    logo.forEach((e) => e.classList.remove(previousClass))

  } 
  const event = document.querySelector('#event').value
  previousClass = event
  logo[0].classList.add(event)
}


