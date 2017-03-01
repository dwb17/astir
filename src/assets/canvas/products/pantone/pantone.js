(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 564,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_1πνγ.jpg", id:"_1πνγ"},
		{src:"images/_2.jpg", id:"_2"},
		{src:"images/guide.png", id:"guide"}
	]
};

// stage content:
(lib.pantone = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.guide();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(85));

	// line
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(275,40.2,1,1,0,0,0,0,0.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:450.2},39).to({_off:true},1).wait(44));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("EgqKACHIAAkMMBUVAAAIAAEMg");
	var mask_graphics_2 = new cjs.Graphics().p("EgqKAC7IAAl1MBUVAAAIAAF1g");
	var mask_graphics_3 = new cjs.Graphics().p("EgqKADwIAAnfMBUVAAAIAAHfg");
	var mask_graphics_4 = new cjs.Graphics().p("EgqKAElIAApJMBUVAAAIAAJJg");
	var mask_graphics_5 = new cjs.Graphics().p("EgqKAFaIAAqzMBUVAAAIAAKzg");
	var mask_graphics_6 = new cjs.Graphics().p("EgqKAGPIAAsdMBUVAAAIAAMdg");
	var mask_graphics_7 = new cjs.Graphics().p("EgqKAHEIAAuHMBUVAAAIAAOHg");
	var mask_graphics_8 = new cjs.Graphics().p("EgqKAH5IAAvxMBUVAAAIAAPxg");
	var mask_graphics_9 = new cjs.Graphics().p("EgqKAIuIAAxbMBUVAAAIAARbg");
	var mask_graphics_10 = new cjs.Graphics().p("EgqKAJjIAAzFMBUVAAAIAATFg");
	var mask_graphics_11 = new cjs.Graphics().p("EgqKAKYIAA0vMBUVAAAIAAUvg");
	var mask_graphics_12 = new cjs.Graphics().p("EgqKALNIAA2ZMBUVAAAIAAWZg");
	var mask_graphics_13 = new cjs.Graphics().p("EgqKAMCIAA4DMBUVAAAIAAYDg");
	var mask_graphics_14 = new cjs.Graphics().p("EgqKAM3IAA5tMBUVAAAIAAZtg");
	var mask_graphics_15 = new cjs.Graphics().p("EgqKANsIAA7XMBUVAAAIAAbXg");
	var mask_graphics_16 = new cjs.Graphics().p("EgqKAOhIAA9BMBUVAAAIAAdBg");
	var mask_graphics_17 = new cjs.Graphics().p("EgqKAPWIAA+rMBUVAAAIAAerg");
	var mask_graphics_18 = new cjs.Graphics().p("EgqKAQLMAAAggVMBUVAAAMAAAAgVg");
	var mask_graphics_19 = new cjs.Graphics().p("EgqKARAMAAAgh/MBUVAAAMAAAAh/g");
	var mask_graphics_20 = new cjs.Graphics().p("EgqKAR1MAAAgjpMBUVAAAMAAAAjpg");
	var mask_graphics_21 = new cjs.Graphics().p("EgqKASpMAAAglRMBUVAAAMAAAAlRg");
	var mask_graphics_22 = new cjs.Graphics().p("EgqKATeMAAAgm7MBUVAAAMAAAAm7g");
	var mask_graphics_23 = new cjs.Graphics().p("EgqKAUTMAAAgolMBUVAAAMAAAAolg");
	var mask_graphics_24 = new cjs.Graphics().p("EgqKAVIMAAAgqPMBUVAAAMAAAAqPg");
	var mask_graphics_25 = new cjs.Graphics().p("EgqKAV9MAAAgr5MBUVAAAMAAAAr5g");
	var mask_graphics_26 = new cjs.Graphics().p("EgqKAWyMAAAgtjMBUVAAAMAAAAtjg");
	var mask_graphics_27 = new cjs.Graphics().p("EgqKAXnMAAAgvNMBUVAAAMAAAAvNg");
	var mask_graphics_28 = new cjs.Graphics().p("EgqKAYcMAAAgw3MBUVAAAMAAAAw3g");
	var mask_graphics_29 = new cjs.Graphics().p("EgqKAZRMAAAgyhMBUVAAAMAAAAyhg");
	var mask_graphics_30 = new cjs.Graphics().p("EgqKAaGMAAAg0LMBUVAAAMAAAA0Lg");
	var mask_graphics_31 = new cjs.Graphics().p("EgqKAa7MAAAg11MBUVAAAMAAAA11g");
	var mask_graphics_32 = new cjs.Graphics().p("EgqKAbwMAAAg3fMBUVAAAMAAAA3fg");
	var mask_graphics_33 = new cjs.Graphics().p("EgqKAclMAAAg5JMBUVAAAMAAAA5Jg");
	var mask_graphics_34 = new cjs.Graphics().p("EgqKAdaMAAAg6zMBUVAAAMAAAA6zg");
	var mask_graphics_35 = new cjs.Graphics().p("EgqKAePMAAAg8dMBUVAAAMAAAA8dg");
	var mask_graphics_36 = new cjs.Graphics().p("EgqKAfEMAAAg+HMBUVAAAMAAAA+Hg");
	var mask_graphics_37 = new cjs.Graphics().p("EgqKAf5MAAAg/xMBUVAAAMAAAA/xg");
	var mask_graphics_38 = new cjs.Graphics().p("EgqKAguMAAAhBbMBUVAAAMAAABBbg");
	var mask_graphics_39 = new cjs.Graphics().p("EgqKAhjMAAAhDFMBUVAAAMAAABDFg");
	var mask_graphics_40 = new cjs.Graphics().p("EgqKAiXMAAAhEtMBUVAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:270,y:63.5}).wait(1).to({graphics:mask_graphics_2,x:270,y:68.8}).wait(1).to({graphics:mask_graphics_3,x:270,y:74.1}).wait(1).to({graphics:mask_graphics_4,x:270,y:79.4}).wait(1).to({graphics:mask_graphics_5,x:270,y:84.7}).wait(1).to({graphics:mask_graphics_6,x:270,y:90}).wait(1).to({graphics:mask_graphics_7,x:270,y:95.3}).wait(1).to({graphics:mask_graphics_8,x:270,y:100.6}).wait(1).to({graphics:mask_graphics_9,x:270,y:105.9}).wait(1).to({graphics:mask_graphics_10,x:270,y:111.2}).wait(1).to({graphics:mask_graphics_11,x:270,y:116.4}).wait(1).to({graphics:mask_graphics_12,x:270,y:121.7}).wait(1).to({graphics:mask_graphics_13,x:270,y:127}).wait(1).to({graphics:mask_graphics_14,x:270,y:132.3}).wait(1).to({graphics:mask_graphics_15,x:270,y:137.6}).wait(1).to({graphics:mask_graphics_16,x:270,y:142.9}).wait(1).to({graphics:mask_graphics_17,x:270,y:148.2}).wait(1).to({graphics:mask_graphics_18,x:270,y:153.5}).wait(1).to({graphics:mask_graphics_19,x:270,y:158.8}).wait(1).to({graphics:mask_graphics_20,x:270,y:164.1}).wait(1).to({graphics:mask_graphics_21,x:270,y:169.4}).wait(1).to({graphics:mask_graphics_22,x:270,y:174.7}).wait(1).to({graphics:mask_graphics_23,x:270,y:180}).wait(1).to({graphics:mask_graphics_24,x:270,y:185.3}).wait(1).to({graphics:mask_graphics_25,x:270,y:190.6}).wait(1).to({graphics:mask_graphics_26,x:270,y:195.9}).wait(1).to({graphics:mask_graphics_27,x:270,y:201.2}).wait(1).to({graphics:mask_graphics_28,x:270,y:206.5}).wait(1).to({graphics:mask_graphics_29,x:270,y:211.8}).wait(1).to({graphics:mask_graphics_30,x:270,y:217.1}).wait(1).to({graphics:mask_graphics_31,x:270,y:222.3}).wait(1).to({graphics:mask_graphics_32,x:270,y:227.6}).wait(1).to({graphics:mask_graphics_33,x:270,y:232.9}).wait(1).to({graphics:mask_graphics_34,x:270,y:238.2}).wait(1).to({graphics:mask_graphics_35,x:270,y:243.5}).wait(1).to({graphics:mask_graphics_36,x:270,y:248.8}).wait(1).to({graphics:mask_graphics_37,x:270,y:254.1}).wait(1).to({graphics:mask_graphics_38,x:270,y:259.4}).wait(1).to({graphics:mask_graphics_39,x:270,y:264.7}).wait(1).to({graphics:mask_graphics_40,x:270,y:270}).wait(45));

	// red
	this.instance_2 = new lib._2();
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(84));

	// Layer 1
	this.instance_3 = new lib._1πνγ();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,282,540,564);


// symbols:
(lib._1πνγ = function() {
	this.initialize(img._1πνγ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib.guide = function() {
	this.initialize(img.guide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(225,27,34,0.4)","rgba(225,27,34,0.184)","rgba(225,27,34,0)"],[0,0.141,1],0,-37.5,0,37.6).s().p("EgmRAF3IAArtMBMiAAAIAALtg");
	this.shape.setTransform(0,0,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E11B22").ss(1,0,0,4).p("EgmQAAAMBMiAAA");
	this.shape_1.setTransform(0,37.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-246,-37.6,492,76.2);

})(libPantone = libPantone||{}, images = images||{}, createjs = createjs||{});
var libPantone, images, createjs;