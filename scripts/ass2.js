//First task
function add(n1, n2) {
	return Number(n1)+Number(n2);
}
function sub(n1, n2) {
	return Number(n1)-Number(n2);
}
function div(n1, n2) {
	return Number(n1)/Number(n2);
}
function mul(n1, n2) {
	return Number(n1)*Number(n2);
}
function perc(n1, n2) {
	return (Number(n1)/100)*Number(n2);
}
function absolute(n1) {
	return Math.abs(Number(n1));
}
function squareroot(n1) {
	return Math.sqrt(Number(n1));
}
$("#takeInput").click(function(){
	let oper = document.getElementById("operation").value;
	let bOp = document.getElementById("binOp");
	let uOp = document.getElementById("unOp");
	document.getElementById("calculator").style.display = "inline";
	if (oper !== 'abs' && oper !== 'sqrt') {
		$("#help").css("display", "inline");
		$("#unOp").css("display", "none");
		$("#num1").css("display", "inline");
		$("#binOp").css("display", "inline");
		$("#num2").css("display", "inline");
		$("#equals").css("display", "inline");
		$("#opOutput").css("display", "inline");
		if (oper == 'add') {
			bOp.innerHTML = "+";
		} else if (oper == 'subtract') {
			bOp.innerHTML = "-";
		} else if (oper == 'divide') {
			bOp.innerHTML = "/";
		} else if (oper == 'multiply') {
			bOp.innerHTML = "*";
		} else {
			bOp.innerHTML = "% of";
		}
		return bOp; 
	} else {
		$("#help").css("display", "inline");
		$("#unOp").css("display", "inline");
		$("#num1").css("display", "inline");
		$("#binOp").css("display", "none");
		$("#num2").css("display", "none");
		$("#equals").css("display", "inline");
		$("#opOutput").css("display", "inline");
		if (oper == 'abs') {
			uOp.innerHTML = "Absolute";
		} else {
			uOp.innerHTML = "Square Root";
		}
		return uOp;
	}
});
$("#equals").click(function(){
	let op = document.getElementById("operation").value;
	let answer = document.getElementById("opOutput")
	var output;
	if (op !== 'abs' && op !== 'sqrt') {
		let num1 = document.getElementById("num1").value;
		let num2 = document.getElementById("num2").value;
		if (num1 == '' || num2 == '' || isNaN(num1) || isNaN(num2)) {
			alert("Please enter a valid number in the input field");
			answer.innerHTML = "invalid input";
			return "invalid input";
		} else if (op == 'add') {
			output = add(num1, num2);
			answer.innerHTML = output;
		} else if (op == 'subtract') {
			output = sub(num1, num2);
			answer.innerHTML = output;
		} else if (op == 'divide') {
			output = div(num1, num2);
			answer.innerHTML = output;
		} else if (op == 'multiply') {
			output = mul(num1, num2);
			answer.innerHTML = output;
		} else {
			output = perc(num1, num2);
			answer.innerHTML = output;
		}
		return output;
	} else {
		let num = document.getElementById("num1").value;
		if (num == '' || isNaN(num)) {
			alert("Please enter a valid number in the input field");
			answer.innerHTML = "invalid input";
			return "invalid input";
		} else if (op == 'abs') {
			output = absolute(num);
			answer.innerHTML = output;
		} else {
			output = squareroot(num);
			if (output%1 !== 0) {
				answer.innerHTML = output.toFixed(3);
			} else {
				answer.innerHTML = output;
			}
		}
		return output;	
	}
});

//Second task
$("#submit").click(function() {
	let nm = document.getElementById("name").value;
	let tel = document.getElementById("phone").value;
	let mail = document.getElementById("email").value;
	if (!isNaN(nm[0]) || nm == '') {
		alert("enter a valid name");
		return "invalid input";
	}
	if (tel.length != 10 || isNaN(tel) || tel%1 !== 0) {
		alert("enter a valid phone number")
		return "invalid input";
	}
	if (!(mail.indexOf('@')<mail.indexOf('.')) || !(mail.includes('@')) || !(mail.includes('.'))) {
		alert("enter a valid email-Id");
		return "invalid input";
	}
	alert("Form Submitted."+"\n"+"Your Details:"+"\n"+"Name: "+nm+"\n"+"Phone Number: "+tel+"\n"+"Email: "+mail+"\n"+"Thank You");
	return "Form Submitted";
});

