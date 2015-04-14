require("babel/register");

var cliArgs = require("command-line-args");
 
/* define the command-line options */
var cli = cliArgs([
    { name: "run", type: Array, defaultOption: true, alias: "r",  description: "Make devbot execute commands. This is the default option."},
    { name: "commands", type: Boolean, alias: "c", description: "List all available commands for devbot" },
    { name: "verbose", type: Boolean, alias: "v", description: "Output everything" },
    { name: "help", type: Boolean, description: "Get help" }
]);
 
/* parse the supplied command-line values */
var options = cli.parse();
 
/* generate a usage guide */
var usage = cli.getUsage({
    header: "devbot - the silent and deadly staging bot",
    footer: "\n  To learn more, visit http://dev/web/devbot"
});
    
if(options.help) {
	console.log(usage);
} else {
	require('./main')(options);
}