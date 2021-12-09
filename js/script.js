
	

	function toyin() {
		var a = document.getElementById('purchase').value;
	var b = document.getElementById('deposit').value;
	var c = document.getElementById('term').value;


		var d = a - b; //purchase price - deposit
		var e =  d / ( 12 * c ) //monthly pay for the number of years 
		// var f = Math.round( e /1000)*1000;

		if (isNaN(a)) {
			alert('input a number');
		} else if (isNaN(b)) {
			alert('input a number');
		} else if (isNaN(c)) {
			alert('input a number');
		} else if (isNaN(d)) {
			alert('error, Check your values')
		} else if (isNaN(e)) {
			document.getElementById('monthly').value = "There is an error in one of the input" ;
		}
		

		document.getElementById('monthly').value = e ;
	}
