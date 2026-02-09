class TextLabel extends Component{
    font = "20px Candara"
    fillStyle = "black"
    text = "[REDACTED]"

    draw(ctx){
        ctx.save()

        ctx.translate(this.transform.position.x,this.transform.position.y)
        ctx.font = this.font()
        ctx.fillStyle = this.fillStyle
        ctx.fillText(this.text, 0, 0)

        ctx.restore()
    }
}