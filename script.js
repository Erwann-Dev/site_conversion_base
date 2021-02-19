function xdecimal() {
	base = document.getElementById("base")
	nbr_base = document.getElementById("nbr_base")
	decimal = document.getElementById("decimal");
	hexadecimal = document.getElementById("hexadecimal");
	binaire = document.getElementById("binaire");

	if(decimal.value == ""){
		decimal.value = prompt("Tu a oublier d'indiquer une valeur dans cette case indique la ici : ")
	}

	if(base.value == ""){
		base.value = prompt("Tu a oublier d'indiquer la base de ton choix indique la ici : ")
	}

	hexadecimal.value = (decimal.value - 0).toString(16);
	binaire.value = (decimal.value - 0).toString(2);
	nbr_base.value = (decimal.value -0).toString(base.value);
}

function xhexadecimal() {
	base = document.getElementById("base")
	nbr_base = document.getElementById("nbr_base")
	decimal = document.getElementById("decimal");
	hexadecimal = document.getElementById("hexadecimal");
	binaire = document.getElementById("binaire");

	if(hexadecimal.value == ""){
		hexadecimal.value = prompt("Tu a oublier d'indiquer une valeur dans cette case indique la ici : ")
	}

	if(base.value == ""){
		base.value = prompt("tu a oublier d'indiquer la base de ton choix indique la ici")
	}
	
	decimal.value = parseInt(hexadecimal.value, 16);
	binaire.value = (parseInt(hexadecimal.value, 16)).toString(2);
	nbr_base.value = (parseInt(hexadecimal.value, 16)).toString(base.value);
}

function xbinaire() {
	base = document.getElementById("base")
	nbr_base = document.getElementById("nbr_base")
	decimal = document.getElementById("decimal");
	hexadecimal = document.getElementById("hexadecimal");
	binaire = document.getElementById("binaire");

	if(binaire.value == ""){
		binaire.value = prompt("Tu a oublier d'indiquer une valeur dans cette case indique la ici : ")
	}

	if(base.value == ""){
		base.value = prompt("tu a oublier d'indiquer la base de ton choix indique la ici")
	}
	
	decimal.value = parseInt(binaire.value, 2);
	hexadecimal.value = (parseInt(binaire.value, 2)).toString(16);
	nbr_base.value = (parseInt(binaire.value, 2)).toString(base.value);
}

function base_demander() {
	base = document.getElementById("base")
	nbr_base = document.getElementById("nbr_base")
	decimal = document.getElementById("decimal");
	hexadecimal = document.getElementById("hexadecimal");
	binaire = document.getElementById("binaire");

	if(nbr_base.value == ""){
		nbr_base.value = prompt("Tu a oublier d'indiquer une valeur dans cette case indique la ici : ")
	}

	if(base.value == ""){
		base.value = prompt("tu a oublier d'indiquer la base de ton choix indique la ici")
	}
	
	decimal.value = parseInt(nbr_base.value, base.value);
	binaire.value = (parseInt(nbr_base.value, base.value)).toString(2);
	hexadecimal.value = (parseInt(nbr_base.value, base.value)).toString(16);
}

function quelle_touche(evenement,type) {
	var touche = evenement.keyCode
	console.log(touche,type)
	if (touche==13 && type==1){
		xdecimal()
	}
	else if (touche==13 && type==2){
		xhexadecimal()
	}
	else if (touche==13 && type==3){
		xbinaire()
	}
	else if (touche==13 && type==4){
		base_demander()
	}	
  
}