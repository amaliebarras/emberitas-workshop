import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	name(){
		return faker.name.firstName();
	},
	color(i) {
		return faker.list.random(
			'red', 'yellow', 'purple', 'pink', 'green', 'orange', 'blue', 'brown')(i);
	},
});
