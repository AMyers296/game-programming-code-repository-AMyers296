class CabinGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerComponent())
        this.addComponent(new Polygon(), {points: [
            new Vector2(0,0),
            new Vector2(160,0),
            new Vector2(160,90),
            new Vector2(0,90)

        ],
    fillStyle: "#6d4a3a",
    // fillStyle: "pink"
    })
    }
}