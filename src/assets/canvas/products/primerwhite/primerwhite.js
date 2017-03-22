(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 520,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/primer.png", id:"primer"},
		{src:"images/transparent.png", id:"transparent"},
		{src:"images/white.png", id:"white"}
	]
};

// stage content:
(lib.primerwhite = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(1));

	// Layer 3
	this.instance = new lib.Symbol2();
	this.instance.setTransform(270,260);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(2));

	// Layer 2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(251,257);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({x:375,y:340,alpha:0},24,cjs.Ease.get(1)).to({_off:true},1).wait(14));

	// Layer 1
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(280,260);
	this.instance_2.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:270,alpha:1},8,cjs.Ease.get(1)).wait(25).to({alpha:0},10).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(280,260,540,520);


// symbols:
(lib.primer = function() {
	this.initialize(img.primer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.transparent = function() {
	this.initialize(img.transparent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.white = function() {
	this.initialize(img.white);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.transparent();
	this.instance.setTransform(-270,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-260,540,520);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.white();
	this.instance.setTransform(-270,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-260,540,520);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.primer();
	this.instance.setTransform(-270,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-260,540,520);

})(libPrimerWhite = libPrimerWhite||{}, images = images||{}, createjs = createjs||{});
var libPrimerWhite, images, createjs;