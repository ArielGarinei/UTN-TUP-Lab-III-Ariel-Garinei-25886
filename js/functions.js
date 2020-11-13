let elements_next = document.getElementsByClassName('next');
for(let el of elements_next) {
	el.addEventListener("click", nextQuestion,true)
}

let elements_prev = document.getElementsByClassName('prev')
for(let el of elements_prev) {
	el.addEventListener("click", prevQuestion,true)
}

function nextQuestion(event) {
	
	var parentId = this.parentElement.parentNode.id;
	var nextId = "p" + (parseInt(parentId.replace("p",""))+1);
	var currentDiv = document.getElementById(parentId);
	var neaxDiv = document.getElementById(nextId);
	
	currentDiv.classList.toggle("hide");
	
	window.setTimeout(function(){
		currentDiv.style.display = 'none'; 
		neaxDiv.classList.remove("hide");
		neaxDiv.style.display = 'block';
	},500);
	
    
	if(nextId == "p5"){
		
		if (document.getElementById("send").classList.contains("hide")) {
			document.getElementById("send").classList.remove("hide");
		}	
		
	}
    
	event.preventDefault();
}

function prevQuestion(event) {
	
	var parentId = this.parentElement.parentNode.id;
	var nextId = "p" + (parseInt(parentId.replace("p",""))-1);
	var currentDiv = document.getElementById(parentId);
	var neaxDiv = document.getElementById(nextId);
	currentDiv.classList.toggle("hide");
	
	window.setTimeout(function(){
		currentDiv.style.display = 'none'; 
		neaxDiv.classList.remove("hide");
		neaxDiv.style.display = 'block';
	},500);
	
    
	if(nextId != "p5"){
		if (!document.getElementById("send").classList.contains("hide")) {
			document.getElementById("send").classList.toggle("hide");
	
		}
	}
    
	event.preventDefault();
}

document.getElementById("send").addEventListener("click", sendAnswers,true);

function sendAnswers(event) {
	var correct_answer1 = 3;
	var correct_answer2 = 2;
	var correct_answer3 = 1;
	var correct_answer4 = 3;
	var correct_answer5 = 1;
	
	var grade = 5;
	
	var answer1_ele = document.getElementsByName('answer1');           
	for(i = 0; i < answer1_ele.length; i++) { 
		if(answer1_ele[i].checked){ 
			var answer1 = answer1_ele[i].value; 
			if (correct_answer1 != answer1){
				document.getElementById("r1."+answer1).classList.toggle("error");
				grade = grade - 1;
			}
		}
	} 

	var answer2 = document.getElementById("answer2").value;
	if (correct_answer2 != answer2){
		document.getElementById("r2."+answer2).classList.toggle("error");
		grade = grade - 1;	
	}
	
	var answer3_ele = document.getElementsByName('answer3');           
	for(i = 0; i < answer3_ele.length; i++) { 
		if(answer3_ele[i].checked){ 
			var answer3 = answer3_ele[i].value; 

			if (correct_answer3 != answer3){
				document.getElementById("r3."+answer3).classList.toggle("error");
				grade = grade - 1;
			}
		}
	} 
		var answer4_ele = document.getElementsByName('answer4');           
	for(i = 0; i < answer4_ele.length; i++) { 
		if(answer4_ele[i].checked){ 
			var answer4 = answer4_ele[i].value; 

			if (correct_answer4 != answer4){
				document.getElementById("r4."+answer4).classList.toggle("error");
				grade = grade - 1;
			}
		}
	} 
		var answer5_ele = document.getElementsByName('answer5');           
	for(i = 0; i < answer5_ele.length; i++) { 
		if(answer5_ele[i].checked){ 
			var answer5 = answer5_ele[i].value; 

			if (correct_answer5 != answer5){
				document.getElementById("r5."+answer5).classList.toggle("error");
				grade = grade - 1;
			}
		}
	} 
	
	document.getElementById("finish").classList.remove("hide");
	document.getElementById("send").classList.toggle("hide");		
	document.getElementById("p5").style.display = 'none'; 
	document.getElementById("p5").classList.toggle("hide");	
	document.getElementById("grade").innerHTML = document.getElementById("student_name").value + " Tu porcentaje de acierto es "+ Math.floor((grade / 5) * 100) + "%" ;	
	
	event.preventDefault();
}