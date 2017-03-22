(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 520,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/twistoff_1.png", id:"twistoff_1"}
	]
};

// stage content:
(lib.twistoff = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_137 = function() {
		this.gotoAndPlay(10);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(137).call(this.frame_137).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_11 = new cjs.Graphics().p("Ah7HHIAAuMID3AAIAAOMg");
	var mask_graphics_12 = new cjs.Graphics().p("AiTHHIAAuMIEnAAIAAOMg");
	var mask_graphics_13 = new cjs.Graphics().p("AirHHIAAuMIFXAAIAAOMg");
	var mask_graphics_14 = new cjs.Graphics().p("AjDHHIAAuMIGHAAIAAOMg");
	var mask_graphics_15 = new cjs.Graphics().p("AjbHHIAAuMIG3AAIAAOMg");
	var mask_graphics_16 = new cjs.Graphics().p("AjzHHIAAuMIHnAAIAAOMg");
	var mask_graphics_17 = new cjs.Graphics().p("AkLHHIAAuMIIXAAIAAOMg");
	var mask_graphics_18 = new cjs.Graphics().p("AkjHHIAAuMIJHAAIAAOMg");
	var mask_graphics_19 = new cjs.Graphics().p("Ak7HHIAAuMIJ3AAIAAOMg");
	var mask_graphics_20 = new cjs.Graphics().p("AlTHHIAAuMIKnAAIAAOMg");
	var mask_graphics_21 = new cjs.Graphics().p("AlqHHIAAuMILVAAIAAOMg");
	var mask_graphics_22 = new cjs.Graphics().p("AmCHHIAAuMIMFAAIAAOMg");
	var mask_graphics_23 = new cjs.Graphics().p("AmaHHIAAuMIM1AAIAAOMg");
	var mask_graphics_24 = new cjs.Graphics().p("AmyHHIAAuMINlAAIAAOMg");
	var mask_graphics_25 = new cjs.Graphics().p("AnKHHIAAuMIOVAAIAAOMg");
	var mask_graphics_26 = new cjs.Graphics().p("AniHHIAAuMIPFAAIAAOMg");
	var mask_graphics_27 = new cjs.Graphics().p("An6HHIAAuMIP1AAIAAOMg");
	var mask_graphics_28 = new cjs.Graphics().p("AoSHHIAAuMIQlAAIAAOMg");
	var mask_graphics_29 = new cjs.Graphics().p("AopHHIAAuMIRUAAIAAOMg");
	var mask_graphics_127 = new cjs.Graphics().p("AopHHIAAuMIRUAAIAAOMg");
	var mask_graphics_128 = new cjs.Graphics().p("AnxHHIAAuMIPjAAIAAOMg");
	var mask_graphics_129 = new cjs.Graphics().p("Am5HHIAAuMINzAAIAAOMg");
	var mask_graphics_130 = new cjs.Graphics().p("AmBHHIAAuMIMDAAIAAOMg");
	var mask_graphics_131 = new cjs.Graphics().p("AlIHHIAAuMIKRAAIAAOMg");
	var mask_graphics_132 = new cjs.Graphics().p("AkQHHIAAuMIIhAAIAAOMg");
	var mask_graphics_133 = new cjs.Graphics().p("AjYHHIAAuMIGxAAIAAOMg");
	var mask_graphics_134 = new cjs.Graphics().p("AigHHIAAuMIFBAAIAAOMg");
	var mask_graphics_135 = new cjs.Graphics().p("ANDLLIAAuMIDSAAIAAOMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(11).to({graphics:mask_graphics_11,x:89.5,y:97.5}).wait(1).to({graphics:mask_graphics_12,x:91.9,y:97.5}).wait(1).to({graphics:mask_graphics_13,x:94.4,y:97.5}).wait(1).to({graphics:mask_graphics_14,x:96.8,y:97.5}).wait(1).to({graphics:mask_graphics_15,x:99.3,y:97.5}).wait(1).to({graphics:mask_graphics_16,x:101.7,y:97.5}).wait(1).to({graphics:mask_graphics_17,x:104.2,y:97.5}).wait(1).to({graphics:mask_graphics_18,x:106.6,y:97.5}).wait(1).to({graphics:mask_graphics_19,x:109.1,y:97.5}).wait(1).to({graphics:mask_graphics_20,x:111.5,y:97.5}).wait(1).to({graphics:mask_graphics_21,x:113.9,y:97.5}).wait(1).to({graphics:mask_graphics_22,x:116.4,y:97.5}).wait(1).to({graphics:mask_graphics_23,x:118.8,y:97.5}).wait(1).to({graphics:mask_graphics_24,x:121.3,y:97.5}).wait(1).to({graphics:mask_graphics_25,x:123.7,y:97.5}).wait(1).to({graphics:mask_graphics_26,x:126.2,y:97.5}).wait(1).to({graphics:mask_graphics_27,x:128.6,y:97.5}).wait(1).to({graphics:mask_graphics_28,x:131.1,y:97.5}).wait(1).to({graphics:mask_graphics_29,x:133.5,y:97.5}).wait(98).to({graphics:mask_graphics_127,x:133.5,y:97.5}).wait(1).to({graphics:mask_graphics_128,x:141.6,y:97.5}).wait(1).to({graphics:mask_graphics_129,x:149.8,y:97.5}).wait(1).to({graphics:mask_graphics_130,x:157.9,y:97.5}).wait(1).to({graphics:mask_graphics_131,x:166,y:97.5}).wait(1).to({graphics:mask_graphics_132,x:174.1,y:97.5}).wait(1).to({graphics:mask_graphics_133,x:182.3,y:97.5}).wait(1).to({graphics:mask_graphics_134,x:190.4,y:97.5}).wait(1).to({graphics:mask_graphics_135,x:104.5,y:71.5}).wait(3));

	// Layer 1
	this.instance = new lib.arrow();
	this.instance.setTransform(143,102.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(127));

	// Layer 1
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(260,260,1,1,0,0,0,270,0);
	this.instance_1.alpha = 0.141;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:270,alpha:1},10,cjs.Ease.get(1)).wait(128));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260,260,540,520);


// symbols:
(lib.twistoff_1 = function() {
	this.initialize(img.twistoff_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.twistoff_1();
	this.instance.setTransform(0,-260);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-260,540,520);


(lib.arrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(233,46,44,0)","rgba(232,40,42,0.612)","#E82429"],[0.004,0.282,1],-35.5,0,35.4,0).s().p("AAiDqQgmgJglgPIgdgNQiwhchHi4QgXg6gJg9IgFgxQAkB0BABGQA6A9B2A9QBcAxB/gCQBAgBAsgLIAfANQAiAQATAQQA9A0hzAkQg+AThDAAQg4AAg8gOg");
	this.shape.setTransform(-4.2,-5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E82429").s().p("Ah/i/ID/C/Ij/DAg");
	this.shape_1.setTransform(26.9,11.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.7,-30.6,79.6,61.2);

})(libTwistoff = libTwistoff||{}, images = images||{}, createjs = createjs||{});
var libTwistoff, images, createjs;