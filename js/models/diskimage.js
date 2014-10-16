App.Diskimage = DS.Model.extend({
  pid: DS.attr('string'),
  title: DS.attr('string'),
  disks: DS.hasMany('disk', {async: true})
});
