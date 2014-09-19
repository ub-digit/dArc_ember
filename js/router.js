App.Router.map(function() {
  // put your routes here
  	this.resource('authorities', function() {
	    // this.route('index') is created automatically in here
	    this.route('new');
	    this.route('post', {path: ":id"});
	    
  	});
  	this.resource('posts', function() {
	    // this.route('index') is created automatically in here
	    this.route('post', {path: ":id"});
	    this.route('new');
  	});	
  	this.resource('archives', function() {
  		// this.route('index') is created automatically in here
  		this.route('post', {path: ":id"});
  	});
});


App.Router.reopen({
	// will nofify analytics on each transition. Trigger pageview. 
	notifyGoogleAnalytics: function() {
		return ga(CONFIG.TRACKINGAPPNAME + '.send', 'pageview', {
		    'page': this.get('url'),
		    'title': this.get('url')
		});
	}.on('didTransition')
});


