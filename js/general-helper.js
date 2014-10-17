
Ember.Handlebars.registerBoundHelper('translateString', function(strObject) {  
	return App.getTranslatedString(strObject);
});

Ember.Handlebars.registerBoundHelper('formatDateHelper', function(date) {
  return new Hanldebars.SafeString(moment(date).format(CONFIG.DATEFORMAT));
});


Ember.Handlebars.registerBoundHelper('getCurrentYearHelper', function() {
  return new Handlebars.SafeString(moment().format('YYYY'));
});

Ember.Handlebars.registerBoundHelper('mailToHelper', function(adress, title, options) {
  var mailTo = '<a target="_blank" href="mailto:' + adress + '">';
  mailTo += "<span>" + title + "</span></a>";
  return new Handlebars.SafeString(mailTo);
});

Ember.Handlebars.registerBoundHelper('fixNewLine', function(strObject) {  
	return new Handlebars.SafeString(strObject.replace(/\n/g, "<br />"));
});
