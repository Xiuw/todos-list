var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delbtn = document.getElementsByClassName("delbtn");

function setColor(){
	// when typing box(style) is applied to userInput in html page 
	input.setAttribute("class", "box"); 
}

//return the length of the input value
function inputLength() {
	return input.value.length;
}

//create todo task and delete element
function createListElement() {
	
  	//create li element, and add inputValue to the list and append under ul at index 0
	var li = document.createElement("li");
	var inputValue=document.createTextNode(input.value);
	li.appendChild(inputValue);
	ul.insertBefore(li, ul.childNodes[0]);
	input.value = "";//reset the input value to empty after each insertion
	
	//create an delete button to the already exist list
	var span = document.createElement("SPAN");
  	var txt = document.createTextNode("Delete");
  	span.className = "delbtn";
  	span.appendChild(txt);
  	li.appendChild(span);

 
  	//delete the parent element of delbtn from the list
  	for (i = 0; i < delbtn.length; i++) {
	delbtn[i].onclick = function() {
      this.parentElement.style.display = "none";
    }
  }
}
//For click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}else{
		alert('Your input is empty')
	}
}
//For keypress
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}


//toggle between 'crosseout' and 'undo crossout'
function itemToggle(e){

	if(e.target.tagName === "LI"){
		e.target.classList.toggle("done");
	} 
}

// addEvenListenr
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
input.addEventListener("input", setColor);
ul.addEventListener("click", itemToggle);











