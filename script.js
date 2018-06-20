

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var close = document.getElementsByClassName("close");
//create var list and select "ul" - itemToggle() 
var list=document.querySelector("ul");
 
// another way to get select "class" 
//var close1 = document.querySelector(".close");

var completeUl=document.getElementById("completeUl");


function setColor(){

	// alert("You are typing");
	input.setAttribute("class", "box");
}


//return the length of the input value
function inputLength() {
	return input.value.length;
}

//create tasks
function createListElement() {
	if(inputValue === ""){
  		alert("Yea, I'm inside the If");
  		document.getElementById("message").textContent +="Please add your task";
  	}	


	var li = document.createElement("li");
	var inputValue=document.createTextNode(input.value);
	li.appendChild(inputValue);
	ul.insertBefore(li, ul.childNodes[0]);
	input.value = "";
	// input.setAttribute("class","undoBox")


	
	//create an delete button to the already exist list
	var span = document.createElement("SPAN");
  	var txt = document.createTextNode("Delete");
  	span.className = "close";
  	span.appendChild(txt);
  	li.appendChild(span);

  



  	//delete the item from the list
  	for (i = 0; i < close.length; i++) {
	close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      //alert("1");

    }
  }


}




/*****************
This no need if you have empty list
*****************/

var myList = document.getElementsByTagName("LI");

	for(var i = 0; i < myList.length; i++){
		var span = document.createElement("SPAN");
		var txt = document.createTextNode("Delete");
		span.className="close";
		span.appendChild(txt);
		myList[i].appendChild(span);
		
	}




for(var i=0; i< close.length; i++){

	close[i].onclick=function(){
		var div = this.parentElement;
		div.style.display="none";

			//alert("2");
	}

}



/*****************
End here
*****************/





function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}




//function for crossout and undo the item from to do list
function itemToggle(e){

	if(e.target.tagName === "LI"){
		e.target.classList.toggle("done");

		

	// 	var completeLi = document.createElement("li");
	// 	var completeEls=document.createTextNode(e.target);
	
	// completeLi.appendChild(completeEls);
	// completeUl.insertBefore(completeLi, .childNodes[0]);


	} 
	// console.log(this.innerText);

}






// addEvenListenr
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
input.addEventListener("input", setColor);
list.addEventListener("click", itemToggle);
// close[i].addEventListener("click",delItem);










