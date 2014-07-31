BasicGame.Game = function (game)
{
var map;
var tileset;
var layer;
var player;
var facing = 'left';
var jumpTimer = 0;
var cursors;
var jumpButton;
var bg;
}

BasicGame.Game.prototype =
{
create: function()
	{
	game.physics.startSystem(Phaser.Physiscs.ARCADE);
	game.stage.backgorundColor = '#000000';
	bg = game.add.tileSprite(0,0,800,600,'backgound');
	}
}