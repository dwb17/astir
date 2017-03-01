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
(lib.o2scavenger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.o2();
	this.instance.setTransform(186,174,0.462,0.462,-36.5,0,0,12.4,9.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({x:180.5,y:108},23).to({x:175.5,y:131,alpha:0.219},7).to({_off:true},1).wait(10));

	// Layer 8
	this.instance_1 = new lib.o2();
	this.instance_1.setTransform(165,215.5,0.385,0.385,0,0,0,12.3,9.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({y:108},23).to({x:172.5,y:128,alpha:0.219},7).to({_off:true},1).wait(14));

	// Layer 7
	this.instance_2 = new lib.o2();
	this.instance_2.setTransform(150.5,222.4,0.84,0.84,23.7,0,0,12.3,9.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({x:148.5,y:111.9},24).to({x:143.5,y:126.9,alpha:0.219},7).to({_off:true},1).wait(17));

	// Layer 6
	this.instance_3 = new lib.o2();
	this.instance_3.setTransform(172,212,0.615,0.615,53.5,0,0,12.4,9.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:167.5,y:113.5},21).to({x:161,y:131.5,alpha:0.219},6).to({_off:true},1).wait(24));

	// Layer 5
	this.instance_4 = new lib.o2();
	this.instance_4.setTransform(135.1,213,0.519,0.519,-21.7,0,0,12.5,9.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(8).to({_off:false},0).to({x:150.1,y:106.5},22).to({x:155.1,y:136.5,alpha:0.219},9).to({_off:true},1).wait(26));

	// Layer 4
	this.instance_5 = new lib.o2();
	this.instance_5.setTransform(165,209,0.461,0.461,0,0,0,12.5,9.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({x:171.5,y:107},21).to({x:176.5,y:127,alpha:0.219},9).to({_off:true},1).wait(29));

	// Layer 3
	this.instance_6 = new lib.o2();
	this.instance_6.setTransform(141,164,1,1,0,0,0,12.4,9.3);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({x:150,y:114},15).to({x:160,y:144,alpha:0.219},8).to({_off:true},1).wait(39));

	// Layer 1
	this.instance_7 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,260,540,520);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.o2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DDDDDD","#A4A3A7"],[0,1],-4.6,0,4.6,0).s().p("AgtASQAGgHAJgFQAIgGAUgBIATgGQAGgDACgFQAEgFgCgEQgBgEgEgDQgFgDgFABQgEABgFAHIgMgLQAIgMAJgBQALgBALAGQAMAHACALQAEAKgHAKQgDAFgFACQgEADgHADIgdAIIgGACIAcASIgIAPg");
	this.shape.setTransform(22.1,14.4,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#DDDDDD","#A4A3A7"],[0,1],-9.5,0,9.6,0).s().p("AgwBUQgkgWgIgiQgIgiAWgmQAQgZAQgMQANgJAQgEQAQgEALACQASACAVAMQAkAVAIAjQAJAggYApQgXAngjAJQgKADgKAAQgXAAgZgOgAgGg7QgVAGgQAcQgRAZAFAWQADAWAUAMQAUALATgGQAVgHAQgcQARgbgEgUQgEgVgUgMQgNgIgOAAQgGAAgGADg");
	this.shape_1.setTransform(8.6,9.3,1,1,-30);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,26,19.5);

})(libO2Scavenger = libO2Scavenger||{}, images = images||{}, createjs = createjs||{});
var libO2Scavenger, images, createjs;