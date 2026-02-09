class PostGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerComponent())
        this.addComponent(new Polygon(), {points: [
            new Vector2(0,0),
            new Vector2(20,0),
            new Vector2(20,60),
            new Vector2(0,60),

        ],
    fillStyle: "#d6c2a1",
    // strokeStyle: "purple"
    })
    }
}