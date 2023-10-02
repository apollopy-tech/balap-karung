class Pemain {
  constructor(y, img) {
    this.d = 50
    this.x = 50
    this.y = y
    this.speed = 15
    this.img = img
  }
  
  tampilkan(){
    image(this.img, this.x , this.y, this.d, this.d)
  }
  
  maju(){
    this.x += this.speed
  }
  
  finish(){
    if(this.x > width-90) {
      fill(225)
      stroke(0)
      textSize(50)
      textAlign(CENTER)
      text('Finish', width/2 , height/2)
      noLoop()
    }
    
  }
}