(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 430,
	height: 407,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ThinkGreen1.jpg", id:"ThinkGreen1"},
		{src:"images/ThinkGreen2.png", id:"ThinkGreen2"}
	]
};

// stage content:
(lib.thinkgreen = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(215,203.5,0.886,0.886);
	this.instance.alpha = 0.109;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},19,cjs.Ease.get(1)).wait(40));

	// Layer 1
	this.instance_1 = new lib.ThinkGreen1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(215,203.5,430,407);


// symbols:
(lib.ThinkGreen1 = function() {
	this.initialize(img.ThinkGreen1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,407);


(lib.ThinkGreen2 = function() {
	this.initialize(img.ThinkGreen2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,430,407);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ThinkGreen2();
	this.instance.setTransform(-215,-203.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-215,-203.5,430,407);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;