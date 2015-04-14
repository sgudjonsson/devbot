
import Command from '../lib/devbot-command';

export default class Test extends Command {

	constructor() {
		super();
		this.name = 'Test Command';
		this.description = 'Just a test command';
	}

	execute() {
		console.log('This is just a sample command, not doing anything important');
	}

}