class MainScene extends Scene{
    constructor(){
        super()
        this.instantiate(new BatSymbolGameObject(), new Vector2(0, 0))
        this.instantiate(new BatSymbolGameObject(), new Vector2(100, 100))

        this.instantiate(new PlayerGameObject(), new Vector2(300, 300))

        this.instantiate(new SkyGameObject(), new Vector2(0, 0))
        this.instantiate(new CloudsGameObject(), new Vector2(80, 70))
        this.instantiate(new CloudsGameObject(), new Vector2(300, 100))
        this.instantiate(new CloudsGameObject(), new Vector2(540, 180))

        this.instantiate(new CabinGameObject(), new Vector2(700, 140))
        this.instantiate(new DoorGameObject(), new Vector2(750, 210))
        
        this.instantiate(new WaterGameObject(), new Vector2(0, 430))
        
        this.instantiate(new DockGameObject(), new Vector2(380, 350))
        this.instantiate(new PostGameObject(), new Vector2(380, 390))

        this.instantiate(new WaterGameObject(), new Vector2(0, 450))

        this.instantiate(new GrassGameObject(), new Vector2(0, 250))
        this.instantiate(new PathGameObject(), new Vector2(780, 300))
        
        
        
        //example of anonymus game object
        // const title = this.instantiate(new GameObject(), new Vector2(500, 500))
        // title.addComponent(new TextLabel(), {text: "TITLE HERE"})
    }
}