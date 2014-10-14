var pickPlace = function() {
	var food = function() {
		var placesToEat = ["McDonalds", "Sheetz", "Burger King", "Taco Bell"];
		return placesToEat[Math.floor((Math.random()*4))];
	}
	document.getElementById("result").innerHTML = food();
};
