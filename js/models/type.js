App.Type = DS.Model.extend({
	title: DS.attr('object'), /* defaultValue is optional */
});		

App.Type.FIXTURES = [
	{id:1,title: {SV: 'Person', EN: 'Person'}},
	{id:2,title: {SV: 'Organisation', EN: 'Organization'}},
	{id:3,title: {SV: 'Familj', EN: 'Family'}}
];