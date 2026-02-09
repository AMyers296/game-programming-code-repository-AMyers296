class CloudsGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerComponent())
        this.addComponent(new Polygon(), {points: [
            new Vector2(0,0),
            new Vector2(60,0),
            new Vector2(80,20),
            new Vector2(40,40),
            new Vector2(0,30),

        ],
    fillStyle: "white",
    // fillStyle: "pink"
    })
    }
}