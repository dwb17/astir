(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1192,
	height: 310,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.circles = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_12 = new cjs.Graphics().p("Ar3BPIAAieIXvAAIAACeg");
	var mask_graphics_13 = new cjs.Graphics().p("Ar3DYIAAmvIXvAAIAAGvg");
	var mask_graphics_14 = new cjs.Graphics().p("Ar3FhIAArBIXvAAIAALBg");
	var mask_graphics_15 = new cjs.Graphics().p("Ar3HqIAAvTIXvAAIAAPTg");
	var mask_graphics_16 = new cjs.Graphics().p("Ar3JyIAAzjIXvAAIAATjg");
	var mask_graphics_17 = new cjs.Graphics().p("Ar3L7IAA31IXvAAIAAX1g");
	var mask_graphics_18 = new cjs.Graphics().p("Ar3OEIAA8HIXvAAIAAcHg");
	var mask_graphics_19 = new cjs.Graphics().p("Ar3QMMAAAggXIXvAAMAAAAgXg");
	var mask_graphics_20 = new cjs.Graphics().p("Ar3SVMAAAgkpIXvAAMAAAAkpg");
	var mask_graphics_21 = new cjs.Graphics().p("Ar3UeMAAAgo7IXvAAMAAAAo7g");
	var mask_graphics_22 = new cjs.Graphics().p("AhsUeIAAiCMAAAgm5IXuAAMAAAAo7gA2BUeIAAiCIUVAAIAACCg");
	var mask_graphics_23 = new cjs.Graphics().p("AhsUeIAAiCMAAAgm2IAAgDIXuAAMAAAAo7gA2BUbIAAmUIUVAAIAAGUg");
	var mask_graphics_24 = new cjs.Graphics().p("AhsUeIAAiCMAAAgm2IAAgDIXuAAMAAAAo7gA2BUYIAAqlIUVAAIAAKlg");
	var mask_graphics_25 = new cjs.Graphics().p("AhsUeIAAiCMAAAgm2IAAgDIXuAAMAAAAo7gA2BUUIAAu1IUVAAIAAO1g");
	var mask_graphics_26 = new cjs.Graphics().p("AhsUeIAAiCMAAAgm2IAAgDIXuAAMAAAAo7gA2BURIAAzHIUVAAIAATHg");
	var mask_graphics_27 = new cjs.Graphics().p("AhsUeIAAiCMAAAgm1IAAgEIXuAAMAAAAo7gA2BUOIAA3WIUVAAIAAXWg");
	var mask_graphics_28 = new cjs.Graphics().p("AhsUeIAAiCMAAAgm1IAAgEIXuAAMAAAAo7gA2BULIAA7nIUVAAIAAbng");
	var mask_graphics_29 = new cjs.Graphics().p("AhsUeIAAiCMAAAgm1IAAgEIXuAAMAAAAo7gA2BUIIAA/5IUVAAIAAf5g");
	var mask_graphics_30 = new cjs.Graphics().p("AhsUeIAAiCMAAAgm1IAAgEIXuAAMAAAAo7gA2BUFMAAAgkKIUVAAMAAAAkKg");
	var mask_graphics_31 = new cjs.Graphics().p("AhsUeIAAgcMAAAgobIAAgEIXuAAMAAAAo7gA2BUCMAAAgobIUVAAMAAAAobg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(12).to({graphics:mask_graphics_12,x:1039.1,y:11}).wait(1).to({graphics:mask_graphics_13,x:1039.1,y:23.4}).wait(1).to({graphics:mask_graphics_14,x:1039.1,y:35.9}).wait(1).to({graphics:mask_graphics_15,x:1039.1,y:48.3}).wait(1).to({graphics:mask_graphics_16,x:1039.1,y:60.8}).wait(1).to({graphics:mask_graphics_17,x:1039.1,y:73.2}).wait(1).to({graphics:mask_graphics_18,x:1039.1,y:85.7}).wait(1).to({graphics:mask_graphics_19,x:1039.1,y:98.1}).wait(1).to({graphics:mask_graphics_20,x:1039.1,y:110.6}).wait(1).to({graphics:mask_graphics_21,x:1039.1,y:123}).wait(1).to({graphics:mask_graphics_22,x:974.1,y:123}).wait(1).to({graphics:mask_graphics_23,x:974.1,y:123}).wait(1).to({graphics:mask_graphics_24,x:974.1,y:123}).wait(1).to({graphics:mask_graphics_25,x:974.1,y:123}).wait(1).to({graphics:mask_graphics_26,x:974.1,y:123}).wait(1).to({graphics:mask_graphics_27,x:974.1,y:123}).wait(1).to({graphics:mask_graphics_28,x:974.1,y:123}).wait(1).to({graphics:mask_graphics_29,x:974.1,y:123}).wait(1).to({graphics:mask_graphics_30,x:974.1,y:123}).wait(1).to({graphics:mask_graphics_31,x:974.1,y:123}).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E11B22","#42210B"],[0,1],-120,0,120,0).s().p("AnRRRQjXhbimimQininhbjXQhejfAAjzQAAjyBejfQBbjYCnimQCmimDXhbQDfhfDyAAQDzAADgBfQDWBbCnCmQCmCmBbDYQBeDfAADyQAADzheDfQhbDXimCnQinCmjWBbQjgBfjzAAQjyAAjfhfgAm8wfQjOBYieCeQifCfhXDOQhaDVAADnQAADpBaDUQBXDOCfCeQCeCfDOBYQDVBZDnABQDogBDVhZQDOhYCeifQCfieBXjOQBajUAAjpQAAjnhajVQhXjOififQieiejOhYQjVhajoAAQjnAAjVBag");
	this.shape.setTransform(963.5,125.9);
	this.shape._off = true;

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(12).to({_off:false},0).wait(20));

	// Layer 5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("EAgGABeIAAieIXxAAIAACeg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Ar3DYIAAmvIXvAAIAAGvg");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ar3FhIAArBIXvAAIAALBg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Ar3HqIAAvTIXvAAIAAPTg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ar3JyIAAzjIXvAAIAATjg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Ar3L7IAA31IXvAAIAAX1g");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ar3OEIAA8HIXvAAIAAcHg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ar3QMMAAAggXIXvAAMAAAAgXg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ar3SVMAAAgkpIXvAAMAAAAkpg");
	var mask_1_graphics_15 = new cjs.Graphics().p("EAgGAUeMAAAgo7IXxAAMAAAAo7g");
	var mask_1_graphics_16 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm5IXvAAMAAAAo7gA2BUeIAAiCIUUAAIAACCg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm2IAAgDIXvAAMAAAAo7gA2BUbIAAmUIUUAAIAAGUg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm2IAAgDIXvAAMAAAAo7gA2BUYIAAqlIUUAAIAAKlg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm2IAAgDIXvAAMAAAAo7gA2BUUIAAu1IUUAAIAAO1g");
	var mask_1_graphics_20 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm2IAAgDIXvAAMAAAAo7gA2BURIAAzHIUUAAIAATHg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm1IAAgEIXvAAMAAAAo7gA2BUOIAA3WIUUAAIAAXWg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm1IAAgEIXvAAMAAAAo7gA2BULIAA7nIUUAAIAAbng");
	var mask_1_graphics_23 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm1IAAgEIXvAAMAAAAo7gA2BUIIAA/5IUUAAIAAf5g");
	var mask_1_graphics_24 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm1IAAgEIXvAAMAAAAo7gA2BUFMAAAgkKIUUAAMAAAAkKg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AhtUeIAAgcMAAAgobIAAgEIXvAAMAAAAo7gA2BUCMAAAgobIUUAAMAAAAobg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:357.6,y:9.5}).wait(1).to({graphics:mask_1_graphics_7,x:639.1,y:23.4}).wait(1).to({graphics:mask_1_graphics_8,x:639.1,y:35.9}).wait(1).to({graphics:mask_1_graphics_9,x:639.1,y:48.3}).wait(1).to({graphics:mask_1_graphics_10,x:639.1,y:60.8}).wait(1).to({graphics:mask_1_graphics_11,x:639.1,y:73.2}).wait(1).to({graphics:mask_1_graphics_12,x:639.1,y:85.7}).wait(1).to({graphics:mask_1_graphics_13,x:639.1,y:98.1}).wait(1).to({graphics:mask_1_graphics_14,x:639.1,y:110.6}).wait(1).to({graphics:mask_1_graphics_15,x:357.6,y:123}).wait(1).to({graphics:mask_1_graphics_16,x:574.1,y:123}).wait(1).to({graphics:mask_1_graphics_17,x:574.1,y:123}).wait(1).to({graphics:mask_1_graphics_18,x:574.1,y:123}).wait(1).to({graphics:mask_1_graphics_19,x:574.1,y:123}).wait(1).to({graphics:mask_1_graphics_20,x:574.1,y:123}).wait(1).to({graphics:mask_1_graphics_21,x:574.1,y:123}).wait(1).to({graphics:mask_1_graphics_22,x:574.1,y:123}).wait(1).to({graphics:mask_1_graphics_23,x:574.1,y:123}).wait(1).to({graphics:mask_1_graphics_24,x:574.1,y:123}).wait(1).to({graphics:mask_1_graphics_25,x:574.1,y:123}).wait(7));

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF6B00").s().p("AnRRRQjXhbinimQiminhbjXQhfjfAAjzQAAkaB/j8QB6j0DZioIAkAoQjRCgh1DqQh6DyAAEOQABDpBZDUQBYDOCfCeQCeCfDOBYQDUBZDoABQDpgBDUhZQDOhYCfifQCeieBYjOQBajUAAjpQAAjnhajVQhYjOieifQifiejOhYQjUhajpAAIAAg2QDzAADfBfQDXBbCnCmQCmCmBbDYQBfDfAADyQAADzhfDfQhbDXimCnQinCmjXBbQjfBfjzAAQjyAAjfhfg");
	this.shape_1.setTransform(577.9,125.9);
	this.shape_1._off = true;

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(6).to({_off:false},0).wait(26));

	// Layer 3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("Ar3BPIAAieIXvAAIAACeg");
	var mask_2_graphics_1 = new cjs.Graphics().p("Ar3DYIAAmvIXvAAIAAGvg");
	var mask_2_graphics_2 = new cjs.Graphics().p("Ar3FhIAArBIXvAAIAALBg");
	var mask_2_graphics_3 = new cjs.Graphics().p("Ar3HqIAAvTIXvAAIAAPTg");
	var mask_2_graphics_4 = new cjs.Graphics().p("Ar3JyIAAzjIXvAAIAATjg");
	var mask_2_graphics_5 = new cjs.Graphics().p("Ar3L7IAA31IXvAAIAAX1g");
	var mask_2_graphics_6 = new cjs.Graphics().p("Ar3OEIAA8HIXvAAIAAcHg");
	var mask_2_graphics_7 = new cjs.Graphics().p("Ar3QMMAAAggXIXvAAMAAAAgXg");
	var mask_2_graphics_8 = new cjs.Graphics().p("Ar3SVMAAAgkpIXvAAMAAAAkpg");
	var mask_2_graphics_9 = new cjs.Graphics().p("Ar3UeMAAAgo7IXvAAMAAAAo7g");
	var mask_2_graphics_10 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm5IXvAAMAAAAo7gA2BUeIAAiCIUUAAIAACCg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm2IAAgDIXvAAMAAAAo7gA2BUbIAAmUIUUAAIAAGUg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm2IAAgDIXvAAMAAAAo7gA2BUYIAAqlIUUAAIAAKlg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm2IAAgDIXvAAMAAAAo7gA2BUUIAAu1IUUAAIAAO1g");
	var mask_2_graphics_14 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm2IAAgDIXvAAMAAAAo7gA2BURIAAzHIUUAAIAATHg");
	var mask_2_graphics_15 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm1IAAgEIXvAAMAAAAo7gA2BUOIAA3WIUUAAIAAXWg");
	var mask_2_graphics_16 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm1IAAgEIXvAAMAAAAo7gA2BULIAA7nIUUAAIAAbng");
	var mask_2_graphics_17 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm1IAAgEIXvAAMAAAAo7gA2BUIIAA/5IUUAAIAAf5g");
	var mask_2_graphics_18 = new cjs.Graphics().p("AhtUeIAAiCMAAAgm1IAAgEIXvAAMAAAAo7gA2BUFMAAAgkKIUUAAMAAAAkKg");
	var mask_2_graphics_19 = new cjs.Graphics().p("AhtUeIAAgcMAAAgobIAAgEIXvAAMAAAAo7gA2BUCMAAAgobIUUAAMAAAAobg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:279.1,y:11}).wait(1).to({graphics:mask_2_graphics_1,x:279.1,y:23.4}).wait(1).to({graphics:mask_2_graphics_2,x:279.1,y:35.9}).wait(1).to({graphics:mask_2_graphics_3,x:279.1,y:48.3}).wait(1).to({graphics:mask_2_graphics_4,x:279.1,y:60.8}).wait(1).to({graphics:mask_2_graphics_5,x:279.1,y:73.2}).wait(1).to({graphics:mask_2_graphics_6,x:279.1,y:85.7}).wait(1).to({graphics:mask_2_graphics_7,x:279.1,y:98.1}).wait(1).to({graphics:mask_2_graphics_8,x:279.1,y:110.6}).wait(1).to({graphics:mask_2_graphics_9,x:279.1,y:123}).wait(1).to({graphics:mask_2_graphics_10,x:214.1,y:123}).wait(1).to({graphics:mask_2_graphics_11,x:214.1,y:123}).wait(1).to({graphics:mask_2_graphics_12,x:214.1,y:123}).wait(1).to({graphics:mask_2_graphics_13,x:214.1,y:123}).wait(1).to({graphics:mask_2_graphics_14,x:214.1,y:123}).wait(1).to({graphics:mask_2_graphics_15,x:214.1,y:123}).wait(1).to({graphics:mask_2_graphics_16,x:214.1,y:123}).wait(1).to({graphics:mask_2_graphics_17,x:214.1,y:123}).wait(1).to({graphics:mask_2_graphics_18,x:214.1,y:123}).wait(1).to({graphics:mask_2_graphics_19,x:214.1,y:123}).wait(13));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E11B22","#42210B"],[0,1],-120,0,120,0).s().p("AnRRRQjXhbinimQiminhbjXQhejfAAjzQAAkaB+j8QB6j0DYioIAkAoQjPCgh2DqQh5DyAAEOQAADpBaDUQBXDOCfCeQCeCfDOBYQDVBZDnABQDogBDVhZQDOhYCfifQCeieBXjOQBbjUAAjpQAAjnhbjVQhXjOieifQifiejOhYQjVhajoAAIAAg2QDzAADfBfQDXBbCnCmQCmCmBbDYQBeDfAADyQAADzheDfQhbDXimCnQinCmjXBbQjfBfjzAAQjyAAjfhfg");
	this.shape_2.setTransform(206.5,125.9);

	this.shape_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(32));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A1A1A").s().p("AAlC5QgHgJgDgMQgCgNAAgXQAAgZADgNQAFgSAOgNQASgSAcAAQAeAAARASQAPANAEASQADAMAAAaQAAAYgDANQgDAMgHAKQgUAbgkAAQgkAAgUgdgAA7BWQgHANAAAdQAAAfAJAOQAMAPAUAAQAYAAALgTQAJgQgCgZQAAgcgGgLQgLgVgZAAQgXAAgLASgAhxDQIDCmfIAdAAIjCGfgAiWhFQgLgRAAgpQAAgaADgMQAEgSAOgNQASgRAcAAQAeAAASARQANANAFASQADANAAAZQAAAYgDANQgDANgGAJQgVAcgkAAQgjAAgVgdgAh/ioQgFAHgCAIIAAAaIAAAXQACANAGAJQAMAPAUAAQAZAAALgTQAIgQgCgYQABgdgHgLQgKgUgaAAQgYAAgJASg");
	this.shape_3.setTransform(606.2,122.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#1A1A1A").s().p("AhDC+QgigXgKgsIAlAAQASA0A4AAQAzAAARgrQAIgTAAgsQAAgvgNgWQgTghgtAAQgVgBgQAJQgPAJgOARIgmAAIAAjSIDQAAIAAAjIiuAAIAACLQAWgVAWgIQAOgEAVAAQAeAAAZAPQAZAPANAaQALAYAAA5QAAAygLAaQgMAcgcATQgcASggAAQgmAAgegUg");
	this.shape_4.setTransform(573.6,122.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#1A1A1A").s().p("AhVCyQgkgiAAgzQAAgfAOgZQAPgcAdgNQgagOgNgbQgLgXAAgcQAAgwAhgiQAhghAvAAQAwAAAhAhQAgAiAAAwQABAdgNAYQgOAZgYAOQAcAJAQAeQAPAbAAAfQAAAzgkAiQgjAigzAAQgxAAgkgigAg7AfQgaAYAAAlQAAAkAaAZQAaAYAhAAQAjAAAZgYQAbgZgBgkQABglgbgYQgZgYgjAAQghAAgaAYgAg1icQgYAWAAAkQAAAlAYAWQAWAUAfAAQAfAAAWgUQAZgVAAgmQAAgkgZgWQgWgTgfAAQgfAAgWATg");
	this.shape_5.setTransform(546.2,122.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AgrAxIAIgJQATAMARAAQAOAAAIgGQAJgGAAgLQAAgNgJgFQgHgFgPgBQgWgEgIgGQgIgJAAgOQAAgPAKgJQAKgKARAAQAUAAASAKIgHAKQgPgJgQAAQgKAAgIAGQgIAGAAAMQAAANAOAFQAHADAPACIARAEQARAJAAAUQAAAPgMAKQgMAJgTAAQgZAAgTgOg");
	this.shape_6.setTransform(673.4,292.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AglA+IAAh7IAMAAIAABwIA/AAIAAALg");
	this.shape_7.setTransform(662.4,292.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AAnA+IgLgeIg3AAIgLAeIgMAAIAuh7IAJAAIAuB7gAgYAXIAxAAIgZhFIAAAAg");
	this.shape_8.setTransform(650,292.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AgEA+IAAh7IAJAAIAAB7g");
	this.shape_9.setTransform(640.9,292.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AAdA+Igcg5IgfAAIAAA5IgMAAIAAh7IAwAAQAPAAAJAJQALAKAAAOQAAAbgcAFIAeA6gAgegDIAhAAQAMAAAHgHQAIgGAAgMQAAgXgbAAIghAAg");
	this.shape_10.setTransform(632.2,292.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AgmA+IAAh7IBMAAIAAALIg/AAIAAAuIA2AAIAAAIIg2AAIAAAvIA/AAIAAALg");
	this.shape_11.setTransform(620.3,292.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgEA+IAAhxIglAAIAAgKIBTAAIAAAKIglAAIAABxg");
	this.shape_12.setTransform(608.9,292.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAmA+IgKgeIg3AAIgLAeIgMAAIAuh7IAJAAIAuB7gAgYAXIAxAAIgZhFIAAAAg");
	this.shape_13.setTransform(598.3,292.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AAqA+IAAhiIAAABIglBOIgJAAIglhPIAAABIAABhIgMAAIAAh7IANAAIAoBbIAqhbIAMAAIAAB7g");
	this.shape_14.setTransform(584.5,292.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgqA+IAAh7IAqAAQALAAAMAGQALAHAFALQADAHABARIAAAbQgBARgDAHQgEALgMAHQgLAGgMAAgAgeAzIAeAAQAOABAKgMQAEgGABgHQACgIAAgTQAAgTgCgHQgBgHgEgGQgKgLgOAAIgeAAg");
	this.shape_15.setTransform(564.8,292.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AglA+IAAh7IBLAAIAAALIg/AAIAAAuIA2AAIAAAIIg2AAIAAAvIA/AAIAAALg");
	this.shape_16.setTransform(552.8,292.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AglA+IAAh7IALAAIAABwIBAAAIAAALg");
	this.shape_17.setTransform(541.4,292.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgVA5QgLgHgFgLQgDgHgBgQIAAgfQABgQADgHQAFgLALgHQALgGAKAAQAQAAALAIQALAJAEANIgNAAQgIgTgVAAQgNAAgJALQgFAHgBAHQgCAHAAATQAAAUACAHQABAHAFAGQAJAMANAAQAVAAAIgUIANAAQgEAOgLAIQgLAJgQAAQgKAAgLgGg");
	this.shape_18.setTransform(529.9,292.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AgEA+IAAgzIgmhIIANAAIAdA9IAfg9IALAAIgkBIIAAAzg");
	this.shape_19.setTransform(518.6,292.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AgVA5QgLgHgFgLQgDgIgBgPIAAgfQABgPADgIQAFgLALgHQALgGAKAAQAQAAALAIQALAJAEANIgNAAQgIgTgVAAQgNAAgJALQgFAHgBAHQgCAHAAATQAAAUACAHQABAHAFAGQAJAMANAAQAVAAAIgUIANAAQgEAOgLAIQgLAJgQAAQgKAAgLgGg");
	this.shape_20.setTransform(508.1,292.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AgmA+IAAh7IBNAAIAAALIhBAAIAAAuIA3AAIAAAIIg3AAIAAAvIBBAAIAAALg");
	this.shape_21.setTransform(496.8,292.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAeA+Igdg5IgfAAIAAA5IgMAAIAAh7IAvAAQAQAAAKAJQAKAKAAAOQAAAbgcAFIAeA6gAgegDIAhAAQAMAAAHgHQAIgGAAgMQAAgXgbAAIghAAg");
	this.shape_22.setTransform(484.8,292.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1A1A1A").s().p("AAlC5QgGgJgDgMQgDgNABgXQgBgaAEgMQAFgSANgNQATgSAcAAQAdAAARASQAPANAEASQADAMAAAaQAAAYgDANQgDAMgHAKQgTAbgkAAQglAAgUgdgAA7BWQgHAMAAAeQAAAfAKAOQALAPAVAAQAYAAAKgTQAJgQgCgZQAAgcgGgLQgKgVgZAAQgXAAgMASgAhxDQIDCmfIAdAAIjCGfgAiWhFQgLgRAAgpQAAgaADgMQAEgSAOgNQARgRAeAAQAcAAATARQANANAFASQADANAAAZQAAAYgDANQgDANgGAJQgUAcgkAAQgkAAgVgdgAh/ioQgFAHgBAIIgBAaIABAXQABANAHAJQAKAPAWAAQAYAAALgTQAJgQgCgYQAAgcgGgMQgLgUgZAAQgYAAgKASg");
	this.shape_23.setTransform(234.8,122.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1A1A1A").s().p("AhKDQICVl8IiYAAIAABAIgjAAIAAhjIDhAAIAAAjIiVF8g");
	this.shape_24.setTransform(203,122.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1A1A1A").s().p("AhVCyQgkgiAAgzQAAgfAOgZQAQgcAcgNQgagOgNgbQgLgXAAgcQAAgwAhgiQAhghAvAAQAwAAAhAhQAgAiABAwQAAAdgNAYQgNAZgYAOQAcAJAPAeQAPAbAAAfQAAAzgkAiQgjAigzAAQgyAAgjgigAg7AfQgaAYAAAlQAAAkAaAZQAaAYAhAAQAjAAAZgYQAagZABgkQgBglgagYQgZgYgjAAQghAAgaAYgAg1icQgZAWAAAkQAAAlAZAWQAWAUAfAAQAfAAAWgUQAZgVAAgmQAAgkgZgWQgWgTgfAAQgfAAgWATg");
	this.shape_25.setTransform(174.8,122.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgrAxIAIgJQASAMARAAQAOAAAJgGQAKgGAAgLQAAgNgKgFQgHgFgOgBQgWgEgJgGQgIgIAAgPQAAgPAKgJQAKgKARAAQATAAATAKIgGAKQgQgJgQAAQgKAAgIAGQgIAGAAAMQAAANAOAFQAHADAPACIARAEQAQAJAAAUQAAAQgLAJQgLAJgVAAQgXAAgUgOg");
	this.shape_26.setTransform(242,292.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgEA+IAAhxIglAAIAAgKIBTAAIAAAKIglAAIAABxg");
	this.shape_27.setTransform(231,292.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAdA+Igcg5IggAAIAAA5IgLAAIAAh7IAwAAQAPAAAJAJQALAKAAAOQAAAbgcAFIAeA6gAgfgDIAhAAQANAAAIgHQAHgGAAgMQAAgXgbAAIgiAAg");
	this.shape_28.setTransform(220.1,292.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgWA5QgLgHgFgLQgEgIAAgPIAAgfQAAgOAEgJQAFgLALgHQALgGALAAQAMAAALAGQAMAHAFALQACAHABAQIAAAfQgBAQgCAHQgFALgMAHQgLAGgMAAQgLAAgLgGgAgXgoQgFAHgBAHQgBAHAAATQAAAUABAHQABAHAFAGQAJAMAOAAQAPAAAJgMQAFgGABgHQACgHAAgUQAAgSgCgIQgBgHgFgHQgJgLgPAAQgOAAgJALg");
	this.shape_29.setTransform(207.3,292.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgpA+IAAh7IArAAQAZAAAKARQAFAJAAALQAAAPgKAJQgLAKgRAAIghAAIAAA0gAgdAAIAgAAQALAAAHgEQAJgIAAgMQABgNgJgHQgHgHgMABIggAAg");
	this.shape_30.setTransform(195.9,292.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AAfA+Igfg2IgfA2IgMAAIAmg+Igkg9IANAAIAcAyIAdgyIANAAIglA9IAoA+g");
	this.shape_31.setTransform(183.9,292.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgmA+IAAh7IBMAAIAAALIg/AAIAAAuIA1AAIAAAIIg1AAIAAAvIA/AAIAAALg");
	this.shape_32.setTransform(173.1,292.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1A1A1A").s().p("AAmC5QgHgJgDgMQgDgNAAgXQAAgaAEgMQAFgSANgNQATgSAcAAQAcAAASASQAOANAFASQADAMAAAaQAAAYgDANQgDAMgHAKQgUAbgjAAQglAAgTgdgAA7BWQgIANAAAdQABAfAJAOQAMAPAVAAQAXAAALgTQAJgQgCgZQAAgcgGgLQgKgVgZAAQgYAAgLASgAhxDQIDCmfIAeAAIjDGfgAiVhFQgMgRAAgpQAAgaADgMQAFgSAOgNQARgRAdAAQAdAAARARQAOANAFASQADANAAAZQAAAYgDANQgDANgHAJQgTAcgkAAQglAAgTgdgAiAioQgEAHgCAIIgBAaQAAARABAGQACANAGAJQALAPAWAAQAYAAALgTQAJgQgCgYQgBgdgFgLQgLgUgZAAQgZAAgKASg");
	this.shape_33.setTransform(990.9,122.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1A1A1A").s().p("Ag4DSIBci8IgBgBQgaANgdgDQgogEgZgbQgcgeAAgzQAAhBAlgiQAfgdAwAAQAtAAAfAeQAjAiAAA6QAAAlgQAfIhyDlgAg0iZQgZAZAAAqQAAAoAXAZQAVAVAhAAQAhAAAWgVQAXgZAAgoQAAgqgVgYQgVgYgkAAQgdAAgXAXg");
	this.shape_34.setTransform(958.5,122.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#1A1A1A").s().p("Ag4DSIBci8IgBgBQgaANgdgDQgogEgZgbQgcgeAAgzQAAhBAlgiQAfgdAwAAQAtAAAfAeQAjAiAAA6QAAAlgQAfIhyDlgAg0iZQgZAZAAAqQAAAoAXAZQAVAVAhAAQAhAAAWgVQAXgZAAgoQAAgqgVgYQgVgYgkAAQgdAAgXAXg");
	this.shape_35.setTransform(931.2,122.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AglA+IAAh7IBLAAIAAALIhAAAIAAAuIA2AAIAAAIIg2AAIAAA6g");
	this.shape_36.setTransform(978.3,292.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgEA+IAAh7IAJAAIAAB7g");
	this.shape_37.setTransform(969.2,292.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgFA+IAAhxIgkAAIAAgKIBTAAIAAAKIglAAIAABxg");
	this.shape_38.setTransform(961.1,292.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgWA5QgLgHgFgLQgEgJAAgOIAAgfQABgQADgHQAFgLALgHQALgGALAAQAMAAAMAGQALAHAFALQADAHAAAQIAAAfQAAAQgDAHQgFALgLAHQgMAGgMAAQgLAAgLgGgAgWgoQgFAHgCAHQgBAIAAASQAAAUABAHQACAHAFAGQAHAMAPAAQAQAAAIgMQAFgGACgHQABgHAAgUQAAgSgBgIQgCgHgFgHQgIgLgQAAQgOAAgIALg");
	this.shape_39.setTransform(949.8,292.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(758.6,160.9,844.6,293);

})(libcircles = libcircles||{}, images = images||{}, createjs = createjs||{});
var libcircles, images, createjs;