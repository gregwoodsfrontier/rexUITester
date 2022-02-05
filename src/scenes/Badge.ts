import Phaser from 'phaser'
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import UIPlugins from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import { getGameHeight, getGameWidth, getRelative } from '../helpers';

const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

export default class BadgeScene extends Phaser.Scene
{
    rexUI!: RexUIPlugin;

	constructor()
	{
		super('badge')
	}

    create()
    {
        const blueTexture = this.textures.get('blueSheet');
        const blueFrame = blueTexture.getFrameNames();
        
        this.createBadgeLabel('blueSheet', blueFrame[4])
    }

    private createBadgeLabel = (texture: string, frameName: string) => {
        return this.rexUI.add.badgeLabel({
            x: getGameWidth(this) * 0.5,
            y: getGameHeight(this) * 0.5,
            width: getRelative(80, this),
            height: getRelative(80, this),
            space: {
                left: -5,
                right: -5,
                top: -5,
                bottom: -5
            },
            background: this.add.image(0, 0, texture, frameName),
            rightBottom: this.add.text(0, 0, '0', {
                color: 'yellow',
                align: 'right',
                backgroundColor: '#260e04',
                padding: { 
                    left: 3, 
                    right: 3, 
                    top: 3, 
                    bottom: 3 
                }
            })
        })
        .layout()
    }

    private createButton = (text: string) => {
        return this.rexUI.add.label({
            width: 40,
            height: 80,
            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 20, COLOR_LIGHT),
            text: this.add.text(0, 0, text, {
                fontSize: '18px'
            }),
            space: {
                left: 10,
                right: 10,
            },
            align: 'center'
        });
    }
}