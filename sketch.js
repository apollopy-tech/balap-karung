let x,y
let pemain1,pemain2
let sfxLoncat
let bg


function preload() {
  soundFormats('mp3')
  sfxLoncat =loadSound('fast-simple-chop-5-6270.mp3')
  bg = loadImage('lapang.jpeg')
}

function garis(x,y){
  line(x,y,x, height-y )
}

function setup() {
  createCanvas(550, 400);
  
  pemain1 = new Pemain(110, 'green')
  pemain2 = new Pemain(height-110, 'red')
}

function draw() {
  background(bg);

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
    sfxLoncat.play()
  }
  else if (keyCode === RIGHT_ARROW){
    pemain2.maju()
    sfxLoncat.play()
  }
}
