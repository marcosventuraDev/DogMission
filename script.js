const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

console.log(ctx);

const CANVAS_WIDTH =   canvas.width = 600;
const CANVAS_HEIGHT =   canvas.height = 600;

const playerImage = new Image();

playerImage.src = 'shadow_dog.png';
const spritewidth = 575;
const spriteheight = 523;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 4;




function animate(){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
   // ctx.fillRect(50,50,100,100);
    ctx.drawImage(playerImage, frameX * spritewidth, frameY * spriteheight, spritewidth, spriteheight, 0, 0, spritewidth, spriteheight);
  if (gameFrame % staggerFrames == 0) {
    
      if(frameX < 6)frameX++;
      else frameX = 0;
  }
    gameFrame++;
    requestAnimationFrame(animate);
};

animate();