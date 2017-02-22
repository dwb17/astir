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
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(270,260);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:403,y:359,alpha:0.109},28,cjs.Ease.get(1)).to({_off:true},1).wait(20));

	// Layer 1
	this.instance_1 = new lib._1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,260,540,520);


// symbols:
(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2();
	this.instance.setTransform(-270,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270,-260,540,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;