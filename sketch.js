var y = 100;
var d = 0;
var a = 10;
var b = 15;
var c = 20;



function setup() {
  createCanvas(1800, 1200);

textSize(64);
fill(255,0,0);
}

function draw() {
  background(220, 5, 210);

  ellipse(75,y,d,d);

  ellipse(175,y,d,d);

  ellipse(275,y,d,d);

  fill(20, 275, 45);
  rect(a,b,300, c);

  fill(20, 30, 245);
  rect(a+100, b+c, 300, c);

  fill(200,30,45);
  rect(d+200, b + c*2, 300, b);

  d=d+5;

  var weight=dist(mouseX,mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX,mouseY,pmouseX,pmouseY);

  if (mouseIsPressed){
    fill(350);
  }
  else{
    fill(230,3,183);
  }
  ellipse(mouseX,mouseY,25,25);

  if (mouseIsPressed){
    fill(33,33,133,150);
    ellipse(mouseX,mouseY,80,80);
  }
  else{
    fill(33,33,133,100);
    rectMode(CENTER);
    rect(mouseX,mouseY,80,80);
  }

  ellipse(220, 120, 100, 100);

  if(keyIsPressed){
    ellipse(220,430,50,50);
    ellipse(120,120,170,50);
    ellipse(220,130,50,50);
    ellipse(20,30,50,50);
  }



    text(key,60,80);
    text(key,100,80);
    text(key,140,80);
    text(key,180,80);

  if (mouseX > 400) {
    //yellow
    fill(255,255,0);
  } else if (mouseX>300){
    //violet
    fill(101,22,232);
  }else if (mouseX>200){
    //green
    fill(101,250,182);
  }else if (mouseX>100){
    //pink
    fill(255, 142, 182);
  }else {
    //orange
    fill(255,142,0);
  }

    triangle(50, 400, 150, 300, 100, 480);
  quad(1120, 990, 700, 850, 550, 150, 200, 50);
  }
