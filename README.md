# backbone-quiz

### A Javascript quiz application, built using Backbone.js

backbone-quiz is a quiz application, built for use on the website of the PBS documentary, "10 Buildings That Changed America." It supports two question types - multiple-choice and a sorting/matching type. 

#### Dependencies:
* [backbone.js](http://backbonejs.org/)
* [underscore.js](http://documentcloud.github.io/underscore/) or lodash.js
* [jQuery](http://jquery.com/) - any recent version should work.
* [jQuery UI Sortable](http://jqueryui.com/sortable/) (for sorting/matching questions)
* [jQuery UI Touch Punch](http://touchpunch.furf.com/) (makes jQuery UI Sortable work on mobile webkit browsers)

##### Not-really dependencies:
the demo version (viewable by opening quiz.html in a browser) uses [Twitter Bootstrap](http://twitter.github.io/bootstrap/) and [Font Awesome](http://fortawesome.github.io/Font-Awesome/).

### Usage Instructions

Opening quiz.html in a browser should give you a functional demo quiz. 

#### Configuration

The entire quiz is stored in a single javascript object, which gets passed into the quiz app. In this example, the quiz object is stored in a variable (in quiz.js) called fullQuizMulti. The object is fairly self-explanatory.

