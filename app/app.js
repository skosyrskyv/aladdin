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

    var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 300 },
                debug: false
            }
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var player;
    var platforms;
    var cursors;

    var game = new Phaser.Game(config);

    function preload ()
    {
        this.load.setBaseURL(baseURL)
        images.map(image => {
            this.load.image(image.name, image.source);
        })
    
        this.load.atlas('aladdin', 'assets/aladdinSpritesheet.png', 'assets/aladdin.json')
    }

    function create ()
    {
        this.add.image(400, 300, 'sky');

        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        platforms.create(600, 400, 'ground');
        platforms.create(50, 250, 'ground');
        platforms.create(750, 220, 'ground');

        player = this.physics.add.sprite(100, 450, 'aladdin');
        player.setBounce(0);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNames('aladdin', { prefix: 'aladdin_', end: 1, zeroPad: 4 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({ key: 'turn', frames: this.anims.generateFrameNames('aladdin', { prefix: 'aladdin_', end: 0, zeroPad: 4 }), repeat: -1 });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNames('aladdin', { prefix: 'aladdin_',start:10, end: 2, zeroPad: 4 }),
            frameRate: 10,
            repeat: -1
        });

        cursors = this.input.keyboard.createCursorKeys();

        this.physics.add.collider(player, platforms);
    }

    function update ()
    {
        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
            player.flipX = true
            player.anims.play('right', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);
            player.flipX = false
            player.anims.play('right', true);
        }
        else
        {
            player.setVelocityX(0);
            player.anims.play('turn');
        }
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.setVelocityY(-330);
        }
    }