LootChest.Sword = function(game,x,y)
{
		this.game = game;
	
		Phaser.Sprite.call(this,game,x,y,'Sword');
		
		game.physics.enable(this,Phaser.Physics.ARCADE);
		
		this.body.drag.x = 10;
		this.body.collideWorldBounds = true;
		this.animations.add('idle',[0,1,2,3,4],10, true );
		this.animations.play('idle');
		
		game.add.existing(this);
};

LootChest.Sword.prototype = Object.create(Phaser.Sprite.prototype);
LootChest.Sword.prototype.constructor = LootChest.Sword;
LootChest.Sword.prototype.collect = function(player)
{
	player.swordAmount++;
	this.kill();
}