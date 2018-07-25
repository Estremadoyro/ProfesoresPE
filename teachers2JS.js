function intro() {

	document.getElementById('main_search').focus();
}

/*
function headerbuscar(){
	
	if(search === "" || search.length < 4){
		alert("Please, be more specific");
	}else{
		alert("Testing Navigator");
	}
}
*/

var validation = document.getElementById('search');
var Gvalidation = document.getElementById('main_search');


function check(){

	var search = document.getElementById('search').value;


	if(search === "" || search.length < 4){
		alert("Please be more specific");
	}else{
		alert("Testing Navigator");
		}
	}

function Gcheck(){ 

	var Gsearch = document.getElementById('main_search').value;
	
	if(Gsearch === "" || Gsearch.length < 4){
		alert("Please be more specific");
	}else{
		alert("Testing Navigator");
	}
}


function validations(){ 
//Validaion 
	validation.onkeyup = function (headerbuscar){
		if(headerbuscar.keyCode === 13){
			check();
		}
	}

	Gvalidation.onkeyup = function(main_search){
		if(main_search.keyCode === 13){
			Gcheck();
		}
	}
}
validations();