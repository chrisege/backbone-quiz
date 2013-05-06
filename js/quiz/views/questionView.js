
var quizApp = quizApp || {}

quizApp.QuestionView = Backbone.View.extend({
	
	tagName: 'div',
	template: $("#questionTemplate").html(),
	
	initialize: function(){
		this.answerModel = new quizApp.Answer({'items':  this.model.get('secondColumn')});
		this.answerView = new quizApp.AnswerView({model: this.answerModel});
	},
	
	events: {
		'sortupdate':'updateAnswer',
		'click .checkResults': 'checkResults',
		'click .nextQuestion': 'nextQuestion'
	},
	
	render: function(){
		var parent = this;
		var tmpl = _.template(this.template);

		this.answerView.render();		
		this.$el.append(tmpl(this.model.toJSON()));		
		this.$('.secondColumn').append(this.answerView.el);
		this.$('.secondColumn ul').sortable();
		return this;
	},
	
	// method to be run when jQueryUI fires a sortupdate event.
	// sets answerModel's shuffledItems array to whatever order
	// the user has put them in.
	updateAnswer: function(){
		var newOrder = [];
		this.$el.find('.secondColumn li').each(function(){
			newOrder.push($(this).html());
		});
		this.answerModel.set('shuffledItems', newOrder);
	},
	
	checkResults: function(){
		//run the answerModel.score() method and store value locally 
		var score = this.answerModel.score();
		
		// set this.model score and possibleScore values
		this.model.set({
				score: score.score,
				possibleScore: score.key.length
		});
		
		// mark the matching responses as true or false,
		// if false, add the correct answer here
		// TODO: make "correct answer" show left column value instead?
		
		this.$el.find('.secondColumn li').each(function(index, element){
			var thisScore = score.key[index].toString();
			$(element).removeClass().addClass(thisScore);
			if (thisScore === 'false') { $(element).append(' ('+score.items[index]+')'); }
		});
		
		// hide the check results button, show the next question button
		this.$el.find('.buttons button').each(function(){
			$(this).toggle();
		});
	},
	
	nextQuestion: function(){
		this.trigger('nextQuestion');
	},
	
	//use instead of remove() because it empties $el instead of removing it.
	close: function(){
		this.unbind();
		this.undelegateEvents();
		this.stopListening();
		this.$el.empty();
	},
	
});