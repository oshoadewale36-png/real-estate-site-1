function searchProperty() {
  let input = document.getElementById("search").value.toLowerCase();
  let properties = document.querySelectorAll(".property");

  properties.forEach(p => {
    let location = p.getAttribute("data-location");
    p.style.display = location.includes(input) ? "block" : "none";
  });
}

function bookProperty(name) {
  alert("You booked: " + name);
}

function sendMessage(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;

  document.getElementById("formMessage").innerText =
    "Thanks " + name + ", we will contact you soon!";
}
