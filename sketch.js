function setup() {
    createCanvas(400, 400);
    background("blue");
  }
  
  function draw() {
    
    stroke("pink");
    fill("purple");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  
