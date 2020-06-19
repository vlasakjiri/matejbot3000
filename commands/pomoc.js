const { prefix } = require('../config.json');
module.exports = {
    name: 'pomoc',
    description: 'Vypíše seznam všech příkazů',
    execute(msg, args) {
        let data = ["Zatím umím jen tohle :("];
        const { commands } = msg.client;
        commands.forEach(command => {
            data.push(`${prefix} **${command.name}**: ${command.description}`)
        });
        msg.channel.send(data.join('\n'));
    },
};