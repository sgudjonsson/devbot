
export default class Command {

	constructor() {
		this.name = 'Base Command';
		this.description = '';
	}

	run() {
		console.log('Executing command "%s"', this.name);
		this.execute();
	}

}