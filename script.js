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
    "Thanks " + name + ", we will contact you soon!">  
    
    funvtionunction bookProperty(property) {
  docume . getElementById("bookingModal").style.display = "flex;
    document.getElementById("propertyName").value = propertyName;
  }
  function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
  }
  function submitBooking() {
    let name = document.getElementById("clientName").value;
    let email = document.getElementById("clientEmail").value;
    let property = document.getElementById("propertyName").value;
    if (name === "" || email === "") {
      alert("Fill all fields");
      return;
    }
    alert("Booking confirmed for " + property);
    closeModal();
  }
