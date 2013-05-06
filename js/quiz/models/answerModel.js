
var quizApp = quizApp || {}

quizApp.Answer = Backbone.Model.extend({
	defaults: {
		items: [],
	},
	initialize: function(){
		this.shuffle();
	},
	
	shuffle: function(){
		this.set('shuffledItems', _.shuffle(this.get('items')));
	},
	
	score: function(){
		return this.compareArrays(this.get('items'), this.get('shuffledItems'));
	},
	
	compareArrays: function(arr1, arr2){
		var compared = _.map(arr1, function(value, key){
			return arr2[key] == value;
		});
		var score = _.reduce(compared, function(memo,val){
			return val == true ? memo + 1 : memo;
		},0);
		return {
			score: score,
			key: compared,
			items: this.get('items')
		}
	},
	
});