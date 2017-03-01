(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 520,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/aluminium.png", id:"aluminium"},
		{src:"images/primer.png", id:"primer"},
		{src:"images/transparent.png", id:"transparent"}
	]
};

// stage content:
(lib.primeraluminium = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol2();
	this.instance.setTransform(270,260);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},18,cjs.Ease.get(1)).wait(33));

	// Layer 2
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(251,257);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:375,y:340,alpha:0},24,cjs.Ease.get(1)).to({_off:true},1).wait(45));

	// Layer 1
	this.instance_2 = new lib.transparent();

	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(270,260);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(270,260);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},22).to({state:[{t:this.instance_4}]},14).to({state:[]},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(22).to({_off:false},0).to({_off:true,alpha:0},14,cjs.Ease.get(1)).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(251,257,559,523);


// symbols:
(lib.aluminium = function() {
	this.initialize(img.aluminium);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.primer = function() {
	this.initialize(img.primer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.transparent = function() {
	this.initialize(img.transparent);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.transparent();
	this.instance.setTransform(-270,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-260,540,520);


(lib.Tween1 = function() {
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
	this.instance = new lib.aluminium();
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

})(libPrimerAluminium = libPrimerAluminium||{}, images = images||{}, createjs = createjs||{});
var libPrimerAluminium, images, createjs;