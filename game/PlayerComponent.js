class PlayerComponent extends Component{
    start(){

    }

    update(){
        if(Input.keysDown.includes("KeyD"))
            this.transform.position.x += Time.deltaTime * 60

        if(Input.keysDown.includes("KeyA"))
            this.transform.position.x -= Time.deltaTime * 60

        if(Input.keysDown.includes("KeyS"))
            this.transform.position.y += Time.deltaTime * 60

        if(Input.keysDown.includes("KeyW"))
            this.transform.position.y -= Time.deltaTime * 60
    }


}