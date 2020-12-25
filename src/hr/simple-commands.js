/**
 * Haxball Headless Manager plugin for simple commands that are suitable using
 * with a public room.
 *
 * Some code copied from XHerna's plugin.
 * See original at https://github.com/XHerna/hhm-plugins/blob/master/src/tut/simple-commands.js.
 */

const room = HBInit();

function isGameRunning() {
  return !!room.getScores();
}

room.pluginSpec = {
  name: `hr/simple-commands`,
  author: `salamini`,
  version: `1.1.1`,
  dependencies: [`sav/commands`, `sav/players`],
};

var stadiumFileText = `{
  	"name" : "Big",

  	"width" : 600,

  	"height" : 270,

  	"spawnDistance" : 350,

  	"bg" : { "type" : "grass", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0 },

  	"vertexes" : [
  		/* 0 */ { "x" : -550, "y" : 240, "trait" : "ballArea" },
  		/* 1 */ { "x" : -550, "y" : 80, "trait" : "ballArea" },
  		/* 2 */ { "x" : -550, "y" : -80, "trait" : "ballArea" },
  		/* 3 */ { "x" : -550, "y" : -240, "trait" : "ballArea" },
  		/* 4 */ { "x" : 550, "y" : 240, "trait" : "ballArea" },
  		/* 5 */ { "x" : 550, "y" : 80, "trait" : "ballArea" },
  		/* 6 */ { "x" : 550, "y" : -80, "trait" : "ballArea" },
  		/* 7 */ { "x" : 550, "y" : -240, "trait" : "ballArea" },

  		/* 8 */ { "x" : 0, "y" : 270, "trait" : "kickOffBarrier" },
  		/* 9 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier" },
  		/* 10 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier" },
  		/* 11 */ { "x" : 0, "y" : -270, "trait" : "kickOffBarrier" },

  		/* 12 */ { "x" : -560, "y" : -80, "trait" : "goalNet" },
  		/* 13 */ { "x" : -580, "y" : -60, "trait" : "goalNet" },
  		/* 14 */ { "x" : -580, "y" : 60, "trait" : "goalNet" },
  		/* 15 */ { "x" : -560, "y" : 80, "trait" : "goalNet" },
  		/* 16 */ { "x" : 560, "y" : -80, "trait" : "goalNet" },
  		/* 17 */ { "x" : 580, "y" : -60, "trait" : "goalNet" },
  		/* 18 */ { "x" : 580, "y" : 60, "trait" : "goalNet" },
  		/* 19 */ { "x" : 560, "y" : 80, "trait" : "goalNet" },

  		/* 20 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : -48.6000022888, "y" : 248.800003052 },
  		/* 21 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : -48.6000022888, "y" : 265.800003052 },
  		/* 22 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : -39.6000022888, "y" : 266.800003052 },
  		/* 23 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : -37.6000022888, "y" : 248.800003052 },
  		/* 24 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : -25.6000022888, "y" : 251.800003052 },
  		/* 25 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : -16.6000022888, "y" : 266.800003052 },
  		/* 26 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : -9.60000228882, "y" : 250.800003052 },
  		/* 27 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : -2.60000228882, "y" : 269.800003052 },
  		/* 28 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : -5.60000228882, "y" : 258.800003052 },
  		/* 29 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : 29.3999977112, "y" : 248.800003052 },
  		/* 30 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : 32.3999977112, "y" : 266.800003052 },
  		/* 31 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : 45.3999977112, "y" : 248.800003052 },
  		/* 32 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : 52.3999977112, "y" : 256.800003052 },
  		/* 33 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : 58.3999977112, "y" : 245.800003052 },
  		/* 34 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : 52.3999977112, "y" : 267.800003052 },
  		/* 35 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : 11.3999977112, "y" : 249.800003052 },
  		/* 36 */ { "cMask" : ["ball" ], "cGroup" : ["ball" ], "x" : 20.3999977112, "y" : 264.800003052 }

  	],

  	"segments" : [
  		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
  		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
  		{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },
  		{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },

  		{ "v0" : 12, "v1" : 13, "trait" : "goalNet", "curve" : -90 },
  		{ "v0" : 13, "v1" : 14, "trait" : "goalNet" },
  		{ "v0" : 14, "v1" : 15, "trait" : "goalNet", "curve" : -90 },
  		{ "v0" : 16, "v1" : 17, "trait" : "goalNet", "curve" : 90 },
  		{ "v0" : 17, "v1" : 18, "trait" : "goalNet" },
  		{ "v0" : 18, "v1" : 19, "trait" : "goalNet", "curve" : 90 },

  		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },
  		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO" ] },
  		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO" ] },
  		{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" },

  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 20, "v1" : 21 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 22, "v1" : 20 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 23, "v1" : 22 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 24, "v1" : 25, "curve" : -173.282467513 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 25, "v1" : 24, "curve" : -145.839532856 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 26, "v1" : 27 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 26, "v1" : 28, "curve" : 201.712826696 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 28, "v1" : 27, "curve" : 183.695220532 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 29, "v1" : 30 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 29, "v1" : 30, "curve" : 178.585361263 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 31, "v1" : 32 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 32, "v1" : 33 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 32, "v1" : 34 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 35, "v1" : 36, "curve" : -173.282467513 },
  		{ "cMask" : ["ball" ], "cGroup" : ["ball" ], "v0" : 36, "v1" : 35, "curve" : -145.839532856 }

  	],

  	"goals" : [
  		{ "p0" : [-550,80 ], "p1" : [-550,-80 ], "team" : "red" },
  		{ "p0" : [550,80 ], "p1" : [550,-80 ], "team" : "blue" }

  	],

  	"discs" : [
  		{ "pos" : [-550,80 ], "trait" : "goalPost", "color" : "FFCCCC" },
  		{ "pos" : [-550,-80 ], "trait" : "goalPost", "color" : "FFCCCC" },
  		{ "pos" : [550,80 ], "trait" : "goalPost", "color" : "CCCCFF" },
  		{ "pos" : [550,-80 ], "trait" : "goalPost", "color" : "CCCCFF" },

  		{ "radius" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "pos" : [-21.2857055664,259.57144165 ], "color" : "000000" },
  		{ "radius" : 2, "pos" : [15.7142944336,257.57144165 ], "cMask" : ["ball" ], "cGroup" : ["ball" ], "color" : "000000" },
  		{ "radius" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "pos" : [-66.2857055664,252.57144165 ], "color" : "000000" },
  		{ "radius" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "pos" : [-71.2857055664,262.57144165 ], "color" : "000000" },
  		{ "radius" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "pos" : [-60.2857055664,262.57144165 ], "color" : "000000" }

  	],

  	"planes" : [
  		{ "normal" : [0,1 ], "dist" : -240, "trait" : "ballArea" },
  		{ "normal" : [0,-1 ], "dist" : -240, "trait" : "ballArea" },

  		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
  		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
  		{ "normal" : [1,0 ], "dist" : -600, "bCoef" : 0.1 },
  		{ "normal" : [-1,0 ], "dist" : -600, "bCoef" : 0.1 }

  	],

  	"traits" : {
  		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
  		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
  		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
  		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

  	},

  	"ballPhysics" : {
  		"radius" : 9.2,
  		"bCoef" : 1,
  		"damping" : 0.991,
  		"invMass" : 1,
  		"color" : "EDED09"

  	},

  	"playerPhysics" : {
  		"kickStrength" : 8.5,
  		"invMass" : 1e+26,
  		"bCoef" : 0

  	}
  }`

