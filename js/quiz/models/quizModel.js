var quizApp = quizApp || {}

quizApp.Quiz = Backbone.Model.extend({
	
	defaults: {
		title: '',
		subtitle: '',
		questions: [],
		score: 0,
		possibleScore: 0,
		currentQuestion: 0
	},
	
	
	incrementScores: function(score, possibleScore){
		this.set('score', (this.get('score') + score ));
		this.set('possibleScore', (this.get('possibleScore') + possibleScore ));
		this.trigger('change');
	},
	
	
});