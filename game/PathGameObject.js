class PathGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerComponent())
        this.addComponent(new Polygon(), {points: [
            new Vector2(0,0),
            new Vector2(80,0),
            new Vector2(0,30),
            new Vector2(-130,30),
            new Vector2(-90,-10),

        ],
    fillStyle: "#d6c2a1",
    // fillStyle: "pink"
    })
    }
}