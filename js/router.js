App.Router.map(function() {
  // put your routes here
  	this.resource('authorities', function() {
	    // this.route('index') is created automatically in here
	    this.route('show', {path: ":id"});
	    this.route('new');
	    
  	});

  	this.resource('archives', function() {
  		// this.route('index') is created automatically in here
  		this.route('show', {path: ":id"});
	    this.route('new');
  	});
});

/*
App.Router.reopen({
	// will nofify analytics on each transition. Trigger pageview. 
	notifyGoogleAnalytics: function() {
		return ga(CONFIG.TRACKINGAPPNAME + '.send', 'pageview', {
		    'page': this.get('url'),
		    'title': this.get('url')
		});
	}.on('didTransition')
});
*/

