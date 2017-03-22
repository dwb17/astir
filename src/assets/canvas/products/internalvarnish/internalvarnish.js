(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 520,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_1.png", id:"_1"},
		{src:"images/_2.png", id:"_2"}
	]
};

// stage content:
(lib.internalvarnish = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(270,260);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({x:403,y:359,alpha:0},28,cjs.Ease.get(1)).to({_off:true},1).wait(20));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(280,260,1,1,0,0,0,270,0);
	this.instance_1.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:270,alpha:1},10,cjs.Ease.get(1)).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280,260,540,520);


// symbols:
(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1();
	this.instance.setTransform(0,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-260,540,520);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2();
	this.instance.setTransform(-270,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-260,540,520);

})(libInternalVarnish = libInternalVarnish||{}, images = images||{}, createjs = createjs||{});
var libInternalVarnish, images, createjs;