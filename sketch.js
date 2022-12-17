let cnvs;
let fireworks=[];
let colorArray=[];
let gravity;
let rows=4;//max 6

function setup() {
	cnvs=createCanvas(windowWidth, windowHeight);
	cnvs.mouseClicked(firework)
	colorArray=['red','white','blue','purple','lime','yellow','orange']
	background(0);
	gravity=createVector(0,0.2)
	// alert('Click on the background to launch a firework \nPress SPACE to launch a firework at a random position \nPress the numbers 2-6 to increase/decrease the firework size\nThe colors are all random \nReload the page to bring this window back');
}

function draw() {
background('rgba(0,0,0,0.15)');




for(let i=0;i<fireworks.length;i++)
{
fireworks[i].update();
fireworks[i].display();

}


}
let firework=function()
{
	fireworks.push(new createFirework(mouseX,mouseY))
}
function keyPressed()
{
	switch(keyCode)
	{
		case 32:
			fireworks.push(new createFirework(random(50,(windowWidth-50)),random(100,(windowHeight-300))))
			break;
		case 50:
			rows=2;
			break;
		case 51:
			rows=3;
			break;
		case 52:
			rows=4;
			break;
		case 53:
			rows=5;
			break;
		case 54:
			rows=6;
			break;
		case 55:
			rows=7;
			break;
		default:
			break;

	}
	

	return false;
}
