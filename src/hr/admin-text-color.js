let room = HBInit();
room.pluginSpec = {
	name: 'hr/admin-text-color',
	author: `hr`,
	version: `1.0.0`,
	config: {
		adminpass: ""
	},
	dependencies: [
		'sav/commands'
	]
};

var colors = {
	red: "0xff0000",
	gold: "0xffdc72",
	blue: "0X87CEFA"
};

//checks chat for @mentions from captain.
room.onPlayerChat = (player, arg) => {
	if (player.admin) {
		var message = `${player.name}: ${arg}`
		room.sendAnnouncement(message, null, colors.red)
		return false
	}
}
