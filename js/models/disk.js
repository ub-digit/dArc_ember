App.Disk = DS.Model.extend({
  pid: DS.attr('string'),
  title: DS.attr('string'),
  archives: DS.hasMany('archive')
//  archives: DS.hasMany('archive', {async: true})
});
