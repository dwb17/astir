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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.instance = new lib.o2();
	this.instance.setTransform(98,26.5,0.518,0.518);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:131,y:68.5},20).to({x:111,y:53.5},9).to({_off:true},1).wait(26));

	// Layer 11
	this.instance_1 = new lib.o2();
	this.instance_1.setTransform(179,12,0.488,0.488);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({x:149,y:64.5},19).to({x:134,y:39.5},9).to({_off:true},1).wait(30));

	// Layer 10
	this.instance_2 = new lib.o2();
	this.instance_2.setTransform(252.5,53.5,0.611,0.611,-27);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({_off:false},0).to({x:193.5,y:67.5},19).to({x:183.5,y:42.5},8).to({_off:true},1).wait(35));

	// Layer 9
	this.instance_3 = new lib.o2();
	this.instance_3.setTransform(131.5,16.5,0.585,0.585,38.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({rotation:56.7,x:147,y:64},17).to({x:157,y:54},10).to({_off:true},1).wait(38));

	// 1
	this.instance_4 = new lib.o2();
	this.instance_4.setTransform(209.1,25.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({_off:false},0).to({rotation:-13.4,x:184.1,y:64.4},17).to({rotation:-34.7,x:174.1,y:49.4},7).to({_off:true},1).wait(44));

	// Layer 7
	this.instance_5 = new lib.o2();
	this.instance_5.setTransform(82.5,53.5,0.488,0.488);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({x:122.5,y:73.5},19).to({x:102.5,y:93.5},8).to({_off:true},1).wait(40));

	// Layer 1
	this.instance_6 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(70));

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

})(libO2Barrier = libO2Barrier||{}, images = images||{}, createjs = createjs||{});
var libO2Barrier, images, createjs;