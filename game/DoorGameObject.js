class DoorGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerComponent())
        this.addComponent(new Polygon(), {points: [
            new Vector2(0,0),
            new Vector2(60,0),
            new Vector2(60,110),
            new Vector2(0,110)

        ],
    fillStyle: "#4a2e1c",
    StrokeStyle: "black"
    })
    }
}