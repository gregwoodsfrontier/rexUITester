import * as Phaser from 'phaser';

export const getGameWidth = (scene: Phaser.Scene): number => scene.game.scale.width;

export const getGameHeight = (scene: Phaser.Scene): number => scene.game.scale.height;

/**
 * Get a fixed width/height size relative to the games dimensions
 * @param {number} size - Size of element
 * @param {scene} scene - Current scene
 * @returns {number} Number representing the fixed size relative to the games dimensions
 */
export const getRelative = (size: number, scene: Phaser.Scene): number => getGameHeight(scene) * size / 1300;

/**
 * Inverse a fixed width/height size relative to the games dimensions
 * @param {number} size - Size of element
 * @param {scene} scene - Current scene
 * @returns {number} Number representing the fixed size relative to the games dimensions
 */
export const invertRelative = (size: number, scene: Phaser.Scene): number => 1300 * size / getGameHeight(scene);

/**
 * Check XOR condition between a and b 
 * @param a boolean
 * @param b boolean
 * @returns XOR of a and b
 */
export const checkXOR = (a: boolean, b: boolean) => {
    return !a != !b
}