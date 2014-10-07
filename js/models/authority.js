App.Authority = DS.Model.extend({
  pid: DS.attr('string'),
  title: DS.attr('string'),
  type: DS.attr('string'),
  startdate: DS.attr('string'),
  enddate: DS.attr('string')

});
