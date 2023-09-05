let x,y
let pemain1,pemain2

function garis(x,y){
  line(x,y,x, height-y )
}

function setup() {
  createCanvas(550, 400);
  
  pemain1 = new Pemain(100, 'green')
  pemain2 = new Pemain(height-100, 'red')
}

function draw() {
  background(5,60,190);

  garis(100,50)
  garis(width-100,50)
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  
  pemain1.finish()
  pemain2.finish()
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    pemain1.maju()
  }
  else if (keyCode === RIGHT_ARROW){
    pemain2.maju()
  }
}