

var quizApp = quizApp || {}

var fullQuizMulti = {
	'title': 'Test Your Knowledge',
	'subtitle': '10 Buildings Interactive Quiz',
	'introText': 'Lorem ipsum dolor sit',
	'questions': [
		{
			'title': 'Who Built it?',
			'subtitle': 'Match the building with the architect who designed it.',
			'type': 'match',
			'firstColumn': [
				'Virginia State Capitol',
				'Trinity Church',
				'Wainwright Building',
				'Robie House',
				'Highland Park Ford Plant',
				'Southdale Center',
				'Seagram Building',
				'Dulles International Airport',
				'Vanna Venturi House',
				'Walt Disney Concert Hall'
			],
			'secondColumn': [
				'Thomas Jefferson',
				'H. H. Richardson',
				'Louis Sullivan',
				'Frank Lloyd Wright',
				'Albert Kahn',
				'Victor Gruen',
				'Ludwig Mies van der Rohe',
				'Eero Saarinen',
				'Robert Venturi',
				'Frank Gehry'
			]

		},
		{
			'title': 'Who Said it?',
			'subtitle': 'Match the quotation with the speaker.',
			'type': 'multi',
			'question': '"Less is More."',
			'options': [
				'Ludwig Mies Van der Rohe',
				'Robert Venturi',
				'Louis Sullivan',
				'Frank Lloyd Wright'
			],
			'answer': 'Ludwig Mies Van der Rohe',
			'explanation': 'Mies van der Rohe, on the benefits of minimalism.'
		},
		{
			'title': 'Who Said it?',
			'subtitle': 'Match the quotation with the speaker.',
			'type': 'multi',
			'question': '"Less is a Bore."',
			'options': [
				'Louis Sullivan',
				'Ludwig Mies van der Rohe',
				'Robert Venturi',
				'Frank Gehry'
			],
			'answer': 'Robert Venturi',
			'explanation': 'Robert Venturi, reacting to minimalism. He is shown here with his wife, Denise Scott Brown.'
		},
		{
			'title': 'Who Said it?',
			'subtitle': 'Match the quotation with the speaker.',
			'type': 'multi',
			'question': '"God is in the Details."',
			'options': [
				'Thomas Jefferson',
				'H.H. Richardson',
				'Louis Sullivan',
				'Ludwig Mies van der Rohe'
			],
			'answer': 'Ludwig Mies van der Rohe',
			'explanation': 'Mies van der Rohe, on the need for refined design.'
		},
		{
			'title': 'Who Said it?',
			'subtitle': 'Match the quotation with the speaker.',
			'type': 'multi',
			'question': '"Architecture is my delight and putting up and pulling down one of my favorite amusements."',
			'options': [
				'Thomas Jefferson',
				'H.H. Richardson',
				'Louis Sullivan',
				'Albert Kahn'
			],
			'answer': 'Thomas Jefferson',
			'explanation': 'Thomas Jefferson, who built and rebuilt his home at Monticello for 40 years.'
		},
		{
			'title': 'Who Said it?',
			'subtitle': 'Match the quotation with the speaker.',
			'type': 'multi',
			'question': '"It must be tall, every inch of it tall."',
			'options': [
				'Louis Sullivan',
				'Albert Kahn',
				'Ludwig Mies van der Rohe',
				'Frank Gehry'
			],
			'answer': 'Louis Sullivan',
			'explanation': 'Louis Sullivan, on the Wainwright Building design.'
		},
		{
			'title': 'Who Said it?',
			'subtitle': 'Match the quotation with the speaker.',
			'type': 'multi',
			'question': '"He should have left downtown, downtown."',
			'options': [
				'Frank Lloyd Wright',
				'Albert Kahn',
				'Victor Gruen',
				'Ludwig Mies van der Rohe'
			],
			'answer': 'Frank Lloyd Wright',
			'explanation': 'Frank Lloyd Wright, reacting to Victor Gruen’s suburban shopping centers.'
		},
		{
			'title': 'Match the style with the building',
			'subtitle': 'Match the building with the architectural style it represents.',
			'type': 'match',
			'firstColumn': [
				'Neoclassical',
				'Richardsonian Romanesque',
				'Prairie Style',
				'Modernist',
				'Postmodernist'
			],
			'secondColumn': [
				'Virginia State Capitol',
				'Trinity Church',
				'Robie House',
				'Seagram Building',
				'Vanna Venturi House'
			]

		}
		
	]
}

var quiz = new quizApp.Quiz(fullQuizMulti);
var quizView = new quizApp.QuizView({model: quiz, el:$('#quiz')});
	quizView.render();