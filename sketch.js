let backColour
let chickens = []

function setup() {
  backColour = (0)
  createCanvas(windowWidth, windowHeight);

  landimage = loadImage("back2.jpeg")
  sandbagImage = loadImage("sandbag.png")
  chickenImage = loadImage("chicken.png")

  for (var i=0; i < 1; i++){
    chickens.push(new Chicken)
  }
}

function draw() {
  background(backColour);
  //image(landimage, 0, 0, windowWidth, windowHeight)
  //image(sandbagImage, -400, +300, 1500, 1000)
  for (var i=0; i < chickens.length; i++){
    chickens[i].display()
    chickens[i].update()
  }
}

  function keyPressed(){
    if (key === "r"){
      backColour = color(255, 0, 0)
    }

    if (key === "b"){
      backColour = color(0, 0, 255)
    }
    if (key === "c"){
      chickens.push(new Chicken)
    }
  }

  class Chicken {
    constructor(){
      this.xPos = random(0, windowWidth)
      this.yPos = random(0, windowHeight)
    }

    update(){
      this.xPos = this.xPos + random(-50, 50)
      this.yPos = this.yPos + random(50, -50)
    
      if (this.yPos < 0 ){
        this.yPos = this.yPos + 50
      } else if (this.yPos > windowHeight){
        this.yPos = this.yPos - 50
      }
    
      if (this.xPos < 0){
        this.xPos = this.xPos + 50
      } else if (this.xPos > windowWidth){
        this.xPos = this.xPos - 50
      }
    }

    display(){
      imageMode(CENTER)
      image(chickenImage, this.xPos, this.yPos, chickenImage.width/3, chickenImage.height/3)
    }
  }