(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 540,
	height: 564,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/_1.jpg", id:"_1"},
		{src:"images/_2.jpg", id:"_2"},
		{src:"images/_3.jpg", id:"_3"},
		{src:"images/_4.jpg", id:"_4"},
		{src:"images/_5.jpg", id:"_5"},
		{src:"images/ColorGuide.jpg", id:"ColorGuide"}
	]
};

// stage content:
(lib.cmyk = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// guide
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AAaAyIgdg0IgYAZIAAAbIgJAAIAAhjIAJAAIAAA6IABAAIAwg6IAKAAIgfAnIAkA8g");
	this.shape.setTransform(309.1,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1D1B").s().p("AhOBPIAAieICdAAIAACeg");
	this.shape_1.setTransform(308.6,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgDAyIAAgpIgeg6IAKAAIAXAxIAYgxIAKAAIgeA6IAAApg");
	this.shape_2.setTransform(283.4,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFED00").s().p("AhOBPIAAieICdAAIAACeg");
	this.shape_3.setTransform(283.4,45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AAjAyIAAhOIgBAAIgdA+IgIAAIgeg+IAABOIgKAAIAAhjIALAAIAgBIIAihIIAKAAIAABjg");
	this.shape_4.setTransform(258.3,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6007E").s().p("AhPBPIAAieICfAAIAACeg");
	this.shape_5.setTransform(258.2,45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgRAtQgIgFgEgJQgCgEgCgPIAAgFIAAgTQACgPACgEQAEgIAIgGQAKgFAHAAQANAAAJAHQAIAGAEALIgKAAQgHgPgRAAQgKAAgHAJQgEAFgBAGQgCAGAAAPQAAAPACAGQABAGAEAGQAHAIAKABQASAAAGgQIAKAAQgEALgIAHQgJAHgNAAQgHAAgKgGg");
	this.shape_6.setTransform(233.3,20.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#009FE3").s().p("AhPBPIAAieICfAAIAACeg");
	this.shape_7.setTransform(233,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(200));

	// l5
	this.instance = new lib.lineblack();
	this.instance.setTransform(275,40.2,1,1,0,0,0,0,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(121).to({_off:false},0).to({y:450.2},39).to({_off:true},1).wait(39));

	// m5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_121 = new cjs.Graphics().p("EgqKACHIAAkMMBUVAAAIAAEMg");
	var mask_graphics_122 = new cjs.Graphics().p("EgqKAC7IAAl1MBUVAAAIAAF1g");
	var mask_graphics_123 = new cjs.Graphics().p("EgqKADwIAAnfMBUVAAAIAAHfg");
	var mask_graphics_124 = new cjs.Graphics().p("EgqKAElIAApJMBUVAAAIAAJJg");
	var mask_graphics_125 = new cjs.Graphics().p("EgqKAFaIAAqzMBUVAAAIAAKzg");
	var mask_graphics_126 = new cjs.Graphics().p("EgqKAGPIAAsdMBUVAAAIAAMdg");
	var mask_graphics_127 = new cjs.Graphics().p("EgqKAHEIAAuHMBUVAAAIAAOHg");
	var mask_graphics_128 = new cjs.Graphics().p("EgqKAH5IAAvxMBUVAAAIAAPxg");
	var mask_graphics_129 = new cjs.Graphics().p("EgqKAIuIAAxbMBUVAAAIAARbg");
	var mask_graphics_130 = new cjs.Graphics().p("EgqKAJjIAAzFMBUVAAAIAATFg");
	var mask_graphics_131 = new cjs.Graphics().p("EgqKAKYIAA0vMBUVAAAIAAUvg");
	var mask_graphics_132 = new cjs.Graphics().p("EgqKALNIAA2ZMBUVAAAIAAWZg");
	var mask_graphics_133 = new cjs.Graphics().p("EgqKAMCIAA4DMBUVAAAIAAYDg");
	var mask_graphics_134 = new cjs.Graphics().p("EgqKAM3IAA5tMBUVAAAIAAZtg");
	var mask_graphics_135 = new cjs.Graphics().p("EgqKANsIAA7XMBUVAAAIAAbXg");
	var mask_graphics_136 = new cjs.Graphics().p("EgqKAOhIAA9BMBUVAAAIAAdBg");
	var mask_graphics_137 = new cjs.Graphics().p("EgqKAPWIAA+rMBUVAAAIAAerg");
	var mask_graphics_138 = new cjs.Graphics().p("EgqKAQLMAAAggVMBUVAAAMAAAAgVg");
	var mask_graphics_139 = new cjs.Graphics().p("EgqKARAMAAAgh/MBUVAAAMAAAAh/g");
	var mask_graphics_140 = new cjs.Graphics().p("EgqKAR1MAAAgjpMBUVAAAMAAAAjpg");
	var mask_graphics_141 = new cjs.Graphics().p("EgqKASpMAAAglRMBUVAAAMAAAAlRg");
	var mask_graphics_142 = new cjs.Graphics().p("EgqKATeMAAAgm7MBUVAAAMAAAAm7g");
	var mask_graphics_143 = new cjs.Graphics().p("EgqKAUTMAAAgolMBUVAAAMAAAAolg");
	var mask_graphics_144 = new cjs.Graphics().p("EgqKAVIMAAAgqPMBUVAAAMAAAAqPg");
	var mask_graphics_145 = new cjs.Graphics().p("EgqKAV9MAAAgr5MBUVAAAMAAAAr5g");
	var mask_graphics_146 = new cjs.Graphics().p("EgqKAWyMAAAgtjMBUVAAAMAAAAtjg");
	var mask_graphics_147 = new cjs.Graphics().p("EgqKAXnMAAAgvNMBUVAAAMAAAAvNg");
	var mask_graphics_148 = new cjs.Graphics().p("EgqKAYcMAAAgw3MBUVAAAMAAAAw3g");
	var mask_graphics_149 = new cjs.Graphics().p("EgqKAZRMAAAgyhMBUVAAAMAAAAyhg");
	var mask_graphics_150 = new cjs.Graphics().p("EgqKAaGMAAAg0LMBUVAAAMAAAA0Lg");
	var mask_graphics_151 = new cjs.Graphics().p("EgqKAa7MAAAg11MBUVAAAMAAAA11g");
	var mask_graphics_152 = new cjs.Graphics().p("EgqKAbwMAAAg3fMBUVAAAMAAAA3fg");
	var mask_graphics_153 = new cjs.Graphics().p("EgqKAclMAAAg5JMBUVAAAMAAAA5Jg");
	var mask_graphics_154 = new cjs.Graphics().p("EgqKAdaMAAAg6zMBUVAAAMAAAA6zg");
	var mask_graphics_155 = new cjs.Graphics().p("EgqKAePMAAAg8dMBUVAAAMAAAA8dg");
	var mask_graphics_156 = new cjs.Graphics().p("EgqKAfEMAAAg+HMBUVAAAMAAAA+Hg");
	var mask_graphics_157 = new cjs.Graphics().p("EgqKAf5MAAAg/xMBUVAAAMAAAA/xg");
	var mask_graphics_158 = new cjs.Graphics().p("EgqKAguMAAAhBbMBUVAAAMAAABBbg");
	var mask_graphics_159 = new cjs.Graphics().p("EgqKAhjMAAAhDFMBUVAAAMAAABDFg");
	var mask_graphics_160 = new cjs.Graphics().p("EgqKAiXMAAAhEtMBUVAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(121).to({graphics:mask_graphics_121,x:270,y:63.5}).wait(1).to({graphics:mask_graphics_122,x:270,y:68.8}).wait(1).to({graphics:mask_graphics_123,x:270,y:74.1}).wait(1).to({graphics:mask_graphics_124,x:270,y:79.4}).wait(1).to({graphics:mask_graphics_125,x:270,y:84.7}).wait(1).to({graphics:mask_graphics_126,x:270,y:90}).wait(1).to({graphics:mask_graphics_127,x:270,y:95.3}).wait(1).to({graphics:mask_graphics_128,x:270,y:100.6}).wait(1).to({graphics:mask_graphics_129,x:270,y:105.9}).wait(1).to({graphics:mask_graphics_130,x:270,y:111.2}).wait(1).to({graphics:mask_graphics_131,x:270,y:116.4}).wait(1).to({graphics:mask_graphics_132,x:270,y:121.7}).wait(1).to({graphics:mask_graphics_133,x:270,y:127}).wait(1).to({graphics:mask_graphics_134,x:270,y:132.3}).wait(1).to({graphics:mask_graphics_135,x:270,y:137.6}).wait(1).to({graphics:mask_graphics_136,x:270,y:142.9}).wait(1).to({graphics:mask_graphics_137,x:270,y:148.2}).wait(1).to({graphics:mask_graphics_138,x:270,y:153.5}).wait(1).to({graphics:mask_graphics_139,x:270,y:158.8}).wait(1).to({graphics:mask_graphics_140,x:270,y:164.1}).wait(1).to({graphics:mask_graphics_141,x:270,y:169.4}).wait(1).to({graphics:mask_graphics_142,x:270,y:174.7}).wait(1).to({graphics:mask_graphics_143,x:270,y:180}).wait(1).to({graphics:mask_graphics_144,x:270,y:185.3}).wait(1).to({graphics:mask_graphics_145,x:270,y:190.6}).wait(1).to({graphics:mask_graphics_146,x:270,y:195.9}).wait(1).to({graphics:mask_graphics_147,x:270,y:201.2}).wait(1).to({graphics:mask_graphics_148,x:270,y:206.5}).wait(1).to({graphics:mask_graphics_149,x:270,y:211.8}).wait(1).to({graphics:mask_graphics_150,x:270,y:217.1}).wait(1).to({graphics:mask_graphics_151,x:270,y:222.3}).wait(1).to({graphics:mask_graphics_152,x:270,y:227.6}).wait(1).to({graphics:mask_graphics_153,x:270,y:232.9}).wait(1).to({graphics:mask_graphics_154,x:270,y:238.2}).wait(1).to({graphics:mask_graphics_155,x:270,y:243.5}).wait(1).to({graphics:mask_graphics_156,x:270,y:248.8}).wait(1).to({graphics:mask_graphics_157,x:270,y:254.1}).wait(1).to({graphics:mask_graphics_158,x:270,y:259.4}).wait(1).to({graphics:mask_graphics_159,x:270,y:264.7}).wait(1).to({graphics:mask_graphics_160,x:270,y:270}).wait(1).to({graphics:null,x:0,y:0}).wait(39));

	// 5
	this.instance_1 = new lib._5();
	this.instance_1.setTransform(1,0);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).wait(79));

	// l4
	this.instance_2 = new lib.lineyellow();
	this.instance_2.setTransform(275,40.2,1,1,0,0,0,0,0.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(81).to({_off:false},0).to({y:450.2},39).to({_off:true},1).wait(79));

	// m4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_81 = new cjs.Graphics().p("EgqKACHIAAkMMBUVAAAIAAEMg");
	var mask_1_graphics_82 = new cjs.Graphics().p("EgqKAC7IAAl1MBUVAAAIAAF1g");
	var mask_1_graphics_83 = new cjs.Graphics().p("EgqKADwIAAnfMBUVAAAIAAHfg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EgqKAElIAApJMBUVAAAIAAJJg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EgqKAFaIAAqzMBUVAAAIAAKzg");
	var mask_1_graphics_86 = new cjs.Graphics().p("EgqKAGPIAAsdMBUVAAAIAAMdg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EgqKAHEIAAuHMBUVAAAIAAOHg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EgqKAH5IAAvxMBUVAAAIAAPxg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EgqKAIuIAAxbMBUVAAAIAARbg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EgqKAJjIAAzFMBUVAAAIAATFg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EgqKAKYIAA0vMBUVAAAIAAUvg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EgqKALNIAA2ZMBUVAAAIAAWZg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EgqKAMCIAA4DMBUVAAAIAAYDg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EgqKAM3IAA5tMBUVAAAIAAZtg");
	var mask_1_graphics_95 = new cjs.Graphics().p("EgqKANsIAA7XMBUVAAAIAAbXg");
	var mask_1_graphics_96 = new cjs.Graphics().p("EgqKAOhIAA9BMBUVAAAIAAdBg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EgqKAPWIAA+rMBUVAAAIAAerg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EgqKAQLMAAAggVMBUVAAAMAAAAgVg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EgqKARAMAAAgh/MBUVAAAMAAAAh/g");
	var mask_1_graphics_100 = new cjs.Graphics().p("EgqKAR1MAAAgjpMBUVAAAMAAAAjpg");
	var mask_1_graphics_101 = new cjs.Graphics().p("EgqKASpMAAAglRMBUVAAAMAAAAlRg");
	var mask_1_graphics_102 = new cjs.Graphics().p("EgqKATeMAAAgm7MBUVAAAMAAAAm7g");
	var mask_1_graphics_103 = new cjs.Graphics().p("EgqKAUTMAAAgolMBUVAAAMAAAAolg");
	var mask_1_graphics_104 = new cjs.Graphics().p("EgqKAVIMAAAgqPMBUVAAAMAAAAqPg");
	var mask_1_graphics_105 = new cjs.Graphics().p("EgqKAV9MAAAgr5MBUVAAAMAAAAr5g");
	var mask_1_graphics_106 = new cjs.Graphics().p("EgqKAWyMAAAgtjMBUVAAAMAAAAtjg");
	var mask_1_graphics_107 = new cjs.Graphics().p("EgqKAXnMAAAgvNMBUVAAAMAAAAvNg");
	var mask_1_graphics_108 = new cjs.Graphics().p("EgqKAYcMAAAgw3MBUVAAAMAAAAw3g");
	var mask_1_graphics_109 = new cjs.Graphics().p("EgqKAZRMAAAgyhMBUVAAAMAAAAyhg");
	var mask_1_graphics_110 = new cjs.Graphics().p("EgqKAaGMAAAg0LMBUVAAAMAAAA0Lg");
	var mask_1_graphics_111 = new cjs.Graphics().p("EgqKAa7MAAAg11MBUVAAAMAAAA11g");
	var mask_1_graphics_112 = new cjs.Graphics().p("EgqKAbwMAAAg3fMBUVAAAMAAAA3fg");
	var mask_1_graphics_113 = new cjs.Graphics().p("EgqKAclMAAAg5JMBUVAAAMAAAA5Jg");
	var mask_1_graphics_114 = new cjs.Graphics().p("EgqKAdaMAAAg6zMBUVAAAMAAAA6zg");
	var mask_1_graphics_115 = new cjs.Graphics().p("EgqKAePMAAAg8dMBUVAAAMAAAA8dg");
	var mask_1_graphics_116 = new cjs.Graphics().p("EgqKAfEMAAAg+HMBUVAAAMAAAA+Hg");
	var mask_1_graphics_117 = new cjs.Graphics().p("EgqKAf5MAAAg/xMBUVAAAMAAAA/xg");
	var mask_1_graphics_118 = new cjs.Graphics().p("EgqKAguMAAAhBbMBUVAAAMAAABBbg");
	var mask_1_graphics_119 = new cjs.Graphics().p("EgqKAhjMAAAhDFMBUVAAAMAAABDFg");
	var mask_1_graphics_120 = new cjs.Graphics().p("EgqKAiXMAAAhEtMBUVAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(81).to({graphics:mask_1_graphics_81,x:270,y:63.5}).wait(1).to({graphics:mask_1_graphics_82,x:270,y:68.8}).wait(1).to({graphics:mask_1_graphics_83,x:270,y:74.1}).wait(1).to({graphics:mask_1_graphics_84,x:270,y:79.4}).wait(1).to({graphics:mask_1_graphics_85,x:270,y:84.7}).wait(1).to({graphics:mask_1_graphics_86,x:270,y:90}).wait(1).to({graphics:mask_1_graphics_87,x:270,y:95.3}).wait(1).to({graphics:mask_1_graphics_88,x:270,y:100.6}).wait(1).to({graphics:mask_1_graphics_89,x:270,y:105.9}).wait(1).to({graphics:mask_1_graphics_90,x:270,y:111.2}).wait(1).to({graphics:mask_1_graphics_91,x:270,y:116.4}).wait(1).to({graphics:mask_1_graphics_92,x:270,y:121.7}).wait(1).to({graphics:mask_1_graphics_93,x:270,y:127}).wait(1).to({graphics:mask_1_graphics_94,x:270,y:132.3}).wait(1).to({graphics:mask_1_graphics_95,x:270,y:137.6}).wait(1).to({graphics:mask_1_graphics_96,x:270,y:142.9}).wait(1).to({graphics:mask_1_graphics_97,x:270,y:148.2}).wait(1).to({graphics:mask_1_graphics_98,x:270,y:153.5}).wait(1).to({graphics:mask_1_graphics_99,x:270,y:158.8}).wait(1).to({graphics:mask_1_graphics_100,x:270,y:164.1}).wait(1).to({graphics:mask_1_graphics_101,x:270,y:169.4}).wait(1).to({graphics:mask_1_graphics_102,x:270,y:174.7}).wait(1).to({graphics:mask_1_graphics_103,x:270,y:180}).wait(1).to({graphics:mask_1_graphics_104,x:270,y:185.3}).wait(1).to({graphics:mask_1_graphics_105,x:270,y:190.6}).wait(1).to({graphics:mask_1_graphics_106,x:270,y:195.9}).wait(1).to({graphics:mask_1_graphics_107,x:270,y:201.2}).wait(1).to({graphics:mask_1_graphics_108,x:270,y:206.5}).wait(1).to({graphics:mask_1_graphics_109,x:270,y:211.8}).wait(1).to({graphics:mask_1_graphics_110,x:270,y:217.1}).wait(1).to({graphics:mask_1_graphics_111,x:270,y:222.3}).wait(1).to({graphics:mask_1_graphics_112,x:270,y:227.6}).wait(1).to({graphics:mask_1_graphics_113,x:270,y:232.9}).wait(1).to({graphics:mask_1_graphics_114,x:270,y:238.2}).wait(1).to({graphics:mask_1_graphics_115,x:270,y:243.5}).wait(1).to({graphics:mask_1_graphics_116,x:270,y:248.8}).wait(1).to({graphics:mask_1_graphics_117,x:270,y:254.1}).wait(1).to({graphics:mask_1_graphics_118,x:270,y:259.4}).wait(1).to({graphics:mask_1_graphics_119,x:270,y:264.7}).wait(1).to({graphics:mask_1_graphics_120,x:270,y:270}).wait(80));

	// 4
	this.instance_3 = new lib._4();
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81).to({_off:false},0).to({_off:true},80).wait(39));

	// l3
	this.instance_4 = new lib.linemagenta();
	this.instance_4.setTransform(275,40.2,1,1,0,0,0,0,0.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},0).to({y:450.2},39).to({_off:true},1).wait(119));

	// m3 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_41 = new cjs.Graphics().p("EgqKACHIAAkMMBUVAAAIAAEMg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EgqKAC7IAAl1MBUVAAAIAAF1g");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgqKADwIAAnfMBUVAAAIAAHfg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgqKAElIAApJMBUVAAAIAAJJg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgqKAFaIAAqzMBUVAAAIAAKzg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgqKAGPIAAsdMBUVAAAIAAMdg");
	var mask_2_graphics_47 = new cjs.Graphics().p("EgqKAHEIAAuHMBUVAAAIAAOHg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EgqKAH5IAAvxMBUVAAAIAAPxg");
	var mask_2_graphics_49 = new cjs.Graphics().p("EgqKAIuIAAxbMBUVAAAIAARbg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EgqKAJjIAAzFMBUVAAAIAATFg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EgqKAKYIAA0vMBUVAAAIAAUvg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EgqKALNIAA2ZMBUVAAAIAAWZg");
	var mask_2_graphics_53 = new cjs.Graphics().p("EgqKAMCIAA4DMBUVAAAIAAYDg");
	var mask_2_graphics_54 = new cjs.Graphics().p("EgqKAM3IAA5tMBUVAAAIAAZtg");
	var mask_2_graphics_55 = new cjs.Graphics().p("EgqKANsIAA7XMBUVAAAIAAbXg");
	var mask_2_graphics_56 = new cjs.Graphics().p("EgqKAOhIAA9BMBUVAAAIAAdBg");
	var mask_2_graphics_57 = new cjs.Graphics().p("EgqKAPWIAA+rMBUVAAAIAAerg");
	var mask_2_graphics_58 = new cjs.Graphics().p("EgqKAQLMAAAggVMBUVAAAMAAAAgVg");
	var mask_2_graphics_59 = new cjs.Graphics().p("EgqKARAMAAAgh/MBUVAAAMAAAAh/g");
	var mask_2_graphics_60 = new cjs.Graphics().p("EgqKAR1MAAAgjpMBUVAAAMAAAAjpg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EgqKASpMAAAglRMBUVAAAMAAAAlRg");
	var mask_2_graphics_62 = new cjs.Graphics().p("EgqKATeMAAAgm7MBUVAAAMAAAAm7g");
	var mask_2_graphics_63 = new cjs.Graphics().p("EgqKAUTMAAAgolMBUVAAAMAAAAolg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EgqKAVIMAAAgqPMBUVAAAMAAAAqPg");
	var mask_2_graphics_65 = new cjs.Graphics().p("EgqKAV9MAAAgr5MBUVAAAMAAAAr5g");
	var mask_2_graphics_66 = new cjs.Graphics().p("EgqKAWyMAAAgtjMBUVAAAMAAAAtjg");
	var mask_2_graphics_67 = new cjs.Graphics().p("EgqKAXnMAAAgvNMBUVAAAMAAAAvNg");
	var mask_2_graphics_68 = new cjs.Graphics().p("EgqKAYcMAAAgw3MBUVAAAMAAAAw3g");
	var mask_2_graphics_69 = new cjs.Graphics().p("EgqKAZRMAAAgyhMBUVAAAMAAAAyhg");
	var mask_2_graphics_70 = new cjs.Graphics().p("EgqKAaGMAAAg0LMBUVAAAMAAAA0Lg");
	var mask_2_graphics_71 = new cjs.Graphics().p("EgqKAa7MAAAg11MBUVAAAMAAAA11g");
	var mask_2_graphics_72 = new cjs.Graphics().p("EgqKAbwMAAAg3fMBUVAAAMAAAA3fg");
	var mask_2_graphics_73 = new cjs.Graphics().p("EgqKAclMAAAg5JMBUVAAAMAAAA5Jg");
	var mask_2_graphics_74 = new cjs.Graphics().p("EgqKAdaMAAAg6zMBUVAAAMAAAA6zg");
	var mask_2_graphics_75 = new cjs.Graphics().p("EgqKAePMAAAg8dMBUVAAAMAAAA8dg");
	var mask_2_graphics_76 = new cjs.Graphics().p("EgqKAfEMAAAg+HMBUVAAAMAAAA+Hg");
	var mask_2_graphics_77 = new cjs.Graphics().p("EgqKAf5MAAAg/xMBUVAAAMAAAA/xg");
	var mask_2_graphics_78 = new cjs.Graphics().p("EgqKAguMAAAhBbMBUVAAAMAAABBbg");
	var mask_2_graphics_79 = new cjs.Graphics().p("EgqKAhjMAAAhDFMBUVAAAMAAABDFg");
	var mask_2_graphics_80 = new cjs.Graphics().p("EgqKAiXMAAAhEtMBUVAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(41).to({graphics:mask_2_graphics_41,x:270,y:63.5}).wait(1).to({graphics:mask_2_graphics_42,x:270,y:68.8}).wait(1).to({graphics:mask_2_graphics_43,x:270,y:74.1}).wait(1).to({graphics:mask_2_graphics_44,x:270,y:79.4}).wait(1).to({graphics:mask_2_graphics_45,x:270,y:84.7}).wait(1).to({graphics:mask_2_graphics_46,x:270,y:90}).wait(1).to({graphics:mask_2_graphics_47,x:270,y:95.3}).wait(1).to({graphics:mask_2_graphics_48,x:270,y:100.6}).wait(1).to({graphics:mask_2_graphics_49,x:270,y:105.9}).wait(1).to({graphics:mask_2_graphics_50,x:270,y:111.2}).wait(1).to({graphics:mask_2_graphics_51,x:270,y:116.4}).wait(1).to({graphics:mask_2_graphics_52,x:270,y:121.7}).wait(1).to({graphics:mask_2_graphics_53,x:270,y:127}).wait(1).to({graphics:mask_2_graphics_54,x:270,y:132.3}).wait(1).to({graphics:mask_2_graphics_55,x:270,y:137.6}).wait(1).to({graphics:mask_2_graphics_56,x:270,y:142.9}).wait(1).to({graphics:mask_2_graphics_57,x:270,y:148.2}).wait(1).to({graphics:mask_2_graphics_58,x:270,y:153.5}).wait(1).to({graphics:mask_2_graphics_59,x:270,y:158.8}).wait(1).to({graphics:mask_2_graphics_60,x:270,y:164.1}).wait(1).to({graphics:mask_2_graphics_61,x:270,y:169.4}).wait(1).to({graphics:mask_2_graphics_62,x:270,y:174.7}).wait(1).to({graphics:mask_2_graphics_63,x:270,y:180}).wait(1).to({graphics:mask_2_graphics_64,x:270,y:185.3}).wait(1).to({graphics:mask_2_graphics_65,x:270,y:190.6}).wait(1).to({graphics:mask_2_graphics_66,x:270,y:195.9}).wait(1).to({graphics:mask_2_graphics_67,x:270,y:201.2}).wait(1).to({graphics:mask_2_graphics_68,x:270,y:206.5}).wait(1).to({graphics:mask_2_graphics_69,x:270,y:211.8}).wait(1).to({graphics:mask_2_graphics_70,x:270,y:217.1}).wait(1).to({graphics:mask_2_graphics_71,x:270,y:222.3}).wait(1).to({graphics:mask_2_graphics_72,x:270,y:227.6}).wait(1).to({graphics:mask_2_graphics_73,x:270,y:232.9}).wait(1).to({graphics:mask_2_graphics_74,x:270,y:238.2}).wait(1).to({graphics:mask_2_graphics_75,x:270,y:243.5}).wait(1).to({graphics:mask_2_graphics_76,x:270,y:248.8}).wait(1).to({graphics:mask_2_graphics_77,x:270,y:254.1}).wait(1).to({graphics:mask_2_graphics_78,x:270,y:259.4}).wait(1).to({graphics:mask_2_graphics_79,x:270,y:264.7}).wait(1).to({graphics:mask_2_graphics_80,x:270,y:270}).wait(1).to({graphics:null,x:0,y:0}).wait(119));

	// 3
	this.instance_5 = new lib._3();
	this.instance_5._off = true;

	this.instance_5.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({_off:true},120).wait(39));

	// l2
	this.instance_6 = new lib.linecyan();
	this.instance_6.setTransform(275,40.2,1,1,0,0,0,0,0.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({_off:false},0).to({y:450.2},39).to({_off:true},1).wait(159));

	// m2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_1 = new cjs.Graphics().p("EgqKACHIAAkMMBUVAAAIAAEMg");
	var mask_3_graphics_2 = new cjs.Graphics().p("EgqKAC7IAAl1MBUVAAAIAAF1g");
	var mask_3_graphics_3 = new cjs.Graphics().p("EgqKADwIAAnfMBUVAAAIAAHfg");
	var mask_3_graphics_4 = new cjs.Graphics().p("EgqKAElIAApJMBUVAAAIAAJJg");
	var mask_3_graphics_5 = new cjs.Graphics().p("EgqKAFaIAAqzMBUVAAAIAAKzg");
	var mask_3_graphics_6 = new cjs.Graphics().p("EgqKAGPIAAsdMBUVAAAIAAMdg");
	var mask_3_graphics_7 = new cjs.Graphics().p("EgqKAHEIAAuHMBUVAAAIAAOHg");
	var mask_3_graphics_8 = new cjs.Graphics().p("EgqKAH5IAAvxMBUVAAAIAAPxg");
	var mask_3_graphics_9 = new cjs.Graphics().p("EgqKAIuIAAxbMBUVAAAIAARbg");
	var mask_3_graphics_10 = new cjs.Graphics().p("EgqKAJjIAAzFMBUVAAAIAATFg");
	var mask_3_graphics_11 = new cjs.Graphics().p("EgqKAKYIAA0vMBUVAAAIAAUvg");
	var mask_3_graphics_12 = new cjs.Graphics().p("EgqKALNIAA2ZMBUVAAAIAAWZg");
	var mask_3_graphics_13 = new cjs.Graphics().p("EgqKAMCIAA4DMBUVAAAIAAYDg");
	var mask_3_graphics_14 = new cjs.Graphics().p("EgqKAM3IAA5tMBUVAAAIAAZtg");
	var mask_3_graphics_15 = new cjs.Graphics().p("EgqKANsIAA7XMBUVAAAIAAbXg");
	var mask_3_graphics_16 = new cjs.Graphics().p("EgqKAOhIAA9BMBUVAAAIAAdBg");
	var mask_3_graphics_17 = new cjs.Graphics().p("EgqKAPWIAA+rMBUVAAAIAAerg");
	var mask_3_graphics_18 = new cjs.Graphics().p("EgqKAQLMAAAggVMBUVAAAMAAAAgVg");
	var mask_3_graphics_19 = new cjs.Graphics().p("EgqKARAMAAAgh/MBUVAAAMAAAAh/g");
	var mask_3_graphics_20 = new cjs.Graphics().p("EgqKAR1MAAAgjpMBUVAAAMAAAAjpg");
	var mask_3_graphics_21 = new cjs.Graphics().p("EgqKASpMAAAglRMBUVAAAMAAAAlRg");
	var mask_3_graphics_22 = new cjs.Graphics().p("EgqKATeMAAAgm7MBUVAAAMAAAAm7g");
	var mask_3_graphics_23 = new cjs.Graphics().p("EgqKAUTMAAAgolMBUVAAAMAAAAolg");
	var mask_3_graphics_24 = new cjs.Graphics().p("EgqKAVIMAAAgqPMBUVAAAMAAAAqPg");
	var mask_3_graphics_25 = new cjs.Graphics().p("EgqKAV9MAAAgr5MBUVAAAMAAAAr5g");
	var mask_3_graphics_26 = new cjs.Graphics().p("EgqKAWyMAAAgtjMBUVAAAMAAAAtjg");
	var mask_3_graphics_27 = new cjs.Graphics().p("EgqKAXnMAAAgvNMBUVAAAMAAAAvNg");
	var mask_3_graphics_28 = new cjs.Graphics().p("EgqKAYcMAAAgw3MBUVAAAMAAAAw3g");
	var mask_3_graphics_29 = new cjs.Graphics().p("EgqKAZRMAAAgyhMBUVAAAMAAAAyhg");
	var mask_3_graphics_30 = new cjs.Graphics().p("EgqKAaGMAAAg0LMBUVAAAMAAAA0Lg");
	var mask_3_graphics_31 = new cjs.Graphics().p("EgqKAa7MAAAg11MBUVAAAMAAAA11g");
	var mask_3_graphics_32 = new cjs.Graphics().p("EgqKAbwMAAAg3fMBUVAAAMAAAA3fg");
	var mask_3_graphics_33 = new cjs.Graphics().p("EgqKAclMAAAg5JMBUVAAAMAAAA5Jg");
	var mask_3_graphics_34 = new cjs.Graphics().p("EgqKAdaMAAAg6zMBUVAAAMAAAA6zg");
	var mask_3_graphics_35 = new cjs.Graphics().p("EgqKAePMAAAg8dMBUVAAAMAAAA8dg");
	var mask_3_graphics_36 = new cjs.Graphics().p("EgqKAfEMAAAg+HMBUVAAAMAAAA+Hg");
	var mask_3_graphics_37 = new cjs.Graphics().p("EgqKAf5MAAAg/xMBUVAAAMAAAA/xg");
	var mask_3_graphics_38 = new cjs.Graphics().p("EgqKAguMAAAhBbMBUVAAAMAAABBbg");
	var mask_3_graphics_39 = new cjs.Graphics().p("EgqKAhjMAAAhDFMBUVAAAMAAABDFg");
	var mask_3_graphics_40 = new cjs.Graphics().p("EgqKAiXMAAAhEtMBUVAAAMAAABEtg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_3_graphics_1,x:270,y:63.5}).wait(1).to({graphics:mask_3_graphics_2,x:270,y:68.8}).wait(1).to({graphics:mask_3_graphics_3,x:270,y:74.1}).wait(1).to({graphics:mask_3_graphics_4,x:270,y:79.4}).wait(1).to({graphics:mask_3_graphics_5,x:270,y:84.7}).wait(1).to({graphics:mask_3_graphics_6,x:270,y:90}).wait(1).to({graphics:mask_3_graphics_7,x:270,y:95.3}).wait(1).to({graphics:mask_3_graphics_8,x:270,y:100.6}).wait(1).to({graphics:mask_3_graphics_9,x:270,y:105.9}).wait(1).to({graphics:mask_3_graphics_10,x:270,y:111.2}).wait(1).to({graphics:mask_3_graphics_11,x:270,y:116.4}).wait(1).to({graphics:mask_3_graphics_12,x:270,y:121.7}).wait(1).to({graphics:mask_3_graphics_13,x:270,y:127}).wait(1).to({graphics:mask_3_graphics_14,x:270,y:132.3}).wait(1).to({graphics:mask_3_graphics_15,x:270,y:137.6}).wait(1).to({graphics:mask_3_graphics_16,x:270,y:142.9}).wait(1).to({graphics:mask_3_graphics_17,x:270,y:148.2}).wait(1).to({graphics:mask_3_graphics_18,x:270,y:153.5}).wait(1).to({graphics:mask_3_graphics_19,x:270,y:158.8}).wait(1).to({graphics:mask_3_graphics_20,x:270,y:164.1}).wait(1).to({graphics:mask_3_graphics_21,x:270,y:169.4}).wait(1).to({graphics:mask_3_graphics_22,x:270,y:174.7}).wait(1).to({graphics:mask_3_graphics_23,x:270,y:180}).wait(1).to({graphics:mask_3_graphics_24,x:270,y:185.3}).wait(1).to({graphics:mask_3_graphics_25,x:270,y:190.6}).wait(1).to({graphics:mask_3_graphics_26,x:270,y:195.9}).wait(1).to({graphics:mask_3_graphics_27,x:270,y:201.2}).wait(1).to({graphics:mask_3_graphics_28,x:270,y:206.5}).wait(1).to({graphics:mask_3_graphics_29,x:270,y:211.8}).wait(1).to({graphics:mask_3_graphics_30,x:270,y:217.1}).wait(1).to({graphics:mask_3_graphics_31,x:270,y:222.3}).wait(1).to({graphics:mask_3_graphics_32,x:270,y:227.6}).wait(1).to({graphics:mask_3_graphics_33,x:270,y:232.9}).wait(1).to({graphics:mask_3_graphics_34,x:270,y:238.2}).wait(1).to({graphics:mask_3_graphics_35,x:270,y:243.5}).wait(1).to({graphics:mask_3_graphics_36,x:270,y:248.8}).wait(1).to({graphics:mask_3_graphics_37,x:270,y:254.1}).wait(1).to({graphics:mask_3_graphics_38,x:270,y:259.4}).wait(1).to({graphics:mask_3_graphics_39,x:270,y:264.7}).wait(1).to({graphics:mask_3_graphics_40,x:270,y:270}).wait(1).to({graphics:null,x:0,y:0}).wait(159));

	// 2
	this.instance_7 = new lib._2();
	this.instance_7._off = true;

	this.instance_7.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).to({_off:true},99).wait(100));

	// Layer 1
	this.instance_8 = new lib._1();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},100).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(270,282,540,564);


// symbols:
(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib.ColorGuide = function() {
	this.initialize(img.ColorGuide);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,540,564);


(lib.lineyellow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(254,238,3,0.4)","rgba(254,238,3,0.176)","rgba(254,238,3,0)"],[0,0.141,1],0,-37.5,0,37.6).s().p("EgmRAF3IAArtMBMiAAAIAALtg");
	this.shape.setTransform(0,0,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FEEE03").ss(1,0,0,4).p("EgmQAAAMBMiAAA");
	this.shape_1.setTransform(0,37.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-246,-37.6,492,76.2);


(lib.linemagenta = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(230,1,127,0.4)","rgba(230,1,127,0.176)","rgba(230,1,127,0)"],[0,0.141,1],0,-37.5,0,37.6).s().p("EgmRAF3IAArtMBMiAAAIAALtg");
	this.shape.setTransform(0,0,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E6017F").ss(1,0,0,4).p("EgmQAAAMBMiAAA");
	this.shape_1.setTransform(0,37.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-246,-37.6,492,76.2);


(lib.linecyan = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(7,160,227,0.4)","rgba(7,160,227,0.176)","rgba(7,160,227,0)"],[0,0.141,1],0,37.6,0,-37.5).s().p("EgmQAF3IAArtMBMhAAAIAALtg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#07A0E3").ss(1,0,0,4).p("EgmQAAAMBMiAAA");
	this.shape_1.setTransform(0,37.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-246,-37.6,492,76.2);


(lib.lineblack = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.4)","rgba(0,0,0,0.176)","rgba(0,0,0,0)"],[0,0.141,1],0,-37.5,0,37.6).s().p("EgmRAF3IAArtMBMiAAAIAALtg");
	this.shape.setTransform(0,0,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,0,0,4).p("EgmQAAAMBMiAAA");
	this.shape_1.setTransform(0,37.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-246,-37.6,492,76.2);

})(libCMYK = libCMYK||{}, images = images||{}, createjs = createjs||{});
var libCMYK, images, createjs;