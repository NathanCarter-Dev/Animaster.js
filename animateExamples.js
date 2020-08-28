const logo = document.querySelectorAll("#logo")
let previousClass = null;

function hoverFunc() {
  if(previousClass) {
    logo.forEach((e) => e.classList.remove(previousClass))
  } 
  const hover = document.querySelector("#hover").value
  const data = hover.split("|");
  previousClass = data[0]
  logo.forEach((e) => e.classList.add(data[0]))
  document.querySelector('#use').textContent = data[1]
}


function eventFunc() {
  
  if(previousClass) {
    logo[0].classList.remove(previousClass)

  } 
  const event = document.querySelector('#event').value
  const data = event.split("|");
  console.log(data)
  previousClass = data[0]
  logo[0].classList.add(data[0])
  document.querySelector('#use').textContent = data[1]
}


