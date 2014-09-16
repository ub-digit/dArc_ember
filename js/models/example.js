App.Example = DS.Model.extend({
	exampleBool: DS.attr('boolean', {defaultValue: false}), /* defaultValue is optional */
	exampleStr: DS.attr('string'),
	exampleNum: DS.attr('number'),
	exampleDate: DS.attr('date', {defaultValue: function() { return new Date(); }}), /* defaultValue can be set via function */ 
	fullobject: function() {
		return this.get("id") + " " + this.get("exampleBool") + " " + this.get("exampleStr") + " " + this.get("exampleNum") + " " + this.get("exampleDate");
	}.property('id', 'exampleBool', 'exampleStr', 'exampleNum', 'exampleDate')
});		

App.Example.FIXTURES = [
	{id:1,exampleBool: true, exampleStr: "string 1", exampleNum: 666, exampleDate: '2013-02-07T16:44:57.000Z'},
	{id:2,exampleBool: false, exampleStr: "string 2", exampleNum: 777, exampleDate: '2013-02-08T16:44:57.000Z'},
	{id:3,exampleBool: true, exampleStr: "string 3", exampleNum: 888, exampleDate: '2013-02-09T16:44:57.000Z'}
];	