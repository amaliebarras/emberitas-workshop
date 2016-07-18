import Ember from 'ember';

export default Ember.Controller.extend({
	name: 'friend',
	color: Ember.computed.readOnly('model.color'),
	someInformation: Ember.computed('model.name','model.color', function(){
		return 'Your name is ' + this.get('model.name') + ' and your favorite color is ' + this.get('model.color');
	}),
	colorStyle: Ember.computed('color', function() {
		let color = CSS.escape(this.get('color'));
		return Ember.String.htmlSafe("color: " + color);
	}),
	actions: {
		setName(newName){
			this.set('model.name', newName);
			this.get('model').save();
		},
		setColor(newColor){
			this.set('model.color', newColor);
			this.get('model').save();
		}
	}
});