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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_85 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(85).call(this.frame_85).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("AulOlQmCmDAAoiQAAohGCmDQGDmDIiAAQIiAAGDGDQGDGDAAIhQAAIimDGDQmDGDoiAAQoiAAmDmDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:165.1,y:132}).wait(75));

	// Layer 3
	this.instance = new lib.opener_1();
	this.instance.setTransform(88.3,235);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({x:168.3,y:125},22,cjs.Ease.get(1)).wait(4).to({rotation:7.2,x:163.3,y:123.5},0).wait(49));

	// Layer 2
	this.instance_1 = new lib.cap();
	this.instance_1.setTransform(175,11);
	this.instance_1.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:165,y:71,alpha:1},10,cjs.Ease.get(1)).wait(27).to({rotation:9.9,x:166,y:69.5},0).wait(49));

	// Layer 1
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(280,260);
	this.instance_2.alpha = 0.141;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(270,260);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},10).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true,x:270,alpha:1},10,cjs.Ease.get(1)).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270.1,246.5,549.9,533.6);


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


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pryoff_1();
	this.instance.setTransform(-270,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-260,540,520);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.pryoff_1();
	this.instance.setTransform(-270,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-260,540,520);


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

})(libPryoff = libPryoff||{}, images = images||{}, createjs = createjs||{});
var libPryoff, images, createjs;