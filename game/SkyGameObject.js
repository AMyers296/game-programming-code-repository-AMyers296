class SkyGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerComponent())
        this.addComponent(new Polygon(), {points: [
            new Vector2(0,0),
            new Vector2(900,0),
            new Vector2(900,250),
            new Vector2(0,250)

        ],
    fillStyle: "#5f7fb0",
    // fillStyle: "pink"
    })
    }
}