room.onCommand_big = room.onCommand_Big {
  if (player.admin)
    room.setCustomStadium(stadiumFileText)
}
room.onCommand_bb = room.onCommand_BB {
    function: (player) => {
    room.kickPlayer(player.id, "Good Bye!", false);
  },
  data: {
    'sav/help': {
      text: ' (leave the room)',
    }
  }
}

room.onCommand_pm = room.onCommand_PM {
  function: (fromPlayer, args) => {
    if (!Array.isArray(args) || args.length < 2) {
      room.sendAnnouncement(
        `Usage: !pm #PLAYER_ID MESSAGE`,
        fromPlayer.id,
        0xff0000
      );
      return false;
    }

    const mutePlugin = room.getPlugin("hr/mute");
    if (mutePlugin && mutePlugin.isMuted(fromPlayer)) {
      return false;
    }

    const id = args[0];
    const msg = args.slice(1).join(" ");

    let intId = parseInt(id);

    if (!intId) {
      intId = parseInt(id.slice(1));
    }

    if (!intId) {
      room.sendAnnouncement(
        `Could not send PM to ${id}`,
        fromPlayer.id,
        0xff0000
      );
      room.sendAnnouncement(
        `Usage: !pm #PLAYER_ID MESSAGE`,
        fromPlayer.id,
        0xff0000
      );
      return false;
    }

    let toPlayer = room.getPlayer(intId);

    if (!toPlayer) {
      room.sendAnnouncement(
        `Could not send PM to ${id}`,
        fromPlayer.id,
        0xff0000
      );
      room.sendAnnouncement(
        `Usage: !pm #PLAYER_ID MESSAGE`,
        fromPlayer.id,
        0xff0000
      );
      return false;
    }

    let pm = `PM ${fromPlayer.name}: ${msg}`;
    room.sendAnnouncement(pm, toPlayer.id, 0xa98abf);
    room.sendAnnouncement(pm, fromPlayer.id, 0xa98abf);
    return false;
  },
  data: {
    'sav/help': {
      text: ' #PLAYER_ID (send a private message to another player)',
    }
  }
}

