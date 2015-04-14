
import Command from '../lib/devbot-command';

export default class Stage extends Command {

	constructor() {
		super();
		this.name = 'Stage';
		this.description = 'Instructs devbot to stage the current site via the devbot machine'
	}

	execute() {
	}

}