var button = document.createElement("Button");
button.innerHTML = "Help";
button.setAttribute("id","initPopup");
button.style = "top:20;right:20;position:relative;z-index: 9999";
button.addEventListener("click",initPopup(), false);
document.body.appendChild(button);

//var el = document.getElementById("initPopup");

function initPopup(){

$('.open-popup-link').magnificPopup({
  type:'inline',
  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

}