room.onCommand_swap = room.onCommand_SWAP {
  function: (player) => {
    if (player.admin) {
      swapTeams(player);
    } else {
      room.sendAnnouncement(
        "You need admin to use this command!",
        player.id,
        0xff0000
      );
    }
  },
  data: {
    'sav/help': {
      text: ' (swap teams if you have admin)',
    }
  }
}

room.onCommand_rr = room.onCommand_RR {
  function: (player) => {
    if (player.admin) {
      restartGame();
    } else {
      room.sendAnnouncement(
        "You need admin to use this command!",
        player.id,
        0xff0000
      );
    }
  },
  data: {
    'sav/help': {
      text: ' (restart game if you have admin)',
    }
  }
}

// Tells onGameStop that rrs command stopped the game
// so it should swap teams and restart.
let stoppedByRrs = null;

room.onCommand_rrs = onCommand_RRS {
  function: (player) => {
    if (!player.admin) {
      room.sendAnnouncement(
        "You need admin to use this command!",
        player.id,
        0xff0000
      );
      return;
    }

    if (isGameRunning()) {
      stoppedByRrs = player;
      room.stopGame();
    } else {
      swapTeams(player);
      room.startGame();
    }
  },
  data: {
    'sav/help': {
      text: ' (restart game and swap teams if you have admin)',
    }
  }
}

room.onGameStop = function () {
  if (stoppedByRrs) {
    swapTeams(stoppedByRrs);
    room.startGame();
    stoppedByRrs = null;
  }
};

function restartGame() {
  room.stopGame();
  room.startGame();
}

function swapTeams(player) {
  if (!isGameRunning()) {
    players = room.getPlayerList();
    for (i = 0; i < players.length; i++) {
      if (players[i].team == 1) {
        room.setPlayerTeam(players[i].id, 2);
      } else if (players[i].team == 2) {
        room.setPlayerTeam(players[i].id, 1);
      }
    }
    room.sendAnnouncement("Teams swapped!", null, 0x00ff00);
  } else {
    room.sendAnnouncement(
      "Game needs to be stopped to swap teams!",
      player.id,
      0xff0000
    );
  }
}
