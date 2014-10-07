App.Archive = DS.Model.extend({
  pid: DS.attr('string'),
  title: DS.attr('string'),
  unittitle: DS.attr('string'),
  unitdate: DS.attr('string'),
  unitid: DS.attr('string'),
  abstract: DS.attr('string'),
  authorities: DS.hasMany('authority', {async: true})
	
});
