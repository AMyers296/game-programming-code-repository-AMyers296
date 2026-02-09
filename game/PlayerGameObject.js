class PlayerGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerComponent())
        this.addComponent(new Polygon(), {points: [
            new Vector2(0,0),
            new Vector2(0,50),
            new Vector2(25,50),
            new Vector2(25,0)

        ],
    strokeStyle: "purple",
    fillStyle: "pink"
    })
    }
}