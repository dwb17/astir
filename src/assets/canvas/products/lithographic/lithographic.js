(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 607,
	height: 582,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_1.png", id:"_1"},
		{src:"images/_2.png", id:"_2"},
		{src:"images/_3.png", id:"_3"},
		{src:"images/_4.png", id:"_4"}
	]
};

// stage content:
(lib.lithographic = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(303.5,291);
	this.instance.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},26,cjs.Ease.get(1)).wait(64));

	// Layer 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(473.5,471);
	this.instance_1.alpha = 0.109;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({x:303.5,y:291,alpha:1},28,cjs.Ease.get(1)).wait(45));

	// Layer 3
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(213.5,491);
	this.instance_2.alpha = 0.109;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({x:303.5,y:291,alpha:1},29,cjs.Ease.get(1)).wait(38));

	// Layer 4
	this.instance_3 = new lib.Tween1("synched",0);
	this.instance_3.setTransform(123.5,361);
	this.instance_3.alpha = 0.109;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.setTransform(303.5,291);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},26).to({state:[{t:this.instance_4}]},32).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(26).to({_off:false},0).to({_off:true,x:303.5,y:291,alpha:1},32,cjs.Ease.get(1)).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(303.5,291,607,582);


// symbols:
(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,607,582);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,607,582);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,607,582);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,607,582);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._4();
	this.instance.setTransform(-303.5,-291);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303.5,-291,607,582);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._4();
	this.instance.setTransform(-303.5,-291);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303.5,-291,607,582);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._3();
	this.instance.setTransform(-303.5,-291);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303.5,-291,607,582);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._2();
	this.instance.setTransform(-303.5,-291);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303.5,-291,607,582);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib._1();
	this.instance.setTransform(-303.5,-291);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-303.5,-291,607,582);

})(libLithographic = libLithographic||{}, images = images||{}, createjs = createjs||{});
var libLithographic, images, createjs;