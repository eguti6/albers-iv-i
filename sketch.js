
let clrs = [
'#7133FF', //top 0
'#9B21D8', //middle top 1
'#D821C2', //middle strip 2
'#042060', //middle bottom 3
'#3778AE' //bottom 4
]


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
 background(220);
 canvasRect(clrs[4], height/8, height/2, false);
 canvasRect(clrs[0], height/2, 0, false);
 fill(clrs[2]); 
 rect(width * 1/3, height * 1/45, width * 1/3, height * 2/3); 
 canvasRect(clrs[1], height/6, height/3, true);
 canvasRect(clrs[3], height/5, height/2, true);


}

function canvasRect(clr, hgt, y_offset, clickable) {
	fill(clr);
	if((clickable == true) && (mouseIsPressed == false)){
		rect(0, y_offset, width, hgt);
	} 
	if(clickable == false){
		rect(0, y_offset, width, hgt);
	}
}
