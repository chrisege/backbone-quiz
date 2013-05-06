var quizApp = quizApp || {}

quizApp.AnswerView = Backbone.View.extend({ 
	
	tagName: 'ul',
	template: $("#answerTemplate").html(),
	
	render: function(){
		var tmpl = _.template(this.template);
		this.$el.append(tmpl(this.model.toJSON()));
		return this;
	}

});