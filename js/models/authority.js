App.Authority = DS.Model.extend({
	title: DS.attr('string'), /* defaultValue is optional */
	type: DS.attr('string'),
	startdate: DS.attr('string'),
	enddate: DS.attr('string'),
	fullobject: function() {
		return this.get("id") + " " + this.get("title") + " " + this.get("type") + " " + this.get("startdate") + " " + this.get("enddate");
	}.property('id', 'title', 'type', 'startdate', 'enddate')
});		

App.Authority.FIXTURES = [
	{id:1,title: "Titel1",type: "person", startdate: "1337", enddate: "1408"},
	{id:2,title: "Titel2",type: "corporation", startdate: "2001", enddate: "2014"},
	{id:3,title: "Titel3",type: "family", startdate: "1980", enddate: "2005"}
];	