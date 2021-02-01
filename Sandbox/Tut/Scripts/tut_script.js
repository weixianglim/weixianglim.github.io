/* Obtain elements via document */
var firstNum = document.getElementById("firstNum");
var secNum = document.getElementById("secNum");
var finalSum = document.getElementById("finalSum");
var calculateButton = document.getElementById("calculate");
var changes = document.getElementsByClassName("Changes");

/* Functions for the event listeners */
function Add()
{
    finalSum.innerHTML = "Sum is: " + (parseFloat(firstNum.value || 0) + parseFloat(secNum.value || 0));
    changes[0].innerHTML = "Blargh";
}

/* Listeners */
calculateButton.addEventListener("click", Add);

/* To do list example */
var listItems = document.querySelectorAll("li");
function EditMode()
{
    this.className = "editMode";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}
function ExitEdit()
{
    this.previousElementSibling.innerHTML = this.value; // there's also nextElementSibling
    this.parentNode.className = "";
}
function KeyPress(key)
{
    /* 13 is enter key */
    if (key.which == 13)
        ExitEdit.call(this);
}
for (var i = 0; i < listItems.length; ++i) 
{
    listItems[i].addEventListener("click", EditMode);
    listItems[i].querySelector("input").addEventListener("blur", ExitEdit);
    listItems[i].querySelector("input").addEventListener("keypress", KeyPress);
}
