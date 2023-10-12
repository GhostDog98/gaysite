
const types= ["gay", "trans", "bi", "ace", "lesbian", "omni", "nb", "pan"]
function init(){
	x = types[Math.floor((Math.random()*types.length))];

	document.getElementById("wrapper-gay").classList.add(("wrapper-" + x));
	

	console.log("we rolled a(n) " + x + "flag, time to display it!");

	switch(x){
	case "gay":
		 document.getElementById("note").innerHTML = "This is the gay flag! Refresh for another..."
		 break;
	case "trans":
		 document.getElementById("note").innerHTML = "This is the transgender flag! Refresh for another..."
		 break;
	case "bi":
		 document.getElementById("note").innerHTML = "This is the bisexual flag! Refresh for another..."
		 break;
	case "ace":
		 document.getElementById("note").innerHTML = "This is the asexual flag! Refresh for another..."
		 break;
	case "lesbian":
		 document.getElementById("note").innerHTML = "This is the lesbian flag! Refresh for another..."
		 break;
	case "omni":
		 document.getElementById("note").innerHTML = "This is the omnisexual flag! Refresh for another..."
		 break;
	case "nb":
		 document.getElementById("note").innerHTML = "This is the non-binary flag! Refresh for another..."
		 break;
	case "pan":
		 document.getElementById("note").innerHTML = "This is the pansexual flag! Refresh for another..."
		 break;

	}

}