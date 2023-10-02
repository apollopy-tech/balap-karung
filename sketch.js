let x,y
let pemain1,pemain2
let sfxLoncat
let bg, p1img, p2img


function preload() {
  soundFormats('mp3')
  sfxLoncat =loadSound('jump.mp3')
  bg = loadImage('t.png')
  p1img = loadImage('boy-player.png')
  p2img = loadImage('girl-player.png')
}

function garis(x,y){
  line(x,y,x, height-y )
}

function setup() {
  createCanvas(550, 400);
  
  pemain1 = new Pemain(110, p1img)
  pemain2 = new Pemain(height-155, p2img)
}

function draw() {
  background(bg);

  garis(90,50)
  garis(width-90,50)
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  
  pemain1.finish()
  pemain2.finish()
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW){
    pemain1.maju()
    sfxLoncat.play()
  }
  else if (keyCode === RIGHT_ARROW){
    pemain2.maju()
    sfxLoncat.play()
  }
}