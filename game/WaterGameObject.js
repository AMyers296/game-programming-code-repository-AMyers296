class WaterGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerComponent())
        this.addComponent(new Polygon(), {points: [
            new Vector2(0,0),
            new Vector2(450,0),
            new Vector2(450,70),
            new Vector2(0,70)

        ],
    fillStyle: "#5f7fb0",
    // fillStyle: "pink"
    })
    }
}