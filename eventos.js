var h1 = document.getElementsByTagName("h1");
console.log(h1);
h1[0].onmouseover = function() {
	console.log("over", this);
	this.style.background = "yellow";
	this.textContent = "Caelum";
}
h1[0].onmouseout = function() {
	console.log("out", this);
	this.style.background = "";
	this.textContent = "DOM";
}


var controlView = document.getElementById("view");
var list = document.getElementById("lista");
controlView.onclick = function() {
	this.textContent = (this.dataset.control == 0)?"Exibir":"Ocultar";
	list.style.display = (this.dataset.control == 0)?"none":"block";
	this.dataset.control = ~this.dataset.control;
}

var cont = 1;
list.firstElementChild.onclick = function() {
	var li = document.createElement("li");
	var text = document.createTextNode("novo item #" + cont);
	li.appendChild(text);
	list.appendChild(li);
	cont++;
}

list.children[1].onclick = function() {
	if(this.clasName == "active") {
		this.className = "";
	}
	else {
		this.className = "active";
	}
}

list.children[2].addEventListener("click", function(){
	var target = list.children[list.children.length-1];
	list.removeChild(target);
});


// -----------------
var isValid = document.getElementsByTagName("button")[0];
var input = document.getElementById("cep");
isValid.addEventListener("click", function(){
	var er = /^\d{2}\.?\d{3}(-\d{3})?$/;
	input.className = (er.test(input.value))?"success":"error";
	event.preventDefault();
});

input.addEventListener("blur", function(e){
	console.log(this, this.value)
	console.log(e);
});

input.addEventListener("keypress", function(e){
	if((e.which<48)|| (e.which>59))
		e.preventDefault();
});