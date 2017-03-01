(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1146,
	height: 466,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/revenueschart.png", id:"revenueschart"}
	]
};

// stage content:
(lib.revenues = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.revenueschart();
	this.instance.setTransform(0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AizeyMAAAg9jIFmAAMAAAA9jg");
	var mask_graphics_1 = new cjs.Graphics().p("Ak6eyMAAAg9jIJ0AAMAAAA9jg");
	var mask_graphics_2 = new cjs.Graphics().p("Am/eyMAAAg9jIN/AAMAAAA9jg");
	var mask_graphics_3 = new cjs.Graphics().p("ApDeyMAAAg9jISGAAMAAAA9jg");
	var mask_graphics_4 = new cjs.Graphics().p("ArEeyMAAAg9jIWJAAMAAAA9jg");
	var mask_graphics_5 = new cjs.Graphics().p("AtEeyMAAAg9jIaKAAMAAAA9jg");
	var mask_graphics_6 = new cjs.Graphics().p("AvCeyMAAAg9jIeFAAMAAAA9jg");
	var mask_graphics_7 = new cjs.Graphics().p("Aw/eyMAAAg9jMAh/AAAMAAAA9jg");
	var mask_graphics_8 = new cjs.Graphics().p("Ay6eyMAAAg9jMAl1AAAMAAAA9jg");
	var mask_graphics_9 = new cjs.Graphics().p("A0zeyMAAAg9jMApnAAAMAAAA9jg");
	var mask_graphics_10 = new cjs.Graphics().p("A2qeyMAAAg9jMAtVAAAMAAAA9jg");
	var mask_graphics_11 = new cjs.Graphics().p("A4feyMAAAg9jMAw/AAAMAAAA9jg");
	var mask_graphics_12 = new cjs.Graphics().p("A6TeyMAAAg9jMA0nAAAMAAAA9jg");
	var mask_graphics_13 = new cjs.Graphics().p("A8FeyMAAAg9jMA4LAAAMAAAA9jg");
	var mask_graphics_14 = new cjs.Graphics().p("A91eyMAAAg9jMA7rAAAMAAAA9jg");
	var mask_graphics_15 = new cjs.Graphics().p("A/keyMAAAg9jMA/IAAAMAAAA9jg");
	var mask_graphics_16 = new cjs.Graphics().p("EghQAeyMAAAg9jMBChAAAMAAAA9jg");
	var mask_graphics_17 = new cjs.Graphics().p("Egi7AeyMAAAg9jMBF3AAAMAAAA9jg");
	var mask_graphics_18 = new cjs.Graphics().p("EgkkAeyMAAAg9jMBJJAAAMAAAA9jg");
	var mask_graphics_19 = new cjs.Graphics().p("EgmMAeyMAAAg9jMBMZAAAMAAAA9jg");
	var mask_graphics_20 = new cjs.Graphics().p("EgnxAeyMAAAg9jMBPjAAAMAAAA9jg");
	var mask_graphics_21 = new cjs.Graphics().p("EgpVAeyMAAAg9jMBSrAAAMAAAA9jg");
	var mask_graphics_22 = new cjs.Graphics().p("Egq3AeyMAAAg9jMBVvAAAMAAAA9jg");
	var mask_graphics_23 = new cjs.Graphics().p("EgsXAeyMAAAg9jMBYvAAAMAAAA9jg");
	var mask_graphics_24 = new cjs.Graphics().p("Egt1AeyMAAAg9jMBbsAAAMAAAA9jg");
	var mask_graphics_25 = new cjs.Graphics().p("EgvSAeyMAAAg9jMBelAAAMAAAA9jg");
	var mask_graphics_26 = new cjs.Graphics().p("EgwtAeyMAAAg9jMBhbAAAMAAAA9jg");
	var mask_graphics_27 = new cjs.Graphics().p("EgyGAeyMAAAg9jMBkNAAAMAAAA9jg");
	var mask_graphics_28 = new cjs.Graphics().p("EgzeAeyMAAAg9jMBm9AAAMAAAA9jg");
	var mask_graphics_29 = new cjs.Graphics().p("Eg0zAeyMAAAg9jMBpnAAAMAAAA9jg");
	var mask_graphics_30 = new cjs.Graphics().p("Eg2HAeyMAAAg9jMBsPAAAMAAAA9jg");
	var mask_graphics_31 = new cjs.Graphics().p("Eg3ZAeyMAAAg9jMBu0AAAMAAAA9jg");
	var mask_graphics_32 = new cjs.Graphics().p("Eg4qAeyMAAAg9jMBxVAAAMAAAA9jg");
	var mask_graphics_33 = new cjs.Graphics().p("Eg54AeyMAAAg9jMBzxAAAMAAAA9jg");
	var mask_graphics_34 = new cjs.Graphics().p("Eg7FAeyMAAAg9jMB2LAAAMAAAA9jg");
	var mask_graphics_35 = new cjs.Graphics().p("Eg8QAeyMAAAg9jMB4hAAAMAAAA9jg");
	var mask_graphics_36 = new cjs.Graphics().p("Eg9aAeyMAAAg9jMB61AAAMAAAA9jg");
	var mask_graphics_37 = new cjs.Graphics().p("Eg+hAeyMAAAg9jMB9DAAAMAAAA9jg");
	var mask_graphics_38 = new cjs.Graphics().p("Eg/nAeyMAAAg9jMB/PAAAMAAAA9jg");
	var mask_graphics_39 = new cjs.Graphics().p("EhArAeyMAAAg9jMCBXAAAMAAAA9jg");
	var mask_graphics_40 = new cjs.Graphics().p("EhBtAeyMAAAg9jMCDbAAAMAAAA9jg");
	var mask_graphics_41 = new cjs.Graphics().p("EhCuAeyMAAAg9jMCFcAAAMAAAA9jg");
	var mask_graphics_42 = new cjs.Graphics().p("EhDsAeyMAAAg9jMCHaAAAMAAAA9jg");
	var mask_graphics_43 = new cjs.Graphics().p("EhEpAeyMAAAg9jMCJTAAAMAAAA9jg");
	var mask_graphics_44 = new cjs.Graphics().p("EhFkAeyMAAAg9jMCLJAAAMAAAA9jg");
	var mask_graphics_45 = new cjs.Graphics().p("EhGeAeyMAAAg9jMCM9AAAMAAAA9jg");
	var mask_graphics_46 = new cjs.Graphics().p("EhHVAeyMAAAg9jMCOrAAAMAAAA9jg");
	var mask_graphics_47 = new cjs.Graphics().p("EhILAeyMAAAg9jMCQXAAAMAAAA9jg");
	var mask_graphics_48 = new cjs.Graphics().p("EhI/AeyMAAAg9jMCR/AAAMAAAA9jg");
	var mask_graphics_49 = new cjs.Graphics().p("EhJyAeyMAAAg9jMCTlAAAMAAAA9jg");
	var mask_graphics_50 = new cjs.Graphics().p("EhKiAeyMAAAg9jMCVFAAAMAAAA9jg");
	var mask_graphics_51 = new cjs.Graphics().p("EhLRAeyMAAAg9jMCWjAAAMAAAA9jg");
	var mask_graphics_52 = new cjs.Graphics().p("EhL+AeyMAAAg9jMCX9AAAMAAAA9jg");
	var mask_graphics_53 = new cjs.Graphics().p("EhMpAeyMAAAg9jMCZTAAAMAAAA9jg");
	var mask_graphics_54 = new cjs.Graphics().p("EhNTAeyMAAAg9jMCanAAAMAAAA9jg");
	var mask_graphics_55 = new cjs.Graphics().p("EhN6AeyMAAAg9jMCb1AAAMAAAA9jg");
	var mask_graphics_56 = new cjs.Graphics().p("EhOhAeyMAAAg9jMCdCAAAMAAAA9jg");
	var mask_graphics_57 = new cjs.Graphics().p("EhPFAeyMAAAg9jMCeLAAAMAAAA9jg");
	var mask_graphics_58 = new cjs.Graphics().p("EhPnAeyMAAAg9jMCfPAAAMAAAA9jg");
	var mask_graphics_59 = new cjs.Graphics().p("EhQIAeyMAAAg9jMCgRAAAMAAAA9jg");
	var mask_graphics_60 = new cjs.Graphics().p("EhQnAeyMAAAg9jMChPAAAMAAAA9jg");
	var mask_graphics_61 = new cjs.Graphics().p("EhREAeyMAAAg9jMCiJAAAMAAAA9jg");
	var mask_graphics_62 = new cjs.Graphics().p("EhRfAeyMAAAg9jMCi/AAAMAAAA9jg");
	var mask_graphics_63 = new cjs.Graphics().p("EhR5AeyMAAAg9jMCjzAAAMAAAA9jg");
	var mask_graphics_64 = new cjs.Graphics().p("EhSRAeyMAAAg9jMCkjAAAMAAAA9jg");
	var mask_graphics_65 = new cjs.Graphics().p("EhSnAeyMAAAg9jMClPAAAMAAAA9jg");
	var mask_graphics_66 = new cjs.Graphics().p("EhS7AeyMAAAg9jMCl3AAAMAAAA9jg");
	var mask_graphics_67 = new cjs.Graphics().p("EhTOAeyMAAAg9jMCmdAAAMAAAA9jg");
	var mask_graphics_68 = new cjs.Graphics().p("EhTeAeyMAAAg9jMCm9AAAMAAAA9jg");
	var mask_graphics_69 = new cjs.Graphics().p("EhTuAeyMAAAg9jMCncAAAMAAAA9jg");
	var mask_graphics_70 = new cjs.Graphics().p("EhT7AeyMAAAg9jMCn3AAAMAAAA9jg");
	var mask_graphics_71 = new cjs.Graphics().p("EhUGAeyMAAAg9jMCoNAAAMAAAA9jg");
	var mask_graphics_72 = new cjs.Graphics().p("EhUQAeyMAAAg9jMCohAAAMAAAA9jg");
	var mask_graphics_73 = new cjs.Graphics().p("EhUYAeyMAAAg9jMCoxAAAMAAAA9jg");
	var mask_graphics_74 = new cjs.Graphics().p("EhUeAeyMAAAg9jMCo9AAAMAAAA9jg");
	var mask_graphics_75 = new cjs.Graphics().p("EhUiAeyMAAAg9jMCpFAAAMAAAA9jg");
	var mask_graphics_76 = new cjs.Graphics().p("EhUlAeyMAAAg9jMCpLAAAMAAAA9jg");
	var mask_graphics_77 = new cjs.Graphics().p("EhUmAeyMAAAg9jMCpNAAAMAAAA9jg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:64,y:235.1}).wait(1).to({graphics:mask_graphics_1,x:77.7,y:235.1}).wait(1).to({graphics:mask_graphics_2,x:91.2,y:235.1}).wait(1).to({graphics:mask_graphics_3,x:104.6,y:235.1}).wait(1).to({graphics:mask_graphics_4,x:117.7,y:235.1}).wait(1).to({graphics:mask_graphics_5,x:130.7,y:235.1}).wait(1).to({graphics:mask_graphics_6,x:143.5,y:235.1}).wait(1).to({graphics:mask_graphics_7,x:156.1,y:235.1}).wait(1).to({graphics:mask_graphics_8,x:168.5,y:235.1}).wait(1).to({graphics:mask_graphics_9,x:180.8,y:235.1}).wait(1).to({graphics:mask_graphics_10,x:192.9,y:235.1}).wait(1).to({graphics:mask_graphics_11,x:204.8,y:235.1}).wait(1).to({graphics:mask_graphics_12,x:216.5,y:235.1}).wait(1).to({graphics:mask_graphics_13,x:228,y:235.1}).wait(1).to({graphics:mask_graphics_14,x:239.4,y:235.1}).wait(1).to({graphics:mask_graphics_15,x:250.6,y:235.1}).wait(1).to({graphics:mask_graphics_16,x:261.5,y:235.1}).wait(1).to({graphics:mask_graphics_17,x:272.4,y:235.1}).wait(1).to({graphics:mask_graphics_18,x:283,y:235.1}).wait(1).to({graphics:mask_graphics_19,x:293.5,y:235.1}).wait(1).to({graphics:mask_graphics_20,x:303.8,y:235.1}).wait(1).to({graphics:mask_graphics_21,x:313.9,y:235.1}).wait(1).to({graphics:mask_graphics_22,x:323.8,y:235.1}).wait(1).to({graphics:mask_graphics_23,x:333.6,y:235.1}).wait(1).to({graphics:mask_graphics_24,x:343.2,y:235.1}).wait(1).to({graphics:mask_graphics_25,x:352.5,y:235.1}).wait(1).to({graphics:mask_graphics_26,x:361.7,y:235.1}).wait(1).to({graphics:mask_graphics_27,x:370.8,y:235.1}).wait(1).to({graphics:mask_graphics_28,x:379.6,y:235.1}).wait(1).to({graphics:mask_graphics_29,x:388.3,y:235.1}).wait(1).to({graphics:mask_graphics_30,x:396.8,y:235.1}).wait(1).to({graphics:mask_graphics_31,x:405.2,y:235.1}).wait(1).to({graphics:mask_graphics_32,x:413.3,y:235.1}).wait(1).to({graphics:mask_graphics_33,x:421.3,y:235.1}).wait(1).to({graphics:mask_graphics_34,x:429,y:235.1}).wait(1).to({graphics:mask_graphics_35,x:436.6,y:235.1}).wait(1).to({graphics:mask_graphics_36,x:444.1,y:235.1}).wait(1).to({graphics:mask_graphics_37,x:451.3,y:235.1}).wait(1).to({graphics:mask_graphics_38,x:458.4,y:235.1}).wait(1).to({graphics:mask_graphics_39,x:465.3,y:235.1}).wait(1).to({graphics:mask_graphics_40,x:472,y:235.1}).wait(1).to({graphics:mask_graphics_41,x:478.5,y:235.1}).wait(1).to({graphics:mask_graphics_42,x:484.9,y:235.1}).wait(1).to({graphics:mask_graphics_43,x:491,y:235.1}).wait(1).to({graphics:mask_graphics_44,x:497,y:235.1}).wait(1).to({graphics:mask_graphics_45,x:502.8,y:235.1}).wait(1).to({graphics:mask_graphics_46,x:508.5,y:235.1}).wait(1).to({graphics:mask_graphics_47,x:513.9,y:235.1}).wait(1).to({graphics:mask_graphics_48,x:519.2,y:235.1}).wait(1).to({graphics:mask_graphics_49,x:524.3,y:235.1}).wait(1).to({graphics:mask_graphics_50,x:529.2,y:235.1}).wait(1).to({graphics:mask_graphics_51,x:534,y:235.1}).wait(1).to({graphics:mask_graphics_52,x:538.5,y:235.1}).wait(1).to({graphics:mask_graphics_53,x:542.9,y:235.1}).wait(1).to({graphics:mask_graphics_54,x:547.1,y:235.1}).wait(1).to({graphics:mask_graphics_55,x:551.2,y:235.1}).wait(1).to({graphics:mask_graphics_56,x:555,y:235.1}).wait(1).to({graphics:mask_graphics_57,x:558.7,y:235.1}).wait(1).to({graphics:mask_graphics_58,x:562.2,y:235.1}).wait(1).to({graphics:mask_graphics_59,x:565.5,y:235.1}).wait(1).to({graphics:mask_graphics_60,x:568.6,y:235.1}).wait(1).to({graphics:mask_graphics_61,x:571.6,y:235.1}).wait(1).to({graphics:mask_graphics_62,x:574.3,y:235.1}).wait(1).to({graphics:mask_graphics_63,x:576.9,y:235.1}).wait(1).to({graphics:mask_graphics_64,x:579.3,y:235.1}).wait(1).to({graphics:mask_graphics_65,x:581.6,y:235.1}).wait(1).to({graphics:mask_graphics_66,x:583.6,y:235.1}).wait(1).to({graphics:mask_graphics_67,x:585.5,y:235.1}).wait(1).to({graphics:mask_graphics_68,x:587.2,y:235.1}).wait(1).to({graphics:mask_graphics_69,x:588.8,y:235.1}).wait(1).to({graphics:mask_graphics_70,x:590.1,y:235.1}).wait(1).to({graphics:mask_graphics_71,x:591.2,y:235.1}).wait(1).to({graphics:mask_graphics_72,x:592.2,y:235.1}).wait(1).to({graphics:mask_graphics_73,x:593,y:235.1}).wait(1).to({graphics:mask_graphics_74,x:593.7,y:235.1}).wait(1).to({graphics:mask_graphics_75,x:594.1,y:235.1}).wait(1).to({graphics:mask_graphics_76,x:594.4,y:235.1}).wait(1).to({graphics:mask_graphics_77,x:594.5,y:235.1}).wait(18));

	// graph
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#E11B22","#DF1B21","#D61B20","#C71C1E","#B21D1B","#971E17","#751F12","#4E200D","#42210B"],[0,0.247,0.404,0.537,0.659,0.773,0.875,0.973,1],680.7,-2.6,-309.8,5.9).s().p("EhSRAZaIAAuhIExiDIKojHIKAB+IKhjwIKZkiIKShEIKSgKIKQlxIKSAuIKTC0IKSjeIKSAcIKTloIKQkKIKAgBIKln4IFLgqMAAAAyzg");
	this.shape.setTransform(600.3,257.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(573,235,1144,475);


// symbols:
(lib.revenueschart = function() {
	this.initialize(img.revenueschart);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1144,475);

})(libRevenues = libRevenues||{}, images = images||{}, createjs = createjs||{});
var libRevenues, images, createjs;