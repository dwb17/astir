(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 520,
	fps: 15,
	color: "#FFFFFF",
	manifest: [
		{src:"images/twistoff.png", id:"twistoff"}
	]
};

// stage content:
(lib.o2scavenger = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.instance = new lib.o2();
	this.instance.setTransform(168,210.1,0.699,0.699,-69.7,0,0,13.8,15.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).to({scaleX:0.49,scaleY:0.49,rotation:-32.3,x:178.4,y:86.6},24).to({x:183.4,y:116.6,alpha:0.109},7).to({_off:true},1).wait(12));

	// Layer 5
	this.instance_1 = new lib.o2();
	this.instance_1.setTransform(177.5,184,0.496,0.496,0,0,0,13.9,15.6);
	this.instance_1.alpha = 0.109;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({_off:false},0).to({rotation:-33,x:187.5,y:154,alpha:0.648},12).to({x:182.5,y:84},13).to({x:167.5,y:99,alpha:0.109},9).to({_off:true},1).wait(5));

	// Layer 4
	this.instance_2 = new lib.o2();
	this.instance_2.setTransform(187.5,131.9,0.59,0.59,-64.5,0,0,14,15.6);
	this.instance_2.alpha = 0.102;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:182.5,y:83.4,alpha:0.801},16).to({regX:13.9,rotation:-34.2,x:187.6,y:98.5,alpha:0.102},10).to({_off:true},2).wait(36));

	// 2
	this.instance_3 = new lib.o2();
	this.instance_3.setTransform(144,220.6,0.46,0.46,-67.2,0,0,13.8,15.6);
	this.instance_3.alpha = 0.109;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({regX:13.9,regY:15.8,rotation:-17,x:153.5,y:182.1,alpha:1},11).to({regY:15.7,rotation:11.4,x:141,y:141.1,alpha:0.801},12).to({regX:14,rotation:-15,x:143.1,y:81.6},16).to({x:138.1,y:106.6,alpha:0.109},8).to({_off:true},1).wait(10));

	// 1
	this.instance_4 = new lib.o2();
	this.instance_4.setTransform(156,220.5,1,1,0,0,0,13.8,15.6);
	this.instance_4.alpha = 0.109;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-20.2,x:166,y:190.5,alpha:0.801},9).to({rotation:-34.4,y:145.5},13).to({rotation:-17.2,x:171,y:90.5},11).to({x:176,y:120.5,alpha:0.102},11).to({_off:true},1).wait(25));

	// Layer 1
	this.instance_5 = new lib.twistoff();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,260,540,520);


// symbols:
(lib.twistoff = function() {
	this.initialize(img.twistoff);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,520);


(lib.o2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.6)","#FFFFFF"],[0,1],-5.4,0,5.5,0).s().p("Ag1AWQAHgKAKgFQAJgFAZgEQAPgDAHgDQAIgDADgGQADgGgBgFQgBgFgGgEQgGgEgFACQgGABgFAIIgPgNQALgOAKgBQANgCAMAIQAPAJADAMQADAMgGALQgEAHgGACQgGAFgIADIgjAJIgGADIAiAWIgKARg");
	this.shape.setTransform(22.3,25.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(255,255,255,0.6)","#FFFFFF"],[0,1],-11.4,0,11.4,0).s().p("Ag5BkQgrgagKgpQgKgnAbgvQATgeAUgOQANgKAUgGQATgEAOACQAXADAYAOQArAZAJAqQAKAngcAwQgcAvgpALQgNADgLAAQgcAAgdgRgAgHhHQgZAIgUAhQgTAeAFAbQAFAaAXANQAXAOAYgIQAZgIATghQAUgfgFgZQgEgZgZgPQgPgJgQAAQgIAAgHADg");
	this.shape_1.setTransform(11.4,11.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,27.8,31.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;