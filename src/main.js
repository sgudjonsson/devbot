

import DevBot from './lib/devbot';
import cliSplash from './lib/devbot-cli-splash';
import cliCommands from './lib/devbot-cli-commands';

export default function main(options) {

	var bot = new DevBot();

	cliSplash();

	if(options.run) {
		bot.run(options.run);
	} else if(options.commands) {
		var commands = bot.getAllCommands();
		cliCommands(commands);
	}
}


