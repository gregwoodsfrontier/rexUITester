import Phaser from 'phaser'
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import BadgeScene from './scenes/Badge';
import HelloWorldScene from './scenes/HelloWorldScene'
import Preload from './scenes/Preload';

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	plugins: {
		scene: [
			{
				key: 'rexUI',
				plugin: RexUIPlugin,
				mapping: 'rexUI'
			}
		]
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 }
		}
	},
	scene: [Preload, BadgeScene]
}

export default new Phaser.Game(config)