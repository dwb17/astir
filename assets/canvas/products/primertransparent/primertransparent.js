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
(lib.primertransparent = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(251,257);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:375,y:340,alpha:0},24,cjs.Ease.get(1)).to({_off:true},1).wait(45));

	// Layer 1
	this.instance_1 = new lib.transparent();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(251,257,559,523);


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


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.primer();
	this.instance.setTransform(-270,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-260,540,520);

})(libPrimerTransparent = libPrimerTransparent||{}, images = images||{}, createjs = createjs||{});
var libPrimerTransparent, images, createjs;