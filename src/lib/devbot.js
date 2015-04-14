import Debug from 'debug';
var debug = Debug('devbot');

import chalk from 'chalk';
import request from 'request';
import fs from 'fs';
import path from 'path';
import util from 'util';

import Command from './devbot-command';


export default class DevBot {

	constructor() {
	}

	splash() {
		console.log(chalk.bgRed.bold('devbot'));
	}

	getAllCommands() {
		// todo: this dir should be in %APPDATA%
		var commandDirectory = 'c:\\dev\\devbot\\src\\commands\\';
		debug('command directory is "%s"', commandDirectory);
		var files = fs.readdirSync(commandDirectory);
		debug('command files', files);

		var commands = [];
		files.forEach(function(file) {
			debug('validating command file "%s"', file);
			var extension = path.extname(file);
			if(extension === '.js') {

				var fullPath = path.join(commandDirectory, file);

				// Require-ing the command file means that it will run and oh well, hackers are not welcome...
				var command = require(fullPath);
				var instance = new command();
				var isCommand = Object.getPrototypeOf(command).name === 'Command';

				if(isCommand) {
					commands[command.name.toLowerCase()] = instance;
				}

			}
		})

		return commands;
	}

	run(commands) {
		debug('run commands', commands);

		var availableCommands = this.getAllCommands();
		debug('available commands', availableCommands);

		var missingCommands = [],
			foundCommands = [];

		commands.forEach(function(commandName) {
			if(availableCommands[commandName] === undefined) {
				missingCommands.push(commandName);
			} else {
				foundCommands.push(commandName);
			}
		});

		debug('missing commands', missingCommands);
		debug('found commands', foundCommands);

		var cwd = process.cwd();
		debug('working directory is %s', cwd);

		if(missingCommands.length > 0) {
			console.log(chalk.red.bold('Unable to find command%s %s'), missingCommands.length === 1 ? '' : 's:', missingCommands.join(', '));
		} else {

			for(var command of foundCommands) {
				// resolve this import function using %APPDATA%?
				availableCommands[command].run();
			}

		}
	}

}