class DockGameObject extends GameObject{
    constructor(){
        super()
        this.addComponent(new PlayerComponent())
        this.addComponent(new Polygon(), {points: [
            new Vector2(0,0),
            new Vector2(140,0),
            new Vector2(120,40),
            new Vector2(20,40),

        ],
    fillStyle: "#4a2e1c",
    // fillStyle: "pink"
    })
    }
}