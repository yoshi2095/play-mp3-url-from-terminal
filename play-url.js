// online audio taken from: https://kiwi6.com/artists/spritekiwi6/souriez-quand-les-oiseaux-chantent
// used the hotlink which has the extension .mp3 :D

// using the Player library

var Player = require('player');

var player = new Player(
		'http://k007.kiwi6.com/hotlink/p1924y0omx/Souriez_Quand_les_oiseaux_chantent_.mp3'
	);

player.play(function(err, player){
  console.log('playend!');
});