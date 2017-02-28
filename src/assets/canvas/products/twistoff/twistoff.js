(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 520,
	fps: 10,
	color: "#FFFFFF",
	manifest: [
		{src:"images/tw1.png", id:"tw1"},
		{src:"images/tw10.png", id:"tw10"},
		{src:"images/tw11.png", id:"tw11"},
		{src:"images/tw2.png", id:"tw2"},
		{src:"images/tw3.png", id:"tw3"},
		{src:"images/tw4.png", id:"tw4"},
		{src:"images/tw5.png", id:"tw5"},
		{src:"images/tw6.png", id:"tw6"},
		{src:"images/tw7.png", id:"tw7"},
		{src:"images/tw8.png", id:"tw8"},
		{src:"images/tw9.png", id:"tw9"},
		{src:"images/twistoff_1.png", id:"twistoff_1"}
	]
};

// stage content:
(lib.twistoff = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.twist();
	this.instance.setTransform(160,183.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55));

	// Layer 1
	this.instance_1 = new lib.twistoff_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,254,540,526.1);


// symbols:
(lib.tw1 = function() {
	this.initialize(img.tw1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw10 = function() {
	this.initialize(img.tw10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw11 = function() {
	this.initialize(img.tw11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw2 = function() {
	this.initialize(img.tw2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw3 = function() {
	this.initialize(img.tw3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw4 = function() {
	this.initialize(img.tw4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw5 = function() {
	this.initialize(img.tw5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw6 = function() {
	this.initialize(img.tw6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw7 = function() {
	this.initialize(img.tw7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw8 = function() {
	this.initialize(img.tw8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.tw9 = function() {
	this.initialize(img.tw9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,260,260);


(lib.twistoff_1 = function() {
	this.initialize(img.twistoff_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.twist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tw1();
	this.instance.setTransform(-130,-189.5);

	this.instance_1 = new lib.tw2();
	this.instance_1.setTransform(-130,-189.5);

	this.instance_2 = new lib.tw3();
	this.instance_2.setTransform(-130,-189.5);

	this.instance_3 = new lib.tw4();
	this.instance_3.setTransform(-130,-189.5);

	this.instance_4 = new lib.tw5();
	this.instance_4.setTransform(-130,-189.5);

	this.instance_5 = new lib.tw6();
	this.instance_5.setTransform(-130,-189.5);

	this.instance_6 = new lib.tw7();
	this.instance_6.setTransform(-130,-189.5);

	this.instance_7 = new lib.tw8();
	this.instance_7.setTransform(-130,-189.5);

	this.instance_8 = new lib.tw9();
	this.instance_8.setTransform(-130,-189.5);

	this.instance_9 = new lib.tw10();
	this.instance_9.setTransform(-130,-189.5);

	this.instance_10 = new lib.tw11();
	this.instance_10.setTransform(-130,-189.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-189.5,260,260);

})(libTwistoff = libTwistoff||{}, images = images||{}, createjs = createjs||{});
var libTwistoff, images, createjs;