function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		question: "What is the name of the currency that is used in the Fallout games?",
		answers: {
			a: 'BottleCaps',
			b: 'NCR Dollars',
			c: 'Chems',
            d: 'Ammo'
		}
		correctAnswer: 'a'

		question: "What does S.P.E.C.I.A.L. stand for?"
		answers: {
			a: 'Strength, Perception, Endurance, Charisma, Intelligence, Agility, Luck'
			b: 'Sarcasm, Power, Energy, Creativity, Intuition, Anger, Leverage'
			c: 'It means nothing'
			d: 'Stealth, Precision, Empathy, Courage, Imagination, Ambivalence, Learning'
		}
		correctAnswer: 'a'







	}
	
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}
