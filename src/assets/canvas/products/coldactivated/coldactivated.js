(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 564,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_1.jpg", id:"_1"},
		{src:"images/_2.jpg", id:"_2"},
		{src:"images/_3a.png", id:"_3a"},
		{src:"images/_3b.png", id:"_3b"}
	]
};

// stage content:
(lib.coldactivated = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol3();
	this.instance.setTransform(270,282);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({alpha:1},24,cjs.Ease.get(1)).wait(41));

	// Layer 3
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(400,282);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:270,alpha:1},25,cjs.Ease.get(1)).wait(65));

	// Layer 2
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(270,282);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({alpha:1},37).wait(21));

	// Layer 1
	this.instance_3 = new lib._1();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,282,670,564);


// symbols:
(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib._3a = function() {
	this.initialize(img._3a);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib._3b = function() {
	this.initialize(img._3b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3b();
	this.instance.setTransform(-270,-282);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-282,540,564);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3a();
	this.instance.setTransform(-270,-282);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-282,540,564);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2();
	this.instance.setTransform(-270,-282);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-282,540,564);

})(libColdActivated = libColdActivated||{}, images = images||{}, createjs = createjs||{});
var libColdActivated, images, createjs;