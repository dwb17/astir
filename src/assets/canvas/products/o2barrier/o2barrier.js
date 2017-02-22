(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 520,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg.png", id:"bg"}
	]
};

// stage content:
(lib.o2barrier = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Isolation Mode
	this.instance = new lib.o2();
	this.instance.setTransform(209.1,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-13.4,x:184.1,y:64.4},18).to({rotation:-34.7,x:174.1,y:49.4},7).to({_off:true},1).wait(44));

	// Layer 1
	this.instance_1 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,260,540,520);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.Group = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2FAADD","#0071BC"],[0,1],-4.6,0,4.6,0).s().p("AgtASQAGgHAJgFQAIgGAUgBIATgGQAGgDACgFQAEgFgCgEQgBgEgEgDQgFgDgFABQgEABgFAHIgMgLQAIgMAJgBQALgBALAGQAMAHACALQAEAKgHAKQgDAFgFACQgEADgHADIgdAIIgGACIAcASIgIAPg");
	this.shape.setTransform(18.8,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2FAADD","#0071BC"],[0,1],-9.5,0,9.6,0).s().p("AgwBUQgkgWgIgiQgIgiAWgmQAQgZAQgMQANgJAQgEQAQgEALACQASACAVAMQAkAVAIAjQAJAggYApQgXAngjAJQgKADgKAAQgXAAgZgOgAgGg7QgVAGgQAcQgRAZAFAWQADAWAUAMQAUALATgGQAVgHAQgcQARgbgEgUQgEgVgUgMQgNgIgOAAQgGAAgGADg");
	this.shape_1.setTransform(9.6,9.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,23.3,26.1);


(lib.o2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Group();
	this.instance.setTransform(0.1,0.1,1,1,-30,0,0,11.7,13.2);
	this.instance.alpha = 0.801;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.6,-15,33.2,26.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;