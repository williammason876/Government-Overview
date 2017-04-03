
	var questions = [{question:"Who wrote the declaration of independence?", key: 'A', answers: ["Thomas Jefferson", "John Adams", "James Madison", "George Washington"], correct: false}
	, {question:"Who wrote the constitution?", key:'C', answers: ["Thomas Jefferson", "John Adams", "James Madison", "George Washington"], correct: false}
	,{question:"Who owned Mount Vernon?", key:'D', answers: ["Thomas Jefferson", "John Adams", "James Madison", "George Washington"], correct: false}
,{question:"Who owned Monticello?", key:'A', answers: ["Thomas Jefferson", "John Adams", "James Madison", "George Washington"], correct: false}
,{question:"Who said 'give me liberty or give me death!'?", key:'A', answers: ["Patrick Henry", "George Mason", "James Madison", "John Hancock"], correct: false}		

];

	
	var userAnswer = "";
	var guesses = [];
	var score = 0;

	var validate = function(){
		if(document.getElementById('A').checked){
			document.getElementById('A').checked = false;
			userAnswer = 'A';
			guesses.push(userAnswer);
		}
		else if(document.getElementById('B').checked){
			document.getElementById('B').checked = false;
			userAnswer = 'B';
			guesses.push(userAnswer);	
		}
		else if(document.getElementById('C').checked){
			document.getElementById('C').checked = false;
			userAnswer = 'C';
			guesses.push(userAnswer);
		}
		else if(document.getElementById('D').checked){
			document.getElementById('D').checked = false;
			userAnswer = 'D';
			guesses.push(userAnswer);
		}
		else{
			alert("you must select an answer to continue!");
			return false;
		}

	
	}

	var nextQuestion = function(){
		var index;

		var temp = document.getElementById("question");
		var currentQuestion = temp.innerText || temp.textContent;
		
		
		if(this.scoreCard == -1){this.scoreCard = 0;}
		
		for(var i =0; i < questions.length ;i++){
			if(questions[i].question===currentQuestion){
				index = i+1;
				if(userAnswer == questions[i].key){
					score++;
					questions[i].correct = true;
					
				}
				
			}
		}
		if(index == 5){
			document.getElementById("buttons").style.visibility = "hidden";
			document.getElementById("question").innerHTML = "Your score is "+ score +" out of 5 = " + (100)*(score/5) + "%";
			var x = ""

			for(var i =0; i < questions.length;i++){
				var correctAnswer, yourAnswer;
				correctAnswer = getAnswers(i, questions[i].key);
				yourAnswer = getAnswers(i, guesses[i]);
				if(questions[i].correct)	x += "<strong class = 'correct'>"+questions[i].question + "Correct</strong>" +"<br>";
				else  x += "<strong class = 'wrong'>" + questions[i].question + "Wrong</strong>" +"<br>";
				x+= "Your answer: " + yourAnswer + " | Correct Answer: "+ correctAnswer + "<br>";
			}
			document.getElementById("after").innerHTML = "<br>"+x;
			
			
		}
		else{
			document.getElementById("question").innerHTML = questions[index].question;
			document.getElementById("labelA").innerHTML = questions[index].answers[0];
			document.getElementById("labelB").innerHTML = questions[index].answers[1];
			document.getElementById("labelC").innerHTML = questions[index].answers[2];
			document.getElementById("labelD").innerHTML = questions[index].answers[3];
		}
		
	}

	var getAnswers = function(idx, key){
		var tempInt = -1;
		switch(key){

			case 'A': 
				tempInt = 0;
				break;
			case 'B': 
				tempInt = 1;
				break;
			case 'C': 
				tempInt = 2;
				break;
			case 'D': 
				tempInt = 3;
				break;
				
		}
console.log(key);
		//console.log(questions[idx].answers[tempInt]);
		return questions[idx].answers[tempInt];
		
	}

function docWriter(){
	var array = ["Executive Office of the President", 
"United States Department of Agriculture (USDA) ",
"United States Department of Commerce", 
"United States Department of Defense (DOD)", 
"United States Department of Education",
 "United States Department of Energy",
 "United States Department of Health and Human Services", 
"United States Department of Homeland Security", 
"United States Department of Housing and Urban Development", 
"United States Department of the Interior",
 "United States Department of Justice",
 "United States Department of Labor (DOL)", 
"United States Department of State (DOS)", 
"United States Department of Transportation", 
"United States Department of the Treasury", 
"United States Department of Veterans Affairs", 
"Independent agencies and government-owned corporations"];
var str = "<h3>President</h3><h4>Vice President</h4>";
for(var i =0; i < array.length;i++){
 str +=array[i] + "<br>";
}
document.getElementById("art-2").innerHTML = str;
}
