class BatSymbolComponent extends Component {
    start() {

    }
    update() {
        this.transform.position.x += Time.deltaTime * 60
        this.transform.position.y += Time.deltaTime * 60
    }
    draw(ctx) {
        ctx.save()
        ctx.translate(this.transform.position.x,this.transform.position.y)
        
        ctx.beginPath()
        ctx.moveTo(50,60)
        ctx.lineTo(35,65)
        ctx.lineTo(50,35)
        ctx.lineTo(65,75)
        ctx.lineTo(50,60)
        
        ctx.lineWidth = 5
        ctx.strokeStyle = "purple"
        ctx.stroke()

        ctx.fillStyle = "yellow"
        ctx.fill()
        ctx.restore()
    }

}