// Third task
$("#palin").click(function(){
	document.getElementById("direct").style.display = "inline";
	$("#chkstr1").css("display", "inline");
	$("#str1").css("display", "inline");
	$("#chkstr2").css("display", "none");
	$("#str2").css("display", "none");
	$("#chk").css("display", "inline");
	$("#outStr").css("display", "inline");
	document.getElementById("outStr").innerHTML = "";
	$("#chk").click(function(){
		let str = document.getElementById("str1").value;
		if (str == '') {
			alert("Please enter a string");
			return "invalid input";
		}
		let n = str.length;
		if (n%2 == 0) {
			let start = str.slice(0, n/2).toLowerCase();
			let temp = str.slice(n/2).toLowerCase();
			let end = temp.split("").reverse().join("");
			if (start === end) {
				document.getElementById("outStr").innerHTML = "The entered string is a palindrome"
				return true;
			} else {
				document.getElementById("outStr").innerHTML = "The entered string is not a palindrome, try another string";
				return false;
			}
		} else {
			let start = str.slice(0, Math.floor(n/2)+1).toLowerCase();
			let temp = str.slice(Math.floor(n/2)).toLowerCase();
			let end = temp.split("").reverse().join("");
			if (start === end) {
				document.getElementById("outStr").innerHTML = "The entered string is a palindrome";
				return true;
			} else {
				document.getElementById("outStr").innerHTML = "The entered string is not a palindrome, try another string";
				return false;
			}
		}
	});
});

$("#anag").click(function(){
	document.getElementById("direct").style.display = "inline";
	$("#chkstr1").css("display", "inline");
	$("#str1").css("display", "inline");
	$("#chkstr2").css("display", "inline");
	$("#str2").css("display", "inline");
	$("#chk").css("display", "inline");
	$("#outStr").css("display", "inline");
	document.getElementById("outStr").innerHTML = "";
	$("#chk").click(function() {
		let str1 = document.getElementById("str1").value.toLowerCase();
		let str2 = document.getElementById("str2").value.toLowerCase();
		let arr1 = [];
		let arr2 = [];
		if (str1 == '' || str2 == '') {
			alert("please enter a string");
			return "invalid input";
		}
		for (let i=0; i<str1.length; i++) {
			if (str1[i] !== " ") {
				arr1.push(str1[i]);
			}
		}
		for (let i=0; i<str2.length; i++) {
			if (str2[i] !== " ") {
				arr2.push(str2[i]);
			}
		}
		arr1.sort();
		arr2.sort();
		if ( arr1.length !== arr2.length ) {
			document.getElementById("outStr").innerHTML = "The second string is not an anagram of first string, try another string";
			return false;
		}
		for (let i=0; i<str2.length; i++) {
			if ( arr1[i] !== arr2[i] ) {
				document.getElementById("outStr").innerHTML = "The second string is not an anagram of first string, try another string";
				return false;
			}
		}
		document.getElementById("outStr").innerHTML = "The second string is an anagram of first string";
		return true;
	});
});

//Fourth task
function generate(num) {
	return Math.floor(Math.random()*(num+1));
}
function mapping(num) {
	//{ 0:human, 1:cockroach, 2:nuclear bomb}
	let map = num%3
	var obj;
	if (map == 0) {
		obj = "Human";
		return obj;
	} else if (map == 1) {
		obj = "Cockroach";
		return obj;
	} else {
		obj = "Nuclear Bomb";
		return obj;
	}
}
$("#generate").click(function(){
	document.getElementById("main").style.display = "inline";
	$("#rnd1").css("display", "inline");
	$("#and").css("display", "inline");
	$("#rnd2").css("display", "inline");
	$("#show").css("display", "block");
	$("#winner").css("display", "block");
	document.getElementById("rnd1").disabled = true;
	document.getElementById("rnd2").disabled = true;
	let rndno1 = generate(1000);
	let rndno2 = generate(1000);
	let obj1 = mapping(rndno1);
	let obj2 = mapping(rndno2);
	document.getElementById("rnd1").value = rndno1+" - "+obj1;
	document.getElementById("rnd2").value = rndno2+" - "+obj2;
	$("#show").click(function(){
		var winner;
		if (obj1 == obj2) {
			winner = "TIE!";
			document.getElementById("winner").innerHTML = winner;
			return "TIE";
		}
		if ( (obj1 == "Human" && obj2 == "Cockroach") || (obj1 == "Cockroach" && obj2 == "Human") ) {
			winner = "Human!";
			document.getElementById("winner").innerHTML = winner;
			return "Human";
		}
		if ( (obj1 == "Cockroach" && obj2 == "Nuclear Bomb") || (obj1 == "Nuclear Bomb" && obj2 == "Cockroach") ) {
			winner = "Cockroach!";
			document.getElementById("winner").innerHTML = winner;
			return "Cockroach";
		}
		if ( (obj1 == "Human" && obj2 == "Nuclear Bomb") || (obj1 == "Nuclear Bomb" && obj2 == "Human") ) {
			winner = "Nuclear Bomb!";
			document.getElementById("winner").innerHTML = winner;
			return "Nuclear Bomb";
		}
	});
});