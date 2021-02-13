import * as Phaser from '../node_modules/phaser/dist/phaser'

const baseURL = 'src/'

const images = [
    {
        name : 'sky',
        source : 'assets/sky.png'
    },
    {
        name : 'ground',
        source : 'assets/platform.png'
    },
    {
        name : 'star',
        source : 'assets/star.png'
    },
    {
        name : 'bomb',
        source : 'assets/bomb.png'
    }
]
    
const spritesheet = [
    {
        name = 'dude',
        source = 'assets/dude.png',
        size = {
            frameWidth: 32, 
            frameHeight: 48
        }
    }
]

// const loadAssets = (images, spritesheet, baseURL) =>{
//     this.load.setBaseURL(baseURL)
export function func () {
    images.map(image => {
        this.load.image(image.name, image.source);
    })
}

