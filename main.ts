let miner = game.createSprite(2, 2)
let goldNugget = game.createSprite(randint(0, 4), randint(0, 4))
let score = 0
while (score < 10) {
    if (miner.get(LedSpriteProperty.X) == goldNugget.get(LedSpriteProperty.X) && miner.get(LedSpriteProperty.Y) == goldNugget.get(LedSpriteProperty.Y)) {
        score += 1
        goldNugget.set(LedSpriteProperty.X, randint(0, 4))
        goldNugget.set(LedSpriteProperty.Y, randint(0, 4))
    }
    if (input.acceleration(Dimension.X) > 0) {
        miner.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        miner.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) > 0) {
        miner.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    if (input.acceleration(Dimension.X) < 0) {
        miner.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
}
basic.showString("Game Over")
basic.forever(function () {
	
})
