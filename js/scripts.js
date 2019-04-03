var btn = document.querySelector(".button-search-hotel");
var popup = document.querySelector(".modal");

var btnSearch = popup.querySelector(".button-search");
var dateInput = popup.querySelector("[name=date-input]");
var dateOutput = popup.querySelector("[name=date-output]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var btnMinusAdults = popup.querySelector(".btn-minus-adults");
var btnPlusAdults = popup.querySelector(".btn-plus-adults");
var btnMinusChildren = popup.querySelector(".btn-minus-children");
var btnPlusChildren = popup.querySelector(".btn-plus-children");

btn.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.classList.toggle("modal-show");
});

btnSearch.addEventListener("click", function(evt) {
    if (!dateInput.value || !dateOutput.value || !adults.value || !children.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } 
  });

btnMinusAdults.addEventListener("click",function(evt) {
    if (adults.value > 0 && adults.value <= 9){
        adults.value --;
    }
});

btnPlusAdults.addEventListener("click",function(evt) {
    if (adults.value >= 0 && adults.value < 9){
        adults.value ++;
    }
});

btnMinusChildren.addEventListener("click",function(evt) {
    if (children.value > 0 && children.value <= 9){
        children.value --;
    }
});

btnPlusChildren.addEventListener("click",function(evt) {
    if (children.value >= 0 && children.value < 9){
        children.value ++;
    }
});