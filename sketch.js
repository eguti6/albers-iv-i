
let clrs = [
'#OOCCFF', //top 0
'#660066', //middle top 1
'#CCCCFF', //middle strip 2
'#33FF46', //middle bottom 3
'#7133FF' //bottom 4
]


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
 background(220);
 canvasRect(clrs[1], height/2, height/2, false);
 canvasRect(clrs[3], height/2, 0, false);
 fill(clrs[2]); 
 rect(width * 1/3, height * 1/6, width * 1/3, height * 2/3); 
 canvasRect(clrs[1], height/6, height/3, true);
 canvasRect(clrs[2], height/6, height/2, true);


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
