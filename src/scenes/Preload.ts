import Phaser from 'phaser'
import {
    getGameWidth,
    getGameHeight,
    getRelative
} from '../helpers'

export default class Preload extends Phaser.Scene
{
    private progressBarContainer?: Phaser.GameObjects.Rectangle;
    private progressBar?: Phaser.GameObjects.Rectangle;

	constructor()
	{
		super('Preload')
	}

	preload()
    {
        this.load.atlasXML('blueSheet', 'sprites/kenney/blueSheet.png', 'sprites/kenney/blueSheet.xml')
        this.load.atlasXML('greenSheet', 'sprites/kenney/greenSheet.png', 'sprites/kenney/greenSheet.xml')
        this.load.atlasXML('greySheet', 'sprites/kenney/greySheet.png', 'sprites/kenney/greySheet.xml')
        this.load.atlasXML('redSheet', 'sprites/kenney/redSheet.png', 'sprites/kenney/redSheet.xml')
        this.load.atlasXML('yellowSheet', 'sprites/kenney/yellowSheet.png', 'sprites/kenney/yellowSheet.xml')
        this.load.spritesheet('cryogui', 'sprites/cryo/gui/GUI_4x.png', {
            frameWidth: 16,
            frameHeight: 16
        });

		this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("badge"));
    }

    /**
     * Renders UI component to display loading progress
     */
    private createProgressBar = () => {
        const width = getGameWidth(this) * 0.5;
        const height = 12;
        const upY = getRelative(100, this);
        this.progressBarContainer = this.add
        .rectangle(
            getGameWidth(this) / 2 ,
            getGameHeight(this) / 2 - upY,
            width,
            height,
            0x12032e
        )
        .setOrigin(0.5);

        this.progressBar = this.add
        .rectangle(
            (getGameWidth(this) - width) / 2 ,
            getGameHeight(this) / 2 - upY,
            0,
            height,
            0x6d18f8
        )
        .setOrigin(0, 0.5);
    };
}