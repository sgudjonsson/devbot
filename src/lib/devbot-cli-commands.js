
import table from 'text-table';
import chalk from 'chalk';

export default function(commands) {

		var out = []
		for(var command in commands) {
			out.push([chalk.green(commands[command].name), commands[command].description]);
		}

		var text = table(out, {
			stringLength: function(s) {
				return s.length;
			}
		});

		console.log('Available devbot commands');
		console.log('-----------------------------------------------');
		console.log(text);

}