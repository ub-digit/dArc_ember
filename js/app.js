

var App = Ember.Application.create({
	rootElement: $("#app"),
	LOG_TRANSITIONS: true
});


DS.ObjectTransform = DS.Transform.extend({
  serialize: function(serialized) {
    return Em.none(serialized) ? {} : serialized;
  },
  deserialize: function(deserialized) {
    return Em.none(deserialized) ? {} : deserialized;
  }
});
App.register("transform:object", DS.ObjectTransform);

App.ApplicationAdapter = DS.FixtureAdapter; // use fixture adapter during development 

/*App.ApplicationAdapter = DS.ActiveModelAdapter.extend({
  host: CONFIG.SERVER.URL
});*/



/* needed both from JS and from handlebars files */
App.getTranslatedString = function(strObject) {
	if (App.lang === 'SV') { 
		return new Handlebars.SafeString(strObject.SV);
	}
	else if (App.lang === 'EN') {
		return new Handlebars.SafeString(strObject.EN);
	}
	else if (!App.lang) {
		return new Handlebars.SafeString('TRANSLATION N/A');
	}
};


App.ApplicationRoute = Ember.Route.extend({
	model: function() {
		// this is the place to do init work for the application
		App.sessionKey = null; // null but please set sessionKey and use this if logged in
		App.lang = CONFIG.LANG;
	}
});

App.ApplicationController = Ember.Controller.extend({

});





