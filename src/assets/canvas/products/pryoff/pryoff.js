(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 520,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/cap1.png", id:"cap1"},
		{src:"images/opener.png", id:"opener"},
		{src:"images/pryoff_1.png", id:"pryoff_1"}
	]
};

// stage content:
(lib.pryoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AulOlQmCmDAAoiQAAohGCmDQGDmDIiAAQIiAAGDGDQGDGDAAIhQAAIimDGDQmDGDoiAAQoiAAmDmDg");
	mask.setTransform(165.1,132);

	// Layer 3
	this.instance = new lib.opener_1();
	this.instance.setTransform(88.3,235);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:168.3,y:125},22,cjs.Ease.get(1)).wait(4).to({rotation:7.2,x:163.3,y:123.5},0).wait(49));

	// Layer 2
	this.instance_1 = new lib.cap();
	this.instance_1.setTransform(165,71);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26).to({rotation:9.9,x:166,y:69.5},0).wait(49));

	// Layer 1
	this.instance_2 = new lib.pryoff_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,260,540,520);


// symbols:
(lib.cap1 = function() {
	this.initialize(img.cap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,49);


(lib.opener = function() {
	this.initialize(img.opener);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,275,240);


(lib.pryoff_1 = function() {
	this.initialize(img.pryoff_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.opener_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.opener();
	this.instance.setTransform(-137.5,-120);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-137.5,-120,275,240);


(lib.cap = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cap1();
	this.instance.setTransform(-46.5,-24.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-46.5,-24.5,93,49);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;