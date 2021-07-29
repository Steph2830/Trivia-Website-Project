function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
	var myQuestions = [
		{
			question: "What is the name of the currency that is used in the Fallout games?",
			answers: {
				a: 'BottleCaps',
				b: 'NCR Dollars',
				c: 'Chems',
				d: 'Ammo'
			},
			correctAnswer: 'a'
		},
		{
			question: "What does S.P.E.C.I.A.L. stand for?",
			answers: {
				a: 'Strength, Perception, Endurance, Charisma, Intelligence, Agility, Luck',
				b: 'Sarcasm, Power, Energy, Creativity, Intuition, Anger, Leverage',
				c: 'It means nothing',
				d: 'Stealth, Precision, Empathy, Courage, Imagination, Ambivalence, Learning'
			},	
			correctAnswer: 'a'

		{
			question: 'What was the primary purpose of the vaults?',
			answers: {
				a: 'Experimentation on people',
				b: 'Protection against nuclear strikes',
				c: 'It was an idea for a new type of city',
				d: 'Family Segregation'
			},
			correctAnswer: 'a'
			
		}

		{
			question: 'What is the most robust type of armour that you can get in the Wastelands?',
			answers: {
				a: 'Combat Armour',
				b: 'Power Armour',
				c: 'Raider Armour',
				d: 'Recon Armour'
			},
			correctAnswer: 'b'
			
		}

		{
			question: 'What became a major power source in the Fallout Universe?',
			answers: {
				a: 'Wind Energy',
				b: 'Nuclear Power',
				c: 'Solar Power',
				d: 'Geothermal Energy'
			},
			correctAnswer: 'b'
			
		}

		{
			question: 'In Fallout 1, why was the vault dweller sent out into the Wasteland?',
			answers: {
				a: 'To find a replacement power core',
				b: 'To destroy all the mutants',
				c: 'To search for food',
				d: 'To find a new water chip'
			},
			correctAnswer: 'd'
			
		}

		{
			question: 'In what year did the bombs fall?',
			answers: {
				a: '1954',
				b: '2077',
				c: '1967',
				d: '2177'
			},
			correctAnswer: 'b'
			
		}

		{
			question: 'How long did the "Great War" last?',
			answers: {
				a: '47 minuites',
				b: '2 hours',
				c: '4 days',
				d: '13 hours'
			},
			correctAnswer: 'b'
			
		}

		{
			question: 'What caused the "Great War"?',
			answers: {
				a: 'The assassination of the President',
				b: 'An energy crisis',
				c: 'The invasion of America',
				d: 'Disputes in Chinas South Sea'
			},
			correctAnswer: 'b'
			
		}

		{
			question: 'What evil group is comprised of the remnants of pre-war United States government?',
			answers: {
				a: 'The Institute',
				b: 'The Brotherhood of Steel',
				c: 'The Powder Gangers',
				d: 'The Enclave'
			},
			correctAnswer: 'd'
			
		}

		{
		question: 'Who is responsible for creating the synths("Synthetic Humans") in Fallout 4?',
			answers: {
				a: 'The Enclave',
				b: 'The Institute',
				c: 'The Brotherhood of Steel',
				d: 'The Minutemen'
			},
			correctAnswer: 'b'
			
		}

		{
		question: 'Which faction is modeled after an ancient society?',
			answers: {
				a: 'The NCR',
				b: 'The Fiends',
				c: 'The Powder Gangers',
				d: 'Caesars Legion'
			},
			correctAnswer: 'd'
			
		}

		{
			question: 'Which Raider Group is known for their love of dynamite?',
				answers: {
					a: 'Caesars Legion',
					b: 'The Great Khans',
					c: 'The Fiends',
					d: 'The Powder Gangers'
				},
				correctAnswer: 'd'
				
		}

		{
				question: 'What is one of the primary goals of The Brotherhood of Steel?',
					answers: {
						a: 'To impose Fascism',
						b: 'To aquire lost tech',
						c: 'To colonize Mars',
						d: 'To destroy all the vaults'
					},
					correctAnswer: 'b'
					
		}

		{
					question: 'What is the name of the giant communist-hating robot, controlled by the Brotherhood of Steel?',
						answers: {
							a: 'Optimus Prime',
							b: 'Freedom 4000',
							c: 'America Bot',
							d: 'Liberty Prime'
						},
						correctAnswer: 'd'
						
		}

		{
			question: 'Which country was annexed by the US in the Fallout Universe?',
				answers: {
					a: 'Canada',
					b: 'Japan',
					c: 'Mexico',
					d: 'Iceland'
				},
				correctAnswer: 'a'
				
		}

		{
			question: 'Who were the founding members of The Brotherhood of Steel?',
				answers: {
					a: 'Members of the FBI',
					b: 'Members of the US Military',
					c: 'Private Militias',
					d: 'Former Government Officals'
				},
				correctAnswer: 'b'
				
		}

		{
			question: 'What year was the first Fallout Game released?',
				answers: {
					a: '1997',
					b: '1995',
					c: '1991',
					d: '2000'
				},
				correctAnswer: 'a'
				
		}

		{
			question: 'In 1969 the 50 states were split into how many Commonwealths?',
				answers: {
					a: '27',
					b: '13',
					c: '50',
					d: '4'
				},
				correctAnswer: 'b'
				
		}

		{
			question: 'What does V.A.T.S. stand for?',
				answers: {
					a: 'Vault-Tec Assisted Targeting System',
					b: 'Virtual Arsenal Targeting System',
					c: 'Vault-Tec Assult Tracking System',
					d: 'Vault-Tec Assisted Tracking System'
				},
				correctAnswer: 'a'
				
		}


	];

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
