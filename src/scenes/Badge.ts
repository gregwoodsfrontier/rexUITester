import Phaser from 'phaser'

export default class BadgeScene extends Phaser.Scene
{
	constructor()
	{
		super('badge')
	}

    create()
    {
        const blueSheet = this.textures.get('blueSheet');
        const frames = blueSheet.getFrameNames();

        for (let i = 0; i < frames.length; i++)
        {
            let x = Phaser.Math.Between(0, 800);
            let y = Phaser.Math.Between(0, 600);

            this.add.image(x, y, 'blueSheet', frames[i]);
        }
    }
}