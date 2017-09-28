(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tstroke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah4AcIAAg3IDxAAIAAA3g");
	this.shape.setTransform(12.1,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,5.6);


(lib.T = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiDAIAAlHIhWAAIAAg4IDxAAIAAA4IhVAAIAAFHg");
	this.shape.setTransform(12.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,38.4);


(lib.S = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEDBQgXgEgNgJIADg+QAtAXAkABQAYAAARgOQAIgHAEgKQAFgLAAgOQAAgTgMgNQgKgLgbgPIgkgUQgPgIgLgJQgMgKgHgMQgJgNgEgOQgEgQgBgSQAAgZAKgUQAJgUASgNQARgNAVgGQAWgIAXAAQApABAoAOIgEA6QgngRghAAQgYABgOANQgOAMAAAUQAAATAMANQAIAIAUAMIBGAqQANAJAJALQAHANAEAOQAEAQABAUQAAAdgLAWQgIAWgTAOQgRAOgXAHQgXAIgcAAQgcAAgWgFg");
	this.shape.setTransform(11.1,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.1,39.5);


(lib.R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAzDAIgmh9QgGgVgNgKQgNgJgUAAIgQAAIAAClIhGAAIAAl/IB4AAQAZAAAUAGQAWAGAOAMQAQANAIATQAIAUAAAZQAAASgGARQgFAPgKAMQgKALgOAIQgNAHgQACIAAABQANACAJAIQAMALAIAYIAyCSgAg3gYIAdAAQAOAAALgDQALgEAIgHQAIgIAFgLQAEgKAAgPQAAgQgEgLQgEgKgIgHQgIgGgLgCIg3gDg");
	this.shape.setTransform(12.6,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.3,38.4);


(lib.O = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5C6QgNgGgMgJQgNgJgKgLQgLgMgIgPQgJgRgGgSQgGgTgDgWQgEgXAAgZQAAgYAEgXQADgWAGgTQAGgTAJgPQAIgPALgNQAKgLANgJQAMgJANgGQATgIAngEIAdADIAcAJQANAGANAJQAMAJAKALQAMANAHAPQAKAPAFATQAGATAEAWQADAXAAAYQAAAZgDAXQgEAWgGATQgFASgKARQgHAPgMAMQgKALgMAJQgNAJgNAGIgcAJIgdADQgngEgTgIgAgeiHQgPAIgLARQgLARgGAbQgGAdAAAlQAAAnAGAcQAGAbALARQALARAPAIQAOAHARABQARgBANgHQAQgIAKgRQAMgRAFgbQAHgcgBgnQABglgHgdQgFgbgMgRQgKgRgQgIQgNgHgRAAQgRAAgOAHg");
	this.shape.setTransform(15.3,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,39.5);


(lib.Nstroke = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABWDAIh+kqIgBAAIAAEqIhAAAIAAl/IBUAAIB+EsIABAAIAABTg");
	this.shape.setTransform(10.6,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,38.4);


(lib.N = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA2DAIh+kqIgBAAIAAEqIhAAAIAAl/IBUAAIB+EsIABAAIAAksIBAAAIAAF/g");
	this.shape.setTransform(13.8,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,38.4);


(lib.M = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB4DAIAAk/IgBAAIhgE/IgxAAIhck/IgBAAIAAE/IhAAAIAAl/IBpAAIBOEeIABAAIBRkeIBmAAIAAF/g");
	this.shape.setTransform(18.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,38.4);


(lib.I = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiDAIAAl/IBFAAIAAF/g");
	this.shape.setTransform(3.5,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.I, new cjs.Rectangle(0,0,7,38.4), null);


(lib.H = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA5DAIAAiqIhxAAIAACqIhGAAIAAl/IBGAAIAACdIBxAAIAAidIBGAAIAAF/g");
	this.shape.setTransform(12.7,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.5,38.4);


(lib.G = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAADBQgUgDgSgIQgSgGgPgLQgOgKgMgNQgMgNgJgRQgJgPgGgSQgGgSgDgTIgEgqIAEgoQADgUAGgSQAGgRAJgRQAJgQAMgNQAMgNAOgKQAPgLASgGQASgIAUgEQATgEAXAAQAsABAyAQIgEBAQgSgMgVgGQgYgHgaAAQgbABgVAKQgVALgPAUQgPASgHAbQgIAZAAAdQAAAhAIAZQAHAbAOASQAOASAVALQAUAJAbABQAXgBARgGIAAhoIg6AAIAAg1IB9AAIAADIQgRAJgZAEQgbAHgkAAQgXAAgTgFg");
	this.shape.setTransform(14.7,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,39.5);


(lib.Fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egq9AfQMAAAg+fMBV7AAAMAAAA+fg");
	this.shape.setTransform(275,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,550,400);


(lib.Estrokes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEDAIAAg4ICIAAIAAA4gAhEAWIAAg3IB8AAIAAA3gAhEiHIAAg4ICDAAIAAA4g");
	this.shape.setTransform(6.9,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.7,38.4);


(lib.E = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhnDAIAAl/IDJAAIAAA4IiCAAIAABmIB7AAIAAA3Ih7AAIAAByICHAAIAAA4g");
	this.shape.setTransform(10.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.7,38.4);


(lib.C = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAGDBQgSgDgRgIQgQgHgOgLQgOgKgLgNQgLgNgJgRQgIgPgFgSQgIgYgEg2QAAgbAMgyQAFgSAIgPQAJgRAKgNQALgNAOgKQAOgLAQgHQAQgHASgFQATgEAWAAQAmABAvAQIgEA/QglgVgjAAQgXAAgTAHQgTAIgPARQgPARgIAbQgJAbAAAjQAAAkAJAcQAIAZAPASQAPARATAIQATAHAXAAQAXAAAUgFQAQgGANgJIAEBAQgLAHgXADQgYAFgZAAQgWAAgTgFg");
	this.shape.setTransform(13,19.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,39.5);


(lib.A = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABcDAIgbhcIiDAAIgbBcIhHAAICBl/IBMAAIB8F/gAAzAuIgxizIgBAAIg0CzIBmAAg");
	this.shape.setTransform(16.5,19.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,38.4);


(lib.Tstrokeanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tstroke("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12.1,19.2,1,1,0,0,0,12.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:2.8,y:2.6},0).wait(1).to({y:2.3},0).wait(1).to({y:2},0).wait(1).to({y:1.7},0).wait(1).to({y:1.4},0).wait(1).to({y:1.1},0).wait(1).to({y:0.8},0).wait(1).to({y:1},0).wait(1).to({y:1.2},0).wait(1).to({y:1.4},0).wait(1).to({y:1.6},0).wait(1).to({y:1.8},0).wait(1).to({y:2},0).wait(1).to({y:2.2},0).wait(1).to({y:2.4},0).wait(1).to({y:2.6},0).wait(1).to({y:2.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,5.6);


(lib.Tanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.T("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12.1,19.2,1,1,0,0,0,12.1,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:19},0).wait(1).to({y:18.7},0).wait(1).to({y:18.4},0).wait(1).to({y:18.1},0).wait(1).to({y:17.8},0).wait(1).to({y:17.5},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({y:18.8},0).wait(1).to({y:19},0).wait(1).to({y:19.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.2,38.4);


(lib.Sanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.S("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(11.1,19.8,1,1,0,0,0,11.1,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:19.6},0).wait(1).to({y:19.3},0).wait(1).to({y:19.1},0).wait(1).to({y:18.8},0).wait(1).to({y:18.6},0).wait(1).to({y:18.3},0).wait(1).to({y:18.1},0).wait(1).to({y:17.8},0).wait(1).to({y:18.1},0).wait(1).to({y:18.3},0).wait(1).to({y:18.5},0).wait(1).to({y:18.7},0).wait(1).to({y:19},0).wait(1).to({y:19.2},0).wait(1).to({y:19.4},0).wait(1).to({y:19.6},0).wait(1).to({y:19.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.1,39.5);


(lib.Roadline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.I();
	this.instance.parent = this;
	this.instance.setTransform(3.5,460.4,1,1,0,0,0,3.5,19.2);

	this.instance_1 = new lib.I();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3.5,405.3,1,1,0,0,0,3.5,19.2);

	this.instance_2 = new lib.I();
	this.instance_2.parent = this;
	this.instance_2.setTransform(3.5,350.1,1,1,0,0,0,3.5,19.2);

	this.instance_3 = new lib.I();
	this.instance_3.parent = this;
	this.instance_3.setTransform(3.5,295,1,1,0,0,0,3.5,19.2);

	this.instance_4 = new lib.I();
	this.instance_4.parent = this;
	this.instance_4.setTransform(3.6,239.8,1,1,0,0,0,3.5,19.2);

	this.instance_5 = new lib.I();
	this.instance_5.parent = this;
	this.instance_5.setTransform(3.5,184.7,1,1,0,0,0,3.5,19.2);

	this.instance_6 = new lib.I();
	this.instance_6.parent = this;
	this.instance_6.setTransform(3.5,129.5,1,1,0,0,0,3.5,19.2);

	this.instance_7 = new lib.I();
	this.instance_7.parent = this;
	this.instance_7.setTransform(3.5,74.4,1,1,0,0,0,3.5,19.2);

	this.instance_8 = new lib.I();
	this.instance_8.parent = this;
	this.instance_8.setTransform(3.6,19.2,1,1,0,0,0,3.5,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.1,479.6);


(lib.Ranimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.R("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12.6,19.2,1,1,0,0,0,12.6,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:19},0).wait(1).to({y:18.7},0).wait(1).to({y:18.4},0).wait(1).to({y:18.1},0).wait(1).to({y:17.8},0).wait(1).to({y:17.5},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({y:17.8},0).wait(1).to({y:18},0).wait(1).to({y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({y:18.8},0).wait(1).to({y:19},0).wait(1).to({y:19.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.3,38.4);


(lib.Oanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.O("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(15.3,19.8,1,1,0,0,0,15.3,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:21.1},0).wait(1).to({y:21.3},0).wait(1).to({y:21.5},0).wait(1).to({y:21.8},0).wait(1).to({y:21.6},0).wait(1).to({y:21.4},0).wait(1).to({y:21.1},0).wait(1).to({y:20.9},0).wait(1).to({y:20.7},0).wait(1).to({y:20.5},0).wait(1).to({y:20.2},0).wait(1).to({y:20},0).wait(1).to({y:19.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.6,39.5);


(lib.Nstrokeanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Nstroke("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13.8,19.2,1,1,0,0,0,13.8,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:10.6,x:10.6,y:19.4},0).wait(1).to({y:19.6},0).wait(1).to({y:19.9},0).wait(1).to({y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({y:20.5},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({y:21.2},0).wait(1).to({y:21},0).wait(1).to({y:20.7},0).wait(1).to({y:20.5},0).wait(1).to({y:20.2},0).wait(1).to({y:20},0).wait(1).to({y:19.7},0).wait(1).to({y:19.5},0).wait(1).to({y:19.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.2,38.4);


(lib.Nanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.N("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13.8,19.2,1,1,0,0,0,13.8,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:19.4},0).wait(1).to({y:19.6},0).wait(1).to({y:19.9},0).wait(1).to({y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({y:20.5},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({y:21.2},0).wait(1).to({y:21},0).wait(1).to({y:20.7},0).wait(1).to({y:20.5},0).wait(1).to({y:20.2},0).wait(1).to({y:20},0).wait(1).to({y:19.7},0).wait(1).to({y:19.5},0).wait(1).to({y:19.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.6,38.4);


(lib.Manimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.M("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(18.4,19.2,1,1,0,0,0,18.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:19.5},0).wait(1).to({y:19.8},0).wait(1).to({y:20.1},0).wait(1).to({y:20.4},0).wait(1).to({y:20.7},0).wait(1).to({y:21},0).wait(1).to({y:21.3},0).wait(1).to({y:21.6},0).wait(1).to({y:21.9},0).wait(1).to({y:22.2},0).wait(1).to({y:21.8},0).wait(1).to({y:21.3},0).wait(1).to({y:20.9},0).wait(1).to({y:20.5},0).wait(1).to({y:20.1},0).wait(1).to({y:19.6},0).wait(1).to({y:19.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,38.4);


(lib.Hanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.H("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(12.7,19.2,1,1,0,0,0,12.7,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:19.5},0).wait(1).to({y:19.8},0).wait(1).to({y:20.1},0).wait(1).to({y:20.3},0).wait(1).to({y:20.6},0).wait(1).to({y:20.9},0).wait(1).to({y:21.2},0).wait(1).to({y:21},0).wait(1).to({y:20.8},0).wait(1).to({y:20.6},0).wait(1).to({y:20.4},0).wait(1).to({y:20.2},0).wait(1).to({y:20},0).wait(1).to({y:19.8},0).wait(1).to({y:19.6},0).wait(1).to({y:19.4},0).wait(1).to({y:19.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.5,38.4);


(lib.Ganimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.G("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(14.7,19.8,1,1,0,0,0,14.7,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:19.5},0).wait(1).to({y:19.2},0).wait(1).to({y:18.8},0).wait(1).to({y:18.5},0).wait(1).to({y:18.2},0).wait(1).to({y:17.8},0).wait(1).to({y:17.5},0).wait(1).to({y:17.2},0).wait(1).to({y:16.8},0).wait(1).to({y:17.2},0).wait(1).to({y:17.6},0).wait(1).to({y:18},0).wait(1).to({y:18.3},0).wait(1).to({y:18.7},0).wait(1).to({y:19.1},0).wait(1).to({y:19.5},0).wait(1).to({y:19.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.3,39.5);


(lib.Estrokesanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Estrokes("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13.9,19.2,1,1,0,0,0,6.9,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:6.8,x:13.8,y:18.8},0).wait(1).to({y:18.4},0).wait(1).to({y:18},0).wait(1).to({y:17.6},0).wait(1).to({y:17.2},0).wait(1).to({y:17.4},0).wait(1).to({y:17.6},0).wait(1).to({y:17.7},0).wait(1).to({y:17.9},0).wait(1).to({y:18.1},0).wait(1).to({y:18.2},0).wait(1).to({y:18.4},0).wait(1).to({y:18.6},0).wait(1).to({y:18.7},0).wait(1).to({y:18.9},0).wait(1).to({y:19.1},0).wait(1).to({y:19.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7,0,13.7,38.4);


(lib.Eanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.E("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(10.3,19.2,1,1,0,0,0,10.3,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:18.8},0).wait(1).to({y:18.4},0).wait(1).to({y:18},0).wait(1).to({y:17.5},0).wait(1).to({y:17.1},0).wait(1).to({y:16.7},0).wait(1).to({y:16.2},0).wait(1).to({y:16.5},0).wait(1).to({y:16.8},0).wait(1).to({y:17.1},0).wait(1).to({y:17.4},0).wait(1).to({y:17.7},0).wait(1).to({y:18},0).wait(1).to({y:18.3},0).wait(1).to({y:18.6},0).wait(1).to({y:18.9},0).wait(1).to({y:19.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.7,38.4);


(lib.Canimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.C("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(13,19.8,1,1,0,0,0,13,19.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:20.4},0).wait(1).to({y:21.1},0).wait(1).to({y:21.7},0).wait(1).to({y:22.3},0).wait(1).to({y:22.9},0).wait(1).to({y:23.6},0).wait(1).to({y:24.2},0).wait(1).to({y:24.8},0).wait(1).to({y:24.2},0).wait(1).to({y:23.7},0).wait(1).to({y:23.1},0).wait(1).to({y:22.6},0).wait(1).to({y:22},0).wait(1).to({y:21.5},0).wait(1).to({y:20.9},0).wait(1).to({y:20.4},0).wait(1).to({y:19.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26,39.5);


(lib.Aanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.A("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(16.4,19.2,1,1,0,0,0,16.4,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:16.5,x:16.5,y:19.4},0).wait(1).to({y:19.6},0).wait(1).to({y:19.8},0).wait(1).to({y:20},0).wait(1).to({y:20.2},0).wait(1).to({y:20.4},0).wait(1).to({y:20.6},0).wait(1).to({y:20.8},0).wait(1).to({y:21},0).wait(1).to({y:21.2},0).wait(1).to({y:20.9},0).wait(1).to({y:20.6},0).wait(1).to({y:20.3},0).wait(1).to({y:20.1},0).wait(1).to({y:19.8},0).wait(1).to({y:19.5},0).wait(1).to({y:19.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,38.4);


(lib.Roadlineanimate = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Roadline();
	this.instance.parent = this;
	this.instance.setTransform(460.4,160.2,1,1,0,0,0,3.5,239.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:168.1},0).wait(1).to({y:175.9},0).wait(1).to({y:183.8},0).wait(1).to({y:191.6},0).wait(1).to({y:199.5},0).wait(1).to({y:207.3},0).wait(1).to({y:215.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(456.9,-79.6,7.1,479.6);


// stage content:
(lib.TypographyPart1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Fade
	this.instance = new lib.Fade("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,200,1,1,0,0,0,275,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.909},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.091},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1));

	// C
	this.instance_1 = new lib.Canimate();
	this.instance_1.parent = this;
	this.instance_1.setTransform(212.3,422.1,1,1,0,0,0,13,19.8);

	this.instance_2 = new lib.C();
	this.instance_2.parent = this;
	this.instance_2.setTransform(212.3,340.2,1,1,0,0,0,13,19.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(744).to({regY:22.2,y:419.3},0).wait(1).to({y:414.2},0).wait(1).to({y:409.1},0).wait(1).to({y:404},0).wait(1).to({y:398.9},0).wait(1).to({y:393.7},0).wait(1).to({y:388.6},0).wait(1).to({y:383.5},0).wait(1).to({y:378.4},0).wait(1).to({y:373.3},0).wait(1).to({y:368.1},0).wait(1).to({y:363},0).wait(1).to({y:357.9},0).wait(1).to({y:352.8},0).wait(1).to({y:347.7},0).wait(1).to({y:342.6},0).wait(185).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(945).to({_off:false},0).wait(45));

	// E
	this.instance_3 = new lib.Eanimate();
	this.instance_3.parent = this;
	this.instance_3.setTransform(403.3,-30.2,1,1,0,0,0,10.3,19.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(800).to({_off:false},0).wait(1).to({regY:17.7,x:403.1,y:-21.7},0).wait(1).to({y:-11.7},0).wait(1).to({x:403.3,y:-1.7},0).wait(1).to({x:403.6,y:8.3},0).wait(1).to({x:404.1,y:18.2},0).wait(1).to({x:404.7,y:28.2},0).wait(1).to({x:405.5,y:38.2},0).wait(1).to({x:406.5,y:48.1},0).wait(1).to({x:407.7,y:58.1},0).wait(1).to({x:409.1,y:68},0).wait(1).to({x:410.7,y:77.8},0).wait(1).to({x:412.4,y:87.7},0).wait(1).to({x:414.4,y:97.5},0).wait(1).to({x:416.5,y:107.3},0).wait(1).to({x:418.9,y:117},0).wait(1).to({x:421.5,y:126.6},0).wait(1).to({x:424.3,y:136.2},0).wait(1).to({x:427.3,y:145.8},0).wait(1).to({x:430.6,y:155.2},0).wait(1).to({x:434,y:164.6},0).wait(1).to({x:437.7,y:173.9},0).wait(1).to({x:441.7,y:183.1},0).wait(1).to({x:445.8,y:192.2},0).wait(1).to({x:450.2,y:201.2},0).wait(1).to({x:454.8,y:210.1},0).wait(1).to({x:459.6,y:218.9},0).wait(1).to({x:464.6,y:227.5},0).wait(44).to({x:471.1,y:239.4},0).wait(1).to({x:476.9,y:251.6},0).wait(1).to({x:481.8,y:264.2},0).wait(1).to({x:485.6,y:277.2},0).wait(1).to({x:487.4,y:290.5},0).wait(1).to({x:486.4,y:304},0).wait(1).to({x:481.2,y:316.4},0).wait(1).to({x:472,y:326.2},0).wait(1).to({x:460.2,y:332.7},0).wait(1).to({x:447.2,y:336.7},0).wait(1).to({x:433.9,y:339},0).wait(1).to({x:420.4,y:340},0).wait(1).to({x:406.9,y:340.1},0).wait(1).to({x:393.4,y:339.5},0).wait(1).to({x:379.9,y:338.4},0).wait(51).to({regY:19.2,y:339.9},0).wait(1).to({regY:17.7,y:338.4},0).wait(53));

	// G
	this.instance_4 = new lib.Ganimate();
	this.instance_4.parent = this;
	this.instance_4.setTransform(370.5,-30.1,1,1,0,0,0,14.7,19.8);
	this.instance_4._off = true;

	this.instance_5 = new lib.G();
	this.instance_5.parent = this;
	this.instance_5.setTransform(347.1,340.2,1,1,0,0,0,14.7,19.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(800).to({_off:false},0).wait(1).to({regY:18.2,x:370.4,y:-21.7},0).wait(1).to({x:370.3,y:-11.7},0).wait(1).to({x:370.4,y:-1.6},0).wait(1).to({x:370.7,y:8.4},0).wait(1).to({x:371.1,y:18.4},0).wait(1).to({x:371.7,y:28.4},0).wait(1).to({x:372.4,y:38.4},0).wait(1).to({x:373.2,y:48.3},0).wait(1).to({x:374.3,y:58.3},0).wait(1).to({x:375.5,y:68.3},0).wait(1).to({x:376.9,y:78.2},0).wait(1).to({x:378.5,y:88.1},0).wait(1).to({x:380.3,y:98},0).wait(1).to({x:382.3,y:107.8},0).wait(1).to({x:384.6,y:117.5},0).wait(1).to({x:387.1,y:127.3},0).wait(1).to({x:389.8,y:136.9},0).wait(1).to({x:392.7,y:146.5},0).wait(1).to({x:395.9,y:156},0).wait(1).to({x:399.4,y:165.4},0).wait(1).to({x:403.2,y:174.7},0).wait(1).to({x:407.2,y:183.9},0).wait(1).to({x:411.5,y:192.9},0).wait(1).to({x:416.1,y:201.8},0).wait(1).to({x:421,y:210.6},0).wait(1).to({x:426.2,y:219.1},0).wait(1).to({x:431.8,y:227.5},0).wait(44).to({x:437.8,y:239.5},0).wait(1).to({x:443.2,y:251.8},0).wait(1).to({x:447.7,y:264.4},0).wait(1).to({x:451.2,y:277.4},0).wait(1).to({x:452.8,y:290.8},0).wait(1).to({x:451.8,y:304.1},0).wait(1).to({x:447.1,y:316.6},0).wait(1).to({x:438.3,y:326.7},0).wait(1).to({x:426.7,y:333.5},0).wait(1).to({x:414,y:337.7},0).wait(1).to({x:400.7,y:339.9},0).wait(1).to({x:387.3,y:340.8},0).wait(1).to({x:373.9,y:340.7},0).wait(1).to({x:360.5,y:340},0).wait(1).to({x:347.1,y:338.6},0).wait(42).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(928).to({_off:false},0).wait(62));

	// T
	this.instance_6 = new lib.Tstrokeanimate();
	this.instance_6.parent = this;
	this.instance_6.setTransform(176.5,426.8,1,1,-90,0,0,12.1,19.2);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tstroke();
	this.instance_7.parent = this;
	this.instance_7.setTransform(235,284.6,1,1,0,0,0,12.1,19.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(618).to({_off:false},0).wait(1).to({regY:1.8,rotation:-86.5,x:159,y:419.1},0).wait(1).to({rotation:-83.1,x:159.1,y:411.5},0).wait(1).to({rotation:-79.6,x:159.2,y:403.9},0).wait(1).to({rotation:-76.2,x:159.6,y:396.3},0).wait(1).to({rotation:-72.7,x:160,y:388.7},0).wait(1).to({rotation:-69.2,x:160.7,y:381.2},0).wait(1).to({rotation:-65.8,x:161.4,y:373.6},0).wait(1).to({rotation:-62.3,x:162.3,y:366.1},0).wait(1).to({rotation:-58.8,x:163.5,y:358.6},0).wait(1).to({rotation:-55.4,x:164.8,y:351.2},0).wait(1).to({rotation:-51.9,x:166.3,y:343.8},0).wait(1).to({rotation:-48.5,x:168,y:336.5},0).wait(1).to({rotation:-45,x:170,y:329.3},0).wait(1).to({rotation:-41.5,x:172.3,y:322.2},0).wait(1).to({rotation:-38.1,x:174.8,y:315.1},0).wait(1).to({rotation:-34.6,x:177.8,y:308.3},0).wait(1).to({rotation:-31.2,x:181.1,y:301.5},0).wait(1).to({rotation:-27.7,x:184.8,y:295.1},0).wait(1).to({rotation:-24.2,x:189.1,y:288.9},0).wait(1).to({rotation:-20.8,x:193.9,y:283.2},0).wait(1).to({rotation:-17.3,x:199.5,y:278.1},0).wait(1).to({rotation:-13.8,x:205.7,y:273.8},0).wait(1).to({rotation:-10.4,x:212.5,y:270.4},0).wait(1).to({rotation:-6.9,x:219.8,y:268.3},0).wait(1).to({rotation:-3.5,x:227.4,y:267.2},0).wait(1).to({rotation:0,x:235},0).wait(273).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(918).to({_off:false},0).wait(1).to({regY:2.8,y:268.2},0).wait(71));

	// H
	this.instance_8 = new lib.Hanimate();
	this.instance_8.parent = this;
	this.instance_8.setTransform(185.9,472.4,1,1,0,0,0,12.7,19.2);
	this.instance_8._off = true;

	this.instance_9 = new lib.H();
	this.instance_9.parent = this;
	this.instance_9.setTransform(244,339.9,1,1,0,0,0,12.7,19.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(710).to({_off:false},0).wait(1).to({regY:20.2,x:185.8,y:468.2},0).wait(1).to({y:463.1},0).wait(1).to({x:185.9,y:457.9},0).wait(1).to({x:186.1,y:452.7},0).wait(1).to({x:186.3,y:447.6},0).wait(1).to({x:186.6,y:442.5},0).wait(1).to({x:187,y:437.3},0).wait(1).to({x:187.5,y:432.2},0).wait(1).to({x:188.1,y:427.1},0).wait(1).to({x:188.8,y:422},0).wait(1).to({x:189.6,y:416.9},0).wait(1).to({x:190.6,y:411.8},0).wait(1).to({x:191.6,y:406.8},0).wait(1).to({x:192.9,y:401.8},0).wait(1).to({x:194.3,y:396.8},0).wait(1).to({x:195.9,y:391.9},0).wait(1).to({x:197.7,y:387.1},0).wait(1).to({x:199.7,y:382.3},0).wait(1).to({x:201.9,y:377.7},0).wait(1).to({x:204.4,y:373.2},0).wait(1).to({x:207.1,y:368.8},0).wait(1).to({x:210.2,y:364.6},0).wait(1).to({x:213.5,y:360.7},0).wait(1).to({x:217.1,y:357.1},0).wait(1).to({x:221.1,y:353.7},0).wait(1).to({x:225.3,y:350.8},0).wait(1).to({x:229.7,y:348.2},0).wait(1).to({x:234.4,y:346},0).wait(1).to({x:239.2,y:344.2},0).wait(1).to({x:244.2,y:342.8},0).wait(1).to({x:249.2,y:341.8},0).wait(1).to({x:254.3,y:341.2},0).wait(1).to({x:259.5,y:340.9},0).wait(1).to({x:264.7},0).wait(141).to({regY:19.2,y:339.9},0).wait(1).to({regY:20.2,x:260.5,y:340.9},0).wait(1).to({x:256.4},0).wait(1).to({x:252.3},0).wait(1).to({x:248.1},0).wait(1).to({x:244},0).wait(37).to({_off:true},1).wait(62));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(928).to({_off:false},0).wait(62));

	// H
	this.instance_10 = new lib.Hanimate();
	this.instance_10.parent = this;
	this.instance_10.setTransform(185.9,434,1,1,0,0,0,12.7,19.2);
	this.instance_10._off = true;

	this.instance_11 = new lib.H();
	this.instance_11.parent = this;
	this.instance_11.setTransform(265,284.7,1,1,0,0,0,12.7,19.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(611).to({_off:false},0).wait(1).to({regY:20.2,x:186.3,y:427.9},0).wait(1).to({x:186.8,y:420.8},0).wait(1).to({x:187.4,y:413.8},0).wait(1).to({x:188.1,y:406.8},0).wait(1).to({x:188.9,y:399.7},0).wait(1).to({x:189.9,y:392.7},0).wait(1).to({x:191,y:385.7},0).wait(1).to({x:192.2,y:378.8},0).wait(1).to({x:193.7,y:371.8},0).wait(1).to({x:195.3,y:365},0).wait(1).to({x:197.1,y:358.1},0).wait(1).to({x:199.1,y:351.3},0).wait(1).to({x:201.4,y:344.6},0).wait(1).to({x:203.9,y:338},0).wait(1).to({x:206.8,y:331.6},0).wait(1).to({x:210,y:325.3},0).wait(1).to({x:213.6,y:319.2},0).wait(1).to({x:217.6,y:313.3},0).wait(1).to({x:222,y:307.8},0).wait(1).to({x:227,y:302.7},0).wait(1).to({x:232.4,y:298.2},0).wait(1).to({x:238.2,y:294.3},0).wait(1).to({x:244.5,y:291},0).wait(1).to({x:251.1,y:288.5},0).wait(1).to({x:258,y:286.7},0).wait(1).to({x:265,y:285.7},0).wait(287).to({_off:true},1).wait(65));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(925).to({_off:false},0).wait(65));

	// T
	this.instance_12 = new lib.Tanimate();
	this.instance_12.parent = this;
	this.instance_12.setTransform(473.3,-140.5,1,1,0,0,0,12.1,19.2);
	this.instance_12._off = true;

	this.instance_13 = new lib.T();
	this.instance_13.parent = this;
	this.instance_13.setTransform(378.3,229.6,1,1,0,0,0,12.1,19.2);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(536).to({_off:false},0).wait(1).to({regY:18.2,x:477,y:-121.4},0).wait(1).to({x:480.2,y:-101.2},0).wait(1).to({x:483,y:-80.9},0).wait(1).to({x:485.2,y:-60.6},0).wait(1).to({x:486.8,y:-40.2},0).wait(1).to({x:487.8,y:-19.7},0).wait(1).to({x:488.1,y:0.7},0).wait(1).to({x:487.5,y:21.1},0).wait(1).to({x:486,y:41.5},0).wait(1).to({x:483.5,y:61.8},0).wait(1).to({x:479.8,y:82},0).wait(1).to({x:474.9,y:101.8},0).wait(1).to({x:468.4,y:121.2},0).wait(1).to({x:460.5,y:140.1},0).wait(1).to({x:450.8,y:158.1},0).wait(1).to({x:439.4,y:175.1},0).wait(1).to({x:426.4,y:190.8},0).wait(1).to({x:411.7,y:205},0).wait(1).to({x:395.6,y:217.6},0).wait(1).to({x:378.3,y:228.6},0).wait(377).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(934).to({_off:false},0).wait(56));

	// N-animate copy 2
	this.instance_14 = new lib.Nanimate();
	this.instance_14.parent = this;
	this.instance_14.setTransform(486.7,-107,1,1,0,0,0,13.8,19.2);
	this.instance_14._off = true;

	this.instance_15 = new lib.N();
	this.instance_15.parent = this;
	this.instance_15.setTransform(347.3,229.6,1,1,0,0,0,13.8,19.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(338).to({_off:false},0).wait(1).to({regY:20.2,x:484.3,y:-102.7},0).wait(1).to({x:482,y:-99.4},0).wait(1).to({x:479.7,y:-96.1},0).wait(1).to({x:477.4,y:-92.8},0).wait(1).to({x:475.1,y:-89.4},0).wait(1).to({x:472.9,y:-86.1},0).wait(1).to({x:470.6,y:-82.7},0).wait(1).to({x:468.4,y:-79.4},0).wait(1).to({x:466.2,y:-76},0).wait(1).to({x:464,y:-72.6},0).wait(1).to({x:461.8,y:-69.2},0).wait(1).to({x:459.7,y:-65.8},0).wait(1).to({x:457.5,y:-62.3},0).wait(1).to({x:455.4,y:-58.9},0).wait(1).to({x:453.3,y:-55.5},0).wait(1).to({x:451.2,y:-52},0).wait(1).to({x:449.2,y:-48.5},0).wait(1).to({x:447.1,y:-45},0).wait(1).to({x:445.1,y:-41.6},0).wait(1).to({x:443.1,y:-38.1},0).wait(1).to({x:441.1,y:-34.6},0).wait(1).to({x:439.1,y:-31},0).wait(1).to({x:437.1,y:-27.5},0).wait(1).to({x:435.2,y:-24},0).wait(1).to({x:433.2,y:-20.4},0).wait(1).to({x:431.3,y:-16.9},0).wait(1).to({x:429.4,y:-13.3},0).wait(1).to({x:427.6,y:-9.7},0).wait(1).to({x:425.7,y:-6.2},0).wait(1).to({x:423.8,y:-2.6},0).wait(1).to({x:422,y:1},0).wait(1).to({x:420.2,y:4.6},0).wait(1).to({x:418.4,y:8.3},0).wait(1).to({x:416.6,y:11.9},0).wait(1).to({x:414.9,y:15.5},0).wait(1).to({x:413.1,y:19.1},0).wait(1).to({x:411.4,y:22.7},0).wait(1).to({x:409.7,y:26.4},0).wait(1).to({x:408,y:30.1},0).wait(1).to({x:406.3,y:33.7},0).wait(1).to({x:404.6,y:37.4},0).wait(1).to({x:403,y:41.1},0).wait(1).to({x:401.3,y:44.8},0).wait(1).to({x:399.7,y:48.5},0).wait(1).to({x:398.1,y:52.2},0).wait(1).to({x:396.5,y:55.9},0).wait(1).to({x:395,y:59.6},0).wait(1).to({x:393.4,y:63.4},0).wait(1).to({x:391.9,y:67.1},0).wait(1).to({x:390.4,y:70.8},0).wait(1).to({x:388.9,y:74.6},0).wait(1).to({x:387.4,y:78.3},0).wait(1).to({x:385.9,y:82.1},0).wait(1).to({x:384.4,y:85.8},0).wait(1).to({x:383,y:89.6},0).wait(1).to({x:381.6,y:93.4},0).wait(1).to({x:380.2,y:97.2},0).wait(1).to({x:378.8,y:101},0).wait(1).to({x:377.4,y:104.8},0).wait(1).to({x:376,y:108.6},0).wait(1).to({x:374.7,y:112.4},0).wait(1).to({x:373.3,y:116.2},0).wait(1).to({x:372,y:120},0).wait(1).to({x:370.7,y:123.8},0).wait(1).to({x:369.4,y:127.6},0).wait(1).to({x:368.1,y:131.5},0).wait(1).to({x:366.8,y:135.3},0).wait(1).to({x:365.6,y:139.1},0).wait(1).to({x:364.4,y:143},0).wait(1).to({x:363.1,y:146.8},0).wait(1).to({x:361.9,y:150.7},0).wait(1).to({x:360.7,y:154.5},0).wait(1).to({x:359.6,y:158.4},0).wait(1).to({x:358.4,y:162.3},0).wait(1).to({x:357.3,y:166.1},0).wait(1).to({x:356.1,y:170},0).wait(1).to({x:355,y:173.9},0).wait(1).to({x:353.9,y:177.8},0).wait(1).to({x:352.8,y:181.7},0).wait(1).to({x:351.7,y:185.5},0).wait(1).to({x:350.7,y:189.4},0).wait(1).to({x:349.6,y:193.3},0).wait(1).to({x:348.6,y:197.2},0).wait(1).to({x:347.5,y:201.1},0).wait(1).to({x:346.5,y:205},0).wait(1).to({x:345.5,y:208.9},0).wait(1).to({x:344.5,y:212.9},0).wait(1).to({x:343.6,y:216.8},0).wait(1).to({x:342.6,y:220.7},0).wait(1).to({x:341.7,y:224.6},0).wait(1).to({x:340.7,y:228.6},0).wait(1).to({x:339.8,y:232.5},0).wait(1).to({x:338.9,y:236.4},0).wait(1).to({x:338,y:240.4},0).wait(1).to({x:337.1,y:244.3},0).wait(1).to({x:336.3,y:248.2},0).wait(1).to({x:335.4,y:252.2},0).wait(1).to({x:334.6,y:256.1},0).wait(1).to({x:333.7,y:260.1},0).wait(1).to({x:332.9,y:264.1},0).wait(1).to({regY:19.2,y:263.1},0).wait(1).to({regY:20.2,x:333.2,y:264.3},0).wait(1).to({x:333.5,y:264.6},0).wait(1).to({x:333.8,y:264.9},0).wait(1).to({x:334.1,y:265.2},0).wait(1).to({x:334.4,y:265.5},0).wait(1).to({x:334.7,y:265.8},0).wait(1).to({x:334.9,y:266.1},0).wait(1).to({x:335.2,y:266.4},0).wait(1).to({x:335.5,y:266.7},0).wait(1).to({x:335.8,y:267},0).wait(1).to({x:336.1,y:267.3},0).wait(1).to({x:336.4,y:267.6},0).wait(1).to({x:336.7,y:267.8},0).wait(1).to({x:337,y:268.1},0).wait(1).to({x:337.3,y:268.4},0).wait(1).to({x:337.6,y:268.7},0).wait(1).to({x:337.9,y:269},0).wait(1).to({x:338.2,y:269.3},0).wait(1).to({x:338.4,y:269.6},0).wait(1).to({x:338.7,y:269.9},0).wait(1).to({x:339,y:270.2},0).wait(1).to({x:339.3,y:270.5},0).wait(1).to({x:339.6,y:270.8},0).wait(1).to({x:339.9,y:271.1},0).wait(1).to({x:339.7,y:270.8},0).wait(1).to({x:339.4,y:270.6},0).wait(1).to({x:339.2,y:270.4},0).wait(1).to({x:339,y:270.1},0).wait(1).to({x:338.8,y:269.9},0).wait(1).to({x:338.5,y:269.7},0).wait(1).to({x:338.3,y:269.5},0).wait(1).to({x:338.1,y:269.2},0).wait(1).to({x:337.9,y:269},0).wait(1).to({x:337.6,y:268.8},0).wait(1).to({x:337.4,y:268.6},0).wait(1).to({x:337.2,y:268.3},0).wait(1).to({x:337,y:268.1},0).wait(1).to({x:336.7,y:267.9},0).wait(1).to({x:336.5,y:267.7},0).wait(1).to({x:336.3,y:267.4},0).wait(1).to({x:336.1,y:267.2},0).wait(1).to({x:335.8,y:267},0).wait(1).to({x:335.6,y:266.8},0).wait(1).to({x:335.4,y:266.5},0).wait(1).to({x:335.2,y:266.3},0).wait(1).to({x:334.9,y:266.1},0).wait(1).to({x:334.7,y:265.9},0).wait(1).to({x:334.5,y:265.6},0).wait(1).to({x:334.3,y:265.4},0).wait(1).to({x:334,y:265.2},0).wait(1).to({x:333.8,y:265},0).wait(1).to({x:333.6,y:264.7},0).wait(1).to({x:333.4,y:264.5},0).wait(1).to({x:333.1,y:264.3},0).wait(1).to({x:332.9,y:264.1},0).wait(1).to({x:333.4,y:263},0).wait(1).to({x:333.8,y:261.9},0).wait(1).to({x:334.3,y:260.8},0).wait(1).to({x:334.8,y:259.7},0).wait(1).to({x:335.2,y:258.6},0).wait(1).to({x:335.7,y:257.6},0).wait(1).to({x:336.1,y:256.5},0).wait(1).to({x:336.6,y:255.4},0).wait(1).to({x:337.1,y:254.3},0).wait(1).to({x:337.5,y:253.2},0).wait(1).to({x:338,y:252.2},0).wait(1).to({x:338.5,y:251.1},0).wait(1).to({x:338.9,y:250},0).wait(1).to({x:339.4,y:248.9},0).wait(1).to({x:339.8,y:247.8},0).wait(1).to({x:340.3,y:246.8},0).wait(1).to({x:340.8,y:245.7},0).wait(1).to({x:341.2,y:244.6},0).wait(1).to({x:341.7,y:243.5},0).wait(1).to({x:342.2,y:242.4},0).wait(1).to({x:342.6,y:241.4},0).wait(1).to({x:343.1,y:240.3},0).wait(1).to({x:343.5,y:239.2},0).wait(1).to({x:344,y:238.1},0).wait(1).to({x:344.5,y:237},0).wait(1).to({x:344.9,y:236},0).wait(1).to({x:345.4,y:234.9},0).wait(1).to({x:345.9,y:233.8},0).wait(1).to({x:346.3,y:232.7},0).wait(1).to({x:346.8,y:231.6},0).wait(1).to({x:347.3,y:230.6},0).wait(400).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(926).to({_off:false},0).wait(64));

	// N-animate copy
	this.instance_16 = new lib.Nanimate();
	this.instance_16.parent = this;
	this.instance_16.setTransform(486.7,-68.6,1,1,0,0,0,13.8,19.2);
	this.instance_16._off = true;

	this.instance_17 = new lib.N();
	this.instance_17.parent = this;
	this.instance_17.setTransform(332.9,284.6,1,1,0,0,0,13.8,19.2);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(338).to({_off:false},0).wait(1).to({regY:20.2,x:484.3,y:-64.3},0).wait(1).to({x:482,y:-61},0).wait(1).to({x:479.7,y:-57.7},0).wait(1).to({x:477.4,y:-54.4},0).wait(1).to({x:475.1,y:-51},0).wait(1).to({x:472.9,y:-47.7},0).wait(1).to({x:470.6,y:-44.3},0).wait(1).to({x:468.4,y:-41},0).wait(1).to({x:466.2,y:-37.6},0).wait(1).to({x:464,y:-34.2},0).wait(1).to({x:461.8,y:-30.8},0).wait(1).to({x:459.7,y:-27.4},0).wait(1).to({x:457.5,y:-23.9},0).wait(1).to({x:455.4,y:-20.5},0).wait(1).to({x:453.3,y:-17.1},0).wait(1).to({x:451.2,y:-13.6},0).wait(1).to({x:449.2,y:-10.1},0).wait(1).to({x:447.1,y:-6.6},0).wait(1).to({x:445.1,y:-3.2},0).wait(1).to({x:443.1,y:0.3},0).wait(1).to({x:441.1,y:3.8},0).wait(1).to({x:439.1,y:7.4},0).wait(1).to({x:437.1,y:10.9},0).wait(1).to({x:435.2,y:14.4},0).wait(1).to({x:433.2,y:18},0).wait(1).to({x:431.3,y:21.5},0).wait(1).to({x:429.4,y:25},0).wait(1).to({x:427.6,y:28.6},0).wait(1).to({x:425.7,y:32.2},0).wait(1).to({x:423.8,y:35.8},0).wait(1).to({x:422,y:39.4},0).wait(1).to({x:420.2,y:43},0).wait(1).to({x:418.4,y:46.6},0).wait(1).to({x:416.6,y:50.2},0).wait(1).to({x:414.9,y:53.9},0).wait(1).to({x:413.1,y:57.5},0).wait(1).to({x:411.4,y:61.1},0).wait(1).to({x:409.7,y:64.8},0).wait(1).to({x:408,y:68.5},0).wait(1).to({x:406.3,y:72.1},0).wait(1).to({x:404.6,y:75.8},0).wait(1).to({x:403,y:79.5},0).wait(1).to({x:401.3,y:83.2},0).wait(1).to({x:399.7,y:86.9},0).wait(1).to({x:398.1,y:90.6},0).wait(1).to({x:396.5,y:94.3},0).wait(1).to({x:395,y:98},0).wait(1).to({x:393.4,y:101.8},0).wait(1).to({x:391.9,y:105.5},0).wait(1).to({x:390.4,y:109.2},0).wait(1).to({x:388.9,y:113},0).wait(1).to({x:387.4,y:116.7},0).wait(1).to({x:385.9,y:120.5},0).wait(1).to({x:384.4,y:124.2},0).wait(1).to({x:383,y:128},0).wait(1).to({x:381.6,y:131.8},0).wait(1).to({x:380.2,y:135.6},0).wait(1).to({x:378.8,y:139.4},0).wait(1).to({x:377.4,y:143.2},0).wait(1).to({x:376,y:147},0).wait(1).to({x:374.7,y:150.8},0).wait(1).to({x:373.3,y:154.6},0).wait(1).to({x:372,y:158.4},0).wait(1).to({x:370.7,y:162.2},0).wait(1).to({x:369.4,y:166},0).wait(1).to({x:368.1,y:169.9},0).wait(1).to({x:366.8,y:173.7},0).wait(1).to({x:365.6,y:177.5},0).wait(1).to({x:364.4,y:181.4},0).wait(1).to({x:363.1,y:185.2},0).wait(1).to({x:361.9,y:189.1},0).wait(1).to({x:360.7,y:192.9},0).wait(1).to({x:359.6,y:196.8},0).wait(1).to({x:358.4,y:200.7},0).wait(1).to({x:357.3,y:204.5},0).wait(1).to({x:356.1,y:208.4},0).wait(1).to({x:355,y:212.3},0).wait(1).to({x:353.9,y:216.2},0).wait(1).to({x:352.8,y:220.1},0).wait(1).to({x:351.7,y:223.9},0).wait(1).to({x:350.7,y:227.8},0).wait(1).to({x:349.6,y:231.7},0).wait(1).to({x:348.6,y:235.6},0).wait(1).to({x:347.5,y:239.5},0).wait(1).to({x:346.5,y:243.4},0).wait(1).to({x:345.5,y:247.3},0).wait(1).to({x:344.5,y:251.3},0).wait(1).to({x:343.6,y:255.2},0).wait(1).to({x:342.6,y:259.1},0).wait(1).to({x:341.7,y:263},0).wait(1).to({x:340.7,y:267},0).wait(1).to({x:339.8,y:270.9},0).wait(1).to({x:338.9,y:274.8},0).wait(1).to({x:338,y:278.8},0).wait(1).to({x:337.1,y:282.7},0).wait(1).to({x:336.3,y:286.6},0).wait(1).to({x:335.4,y:290.6},0).wait(1).to({x:334.6,y:294.5},0).wait(1).to({x:333.7,y:298.5},0).wait(1).to({x:332.9,y:302.5},0).wait(1).to({regY:19.2,y:301.5},0).wait(1).to({regY:20.2,x:333.2,y:302.7},0).wait(1).to({x:333.5,y:303},0).wait(1).to({x:333.8,y:303.3},0).wait(1).to({x:334.1,y:303.6},0).wait(1).to({x:334.4,y:303.9},0).wait(1).to({x:334.7,y:304.2},0).wait(1).to({x:334.9,y:304.5},0).wait(1).to({x:335.2,y:304.8},0).wait(1).to({x:335.5,y:305.1},0).wait(1).to({x:335.8,y:305.4},0).wait(1).to({x:336.1,y:305.7},0).wait(1).to({x:336.4,y:306},0).wait(1).to({x:336.7,y:306.2},0).wait(1).to({x:337,y:306.5},0).wait(1).to({x:337.3,y:306.8},0).wait(1).to({x:337.6,y:307.1},0).wait(1).to({x:337.9,y:307.4},0).wait(1).to({x:338.2,y:307.7},0).wait(1).to({x:338.4,y:308},0).wait(1).to({x:338.7,y:308.3},0).wait(1).to({x:339,y:308.6},0).wait(1).to({x:339.3,y:308.9},0).wait(1).to({x:339.6,y:309.2},0).wait(1).to({x:339.9,y:309.5},0).wait(1).to({x:339.7,y:309.2},0).wait(1).to({x:339.4,y:309},0).wait(1).to({x:339.2,y:308.8},0).wait(1).to({x:339,y:308.5},0).wait(1).to({x:338.8,y:308.3},0).wait(1).to({x:338.5,y:308.1},0).wait(1).to({x:338.3,y:307.9},0).wait(1).to({x:338.1,y:307.6},0).wait(1).to({x:337.9,y:307.4},0).wait(1).to({x:337.6,y:307.2},0).wait(1).to({x:337.4,y:307},0).wait(1).to({x:337.2,y:306.7},0).wait(1).to({x:337,y:306.5},0).wait(1).to({x:336.7,y:306.3},0).wait(1).to({x:336.5,y:306.1},0).wait(1).to({x:336.3,y:305.8},0).wait(1).to({x:336.1,y:305.6},0).wait(1).to({x:335.8,y:305.4},0).wait(1).to({x:335.6,y:305.2},0).wait(1).to({x:335.4,y:304.9},0).wait(1).to({x:335.2,y:304.7},0).wait(1).to({x:334.9,y:304.5},0).wait(1).to({x:334.7,y:304.3},0).wait(1).to({x:334.5,y:304},0).wait(1).to({x:334.3,y:303.8},0).wait(1).to({x:334,y:303.6},0).wait(1).to({x:333.8,y:303.4},0).wait(1).to({x:333.6,y:303.1},0).wait(1).to({x:333.4,y:302.9},0).wait(1).to({x:333.1,y:302.7},0).wait(1).to({x:332.9,y:302.5},0).wait(1).to({regY:19.2,y:301.5},0).wait(1).to({regY:20.2,y:305.2},0).wait(1).to({y:307.9},0).wait(1).to({y:310.6},0).wait(1).to({y:313.3},0).wait(1).to({y:316},0).wait(1).to({y:318.7},0).wait(1).to({y:321.4},0).wait(1).to({y:324.1},0).wait(1).to({y:326.8},0).wait(1).to({y:329.5},0).wait(1).to({y:332.2},0).wait(1).to({y:334.9},0).wait(1).to({y:337.6},0).wait(1).to({y:340.3},0).wait(1).to({y:343},0).wait(1).to({y:345.7},0).wait(1).to({y:348.4},0).wait(1).to({y:351.1},0).wait(1).to({y:353.8},0).wait(1).to({y:356.5},0).wait(1).to({y:359.2},0).wait(1).to({y:361.9},0).wait(1).to({y:364.6},0).wait(1).to({y:367.3},0).wait(1).to({y:370},0).wait(1).to({y:372.7},0).wait(1).to({y:375.4},0).wait(1).to({y:378.1},0).wait(1).to({y:380.8},0).wait(1).to({y:383.6},0).wait(1).to({y:386.3},0).wait(1).to({y:389},0).wait(1).to({y:391.7},0).wait(1).to({y:394.4},0).wait(1).to({y:397.1},0).wait(1).to({y:399.8},0).wait(1).to({y:402.5},0).wait(1).to({y:405.2},0).wait(1).to({y:407.9},0).wait(1).to({y:410.6},0).wait(1).to({y:413.3},0).wait(1).to({y:416},0).wait(1).to({y:418.7},0).wait(1).to({y:421.4},0).wait(1).to({y:424.1},0).wait(47).to({y:421.7},0).wait(1).to({y:419.2},0).wait(1).to({y:416.8},0).wait(1).to({y:414.4},0).wait(1).to({y:412},0).wait(1).to({y:409.5},0).wait(1).to({y:407.1},0).wait(1).to({y:404.7},0).wait(1).to({y:402.2},0).wait(1).to({y:399.8},0).wait(1).to({y:397.4},0).wait(1).to({y:394.9},0).wait(1).to({y:392.5},0).wait(1).to({y:390.1},0).wait(1).to({y:387.7},0).wait(1).to({y:385.2},0).wait(1).to({y:382.8},0).wait(1).to({y:380.4},0).wait(1).to({y:377.9},0).wait(1).to({y:375.5},0).wait(1).to({y:373.1},0).wait(1).to({y:370.6},0).wait(1).to({y:368.2},0).wait(1).to({y:365.8},0).wait(1).to({y:363.4},0).wait(1).to({y:360.9},0).wait(1).to({y:358.5},0).wait(1).to({y:356.1},0).wait(1).to({y:353.6},0).wait(1).to({y:351.2},0).wait(1).to({y:348.8},0).wait(1).to({y:346.3},0).wait(1).to({y:343.9},0).wait(1).to({y:341.5},0).wait(1).to({y:339.1},0).wait(1).to({y:336.6},0).wait(1).to({y:334.2},0).wait(1).to({y:331.8},0).wait(1).to({y:329.3},0).wait(1).to({y:326.9},0).wait(1).to({y:324.5},0).wait(1).to({y:322},0).wait(1).to({y:319.6},0).wait(1).to({y:317.2},0).wait(1).to({y:314.8},0).wait(1).to({y:312.3},0).wait(1).to({y:309.9},0).wait(1).to({y:307.5},0).wait(1).to({y:305},0).wait(1).to({y:302.6},0).wait(1).to({y:300.2},0).wait(1).to({y:297.7},0).wait(1).to({y:295.3},0).wait(1).to({y:292.9},0).wait(1).to({y:290.5},0).wait(1).to({y:288},0).wait(1).to({y:285.6},0).wait(282).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(926).to({_off:false},0).wait(64));

	// N-animate
	this.instance_18 = new lib.Nanimate();
	this.instance_18.parent = this;
	this.instance_18.setTransform(486.7,-30.2,1,1,0,0,0,13.8,19.2);
	this.instance_18._off = true;

	this.instance_19 = new lib.N();
	this.instance_19.parent = this;
	this.instance_19.setTransform(312.6,340,1,1,0,0,0,13.8,19.2);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(338).to({_off:false},0).wait(1).to({regY:20.2,x:484.3,y:-25.9},0).wait(1).to({x:482,y:-22.6},0).wait(1).to({x:479.7,y:-19.3},0).wait(1).to({x:477.4,y:-16},0).wait(1).to({x:475.1,y:-12.6},0).wait(1).to({x:472.9,y:-9.3},0).wait(1).to({x:470.6,y:-5.9},0).wait(1).to({x:468.4,y:-2.6},0).wait(1).to({x:466.2,y:0.8},0).wait(1).to({x:464,y:4.2},0).wait(1).to({x:461.8,y:7.6},0).wait(1).to({x:459.7,y:11},0).wait(1).to({x:457.5,y:14.5},0).wait(1).to({x:455.4,y:17.9},0).wait(1).to({x:453.3,y:21.3},0).wait(1).to({x:451.2,y:24.8},0).wait(1).to({x:449.2,y:28.2},0).wait(1).to({x:447.1,y:31.7},0).wait(1).to({x:445.1,y:35.2},0).wait(1).to({x:443.1,y:38.7},0).wait(1).to({x:441.1,y:42.2},0).wait(1).to({x:439.1,y:45.7},0).wait(1).to({x:437.1,y:49.2},0).wait(1).to({x:435.2,y:52.8},0).wait(1).to({x:433.2,y:56.3},0).wait(1).to({x:431.3,y:59.9},0).wait(1).to({x:429.4,y:63.4},0).wait(1).to({x:427.6,y:67},0).wait(1).to({x:425.7,y:70.6},0).wait(1).to({x:423.8,y:74.2},0).wait(1).to({x:422,y:77.8},0).wait(1).to({x:420.2,y:81.4},0).wait(1).to({x:418.4,y:85},0).wait(1).to({x:416.6,y:88.6},0).wait(1).to({x:414.9,y:92.3},0).wait(1).to({x:413.1,y:95.9},0).wait(1).to({x:411.4,y:99.5},0).wait(1).to({x:409.7,y:103.2},0).wait(1).to({x:408,y:106.9},0).wait(1).to({x:406.3,y:110.5},0).wait(1).to({x:404.6,y:114.2},0).wait(1).to({x:403,y:117.9},0).wait(1).to({x:401.3,y:121.6},0).wait(1).to({x:399.7,y:125.3},0).wait(1).to({x:398.1,y:129},0).wait(1).to({x:396.5,y:132.7},0).wait(1).to({x:395,y:136.4},0).wait(1).to({x:393.4,y:140.2},0).wait(1).to({x:391.9,y:143.9},0).wait(1).to({x:390.4,y:147.6},0).wait(1).to({x:388.9,y:151.4},0).wait(1).to({x:387.4,y:155.1},0).wait(1).to({x:385.9,y:158.9},0).wait(1).to({x:384.4,y:162.6},0).wait(1).to({x:383,y:166.4},0).wait(1).to({x:381.6,y:170.2},0).wait(1).to({x:380.2,y:174},0).wait(1).to({x:378.8,y:177.8},0).wait(1).to({x:377.4,y:181.6},0).wait(1).to({x:376,y:185.4},0).wait(1).to({x:374.7,y:189.2},0).wait(1).to({x:373.3,y:193},0).wait(1).to({x:372,y:196.8},0).wait(1).to({x:370.7,y:200.6},0).wait(1).to({x:369.4,y:204.4},0).wait(1).to({x:368.1,y:208.3},0).wait(1).to({x:366.8,y:212.1},0).wait(1).to({x:365.6,y:215.9},0).wait(1).to({x:364.4,y:219.8},0).wait(1).to({x:363.1,y:223.6},0).wait(1).to({x:361.9,y:227.5},0).wait(1).to({x:360.7,y:231.3},0).wait(1).to({x:359.6,y:235.2},0).wait(1).to({x:358.4,y:239.1},0).wait(1).to({x:357.3,y:242.9},0).wait(1).to({x:356.1,y:246.8},0).wait(1).to({x:355,y:250.7},0).wait(1).to({x:353.9,y:254.6},0).wait(1).to({x:352.8,y:258.5},0).wait(1).to({x:351.7,y:262.3},0).wait(1).to({x:350.7,y:266.2},0).wait(1).to({x:349.6,y:270.1},0).wait(1).to({x:348.6,y:274},0).wait(1).to({x:347.5,y:277.9},0).wait(1).to({x:346.5,y:281.8},0).wait(1).to({x:345.5,y:285.7},0).wait(1).to({x:344.5,y:289.7},0).wait(1).to({x:343.6,y:293.6},0).wait(1).to({x:342.6,y:297.5},0).wait(1).to({x:341.7,y:301.4},0).wait(1).to({x:340.7,y:305.4},0).wait(1).to({x:339.8,y:309.3},0).wait(1).to({x:338.9,y:313.2},0).wait(1).to({x:338,y:317.2},0).wait(1).to({x:337.1,y:321.1},0).wait(1).to({x:336.3,y:325},0).wait(1).to({x:335.4,y:329},0).wait(1).to({x:334.6,y:332.9},0).wait(1).to({x:333.7,y:336.9},0).wait(1).to({x:332.9,y:340.9},0).wait(1).to({regY:19.2,y:339.9},0).wait(1).to({regY:20.2,x:333.2,y:341.1},0).wait(1).to({x:333.5,y:341.4},0).wait(1).to({x:333.8,y:341.7},0).wait(1).to({x:334.1,y:342},0).wait(1).to({x:334.4,y:342.3},0).wait(1).to({x:334.7,y:342.6},0).wait(1).to({x:334.9,y:342.9},0).wait(1).to({x:335.2,y:343.2},0).wait(1).to({x:335.5,y:343.5},0).wait(1).to({x:335.8,y:343.8},0).wait(1).to({x:336.1,y:344.1},0).wait(1).to({x:336.4,y:344.4},0).wait(1).to({x:336.7,y:344.6},0).wait(1).to({x:337,y:344.9},0).wait(1).to({x:337.3,y:345.2},0).wait(1).to({x:337.6,y:345.5},0).wait(1).to({x:337.9,y:345.8},0).wait(1).to({x:338.2,y:346.1},0).wait(1).to({x:338.4,y:346.4},0).wait(1).to({x:338.7,y:346.7},0).wait(1).to({x:339,y:347},0).wait(1).to({x:339.3,y:347.3},0).wait(1).to({x:339.6,y:347.6},0).wait(1).to({x:339.9,y:347.9},0).wait(1).to({x:339.7,y:347.6},0).wait(1).to({x:339.4,y:347.4},0).wait(1).to({x:339.2,y:347.2},0).wait(1).to({x:339,y:346.9},0).wait(1).to({x:338.8,y:346.7},0).wait(1).to({x:338.5,y:346.5},0).wait(1).to({x:338.3,y:346.3},0).wait(1).to({x:338.1,y:346},0).wait(1).to({x:337.9,y:345.8},0).wait(1).to({x:337.6,y:345.6},0).wait(1).to({x:337.4,y:345.4},0).wait(1).to({x:337.2,y:345.1},0).wait(1).to({x:337,y:344.9},0).wait(1).to({x:336.7,y:344.7},0).wait(1).to({x:336.5,y:344.5},0).wait(1).to({x:336.3,y:344.2},0).wait(1).to({x:336.1,y:344},0).wait(1).to({x:335.8,y:343.8},0).wait(1).to({x:335.6,y:343.6},0).wait(1).to({x:335.4,y:343.3},0).wait(1).to({x:335.2,y:343.1},0).wait(1).to({x:334.9,y:342.9},0).wait(1).to({x:334.7,y:342.7},0).wait(1).to({x:334.5,y:342.4},0).wait(1).to({x:334.3,y:342.2},0).wait(1).to({x:334,y:342},0).wait(1).to({x:333.8,y:341.8},0).wait(1).to({x:333.6,y:341.5},0).wait(1).to({x:333.4,y:341.3},0).wait(1).to({x:333.1,y:341.1},0).wait(1).to({x:332.9,y:340.9},0).wait(1).to({regY:19.2,y:339.9},0).wait(1).to({regY:20.2,y:343.6},0).wait(1).to({y:346.4},0).wait(1).to({y:349.2},0).wait(1).to({y:352},0).wait(1).to({y:354.8},0).wait(1).to({y:357.6},0).wait(1).to({y:360.4},0).wait(1).to({y:363.2},0).wait(1).to({y:366},0).wait(1).to({y:368.7},0).wait(1).to({y:371.5},0).wait(1).to({y:374.3},0).wait(1).to({y:377.1},0).wait(1).to({y:379.9},0).wait(1).to({y:382.7},0).wait(1).to({y:385.5},0).wait(1).to({y:388.3},0).wait(1).to({y:391.1},0).wait(1).to({y:393.9},0).wait(1).to({y:396.6},0).wait(1).to({y:399.4},0).wait(1).to({y:402.2},0).wait(1).to({y:405},0).wait(1).to({y:407.8},0).wait(1).to({y:410.6},0).wait(1).to({y:413.4},0).wait(1).to({y:416.2},0).wait(1).to({y:419},0).wait(1).to({y:421.8},0).wait(1).to({y:424.5},0).wait(1).to({y:427.3},0).wait(1).to({y:430.1},0).wait(1).to({y:432.9},0).wait(1).to({y:435.7},0).wait(1).to({y:438.5},0).wait(1).to({y:441.3},0).wait(1).to({y:444.1},0).wait(1).to({y:446.9},0).wait(1).to({y:449.7},0).wait(1).to({y:452.4},0).wait(1).to({y:455.2},0).wait(1).to({y:458},0).wait(1).to({y:460.8},0).wait(1).to({y:463.6},0).wait(48).to({y:461.2},0).wait(1).to({y:458.7},0).wait(1).to({y:456.3},0).wait(1).to({y:453.8},0).wait(1).to({y:451.4},0).wait(1).to({y:448.9},0).wait(1).to({y:446.5},0).wait(1).to({y:444},0).wait(1).to({y:441.6},0).wait(1).to({y:439.1},0).wait(1).to({y:436.7},0).wait(1).to({y:434.2},0).wait(1).to({y:431.8},0).wait(1).to({y:429.3},0).wait(1).to({y:426.9},0).wait(1).to({y:424.4},0).wait(1).to({y:422},0).wait(1).to({y:419.5},0).wait(1).to({y:417.1},0).wait(1).to({y:414.6},0).wait(1).to({y:412.2},0).wait(1).to({y:409.7},0).wait(1).to({y:407.3},0).wait(1).to({y:404.8},0).wait(1).to({y:402.4},0).wait(1).to({y:399.9},0).wait(1).to({y:397.5},0).wait(1).to({y:395},0).wait(1).to({y:392.6},0).wait(1).to({y:390.1},0).wait(1).to({y:387.7},0).wait(1).to({y:385.2},0).wait(1).to({y:382.8},0).wait(1).to({y:380.3},0).wait(1).to({y:377.9},0).wait(1).to({y:375.4},0).wait(1).to({y:373},0).wait(1).to({y:370.5},0).wait(1).to({y:368.1},0).wait(1).to({y:365.6},0).wait(1).to({y:363.2},0).wait(1).to({y:360.7},0).wait(1).to({y:358.3},0).wait(1).to({y:355.8},0).wait(1).to({y:353.4},0).wait(1).to({y:350.9},0).wait(1).to({y:348.5},0).wait(1).to({y:346},0).wait(1).to({y:343.6},0).wait(1).to({y:341.1},0).wait(1).to({y:338.7},0).wait(1).to({y:336.2},0).wait(1).to({y:333.8},0).wait(1).to({y:331.3},0).wait(1).to({y:328.9},0).wait(1).to({y:326.5},0).wait(1).to({y:324},0).wait(1).to({y:324.5},0).wait(1).to({y:325},0).wait(1).to({y:325.5},0).wait(1).to({y:325.9},0).wait(1).to({y:326.4},0).wait(1).to({y:326.9},0).wait(1).to({y:327.4},0).wait(1).to({y:327.9},0).wait(1).to({y:328.4},0).wait(1).to({y:328.8},0).wait(1).to({y:329.3},0).wait(1).to({y:329.8},0).wait(1).to({y:330.3},0).wait(1).to({y:330.8},0).wait(1).to({y:331.3},0).wait(1).to({y:331.7},0).wait(1).to({y:332.2},0).wait(1).to({y:332.7},0).wait(1).to({y:333.2},0).wait(1).to({y:333.7},0).wait(1).to({y:334.2},0).wait(1).to({y:334.7},0).wait(1).to({y:335.1},0).wait(1).to({y:335.6},0).wait(1).to({y:336.1},0).wait(1).to({y:336.6},0).wait(1).to({y:337.1},0).wait(1).to({y:337.6},0).wait(1).to({y:338},0).wait(1).to({y:338.5},0).wait(1).to({y:339},0).wait(1).to({y:339.5},0).wait(1).to({y:340},0).wait(1).to({y:340.5},0).wait(1).to({y:341},0).wait(1).to({y:341.4},0).wait(1).to({y:341.9},0).wait(1).to({y:342.4},0).wait(1).to({y:342.9},0).wait(1).to({y:343.4},0).wait(1).to({y:343.9},0).wait(1).to({y:344.3},0).wait(1).to({y:344.8},0).wait(1).to({y:345.3},0).wait(1).to({y:345.8},0).wait(1).to({y:346.3},0).wait(1).to({y:346.8},0).wait(1).to({y:347.2},0).wait(1).to({y:347.7},0).wait(1).to({y:348.2},0).wait(1).to({y:348.7},0).wait(2).to({y:348.5},0).wait(1).to({y:348.4},0).wait(1).to({y:348.2},0).wait(1).to({y:348.1},0).wait(1).to({y:347.9},0).wait(1).to({y:347.8},0).wait(1).to({y:347.6},0).wait(1).to({y:347.5},0).wait(1).to({y:347.3},0).wait(1).to({y:347.2},0).wait(1).to({y:347},0).wait(1).to({y:346.9},0).wait(1).to({y:346.7},0).wait(1).to({y:346.5},0).wait(1).to({y:346.4},0).wait(1).to({y:346.2},0).wait(1).to({y:346.1},0).wait(1).to({y:345.9},0).wait(1).to({y:345.8},0).wait(1).to({y:345.6},0).wait(1).to({y:345.5},0).wait(1).to({y:345.3},0).wait(1).to({y:345.2},0).wait(1).to({y:345},0).wait(1).to({y:344.9},0).wait(1).to({y:344.7},0).wait(1).to({y:344.5},0).wait(1).to({y:344.4},0).wait(1).to({y:344.2},0).wait(1).to({y:344.1},0).wait(1).to({y:343.9},0).wait(1).to({y:343.8},0).wait(1).to({y:343.6},0).wait(1).to({y:343.5},0).wait(1).to({y:343.3},0).wait(1).to({y:343.2},0).wait(1).to({y:343},0).wait(1).to({y:342.8},0).wait(1).to({y:342.7},0).wait(1).to({y:342.5},0).wait(1).to({y:342.4},0).wait(1).to({y:342.2},0).wait(1).to({y:342.1},0).wait(1).to({y:341.9},0).wait(1).to({y:341.8},0).wait(1).to({y:341.6},0).wait(1).to({y:341.5},0).wait(1).to({y:341.3},0).wait(1).to({y:341.2},0).wait(1).to({y:341},0).wait(141).to({x:328.8},0).wait(1).to({x:324.8},0).wait(1).to({x:320.7},0).wait(1).to({x:316.7},0).wait(1).to({x:312.6},0).wait(27).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(918).to({_off:false},0).wait(72));

	// A3
	this.instance_20 = new lib.Aanimate();
	this.instance_20.parent = this;
	this.instance_20.setTransform(451.9,-107,1,1,0,0,0,16.4,19.2);
	this.instance_20._off = true;

	this.instance_21 = new lib.A();
	this.instance_21.parent = this;
	this.instance_21.setTransform(312.5,229.6,1,1,0,0,0,16.4,19.2);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(338).to({_off:false},0).wait(1).to({regX:16.5,regY:20.2,x:449.7,y:-102.7},0).wait(1).to({x:447.3,y:-99.4},0).wait(1).to({x:445,y:-96.1},0).wait(1).to({x:442.7,y:-92.8},0).wait(1).to({x:440.5,y:-89.4},0).wait(1).to({x:438.2,y:-86.1},0).wait(1).to({x:436,y:-82.7},0).wait(1).to({x:433.7,y:-79.3},0).wait(1).to({x:431.5,y:-76},0).wait(1).to({x:429.4,y:-72.6},0).wait(1).to({x:427.2,y:-69.2},0).wait(1).to({x:425,y:-65.7},0).wait(1).to({x:422.9,y:-62.3},0).wait(1).to({x:420.8,y:-58.9},0).wait(1).to({x:418.7,y:-55.4},0).wait(1).to({x:416.6,y:-52},0).wait(1).to({x:414.5,y:-48.5},0).wait(1).to({x:412.5,y:-45},0).wait(1).to({x:410.4,y:-41.5},0).wait(1).to({x:408.4,y:-38},0).wait(1).to({x:406.4,y:-34.5},0).wait(1).to({x:404.4,y:-31},0).wait(1).to({x:402.5,y:-27.5},0).wait(1).to({x:400.5,y:-24},0).wait(1).to({x:398.6,y:-20.4},0).wait(1).to({x:396.7,y:-16.9},0).wait(1).to({x:394.8,y:-13.3},0).wait(1).to({x:392.9,y:-9.7},0).wait(1).to({x:391,y:-6.1},0).wait(1).to({x:389.2,y:-2.5},0).wait(1).to({x:387.3,y:1.1},0).wait(1).to({x:385.5,y:4.7},0).wait(1).to({x:383.7,y:8.3},0).wait(1).to({x:381.9,y:11.9},0).wait(1).to({x:380.2,y:15.5},0).wait(1).to({x:378.4,y:19.2},0).wait(1).to({x:376.7,y:22.8},0).wait(1).to({x:375,y:26.4},0).wait(1).to({x:373.3,y:30.1},0).wait(1).to({x:371.6,y:33.8},0).wait(1).to({x:369.9,y:37.4},0).wait(1).to({x:368.3,y:41.1},0).wait(1).to({x:366.6,y:44.8},0).wait(1).to({x:365,y:48.5},0).wait(1).to({x:363.4,y:52.2},0).wait(1).to({x:361.8,y:55.9},0).wait(1).to({x:360.3,y:59.6},0).wait(1).to({x:358.7,y:63.4},0).wait(1).to({x:357.2,y:67.1},0).wait(1).to({x:355.6,y:70.8},0).wait(1).to({x:354.1,y:74.6},0).wait(1).to({x:352.6,y:78.3},0).wait(1).to({x:351.2,y:82.1},0).wait(1).to({x:349.7,y:85.9},0).wait(1).to({x:348.2,y:89.6},0).wait(1).to({x:346.8,y:93.4},0).wait(1).to({x:345.4,y:97.2},0).wait(1).to({x:344,y:101},0).wait(1).to({x:342.6,y:104.8},0).wait(1).to({x:341.2,y:108.6},0).wait(1).to({x:339.9,y:112.4},0).wait(1).to({x:338.5,y:116.2},0).wait(1).to({x:337.2,y:120},0).wait(1).to({x:335.9,y:123.8},0).wait(1).to({x:334.6,y:127.6},0).wait(1).to({x:333.3,y:131.5},0).wait(1).to({x:332,y:135.3},0).wait(1).to({x:330.8,y:139.1},0).wait(1).to({x:329.6,y:143},0).wait(1).to({x:328.3,y:146.8},0).wait(1).to({x:327.1,y:150.7},0).wait(1).to({x:325.9,y:154.5},0).wait(1).to({x:324.7,y:158.4},0).wait(1).to({x:323.6,y:162.3},0).wait(1).to({x:322.4,y:166.1},0).wait(1).to({x:321.3,y:170},0).wait(1).to({x:320.2,y:173.9},0).wait(1).to({x:319,y:177.8},0).wait(1).to({x:317.9,y:181.7},0).wait(1).to({x:316.9,y:185.5},0).wait(1).to({x:315.8,y:189.4},0).wait(1).to({x:314.7,y:193.3},0).wait(1).to({x:313.7,y:197.2},0).wait(1).to({x:312.7,y:201.1},0).wait(1).to({x:311.6,y:205},0).wait(1).to({x:310.6,y:209},0).wait(1).to({x:309.7,y:212.9},0).wait(1).to({x:308.7,y:216.8},0).wait(1).to({x:307.7,y:220.7},0).wait(1).to({x:306.8,y:224.6},0).wait(1).to({x:305.8,y:228.6},0).wait(1).to({x:304.9,y:232.5},0).wait(1).to({x:304,y:236.4},0).wait(1).to({x:303.1,y:240.4},0).wait(1).to({x:302.2,y:244.3},0).wait(1).to({x:301.3,y:248.2},0).wait(1).to({x:300.5,y:252.2},0).wait(1).to({x:299.6,y:256.1},0).wait(1).to({x:298.8,y:260.1},0).wait(1).to({x:298,y:264.1},0).wait(1).to({regX:16.4,regY:19.2,x:297.9,y:263.1},0).wait(1).to({regX:16.5,regY:20.2,x:298.2,y:264.3},0).wait(1).to({x:298.5,y:264.6},0).wait(1).to({x:298.8,y:264.9},0).wait(1).to({x:299.1,y:265.2},0).wait(1).to({x:299.4,y:265.5},0).wait(1).to({x:299.7,y:265.8},0).wait(1).to({x:300,y:266.1},0).wait(1).to({x:300.3,y:266.4},0).wait(1).to({x:300.6,y:266.7},0).wait(1).to({x:300.9,y:267},0).wait(1).to({x:301.2,y:267.3},0).wait(1).to({x:301.5,y:267.6},0).wait(1).to({x:301.7,y:267.8},0).wait(1).to({x:302,y:268.1},0).wait(1).to({x:302.3,y:268.4},0).wait(1).to({x:302.6,y:268.7},0).wait(1).to({x:302.9,y:269},0).wait(1).to({x:303.2,y:269.3},0).wait(1).to({x:303.5,y:269.6},0).wait(1).to({x:303.8,y:269.9},0).wait(1).to({x:304.1,y:270.2},0).wait(1).to({x:304.4,y:270.5},0).wait(1).to({x:304.7,y:270.8},0).wait(1).to({x:305,y:271.1},0).wait(1).to({x:304.7,y:270.8},0).wait(1).to({x:304.5,y:270.6},0).wait(1).to({x:304.3,y:270.4},0).wait(1).to({x:304,y:270.1},0).wait(1).to({x:303.8,y:269.9},0).wait(1).to({x:303.6,y:269.7},0).wait(1).to({x:303.4,y:269.5},0).wait(1).to({x:303.1,y:269.2},0).wait(1).to({x:302.9,y:269},0).wait(1).to({x:302.7,y:268.8},0).wait(1).to({x:302.5,y:268.6},0).wait(1).to({x:302.2,y:268.3},0).wait(1).to({x:302,y:268.1},0).wait(1).to({x:301.8,y:267.9},0).wait(1).to({x:301.6,y:267.7},0).wait(1).to({x:301.3,y:267.4},0).wait(1).to({x:301.1,y:267.2},0).wait(1).to({x:300.9,y:267},0).wait(1).to({x:300.7,y:266.8},0).wait(1).to({x:300.4,y:266.5},0).wait(1).to({x:300.2,y:266.3},0).wait(1).to({x:300,y:266.1},0).wait(1).to({x:299.8,y:265.9},0).wait(1).to({x:299.5,y:265.6},0).wait(1).to({x:299.3,y:265.4},0).wait(1).to({x:299.1,y:265.2},0).wait(1).to({x:298.9,y:265},0).wait(1).to({x:298.6,y:264.7},0).wait(1).to({x:298.4,y:264.5},0).wait(1).to({x:298.2,y:264.3},0).wait(1).to({x:298,y:264.1},0).wait(1).to({x:298.4,y:263},0).wait(1).to({x:298.9,y:261.9},0).wait(1).to({x:299.4,y:260.8},0).wait(1).to({x:299.8,y:259.7},0).wait(1).to({x:300.3,y:258.6},0).wait(1).to({x:300.8,y:257.6},0).wait(1).to({x:301.3,y:256.5},0).wait(1).to({x:301.7,y:255.4},0).wait(1).to({x:302.2,y:254.3},0).wait(1).to({x:302.7,y:253.2},0).wait(1).to({x:303.1,y:252.2},0).wait(1).to({x:303.6,y:251.1},0).wait(1).to({x:304.1,y:250},0).wait(1).to({x:304.6,y:248.9},0).wait(1).to({x:305,y:247.8},0).wait(1).to({x:305.5,y:246.8},0).wait(1).to({x:306,y:245.7},0).wait(1).to({x:306.5,y:244.6},0).wait(1).to({x:306.9,y:243.5},0).wait(1).to({x:307.4,y:242.4},0).wait(1).to({x:307.9,y:241.4},0).wait(1).to({x:308.3,y:240.3},0).wait(1).to({x:308.8,y:239.2},0).wait(1).to({x:309.3,y:238.1},0).wait(1).to({x:309.8,y:237},0).wait(1).to({x:310.2,y:236},0).wait(1).to({x:310.7,y:234.9},0).wait(1).to({x:311.2,y:233.8},0).wait(1).to({x:311.7,y:232.7},0).wait(1).to({x:312.1,y:231.6},0).wait(1).to({x:312.6,y:230.6},0).wait(408).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(934).to({_off:false},0).wait(1).to({regX:16.5,x:312.6},0).wait(55));

	// A2
	this.instance_22 = new lib.Aanimate();
	this.instance_22.parent = this;
	this.instance_22.setTransform(451.9,-68.6,1,1,0,0,0,16.4,19.2);
	this.instance_22._off = true;

	this.instance_23 = new lib.A();
	this.instance_23.parent = this;
	this.instance_23.setTransform(298.6,284.7,1,1,0,0,0,16.4,19.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(338).to({_off:false},0).wait(1).to({regX:16.5,regY:20.2,x:449.7,y:-64.3},0).wait(1).to({x:447.3,y:-61},0).wait(1).to({x:445,y:-57.7},0).wait(1).to({x:442.7,y:-54.4},0).wait(1).to({x:440.5,y:-51},0).wait(1).to({x:438.2,y:-47.7},0).wait(1).to({x:436,y:-44.3},0).wait(1).to({x:433.7,y:-40.9},0).wait(1).to({x:431.5,y:-37.6},0).wait(1).to({x:429.4,y:-34.2},0).wait(1).to({x:427.2,y:-30.8},0).wait(1).to({x:425,y:-27.3},0).wait(1).to({x:422.9,y:-23.9},0).wait(1).to({x:420.8,y:-20.5},0).wait(1).to({x:418.7,y:-17},0).wait(1).to({x:416.6,y:-13.6},0).wait(1).to({x:414.5,y:-10.1},0).wait(1).to({x:412.5,y:-6.6},0).wait(1).to({x:410.4,y:-3.1},0).wait(1).to({x:408.4,y:0.4},0).wait(1).to({x:406.4,y:3.9},0).wait(1).to({x:404.4,y:7.4},0).wait(1).to({x:402.5,y:10.9},0).wait(1).to({x:400.5,y:14.4},0).wait(1).to({x:398.6,y:18},0).wait(1).to({x:396.7,y:21.5},0).wait(1).to({x:394.8,y:25.1},0).wait(1).to({x:392.9,y:28.6},0).wait(1).to({x:391,y:32.2},0).wait(1).to({x:389.2,y:35.8},0).wait(1).to({x:387.3,y:39.4},0).wait(1).to({x:385.5,y:43},0).wait(1).to({x:383.7,y:46.6},0).wait(1).to({x:381.9,y:50.2},0).wait(1).to({x:380.2,y:53.9},0).wait(1).to({x:378.4,y:57.5},0).wait(1).to({x:376.7,y:61.2},0).wait(1).to({x:375,y:64.8},0).wait(1).to({x:373.3,y:68.5},0).wait(1).to({x:371.6,y:72.2},0).wait(1).to({x:369.9,y:75.8},0).wait(1).to({x:368.3,y:79.5},0).wait(1).to({x:366.6,y:83.2},0).wait(1).to({x:365,y:86.9},0).wait(1).to({x:363.4,y:90.6},0).wait(1).to({x:361.8,y:94.3},0).wait(1).to({x:360.3,y:98},0).wait(1).to({x:358.7,y:101.8},0).wait(1).to({x:357.2,y:105.5},0).wait(1).to({x:355.6,y:109.2},0).wait(1).to({x:354.1,y:113},0).wait(1).to({x:352.6,y:116.7},0).wait(1).to({x:351.2,y:120.5},0).wait(1).to({x:349.7,y:124.3},0).wait(1).to({x:348.2,y:128},0).wait(1).to({x:346.8,y:131.8},0).wait(1).to({x:345.4,y:135.6},0).wait(1).to({x:344,y:139.4},0).wait(1).to({x:342.6,y:143.2},0).wait(1).to({x:341.2,y:147},0).wait(1).to({x:339.9,y:150.8},0).wait(1).to({x:338.5,y:154.6},0).wait(1).to({x:337.2,y:158.4},0).wait(1).to({x:335.9,y:162.2},0).wait(1).to({x:334.6,y:166},0).wait(1).to({x:333.3,y:169.9},0).wait(1).to({x:332,y:173.7},0).wait(1).to({x:330.8,y:177.5},0).wait(1).to({x:329.6,y:181.4},0).wait(1).to({x:328.3,y:185.2},0).wait(1).to({x:327.1,y:189.1},0).wait(1).to({x:325.9,y:192.9},0).wait(1).to({x:324.7,y:196.8},0).wait(1).to({x:323.6,y:200.7},0).wait(1).to({x:322.4,y:204.5},0).wait(1).to({x:321.3,y:208.4},0).wait(1).to({x:320.2,y:212.3},0).wait(1).to({x:319,y:216.2},0).wait(1).to({x:317.9,y:220.1},0).wait(1).to({x:316.9,y:223.9},0).wait(1).to({x:315.8,y:227.8},0).wait(1).to({x:314.7,y:231.7},0).wait(1).to({x:313.7,y:235.6},0).wait(1).to({x:312.7,y:239.5},0).wait(1).to({x:311.6,y:243.4},0).wait(1).to({x:310.6,y:247.4},0).wait(1).to({x:309.7,y:251.3},0).wait(1).to({x:308.7,y:255.2},0).wait(1).to({x:307.7,y:259.1},0).wait(1).to({x:306.8,y:263},0).wait(1).to({x:305.8,y:267},0).wait(1).to({x:304.9,y:270.9},0).wait(1).to({x:304,y:274.8},0).wait(1).to({x:303.1,y:278.8},0).wait(1).to({x:302.2,y:282.7},0).wait(1).to({x:301.3,y:286.6},0).wait(1).to({x:300.5,y:290.6},0).wait(1).to({x:299.6,y:294.5},0).wait(1).to({x:298.8,y:298.5},0).wait(1).to({x:298,y:302.5},0).wait(1).to({regX:16.4,regY:19.2,x:297.9,y:301.5},0).wait(1).to({regX:16.5,regY:20.2,x:298.2,y:302.7},0).wait(1).to({x:298.5,y:303},0).wait(1).to({x:298.8,y:303.3},0).wait(1).to({x:299.1,y:303.6},0).wait(1).to({x:299.4,y:303.9},0).wait(1).to({x:299.7,y:304.2},0).wait(1).to({x:300,y:304.5},0).wait(1).to({x:300.3,y:304.8},0).wait(1).to({x:300.6,y:305.1},0).wait(1).to({x:300.9,y:305.4},0).wait(1).to({x:301.2,y:305.7},0).wait(1).to({x:301.5,y:306},0).wait(1).to({x:301.7,y:306.2},0).wait(1).to({x:302,y:306.5},0).wait(1).to({x:302.3,y:306.8},0).wait(1).to({x:302.6,y:307.1},0).wait(1).to({x:302.9,y:307.4},0).wait(1).to({x:303.2,y:307.7},0).wait(1).to({x:303.5,y:308},0).wait(1).to({x:303.8,y:308.3},0).wait(1).to({x:304.1,y:308.6},0).wait(1).to({x:304.4,y:308.9},0).wait(1).to({x:304.7,y:309.2},0).wait(1).to({x:305,y:309.5},0).wait(1).to({x:304.7,y:309.2},0).wait(1).to({x:304.5,y:309},0).wait(1).to({x:304.3,y:308.8},0).wait(1).to({x:304,y:308.5},0).wait(1).to({x:303.8,y:308.3},0).wait(1).to({x:303.6,y:308.1},0).wait(1).to({x:303.4,y:307.9},0).wait(1).to({x:303.1,y:307.6},0).wait(1).to({x:302.9,y:307.4},0).wait(1).to({x:302.7,y:307.2},0).wait(1).to({x:302.5,y:307},0).wait(1).to({x:302.2,y:306.7},0).wait(1).to({x:302,y:306.5},0).wait(1).to({x:301.8,y:306.3},0).wait(1).to({x:301.6,y:306.1},0).wait(1).to({x:301.3,y:305.8},0).wait(1).to({x:301.1,y:305.6},0).wait(1).to({x:300.9,y:305.4},0).wait(1).to({x:300.7,y:305.2},0).wait(1).to({x:300.4,y:304.9},0).wait(1).to({x:300.2,y:304.7},0).wait(1).to({x:300,y:304.5},0).wait(1).to({x:299.8,y:304.3},0).wait(1).to({x:299.5,y:304},0).wait(1).to({x:299.3,y:303.8},0).wait(1).to({x:299.1,y:303.6},0).wait(1).to({x:298.9,y:303.4},0).wait(1).to({x:298.6,y:303.1},0).wait(1).to({x:298.4,y:302.9},0).wait(1).to({x:298.2,y:302.7},0).wait(1).to({x:298,y:302.5},0).wait(1).to({regX:16.4,regY:19.2,x:297.9,y:301.5},0).wait(1).to({regX:16.5,regY:20.2,x:298,y:305.2},0).wait(1).to({y:307.9},0).wait(1).to({y:310.6},0).wait(1).to({y:313.3},0).wait(1).to({y:316},0).wait(1).to({y:318.7},0).wait(1).to({y:321.4},0).wait(1).to({y:324.1},0).wait(1).to({y:326.8},0).wait(1).to({y:329.5},0).wait(1).to({y:332.2},0).wait(1).to({y:334.9},0).wait(1).to({y:337.6},0).wait(1).to({y:340.3},0).wait(1).to({y:343},0).wait(1).to({y:345.7},0).wait(1).to({y:348.4},0).wait(1).to({y:351.1},0).wait(1).to({y:353.8},0).wait(1).to({y:356.5},0).wait(1).to({y:359.2},0).wait(1).to({y:361.9},0).wait(1).to({y:364.6},0).wait(1).to({y:367.3},0).wait(1).to({y:370},0).wait(1).to({y:372.7},0).wait(1).to({y:375.4},0).wait(1).to({y:378.1},0).wait(1).to({y:380.8},0).wait(1).to({y:383.6},0).wait(1).to({y:386.3},0).wait(1).to({y:389},0).wait(1).to({y:391.7},0).wait(1).to({y:394.4},0).wait(1).to({y:397.1},0).wait(1).to({y:399.8},0).wait(1).to({y:402.5},0).wait(1).to({y:405.2},0).wait(1).to({y:407.9},0).wait(1).to({y:410.6},0).wait(1).to({y:413.3},0).wait(1).to({y:416},0).wait(1).to({y:418.7},0).wait(1).to({y:421.4},0).wait(1).to({y:424.1},0).wait(47).to({y:421.7},0).wait(1).to({y:419.2},0).wait(1).to({y:416.8},0).wait(1).to({y:414.4},0).wait(1).to({y:412},0).wait(1).to({y:409.5},0).wait(1).to({y:407.1},0).wait(1).to({y:404.7},0).wait(1).to({x:298.1,y:402.2},0).wait(1).to({y:399.8},0).wait(1).to({y:397.4},0).wait(1).to({y:395},0).wait(1).to({y:392.5},0).wait(1).to({y:390.1},0).wait(1).to({y:387.7},0).wait(1).to({y:385.3},0).wait(1).to({x:298.2,y:382.8},0).wait(1).to({y:380.4},0).wait(1).to({y:378},0).wait(1).to({y:375.5},0).wait(1).to({y:373.1},0).wait(1).to({y:370.7},0).wait(1).to({y:368.3},0).wait(1).to({y:365.8},0).wait(1).to({x:298.3,y:363.4},0).wait(1).to({y:361},0).wait(1).to({y:358.5},0).wait(1).to({y:356.1},0).wait(1).to({y:353.7},0).wait(1).to({y:351.3},0).wait(1).to({y:348.8},0).wait(1).to({y:346.4},0).wait(1).to({x:298.4,y:344},0).wait(1).to({y:341.5},0).wait(1).to({y:339.1},0).wait(1).to({y:336.7},0).wait(1).to({y:334.3},0).wait(1).to({y:331.8},0).wait(1).to({y:329.4},0).wait(1).to({y:327},0).wait(1).to({x:298.5,y:324.5},0).wait(1).to({y:322.1},0).wait(1).to({y:319.7},0).wait(1).to({y:317.3},0).wait(1).to({y:314.8},0).wait(1).to({y:312.4},0).wait(1).to({y:310},0).wait(1).to({y:307.6},0).wait(1).to({x:298.6,y:305.1},0).wait(1).to({y:302.7},0).wait(1).to({y:300.3},0).wait(1).to({y:297.8},0).wait(1).to({y:295.4},0).wait(1).to({y:293},0).wait(1).to({y:290.6},0).wait(1).to({y:288.1},0).wait(1).to({x:298.7,y:285.7},0).wait(282).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(926).to({_off:false},0).wait(1).to({regX:16.5,x:298.7},0).wait(63));

	// A1
	this.instance_24 = new lib.Aanimate();
	this.instance_24.parent = this;
	this.instance_24.setTransform(451.9,-30.2,1,1,0,0,0,16.4,19.2);
	this.instance_24._off = true;

	this.instance_25 = new lib.A();
	this.instance_25.parent = this;
	this.instance_25.setTransform(277.6,340,1,1,0,0,0,16.4,19.2);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(338).to({_off:false},0).wait(1).to({regX:16.5,regY:20.2,x:449.7,y:-25.9},0).wait(1).to({x:447.3,y:-22.6},0).wait(1).to({x:445,y:-19.3},0).wait(1).to({x:442.7,y:-16},0).wait(1).to({x:440.5,y:-12.6},0).wait(1).to({x:438.2,y:-9.3},0).wait(1).to({x:436,y:-5.9},0).wait(1).to({x:433.7,y:-2.5},0).wait(1).to({x:431.5,y:0.8},0).wait(1).to({x:429.4,y:4.2},0).wait(1).to({x:427.2,y:7.6},0).wait(1).to({x:425,y:11.1},0).wait(1).to({x:422.9,y:14.5},0).wait(1).to({x:420.8,y:17.9},0).wait(1).to({x:418.7,y:21.3},0).wait(1).to({x:416.6,y:24.8},0).wait(1).to({x:414.5,y:28.2},0).wait(1).to({x:412.5,y:31.7},0).wait(1).to({x:410.4,y:35.2},0).wait(1).to({x:408.4,y:38.7},0).wait(1).to({x:406.4,y:42.2},0).wait(1).to({x:404.4,y:45.7},0).wait(1).to({x:402.5,y:49.3},0).wait(1).to({x:400.5,y:52.8},0).wait(1).to({x:398.6,y:56.3},0).wait(1).to({x:396.7,y:59.9},0).wait(1).to({x:394.8,y:63.5},0).wait(1).to({x:392.9,y:67},0).wait(1).to({x:391,y:70.6},0).wait(1).to({x:389.2,y:74.2},0).wait(1).to({x:387.3,y:77.8},0).wait(1).to({x:385.5,y:81.4},0).wait(1).to({x:383.7,y:85},0).wait(1).to({x:381.9,y:88.6},0).wait(1).to({x:380.2,y:92.3},0).wait(1).to({x:378.4,y:95.9},0).wait(1).to({x:376.7,y:99.6},0).wait(1).to({x:375,y:103.2},0).wait(1).to({x:373.3,y:106.9},0).wait(1).to({x:371.6,y:110.6},0).wait(1).to({x:369.9,y:114.2},0).wait(1).to({x:368.3,y:117.9},0).wait(1).to({x:366.6,y:121.6},0).wait(1).to({x:365,y:125.3},0).wait(1).to({x:363.4,y:129},0).wait(1).to({x:361.8,y:132.7},0).wait(1).to({x:360.3,y:136.4},0).wait(1).to({x:358.7,y:140.2},0).wait(1).to({x:357.2,y:143.9},0).wait(1).to({x:355.6,y:147.6},0).wait(1).to({x:354.1,y:151.4},0).wait(1).to({x:352.6,y:155.1},0).wait(1).to({x:351.2,y:158.9},0).wait(1).to({x:349.7,y:162.7},0).wait(1).to({x:348.2,y:166.4},0).wait(1).to({x:346.8,y:170.2},0).wait(1).to({x:345.4,y:174},0).wait(1).to({x:344,y:177.8},0).wait(1).to({x:342.6,y:181.6},0).wait(1).to({x:341.2,y:185.4},0).wait(1).to({x:339.9,y:189.2},0).wait(1).to({x:338.5,y:193},0).wait(1).to({x:337.2,y:196.8},0).wait(1).to({x:335.9,y:200.6},0).wait(1).to({x:334.6,y:204.4},0).wait(1).to({x:333.3,y:208.3},0).wait(1).to({x:332,y:212.1},0).wait(1).to({x:330.8,y:215.9},0).wait(1).to({x:329.6,y:219.8},0).wait(1).to({x:328.3,y:223.6},0).wait(1).to({x:327.1,y:227.5},0).wait(1).to({x:325.9,y:231.3},0).wait(1).to({x:324.7,y:235.2},0).wait(1).to({x:323.6,y:239.1},0).wait(1).to({x:322.4,y:242.9},0).wait(1).to({x:321.3,y:246.8},0).wait(1).to({x:320.2,y:250.7},0).wait(1).to({x:319,y:254.6},0).wait(1).to({x:317.9,y:258.5},0).wait(1).to({x:316.9,y:262.3},0).wait(1).to({x:315.8,y:266.2},0).wait(1).to({x:314.7,y:270.1},0).wait(1).to({x:313.7,y:274},0).wait(1).to({x:312.7,y:277.9},0).wait(1).to({x:311.6,y:281.8},0).wait(1).to({x:310.6,y:285.8},0).wait(1).to({x:309.7,y:289.7},0).wait(1).to({x:308.7,y:293.6},0).wait(1).to({x:307.7,y:297.5},0).wait(1).to({x:306.8,y:301.4},0).wait(1).to({x:305.8,y:305.4},0).wait(1).to({x:304.9,y:309.3},0).wait(1).to({x:304,y:313.2},0).wait(1).to({x:303.1,y:317.2},0).wait(1).to({x:302.2,y:321.1},0).wait(1).to({x:301.3,y:325},0).wait(1).to({x:300.5,y:329},0).wait(1).to({x:299.6,y:332.9},0).wait(1).to({x:298.8,y:336.9},0).wait(1).to({x:298,y:340.9},0).wait(1).to({regX:16.4,regY:19.2,x:297.9,y:339.9},0).wait(1).to({regX:16.5,regY:20.2,x:298.2,y:341.1},0).wait(1).to({x:298.5,y:341.4},0).wait(1).to({x:298.8,y:341.7},0).wait(1).to({x:299.1,y:342},0).wait(1).to({x:299.4,y:342.3},0).wait(1).to({x:299.7,y:342.6},0).wait(1).to({x:300,y:342.9},0).wait(1).to({x:300.3,y:343.2},0).wait(1).to({x:300.6,y:343.5},0).wait(1).to({x:300.9,y:343.8},0).wait(1).to({x:301.2,y:344.1},0).wait(1).to({x:301.5,y:344.4},0).wait(1).to({x:301.7,y:344.6},0).wait(1).to({x:302,y:344.9},0).wait(1).to({x:302.3,y:345.2},0).wait(1).to({x:302.6,y:345.5},0).wait(1).to({x:302.9,y:345.8},0).wait(1).to({x:303.2,y:346.1},0).wait(1).to({x:303.5,y:346.4},0).wait(1).to({x:303.8,y:346.7},0).wait(1).to({x:304.1,y:347},0).wait(1).to({x:304.4,y:347.3},0).wait(1).to({x:304.7,y:347.6},0).wait(1).to({x:305,y:347.9},0).wait(1).to({x:304.7,y:347.6},0).wait(1).to({x:304.5,y:347.4},0).wait(1).to({x:304.3,y:347.2},0).wait(1).to({x:304,y:346.9},0).wait(1).to({x:303.8,y:346.7},0).wait(1).to({x:303.6,y:346.5},0).wait(1).to({x:303.4,y:346.3},0).wait(1).to({x:303.1,y:346},0).wait(1).to({x:302.9,y:345.8},0).wait(1).to({x:302.7,y:345.6},0).wait(1).to({x:302.5,y:345.4},0).wait(1).to({x:302.2,y:345.1},0).wait(1).to({x:302,y:344.9},0).wait(1).to({x:301.8,y:344.7},0).wait(1).to({x:301.6,y:344.5},0).wait(1).to({x:301.3,y:344.2},0).wait(1).to({x:301.1,y:344},0).wait(1).to({x:300.9,y:343.8},0).wait(1).to({x:300.7,y:343.6},0).wait(1).to({x:300.4,y:343.3},0).wait(1).to({x:300.2,y:343.1},0).wait(1).to({x:300,y:342.9},0).wait(1).to({x:299.8,y:342.7},0).wait(1).to({x:299.5,y:342.4},0).wait(1).to({x:299.3,y:342.2},0).wait(1).to({x:299.1,y:342},0).wait(1).to({x:298.9,y:341.8},0).wait(1).to({x:298.6,y:341.5},0).wait(1).to({x:298.4,y:341.3},0).wait(1).to({x:298.2,y:341.1},0).wait(1).to({x:298,y:340.9},0).wait(1).to({regX:16.4,regY:19.2,x:297.9,y:339.9},0).wait(1).to({regX:16.5,regY:20.2,x:298,y:343.6},0).wait(1).to({y:346.4},0).wait(1).to({y:349.1},0).wait(1).to({y:351.9},0).wait(1).to({y:354.7},0).wait(1).to({y:357.4},0).wait(1).to({y:360.2},0).wait(1).to({y:363},0).wait(1).to({y:365.7},0).wait(1).to({y:368.5},0).wait(1).to({y:371.3},0).wait(1).to({y:374},0).wait(1).to({y:376.8},0).wait(1).to({y:379.6},0).wait(1).to({y:382.3},0).wait(1).to({y:385.1},0).wait(1).to({y:387.9},0).wait(1).to({y:390.6},0).wait(1).to({y:393.4},0).wait(1).to({y:396.1},0).wait(1).to({y:398.9},0).wait(1).to({y:401.7},0).wait(1).to({y:404.4},0).wait(1).to({y:407.2},0).wait(1).to({y:410},0).wait(1).to({y:412.7},0).wait(1).to({y:415.5},0).wait(1).to({y:418.3},0).wait(1).to({y:421},0).wait(1).to({y:423.8},0).wait(1).to({y:426.6},0).wait(1).to({y:429.3},0).wait(1).to({y:432.1},0).wait(1).to({y:434.9},0).wait(1).to({y:437.6},0).wait(1).to({y:440.4},0).wait(1).to({y:443.1},0).wait(1).to({y:445.9},0).wait(1).to({y:448.7},0).wait(1).to({y:451.4},0).wait(1).to({y:454.2},0).wait(1).to({y:457},0).wait(1).to({y:459.7},0).wait(1).to({y:462.5},0).wait(48).to({y:460.1},0).wait(1).to({y:457.6},0).wait(1).to({y:455.2},0).wait(1).to({y:452.8},0).wait(1).to({y:450.4},0).wait(1).to({y:447.9},0).wait(1).to({y:445.5},0).wait(1).to({y:443.1},0).wait(1).to({x:298.1,y:440.6},0).wait(1).to({y:438.2},0).wait(1).to({y:435.8},0).wait(1).to({y:433.3},0).wait(1).to({y:430.9},0).wait(1).to({y:428.5},0).wait(1).to({y:426.1},0).wait(1).to({y:423.6},0).wait(1).to({x:298.2,y:421.2},0).wait(1).to({y:418.8},0).wait(1).to({y:416.3},0).wait(1).to({y:413.9},0).wait(1).to({y:411.5},0).wait(1).to({y:409},0).wait(1).to({y:406.6},0).wait(1).to({y:404.2},0).wait(1).to({x:298.3,y:401.8},0).wait(1).to({y:399.3},0).wait(1).to({y:396.9},0).wait(1).to({y:394.5},0).wait(1).to({y:392},0).wait(1).to({y:389.6},0).wait(1).to({y:387.2},0).wait(1).to({y:384.7},0).wait(1).to({x:298.4,y:382.3},0).wait(1).to({y:379.9},0).wait(1).to({y:377.5},0).wait(1).to({y:375},0).wait(1).to({y:372.6},0).wait(1).to({y:370.2},0).wait(1).to({y:367.7},0).wait(1).to({y:365.3},0).wait(1).to({x:298.5,y:362.9},0).wait(1).to({y:360.4},0).wait(1).to({y:358},0).wait(1).to({y:355.6},0).wait(1).to({y:353.2},0).wait(1).to({y:350.7},0).wait(1).to({y:348.3},0).wait(1).to({y:345.9},0).wait(1).to({x:298.6,y:343.4},0).wait(1).to({y:341},0).wait(1).to({y:338.6},0).wait(1).to({y:336.1},0).wait(1).to({y:333.7},0).wait(1).to({y:331.3},0).wait(1).to({y:328.9},0).wait(1).to({y:326.4},0).wait(1).to({x:298.7,y:324},0).wait(1).to({y:324.5},0).wait(1).to({y:325},0).wait(1).to({y:325.5},0).wait(1).to({y:325.9},0).wait(1).to({y:326.4},0).wait(1).to({y:326.9},0).wait(1).to({y:327.4},0).wait(1).to({y:327.9},0).wait(1).to({y:328.4},0).wait(1).to({y:328.8},0).wait(1).to({y:329.3},0).wait(1).to({y:329.8},0).wait(1).to({y:330.3},0).wait(1).to({y:330.8},0).wait(1).to({y:331.3},0).wait(1).to({y:331.7},0).wait(1).to({y:332.2},0).wait(1).to({y:332.7},0).wait(1).to({y:333.2},0).wait(1).to({y:333.7},0).wait(1).to({y:334.2},0).wait(1).to({y:334.7},0).wait(1).to({y:335.1},0).wait(1).to({y:335.6},0).wait(1).to({y:336.1},0).wait(1).to({y:336.6},0).wait(1).to({y:337.1},0).wait(1).to({y:337.6},0).wait(1).to({y:338},0).wait(1).to({y:338.5},0).wait(1).to({y:339},0).wait(1).to({y:339.5},0).wait(1).to({y:340},0).wait(1).to({y:340.5},0).wait(1).to({y:341},0).wait(1).to({y:341.4},0).wait(1).to({y:341.9},0).wait(1).to({y:342.4},0).wait(1).to({y:342.9},0).wait(1).to({y:343.4},0).wait(1).to({y:343.9},0).wait(1).to({y:344.3},0).wait(1).to({y:344.8},0).wait(1).to({y:345.3},0).wait(1).to({y:345.8},0).wait(1).to({y:346.3},0).wait(1).to({y:346.8},0).wait(1).to({y:347.2},0).wait(1).to({y:347.7},0).wait(1).to({y:348.2},0).wait(1).to({y:348.7},0).wait(2).to({y:348.5},0).wait(1).to({y:348.4},0).wait(1).to({y:348.2},0).wait(1).to({y:348.1},0).wait(1).to({y:347.9},0).wait(1).to({y:347.8},0).wait(1).to({y:347.6},0).wait(1).to({y:347.5},0).wait(1).to({y:347.3},0).wait(1).to({y:347.2},0).wait(1).to({y:347},0).wait(1).to({y:346.9},0).wait(1).to({y:346.7},0).wait(1).to({y:346.5},0).wait(1).to({y:346.4},0).wait(1).to({y:346.2},0).wait(1).to({y:346.1},0).wait(1).to({y:345.9},0).wait(1).to({y:345.8},0).wait(1).to({y:345.6},0).wait(1).to({y:345.5},0).wait(1).to({y:345.3},0).wait(1).to({y:345.2},0).wait(1).to({y:345},0).wait(1).to({y:344.9},0).wait(1).to({y:344.7},0).wait(1).to({y:344.5},0).wait(1).to({y:344.4},0).wait(1).to({y:344.2},0).wait(1).to({y:344.1},0).wait(1).to({y:343.9},0).wait(1).to({y:343.8},0).wait(1).to({y:343.6},0).wait(1).to({y:343.5},0).wait(1).to({y:343.3},0).wait(1).to({y:343.2},0).wait(1).to({y:343},0).wait(1).to({y:342.8},0).wait(1).to({y:342.7},0).wait(1).to({y:342.5},0).wait(1).to({y:342.4},0).wait(1).to({y:342.2},0).wait(1).to({y:342.1},0).wait(1).to({y:341.9},0).wait(1).to({y:341.8},0).wait(1).to({y:341.6},0).wait(1).to({y:341.5},0).wait(1).to({y:341.3},0).wait(1).to({y:341.2},0).wait(1).to({y:341},0).wait(141).to({x:294.5},0).wait(1).to({x:290.3},0).wait(1).to({x:286.1},0).wait(1).to({x:281.9},0).wait(1).to({x:277.7},0).wait(35).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(926).to({_off:false},0).wait(1).to({regX:16.5,x:277.7},0).wait(63));

	// T
	this.instance_26 = new lib.Tanimate();
	this.instance_26.parent = this;
	this.instance_26.setTransform(377.7,-140.5,1,1,0,0,0,12.1,19.2);
	this.instance_26._off = true;

	this.instance_27 = new lib.T();
	this.instance_27.parent = this;
	this.instance_27.setTransform(282.6,229.6,1,1,0,0,0,12.1,19.2);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(374).to({_off:false},0).wait(1).to({regY:18.2,x:375.9,y:-132.1},0).wait(1).to({x:374.2,y:-122.7},0).wait(1).to({x:372.5,y:-113.2},0).wait(1).to({x:370.8,y:-103.8},0).wait(1).to({x:369,y:-94.4},0).wait(1).to({x:367.2,y:-85},0).wait(1).to({x:365.4,y:-75.5},0).wait(1).to({x:363.6,y:-66.1},0).wait(1).to({x:361.8,y:-56.7},0).wait(1).to({x:359.9,y:-47.3},0).wait(1).to({x:358.1,y:-37.9},0).wait(1).to({x:356.2,y:-28.5},0).wait(1).to({x:354.3,y:-19.1},0).wait(1).to({x:352.4,y:-9.7},0).wait(1).to({x:350.4,y:-0.4},0).wait(1).to({x:348.4,y:9},0).wait(1).to({x:346.4,y:18.3},0).wait(1).to({x:344.4,y:27.7},0).wait(1).to({x:342.3,y:37.1},0).wait(1).to({x:340.2,y:46.4},0).wait(1).to({x:338.1,y:55.8},0).wait(1).to({x:336,y:65.1},0).wait(1).to({x:333.8,y:74.4},0).wait(1).to({x:331.5,y:83.7},0).wait(1).to({x:329.2,y:93.1},0).wait(1).to({x:326.9,y:102.3},0).wait(1).to({x:324.5,y:111.6},0).wait(1).to({x:322,y:120.9},0).wait(1).to({x:319.5,y:130.1},0).wait(1).to({x:316.9,y:139.4},0).wait(1).to({x:314.3,y:148.6},0).wait(1).to({x:311.5,y:157.7},0).wait(1).to({x:308.6,y:166.9},0).wait(1).to({x:305.6,y:176},0).wait(1).to({x:302.4,y:185},0).wait(1).to({x:299.1,y:194},0).wait(1).to({x:295.5,y:202.9},0).wait(1).to({x:291.7,y:211.7},0).wait(1).to({x:287.4,y:220.3},0).wait(1).to({x:282.6,y:228.6},0).wait(509).to({_off:true},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(924).to({_off:false},0).wait(66));

	// S
	this.instance_28 = new lib.Sanimate();
	this.instance_28.parent = this;
	this.instance_28.setTransform(350.7,-140.5,1,1,0,0,0,11.1,19.8);
	this.instance_28._off = true;

	this.instance_29 = new lib.S();
	this.instance_29.parent = this;
	this.instance_29.setTransform(255.6,229.6,1,1,0,0,0,11.1,19.8);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(374).to({_off:false},0).wait(1).to({regY:18.8,x:350.2,y:-131.3},0).wait(1).to({x:349.7,y:-121.2},0).wait(1).to({x:349.1,y:-111.1},0).wait(1).to({x:348.6,y:-101},0).wait(1).to({x:348,y:-90.9},0).wait(1).to({x:347.3,y:-80.7},0).wait(1).to({x:346.7,y:-70.6},0).wait(1).to({x:346,y:-60.5},0).wait(1).to({x:345.2,y:-50.4},0).wait(1).to({x:344.4,y:-40.3},0).wait(1).to({x:343.6,y:-30.2},0).wait(1).to({x:342.8,y:-20.1},0).wait(1).to({x:341.9,y:-10},0).wait(1).to({x:340.9,y:0.1},0).wait(1).to({x:339.9,y:10.2},0).wait(1).to({x:338.9,y:20.2},0).wait(1).to({x:337.7,y:30.3},0).wait(1).to({x:336.6,y:40.3},0).wait(1).to({x:335.3,y:50.4},0).wait(1).to({x:334,y:60.4},0).wait(1).to({x:332.6,y:70.5},0).wait(1).to({x:331.1,y:80.5},0).wait(1).to({x:329.6,y:90.5},0).wait(1).to({x:327.9,y:100.5},0).wait(1).to({x:326.1,y:110.5},0).wait(1).to({x:324.2,y:120.4},0).wait(1).to({x:322.1,y:130.4},0).wait(1).to({x:319.9,y:140.3},0).wait(1).to({x:317.5,y:150.1},0).wait(1).to({x:314.8,y:159.9},0).wait(1).to({x:311.9,y:169.6},0).wait(1).to({x:308.7,y:179.2},0).wait(1).to({x:305.1,y:188.7},0).wait(1).to({x:301,y:197.9},0).wait(1).to({x:296.3,y:206.9},0).wait(1).to({x:290.6,y:215.3},0).wait(1).to({x:283.8,y:222.8},0).wait(1).to({x:275.4,y:228.3},0).wait(1).to({x:265.5,y:230.5},0).wait(1).to({x:255.6,y:228.6},0).wait(501).to({_off:true},1).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(916).to({_off:false},0).wait(74));

	// N-animate
	this.instance_30 = new lib.Nstrokeanimate();
	this.instance_30.parent = this;
	this.instance_30.setTransform(224.1,598.2,1,1,0,0,0,13.8,19.2);
	this.instance_30._off = true;

	this.instance_31 = new lib.Nstroke();
	this.instance_31.parent = this;
	this.instance_31.setTransform(224.1,229.6,1,1,0,0,0,13.8,19.2);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(428).to({_off:false},0).wait(1).to({regX:10.6,regY:20.2,x:220.9,y:591.7},0).wait(1).to({y:584.2},0).wait(1).to({y:576.6},0).wait(1).to({y:569.1},0).wait(1).to({y:561.6},0).wait(1).to({y:554.1},0).wait(1).to({y:546.5},0).wait(1).to({y:539},0).wait(1).to({y:531.5},0).wait(1).to({y:524},0).wait(1).to({y:516.4},0).wait(1).to({y:508.9},0).wait(1).to({y:501.4},0).wait(1).to({y:493.9},0).wait(1).to({y:486.3},0).wait(1).to({y:478.8},0).wait(1).to({y:471.3},0).wait(1).to({y:463.8},0).wait(1).to({y:456.3},0).wait(1).to({y:448.7},0).wait(1).to({y:441.2},0).wait(1).to({y:433.7},0).wait(1).to({y:426.2},0).wait(1).to({y:418.6},0).wait(1).to({y:411.1},0).wait(1).to({y:403.6},0).wait(1).to({y:396.1},0).wait(1).to({y:388.6},0).wait(1).to({y:381},0).wait(1).to({y:373.5},0).wait(1).to({y:366},0).wait(1).to({y:358.5},0).wait(1).to({y:350.9},0).wait(1).to({y:343.4},0).wait(1).to({y:335.9},0).wait(1).to({y:328.4},0).wait(1).to({y:320.8},0).wait(1).to({y:313.3},0).wait(1).to({y:305.8},0).wait(1).to({y:298.3},0).wait(1).to({y:290.7},0).wait(1).to({y:283.2},0).wait(1).to({y:275.7},0).wait(1).to({y:268.2},0).wait(1).to({y:260.6},0).wait(1).to({y:253.1},0).wait(1).to({y:245.6},0).wait(1).to({y:238.1},0).wait(1).to({y:230.6},0).wait(470).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(948).to({_off:false},0).wait(1).to({regX:10.6,x:220.9},0).wait(41));

	// O
	this.instance_32 = new lib.Oanimate();
	this.instance_32.parent = this;
	this.instance_32.setTransform(188.5,597.7,1,1,0,0,0,15.3,19.8);
	this.instance_32._off = true;

	this.instance_33 = new lib.O();
	this.instance_33.parent = this;
	this.instance_33.setTransform(188.5,229.6,1,1,0,0,0,15.3,19.8);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(457).to({_off:false},0).wait(1).to({regY:20.8,y:590.5},0).wait(1).to({y:582.3},0).wait(1).to({y:574.2},0).wait(1).to({y:566},0).wait(1).to({y:557.8},0).wait(1).to({y:549.6},0).wait(1).to({y:541.4},0).wait(1).to({y:533.3},0).wait(1).to({y:525.1},0).wait(1).to({y:516.9},0).wait(1).to({y:508.7},0).wait(1).to({y:500.5},0).wait(1).to({y:492.4},0).wait(1).to({y:484.2},0).wait(1).to({y:476},0).wait(1).to({y:467.8},0).wait(1).to({y:459.6},0).wait(1).to({y:451.5},0).wait(1).to({y:443.3},0).wait(1).to({y:435.1},0).wait(1).to({y:426.9},0).wait(1).to({y:418.7},0).wait(1).to({y:410.6},0).wait(1).to({y:402.4},0).wait(1).to({y:394.2},0).wait(1).to({y:386},0).wait(1).to({y:377.8},0).wait(1).to({y:369.7},0).wait(1).to({y:361.5},0).wait(1).to({y:353.3},0).wait(1).to({y:345.1},0).wait(1).to({y:336.9},0).wait(1).to({y:328.8},0).wait(1).to({y:320.6},0).wait(1).to({y:312.4},0).wait(1).to({y:304.2},0).wait(1).to({y:296},0).wait(1).to({y:287.9},0).wait(1).to({y:279.7},0).wait(1).to({y:271.5},0).wait(1).to({y:263.3},0).wait(1).to({y:255.1},0).wait(1).to({y:247},0).wait(1).to({y:247.3},0).wait(1).to({y:247.6},0).wait(1).to({y:247.9},0).wait(1).to({y:248.2},0).wait(1).to({y:248.6},0).wait(1).to({y:248.9},0).wait(1).to({y:249.2},0).wait(1).to({y:249.5},0).wait(1).to({y:249.8},0).wait(1).to({y:250.1},0).wait(1).to({y:250.5},0).wait(1).to({y:250.8},0).wait(1).to({y:251.1},0).wait(1).to({y:251.4},0).wait(1).to({y:251.7},0).wait(1).to({y:252.1},0).wait(1).to({y:252.4},0).wait(1).to({y:252.7},0).wait(1).to({y:253},0).wait(1).to({y:253.3},0).wait(1).to({y:252.9},0).wait(1).to({y:252.6},0).wait(1).to({y:252.2},0).wait(1).to({y:251.8},0).wait(1).to({y:251.4},0).wait(1).to({y:251},0).wait(1).to({y:250.7},0).wait(1).to({y:250.3},0).wait(1).to({y:249.9},0).wait(1).to({y:249.5},0).wait(1).to({y:249.1},0).wait(1).to({y:248.8},0).wait(1).to({y:248.4},0).wait(1).to({y:248},0).wait(1).to({y:247.6},0).wait(1).to({y:247.2},0).wait(1).to({y:246.8},0).wait(1).to({y:246.5},0).wait(1).to({y:246.1},0).wait(1).to({y:245.7},0).wait(1).to({y:245.1},0).wait(1).to({y:244.5},0).wait(1).to({y:244},0).wait(1).to({y:243.4},0).wait(1).to({y:242.8},0).wait(1).to({y:242.2},0).wait(1).to({y:241.6},0).wait(1).to({y:241.1},0).wait(1).to({y:240.5},0).wait(1).to({y:239.9},0).wait(1).to({y:239.3},0).wait(1).to({y:238.7},0).wait(1).to({y:238.2},0).wait(1).to({y:237.6},0).wait(1).to({y:237},0).wait(1).to({y:236.4},0).wait(1).to({y:235.8},0).wait(1).to({y:235.2},0).wait(1).to({y:234.7},0).wait(1).to({y:234.1},0).wait(1).to({y:233.5},0).wait(1).to({y:232.9},0).wait(1).to({y:232.3},0).wait(1).to({y:231.8},0).wait(1).to({y:231.2},0).wait(1).to({y:230.6},0).wait(368).to({_off:true},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(935).to({_off:false},0).wait(55));

	// C
	this.instance_34 = new lib.Canimate();
	this.instance_34.parent = this;
	this.instance_34.setTransform(155.6,597.7,1,1,0,0,0,13,19.8);
	this.instance_34._off = true;

	this.instance_35 = new lib.C();
	this.instance_35.parent = this;
	this.instance_35.setTransform(155.6,229.6,1,1,0,0,0,13,19.8);
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(457).to({_off:false},0).wait(1).to({regY:22.2,y:588.9},0).wait(1).to({y:577.8},0).wait(1).to({y:566.6},0).wait(1).to({y:555.5},0).wait(1).to({y:544.3},0).wait(1).to({y:533.2},0).wait(1).to({y:522},0).wait(1).to({y:510.9},0).wait(1).to({y:499.7},0).wait(1).to({y:488.6},0).wait(1).to({y:477.4},0).wait(1).to({y:466.2},0).wait(1).to({y:455.1},0).wait(1).to({y:443.9},0).wait(1).to({y:432.8},0).wait(1).to({y:421.6},0).wait(1).to({y:410.5},0).wait(1).to({y:399.3},0).wait(1).to({y:388.2},0).wait(1).to({y:377},0).wait(1).to({y:365.9},0).wait(1).to({y:354.7},0).wait(1).to({y:343.5},0).wait(1).to({y:332.4},0).wait(1).to({y:321.2},0).wait(1).to({y:310.1},0).wait(1).to({y:298.9},0).wait(1).to({y:287.8},0).wait(1).to({y:276.6},0).wait(1).to({y:265.5},0).wait(1).to({y:254.3},0).wait(1).to({y:243.2},0).wait(1).to({y:232},0).wait(436).to({_off:true},1).wait(63));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(927).to({_off:false},0).wait(63));

	// E
	this.instance_36 = new lib.Estrokesanimate();
	this.instance_36.parent = this;
	this.instance_36.setTransform(204,419,1,1,90,0,0,13.8,19.2);
	this.instance_36._off = true;

	this.instance_37 = new lib.Estrokes();
	this.instance_37.parent = this;
	this.instance_37.setTransform(252.2,174.1,1,1,0,0,0,13.8,19.2);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(235).to({_off:false},0).wait(1).to({regY:18.2,rotation:89.9,x:205,y:411.1},0).wait(1).to({y:403.3},0).wait(1).to({rotation:89.8,y:395.4},0).wait(1).to({rotation:89.7,y:387.6},0).wait(1).to({rotation:89.6,y:379.7},0).wait(1).to({y:371.8},0).wait(1).to({rotation:89.5,y:364},0).wait(1).to({rotation:89.4,y:356.1},0).wait(1).to({rotation:89.3,y:348.2},0).wait(1).to({y:340.4},0).wait(1).to({rotation:89.2,y:332.5},0).wait(1).to({rotation:89.1,y:324.7},0).wait(1).to({y:316.8},0).wait(1).to({rotation:89,y:308.9},0).wait(1).to({rotation:88.9,y:301.1},0).wait(1).to({rotation:88.8,y:293.2},0).wait(1).to({y:285.4},0).wait(1).to({rotation:88.7,y:277.5},0).wait(1).to({rotation:88.6,y:269.7},0).wait(1).to({rotation:88.5,y:261.8},0).wait(1).to({y:253.9},0).wait(1).to({rotation:88.4,x:204.3,y:254.3},0).wait(1).to({rotation:88.3,x:203.6,y:254.8},0).wait(1).to({x:202.9,y:255.2},0).wait(1).to({rotation:88.2,x:202.3,y:255.7},0).wait(1).to({rotation:88.1,x:201.6,y:256.1},0).wait(1).to({rotation:88,x:200.9,y:256.5},0).wait(1).to({x:200.2,y:256.9},0).wait(1).to({rotation:87.9,x:199.6,y:257.3},0).wait(1).to({rotation:87.8,x:198.9,y:257.8},0).wait(1).to({rotation:87.7,x:198.2,y:258.2},0).wait(1).to({x:197.5,y:258.6},0).wait(1).to({rotation:87.6,x:196.9,y:259},0).wait(1).to({rotation:87.5,x:196.2,y:259.5},0).wait(1).to({rotation:87.4,x:195.5,y:259.9},0).wait(1).to({x:194.8,y:260.4},0).wait(1).to({rotation:87.3,x:194.1,y:260.8},0).wait(1).to({rotation:87.2,x:193.4,y:261.2},0).wait(1).to({rotation:87.1,x:192.8,y:261.6},0).wait(1).to({x:192.1,y:262.1},0).wait(1).to({rotation:87,x:191.4,y:262.5},0).wait(1).to({rotation:86.9,x:190.8,y:262.9},0).wait(1).to({rotation:86.8,x:190.1,y:263.3},0).wait(1).to({x:189.4,y:263.8},0).wait(1).to({rotation:86.7,x:188.7,y:264.2},0).wait(1).to({rotation:86.6,x:188,y:264.6},0).wait(1).to({x:187.4,y:265},0).wait(1).to({rotation:86.5,x:186.7,y:265.4},0).wait(1).to({rotation:86.4,x:186,y:265.9},0).wait(1).to({rotation:86.3,x:190.3,y:264.7},0).wait(1).to({x:194.6,y:263.4},0).wait(1).to({rotation:86.2,x:198.7,y:261.9},0).wait(1).to({rotation:86.1,x:202.8,y:260.2},0).wait(1).to({rotation:86,x:206.8,y:258.2},0).wait(1).to({rotation:85.9,x:210.7,y:256},0).wait(1).to({x:214.4,y:253.5},0).wait(1).to({rotation:85.8,x:217.9,y:250.9},0).wait(1).to({rotation:85.7,x:221.3,y:247.9},0).wait(1).to({rotation:85.6,x:224.4,y:244.8},0).wait(1).to({x:227.3,y:241.4},0).wait(1).to({rotation:85.5,x:230.1,y:237.9},0).wait(1).to({rotation:85.4,x:232.5,y:234.2},0).wait(1).to({rotation:85.3,x:234.7,y:230.4},0).wait(1).to({rotation:85.2,x:236.7,y:226.4},0).wait(1).to({x:238.5,y:222.3},0).wait(1).to({rotation:85.1,x:240.1,y:218.1},0).wait(1).to({rotation:85,x:241.4,y:213.9},0).wait(1).to({rotation:75,x:242.5,y:209.5},0).wait(1).to({rotation:65.1,x:243.4,y:204.9},0).wait(1).to({rotation:55.4,x:244.1,y:200.4},0).wait(1).to({rotation:45.8,x:244.7,y:195.9},0).wait(1).to({rotation:36.4,x:245,y:191.4},0).wait(1).to({rotation:27,x:245.3,y:186.8},0).wait(1).to({rotation:17.8,y:182.4},0).wait(1).to({rotation:8.8,y:177.9},0).wait(1).to({rotation:0,x:245.2,y:173.4},0).wait(11).to({y:173.3},0).wait(20).to({y:173.2},0).wait(20).to({y:173.1},0).wait(576).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(939).to({_off:false},0).wait(1).to({regX:6.8,x:245.2},0).wait(50));

	// R
	this.instance_38 = new lib.Ranimate();
	this.instance_38.parent = this;
	this.instance_38.setTransform(212.8,542,1,1,0,0,0,12.6,19.2);
	this.instance_38._off = true;

	this.instance_39 = new lib.R();
	this.instance_39.parent = this;
	this.instance_39.setTransform(213.3,174.4,1,1,0,0,0,12.6,19.2);
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(214).to({_off:false},0).wait(1).to({regY:18.2,y:530.2},0).wait(1).to({y:519.5},0).wait(1).to({y:508.7},0).wait(1).to({y:498},0).wait(1).to({y:487.2},0).wait(1).to({y:476.5},0).wait(1).to({x:212.9,y:465.7},0).wait(1).to({y:454.9},0).wait(1).to({y:444.2},0).wait(1).to({y:433.4},0).wait(1).to({y:422.7},0).wait(1).to({y:411.9},0).wait(1).to({y:401.1},0).wait(1).to({y:390.4},0).wait(1).to({y:379.6},0).wait(1).to({x:213,y:368.9},0).wait(1).to({y:358.1},0).wait(1).to({y:347.3},0).wait(1).to({y:336.6},0).wait(1).to({y:325.8},0).wait(1).to({y:315.1},0).wait(1).to({y:304.3},0).wait(1).to({y:293.6},0).wait(1).to({y:282.8},0).wait(1).to({y:272},0).wait(1).to({y:261.3},0).wait(1).to({y:250.5},0).wait(1).to({y:239.8},0).wait(1).to({x:213.1,y:229},0).wait(1).to({y:224.5},0).wait(1).to({y:219.9},0).wait(1).to({y:215.4},0).wait(1).to({y:210.8},0).wait(1).to({y:206.3},0).wait(1).to({y:201.8},0).wait(1).to({y:197.2},0).wait(1).to({y:192.7},0).wait(1).to({y:188.1},0).wait(1).to({y:183.5},0).wait(1).to({y:179},0).wait(1).to({y:174.5},0).wait(1).to({y:169.9},0).wait(1).to({y:165.4},0).wait(1).to({x:213.2,y:160.8},0).wait(1).to({x:213.3,y:157},0).wait(1).to({y:157.3},0).wait(1).to({y:157.5},0).wait(1).to({y:157.8},0).wait(1).to({y:158},0).wait(1).to({y:158.3},0).wait(1).to({y:158.5},0).wait(1).to({y:158.8},0).wait(1).to({y:159},0).wait(1).to({y:159.3},0).wait(1).to({y:159.5},0).wait(1).to({y:159.8},0).wait(1).to({y:160},0).wait(1).to({y:160.3},0).wait(1).to({y:160.5},0).wait(1).to({y:160.8},0).wait(1).to({y:161},0).wait(1).to({y:161.3},0).wait(1).to({y:161.5},0).wait(1).to({y:161.8},0).wait(1).to({y:162},0).wait(1).to({y:162.3},0).wait(1).to({y:162.6},0).wait(1).to({y:162.8},0).wait(1).to({y:163.1},0).wait(1).to({y:163.3},0).wait(1).to({y:163.6},0).wait(1).to({y:163.8},0).wait(1).to({y:164.1},0).wait(1).to({y:164.3},0).wait(1).to({y:164.6},0).wait(1).to({y:164.8},0).wait(1).to({y:165.1},0).wait(1).to({y:165.3},0).wait(1).to({y:165.6},0).wait(1).to({y:165.8},0).wait(1).to({y:166.1},0).wait(1).to({y:166.3},0).wait(1).to({y:166.6},0).wait(1).to({y:166.8},0).wait(1).to({y:167.1},0).wait(1).to({y:167.3},0).wait(1).to({y:167.6},0).wait(1).to({y:167.8},0).wait(1).to({y:168.1},0).wait(1).to({y:168.4},0).wait(1).to({y:168.6},0).wait(1).to({y:168.9},0).wait(1).to({y:169.1},0).wait(1).to({y:169.4},0).wait(1).to({y:169.6},0).wait(1).to({y:169.9},0).wait(1).to({y:170.1},0).wait(1).to({y:170.4},0).wait(1).to({y:170.6},0).wait(1).to({y:170.9},0).wait(1).to({y:171.1},0).wait(1).to({y:171.4},0).wait(1).to({y:171.6},0).wait(1).to({y:171.9},0).wait(1).to({y:172.1},0).wait(1).to({y:172.4},0).wait(1).to({y:172.6},0).wait(1).to({y:172.9},0).wait(1).to({y:173.1},0).wait(1).to({y:173.4},0).wait(593).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(918).to({_off:false},0).wait(72));

	// O
	this.instance_40 = new lib.Oanimate();
	this.instance_40.parent = this;
	this.instance_40.setTransform(178.6,542.6,1,1,0,0,0,15.3,19.8);
	this.instance_40._off = true;

	this.instance_41 = new lib.O();
	this.instance_41.parent = this;
	this.instance_41.setTransform(179.1,174.9,1,1,0,0,0,15.3,19.8);
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(214).to({_off:false},0).wait(1).to({regY:20.8,y:534.3},0).wait(1).to({y:525},0).wait(1).to({y:515.7},0).wait(1).to({x:178.7,y:506.4},0).wait(1).to({y:497.1},0).wait(1).to({y:487.8},0).wait(1).to({y:478.5},0).wait(1).to({y:469.3},0).wait(1).to({y:460},0).wait(1).to({y:450.7},0).wait(1).to({y:441.4},0).wait(1).to({x:178.8,y:432.1},0).wait(1).to({y:422.8},0).wait(1).to({y:413.5},0).wait(1).to({y:404.3},0).wait(1).to({y:395},0).wait(1).to({y:385.7},0).wait(1).to({y:376.4},0).wait(1).to({y:367.1},0).wait(1).to({x:178.9,y:357.8},0).wait(1).to({y:348.5},0).wait(1).to({y:339.3},0).wait(1).to({y:330},0).wait(1).to({y:320.7},0).wait(1).to({y:311.4},0).wait(1).to({y:302.1},0).wait(1).to({y:292.8},0).wait(1).to({x:179,y:283.5},0).wait(1).to({y:274.3},0).wait(1).to({y:265},0).wait(1).to({y:255.7},0).wait(1).to({y:246.4},0).wait(1).to({y:237.1},0).wait(1).to({y:227.8},0).wait(1).to({y:218.5},0).wait(1).to({x:179.1,y:209.3},0).wait(1).to({y:200},0).wait(1).to({y:190.7},0).wait(1).to({y:181.4},0).wait(52).to({y:180.6},0).wait(1).to({y:179.8},0).wait(1).to({y:179},0).wait(1).to({y:178.3},0).wait(1).to({y:177.5},0).wait(1).to({y:176.7},0).wait(1).to({y:175.9},0).wait(614).to({_off:true},1).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(926).to({_off:false},0).wait(64));

	// M
	this.instance_42 = new lib.Manimate();
	this.instance_42.parent = this;
	this.instance_42.setTransform(138.5,542.5,1,1,0,0,0,18.4,19.2);
	this.instance_42._off = true;

	this.instance_43 = new lib.M();
	this.instance_43.parent = this;
	this.instance_43.setTransform(139,174.4,1,1,0,0,0,18.4,19.2);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(214).to({_off:false},0).wait(1).to({regY:20.7,y:534.6},0).wait(1).to({y:525.1},0).wait(1).to({y:515.7},0).wait(1).to({y:506.2},0).wait(1).to({y:496.8},0).wait(1).to({y:487.4},0).wait(1).to({y:477.9},0).wait(1).to({x:138.6,y:468.5},0).wait(1).to({y:459.1},0).wait(1).to({y:449.6},0).wait(1).to({y:440.2},0).wait(1).to({y:430.7},0).wait(1).to({y:421.3},0).wait(1).to({y:411.9},0).wait(1).to({y:402.4},0).wait(1).to({x:138.7,y:393},0).wait(1).to({y:383.5},0).wait(1).to({y:374.1},0).wait(1).to({y:364.7},0).wait(1).to({y:355.2},0).wait(1).to({y:345.8},0).wait(1).to({y:336.4},0).wait(1).to({y:326.9},0).wait(1).to({x:138.8,y:317.5},0).wait(1).to({y:308},0).wait(1).to({y:298.6},0).wait(1).to({y:289.2},0).wait(1).to({y:279.7},0).wait(1).to({y:270.3},0).wait(1).to({y:260.8},0).wait(1).to({y:251.4},0).wait(1).to({x:138.9,y:242},0).wait(1).to({y:232.5},0).wait(1).to({y:223.1},0).wait(1).to({y:213.7},0).wait(1).to({y:204.2},0).wait(1).to({y:194.8},0).wait(1).to({y:185.3},0).wait(1).to({x:139,y:175.9},0).wait(664).to({_off:true},1).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(918).to({_off:false},0).wait(72));

	// S
	this.instance_44 = new lib.Sanimate();
	this.instance_44.parent = this;
	this.instance_44.setTransform(350.5,-36,1,1,0,0,0,11.1,19.8);
	this.instance_44._off = true;

	this.instance_45 = new lib.S();
	this.instance_45.parent = this;
	this.instance_45.setTransform(255.1,119.3,1,1,0,0,0,11.1,19.8);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(129).to({_off:false},0).wait(1).to({regY:18.8,y:-21.5},0).wait(1).to({y:-6.1},0).wait(1).to({y:9.3},0).wait(1).to({y:24.7},0).wait(1).to({y:40.1},0).wait(1).to({y:55.5},0).wait(1).to({y:71},0).wait(1).to({y:86.4},0).wait(1).to({y:93.2},0).wait(1).to({y:100.1},0).wait(1).to({y:106.9},0).wait(1).to({y:113.8},0).wait(1).to({y:120.6},0).wait(1).to({y:127.5},0).wait(1).to({y:134.4},0).wait(1).to({y:141.3},0).wait(1).to({y:148.1},0).wait(1).to({x:351,y:147.8},0).wait(1).to({x:351.5,y:147.5},0).wait(1).to({x:352,y:147.2},0).wait(1).to({x:352.5,y:147},0).wait(1).to({x:353,y:146.7},0).wait(1).to({x:353.6,y:146.4},0).wait(1).to({x:354.1,y:146.2},0).wait(1).to({x:354.6,y:145.9},0).wait(1).to({x:355.1,y:145.6},0).wait(1).to({x:355.6,y:145.3},0).wait(1).to({x:356.1,y:145.1},0).wait(1).to({x:356.7,y:144.8},0).wait(1).to({x:357.2,y:144.5},0).wait(1).to({x:357.7,y:144.3},0).wait(1).to({x:358.2,y:144},0).wait(1).to({x:358.7,y:143.7},0).wait(1).to({x:359.3,y:143.4},0).wait(1).to({x:359.8,y:143.2},0).wait(1).to({x:360.3,y:142.9},0).wait(1).to({x:360.8,y:142.6},0).wait(1).to({x:361.3,y:142.4},0).wait(1).to({x:361.8,y:142.1},0).wait(1).to({x:362.4,y:141.8},0).wait(1).to({x:362.9,y:141.5},0).wait(1).to({x:363.4,y:141.3},0).wait(1).to({x:363.9,y:141},0).wait(1).to({x:364.4,y:140.7},0).wait(1).to({x:364.9,y:140.5},0).wait(1).to({x:365.5,y:140.2},0).wait(1).to({x:366,y:139.9},0).wait(1).to({x:366.5,y:139.6},0).wait(1).to({x:367,y:139.4},0).wait(1).to({x:367.5,y:139.1},0).wait(1).to({x:368.1,y:138.8},0).wait(1).to({x:362.4,y:137.5},0).wait(1).to({x:356.7,y:136.3},0).wait(1).to({x:351,y:135.2},0).wait(1).to({x:345.2,y:134.3},0).wait(1).to({x:339.5,y:133.6},0).wait(1).to({x:333.7,y:133.1},0).wait(1).to({x:327.9,y:133},0).wait(1).to({x:322.5,y:132.8},0).wait(1).to({x:317.2,y:132.5},0).wait(1).to({x:311.9,y:132},0).wait(1).to({x:306.6,y:131.3},0).wait(1).to({x:301.4,y:130.5},0).wait(1).to({x:296.1,y:129.5},0).wait(1).to({x:290.9,y:128.5},0).wait(1).to({x:285.7,y:127.3},0).wait(1).to({x:280.5,y:126},0).wait(1).to({x:275.4,y:124.7},0).wait(1).to({x:270.3,y:123.2},0).wait(1).to({x:265.2,y:121.6},0).wait(1).to({x:260.1,y:120},0).wait(1).to({x:255.1,y:118.3},0).wait(721).to({_off:true},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(923).to({_off:false},0).wait(67));

	// G
	this.instance_46 = new lib.Ganimate();
	this.instance_46.parent = this;
	this.instance_46.setTransform(298.1,-305.9,1,1,0,0,0,14.7,19.8);
	this.instance_46._off = true;

	this.instance_47 = new lib.G();
	this.instance_47.parent = this;
	this.instance_47.setTransform(295.4,64.2,1,1,0,0,0,14.7,19.8);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(30).to({_off:false},0).wait(1).to({regY:18.2,x:297.9,y:-290.3},0).wait(1).to({x:297.8,y:-273.1},0).wait(1).to({x:297.7,y:-256},0).wait(1).to({x:297.6,y:-238.8},0).wait(1).to({x:297.5,y:-221.6},0).wait(1).to({x:297.4,y:-204.4},0).wait(1).to({x:297.3,y:-187.2},0).wait(1).to({x:297.2,y:-170.1},0).wait(1).to({x:297.1,y:-152.9},0).wait(1).to({x:297,y:-135.7},0).wait(1).to({x:296.9,y:-118.5},0).wait(1).to({x:296.8,y:-101.4},0).wait(1).to({y:-84.2},0).wait(1).to({x:296.7,y:-67},0).wait(1).to({x:296.6,y:-49.8},0).wait(1).to({y:-32.6},0).wait(1).to({y:-15.5},0).wait(1).to({y:1.7},0).wait(1).to({y:9.1},0).wait(1).to({x:296.5,y:16.4},0).wait(1).to({y:23.7},0).wait(1).to({y:31},0).wait(1).to({y:38.4},0).wait(1).to({x:296.4,y:45.7},0).wait(1).to({y:53},0).wait(1).to({x:296.3,y:60.4},0).wait(1).to({x:296.2,y:67.7},0).wait(1).to({x:296,y:75.1},0).wait(1).to({x:295.4,y:82.3},0).wait(3).to({y:82.4},0).wait(6).to({y:82.5},0).wait(5).to({y:82.6},0).wait(3).to({y:78.6},0).wait(1).to({y:74.6},0).wait(1).to({y:70.6},0).wait(1).to({y:66.6},0).wait(1).to({y:62.6},0).wait(859).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(940).to({_off:false},0).wait(50));

	// N-animate
	this.instance_48 = new lib.Nanimate();
	this.instance_48.parent = this;
	this.instance_48.setTransform(263.1,-306,1,1,0,0,0,13.8,19.2);
	this.instance_48._off = true;

	this.instance_49 = new lib.N();
	this.instance_49.parent = this;
	this.instance_49.setTransform(260.4,64,1,1,0,0,0,13.8,19.2);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(30).to({_off:false},0).wait(1).to({regY:20.2,x:263,y:-288.2},0).wait(1).to({x:262.8,y:-271.4},0).wait(1).to({x:262.7,y:-254.6},0).wait(1).to({x:262.6,y:-237.8},0).wait(1).to({x:262.4,y:-221},0).wait(1).to({x:262.3,y:-204.3},0).wait(1).to({x:262.2,y:-187.5},0).wait(1).to({x:262.1,y:-170.7},0).wait(1).to({x:262,y:-153.9},0).wait(1).to({y:-137.1},0).wait(1).to({x:261.9,y:-120.3},0).wait(1).to({x:261.8,y:-103.5},0).wait(1).to({y:-86.8},0).wait(1).to({y:-70},0).wait(1).to({y:-61},0).wait(1).to({y:-52},0).wait(1).to({y:-43},0).wait(1).to({x:261.7,y:-34},0).wait(1).to({y:-25},0).wait(1).to({x:261.6,y:-16},0).wait(1).to({y:-7},0).wait(1).to({x:261.5,y:2},0).wait(1).to({x:261.4,y:11},0).wait(1).to({x:261.3,y:20},0).wait(1).to({x:261.2,y:29},0).wait(1).to({x:261,y:38},0).wait(1).to({x:260.8,y:47},0).wait(1).to({x:260.6,y:56},0).wait(1).to({x:260.4,y:65},0).wait(872).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(932).to({_off:false},0).wait(58));

	// H
	this.instance_50 = new lib.Hanimate();
	this.instance_50.parent = this;
	this.instance_50.setTransform(210.1,432.1,1,1,0,0,0,12.7,19.2);
	this.instance_50._off = true;

	this.instance_51 = new lib.H();
	this.instance_51.parent = this;
	this.instance_51.setTransform(210.5,64,1,1,0,0,0,12.7,19.2);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(29).to({_off:false},0).wait(1).to({regY:20.2,y:415.6},0).wait(1).to({y:398.1},0).wait(1).to({x:210.2,y:380.6},0).wait(1).to({y:363.2},0).wait(1).to({y:345.7},0).wait(1).to({y:328.2},0).wait(1).to({y:310.7},0).wait(1).to({x:210.3,y:293.2},0).wait(1).to({y:275.8},0).wait(1).to({y:258.3},0).wait(1).to({y:240.8},0).wait(1).to({y:223.3},0).wait(1).to({y:205.8},0).wait(1).to({y:195.8},0).wait(1).to({y:185.7},0).wait(1).to({y:175.7},0).wait(1).to({y:165.6},0).wait(1).to({y:155.5},0).wait(1).to({y:145.5},0).wait(1).to({y:135.4},0).wait(1).to({x:210.4,y:125.4},0).wait(1).to({y:115.3},0).wait(1).to({y:105.2},0).wait(1).to({y:95.2},0).wait(1).to({y:85.1},0).wait(1).to({x:210.5,y:75.1},0).wait(1).to({y:65},0).wait(874).to({_off:true},1).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(931).to({_off:false},0).wait(59));

	// T
	this.instance_52 = new lib.Tanimate();
	this.instance_52.parent = this;
	this.instance_52.setTransform(180.1,432.1,1,1,0,0,0,12.1,19.2);
	this.instance_52._off = true;

	this.instance_53 = new lib.T();
	this.instance_53.parent = this;
	this.instance_53.setTransform(180.5,64,1,1,0,0,0,12.1,19.2);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(29).to({_off:false},0).wait(1).to({regY:18.2,y:418.6},0).wait(1).to({y:406.2},0).wait(1).to({y:393.7},0).wait(1).to({x:180.2,y:381.3},0).wait(1).to({y:368.9},0).wait(1).to({y:356.4},0).wait(1).to({y:344},0).wait(1).to({y:331.6},0).wait(1).to({y:319.1},0).wait(1).to({y:306.7},0).wait(1).to({x:180.3,y:294.3},0).wait(1).to({y:281.8},0).wait(1).to({y:269.4},0).wait(1).to({y:256.9},0).wait(1).to({y:244.5},0).wait(1).to({y:232.1},0).wait(1).to({y:219.6},0).wait(1).to({y:207.2},0).wait(1).to({y:194.8},0).wait(1).to({y:182.3},0).wait(1).to({y:169.9},0).wait(1).to({x:180.4,y:157.4},0).wait(1).to({y:145},0).wait(1).to({y:138.2},0).wait(1).to({y:131.3},0).wait(1).to({y:124.5},0).wait(1).to({y:117.7},0).wait(1).to({y:110.8},0).wait(1).to({y:104},0).wait(1).to({y:97.2},0).wait(1).to({y:90.3},0).wait(1).to({y:83.5},0).wait(1).to({y:76.6},0).wait(1).to({x:180.5,y:69.8},0).wait(1).to({y:63},0).wait(874).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(939).to({_off:false},0).wait(51));

	// O
	this.instance_54 = new lib.Oanimate();
	this.instance_54.parent = this;
	this.instance_54.setTransform(149.1,432.1,1,1,0,0,0,15.3,19.8);
	this.instance_54._off = true;

	this.instance_55 = new lib.O();
	this.instance_55.parent = this;
	this.instance_55.setTransform(149.5,64.2,1,1,0,0,0,15.3,19.8);
	this.instance_55._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(29).to({_off:false},0).wait(1).to({regY:20.8,y:412.1},0).wait(1).to({y:391.1},0).wait(1).to({y:370.1},0).wait(1).to({y:349},0).wait(1).to({x:149.2,y:328.1},0).wait(1).to({y:307.1},0).wait(1).to({y:286},0).wait(1).to({y:265},0).wait(1).to({y:244.1},0).wait(1).to({y:223},0).wait(1).to({x:149.3,y:202},0).wait(1).to({y:181},0).wait(1).to({y:169},0).wait(1).to({y:157},0).wait(1).to({y:145},0).wait(1).to({y:133},0).wait(1).to({y:121},0).wait(1).to({y:109},0).wait(1).to({y:97},0).wait(1).to({y:85.1},0).wait(1).to({x:149.4,y:73},0).wait(1).to({y:61.1},0).wait(1).to({x:149.5,y:49.1},0).wait(51).to({y:49.2},0).wait(1).to({y:51.8},0).wait(1).to({y:54.5},0).wait(1).to({y:57.2},0).wait(1).to({y:59.8},0).wait(1).to({y:62.5},0).wait(1).to({y:65.2},0).wait(829).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_55).wait(939).to({_off:false},0).wait(51));

	// N-animate
	this.instance_56 = new lib.Nanimate();
	this.instance_56.parent = this;
	this.instance_56.setTransform(113.5,432.1,1,1,0,0,0,13.8,19.2);
	this.instance_56._off = true;

	this.instance_57 = new lib.N();
	this.instance_57.parent = this;
	this.instance_57.setTransform(113.9,64,1,1,0,0,0,13.8,19.2);
	this.instance_57._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_56).wait(29).to({_off:false},0).wait(1).to({regY:20.2,y:416.2},0).wait(1).to({y:399.4},0).wait(1).to({x:113.6,y:382.6},0).wait(1).to({y:365.8},0).wait(1).to({y:348.9},0).wait(1).to({y:332.1},0).wait(1).to({x:113.7,y:315.3},0).wait(1).to({y:298.4},0).wait(1).to({y:281.6},0).wait(1).to({y:264.8},0).wait(1).to({y:248},0).wait(1).to({y:231.1},0).wait(1).to({y:214.3},0).wait(1).to({x:113.8,y:197.5},0).wait(1).to({y:180.7},0).wait(1).to({y:163.8},0).wait(1).to({y:147},0).wait(1).to({y:138.8},0).wait(1).to({y:130.6},0).wait(1).to({y:122.4},0).wait(1).to({y:114.2},0).wait(1).to({y:106},0).wait(1).to({y:97.8},0).wait(1).to({x:113.9,y:89.6},0).wait(1).to({y:81.4},0).wait(1).to({y:73.1},0).wait(1).to({y:65},0).wait(866).to({_off:true},1).wait(67));
	this.timeline.addTween(cjs.Tween.get(this.instance_57).wait(923).to({_off:false},0).wait(67));

	// Road line
	this.instance_58 = new lib.Roadlineanimate();
	this.instance_58.parent = this;
	this.instance_58.setTransform(235,239.9,1,1,0,0,0,460.4,239.8);

	this.instance_59 = new lib.Roadline();
	this.instance_59.parent = this;
	this.instance_59.setTransform(691.9,160.3,1,1,0,0,0,460.4,239.8);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_58}]}).to({state:[{t:this.instance_59}]},888).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(888).to({_off:false},0).wait(1).to({regX:3.5,x:235,y:165.8},0).wait(1).to({y:171.3},0).wait(1).to({y:176.8},0).wait(1).to({y:182.3},0).wait(1).to({y:187.7},0).wait(1).to({y:193.2},0).wait(1).to({y:198.7},0).wait(1).to({y:204.2},0).wait(1).to({y:209.7},0).wait(1).to({y:215.1},0).wait(1).to({regX:460.4,x:691.9,y:160.3},0).wait(1).to({regX:3.5,x:235,y:164.9},0).wait(1).to({y:169.5},0).wait(1).to({y:174},0).wait(1).to({y:178.6},0).wait(1).to({y:183.2},0).wait(1).to({y:187.7},0).wait(1).to({y:192.3},0).wait(1).to({y:196.9},0).wait(1).to({y:201.4},0).wait(1).to({y:206},0).wait(1).to({y:210.6},0).wait(1).to({y:215.1},0).wait(1).to({regX:460.4,x:691.9,y:160.3},0).wait(1).to({regX:3.5,x:235,y:164.3},0).wait(1).to({y:168.2},0).wait(1).to({y:172.1},0).wait(1).to({y:176},0).wait(1).to({y:179.9},0).wait(1).to({y:183.8},0).wait(1).to({y:187.7},0).wait(1).to({y:191.7},0).wait(1).to({y:195.6},0).wait(1).to({y:199.5},0).wait(1).to({y:203.4},0).wait(1).to({y:207.3},0).wait(1).to({y:211.2},0).wait(1).to({y:215.1},0).wait(1).to({regX:460.4,x:691.9,y:160.3},0).wait(1).to({regX:3.5,x:235,y:163.4},0).wait(1).to({y:166.4},0).wait(1).to({y:169.5},0).wait(1).to({y:172.5},0).wait(1).to({y:175.6},0).wait(1).to({y:178.6},0).wait(1).to({y:181.7},0).wait(1).to({y:184.7},0).wait(1).to({y:187.7},0).wait(1).to({y:190.8},0).wait(1).to({y:193.8},0).wait(1).to({y:196.9},0).wait(1).to({y:199.9},0).wait(1).to({y:203},0).wait(1).to({y:206},0).wait(1).to({y:209.1},0).wait(1).to({y:212.1},0).wait(1).to({y:215.1},0).wait(1).to({regX:460.4,x:691.9,y:160.3},0).wait(1).to({regX:3.5,x:235,y:163.1},0).wait(1).to({y:165.9},0).wait(1).to({y:168.6},0).wait(1).to({y:171.4},0).wait(1).to({y:174.1},0).wait(1).to({y:176.9},0).wait(1).to({y:179.6},0).wait(1).to({y:182.4},0).wait(1).to({y:185.1},0).wait(1).to({y:187.9},0).wait(1).to({y:190.6},0).wait(1).to({y:193.4},0).wait(1).to({y:196.1},0).wait(1).to({y:198.9},0).wait(1).to({y:201.6},0).wait(1).to({y:204.4},0).wait(1).to({y:207.1},0).wait(1).to({y:209.9},0).wait(1).to({y:212.6},0).wait(1).to({y:215.4},0).wait(1).to({y:218.1},0).wait(1).to({y:220.9},0).wait(1).to({y:223.6},0).wait(1).to({y:226.4},0).wait(1).to({y:229.1},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,120.5,550,521.3);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;