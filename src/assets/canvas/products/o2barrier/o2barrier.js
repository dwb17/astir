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

	// Layer 13
	this.instance = new lib.o2();
	this.instance.setTransform(68,66.5,0.518,0.518);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({x:111,y:89.5},20).to({x:91,y:103.5,alpha:0.219},8).to({_off:true},1).wait(5));

	// Layer 12
	this.instance_1 = new lib.o2();
	this.instance_1.setTransform(98,26.5,0.518,0.518);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:124,y:63.5},20).to({x:111,y:53.5,alpha:0.219},9).to({_off:true},1).wait(11));

	// Layer 11
	this.instance_2 = new lib.o2();
	this.instance_2.setTransform(179,12,0.488,0.488);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({x:149,y:60.5},19).to({x:134,y:39.5,alpha:0.219},9).to({_off:true},1).wait(15));

	// Layer 10
	this.instance_3 = new lib.o2();
	this.instance_3.setTransform(252.5,53.5,0.611,0.611,-27);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({_off:false},0).to({x:193.5,y:67.5},19).to({x:223.5,y:62.5,alpha:0.219},8).to({_off:true},1).wait(20));

	// Layer 9
	this.instance_4 = new lib.o2();
	this.instance_4.setTransform(131.5,16.5,0.585,0.585,38.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({rotation:56.7,x:147,y:53},17).to({x:157,y:34,alpha:0.219},10).to({_off:true},1).wait(23));

	// 1
	this.instance_5 = new lib.o2();
	this.instance_5.setTransform(209.1,25.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({_off:false},0).to({rotation:-13.4,x:188.1,y:62.4},17).to({rotation:-34.7,x:214.1,y:79.4,alpha:0.219},7).to({_off:true},1).wait(29));

	// Layer 7
	this.instance_6 = new lib.o2();
	this.instance_6.setTransform(82.5,53.5,0.488,0.488);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({_off:false},0).to({x:111.5,y:70.5},19).to({x:92.5,y:87.5,alpha:0.219},8).to({_off:true},1).wait(25));

	// Layer 1
	this.instance_7 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(55));

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
	this.shape.graphics.lf(["#2FAADD","#0071BC"],[0,1],-4.6,0,4.6,0).s().p("AgtASQAGgHAJgFQAIgGAUgBIATgGQAGgDACgFQAEgFgCgEQgBgEgEgDQgFgDgFABQgEABgFAHIgMgLQAIgMAJgBQALgBALAGQAMAHACALQAEAKgHAKQgDAFgFACQgEADgHADIgdAIIgGACIAcASIgIAPg");
	this.shape.setTransform(22.1,14.4,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#2FAADD","#0071BC"],[0,1],-9.5,0,9.6,0).s().p("AgwBUQgkgWgIgiQgIgiAWgmQAQgZAQgMQANgJAQgEQAQgEALACQASACAVAMQAkAVAIAjQAJAggYApQgXAngjAJQgKADgKAAQgXAAgZgOgAgGg7QgVAGgQAcQgRAZAFAWQADAWAUAMQAUALATgGQAVgHAQgcQARgbgEgUQgEgVgUgMQgNgIgOAAQgGAAgGADg");
	this.shape_1.setTransform(8.6,9.3,1,1,-30);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.4,26,19.5);

})(libO2Barrier = libO2Barrier||{}, images = images||{}, createjs = createjs||{});
var libO2Barrier, images, createjs;