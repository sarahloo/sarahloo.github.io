function closealert() {
 		document.getElementById("alert").style.height = 0;
 		document.getElementById("screen").style.display = "none";
 		document.getElementById("content").style.display = "block";
}

function hideall() {
	document.getElementById("context").style.overflow = "hidden";
	document.getElementById("context").style.height = 0;
	document.getElementById("context").style.opacity = 0;
	document.getElementById("reflection1").style.overflow = "hidden";
	document.getElementById("reflection1").style.height = 0;
	document.getElementById("reflection1").style.opacity = 0;
	document.getElementById("reflection2").style.overflow = "hidden";
	document.getElementById("reflection2").style.height = 0;
	document.getElementById("reflection2").style.opacity = 0;
	document.getElementById("reflection3").style.overflow = "hidden";
	document.getElementById("reflection3").style.height = 0;
	document.getElementById("reflection3").style.opacity = 0;
	document.getElementById("future").style.overflow = "hidden";
	document.getElementById("future").style.height = 0;
	document.getElementById("future").style.opacity = 0;
}

function showcontext() {
 		document.getElementById("context").style.overflow = "visible";
 		document.getElementById("context").style.height = "auto";
 		document.getElementById("context").style.opacity = 1;
}

function show1() {
 		document.getElementById("reflection1").style.overflow = "visible";
 		document.getElementById("reflection1").style.height = "auto";
 		document.getElementById("reflection1").style.opacity = 1;
}

function show2() {
 		document.getElementById("reflection2").style.overflow = "visible";
 		document.getElementById("reflection2").style.height = "auto";
 		document.getElementById("reflection2").style.opacity = 1;
}

function show3() {
 		document.getElementById("reflection3").style.overflow = "visible";
 		document.getElementById("reflection3").style.height = "auto";
 		document.getElementById("reflection3").style.opacity = 1;
}
function showfuture() {
 		document.getElementById("future").style.overflow = "visible";
 		document.getElementById("future").style.height = "auto";
 		document.getElementById("future").style.opacity = 1;
}
