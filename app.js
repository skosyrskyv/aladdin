var app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x2c3e50
});
document.body.appendChild(app.view);

app.loader
    .add('spritesheet', 'src/assets/aladdin.json')
    .load(onAssetsLoaded);

function onAssetsLoaded(loader, resources) {
    sprite = PIXI.Sprite.fromFrame("exampleFrame1.png");
    app.stage.addChild(sprite)
    app.start();
}