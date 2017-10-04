(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[734,0,138,93],[874,0,138,93],[840,190,138,93],[874,95,138,93],[420,191,138,93],[280,96,138,93],[0,191,138,93],[734,95,138,93],[840,285,138,93],[560,191,138,93],[700,190,138,93],[560,96,138,93],[700,285,138,93],[140,96,138,93],[420,96,138,93],[140,191,138,93],[280,191,138,93],[0,96,138,93],[0,286,138,93],[455,286,108,32],[140,286,153,64],[0,0,732,94],[295,286,158,44]]}
];



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



(lib.cookieberries = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cookieeight = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.cookieeighteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cookieeleven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.cookiefifteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cookiefive = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cookiefour = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.cookiefrosting = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.cookiegreens = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cookienine = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.cookieone = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.cookieseven = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.cookieseventeen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.cookiesix = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.cookiesixteen = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.cookieten = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.cookiethree = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.cookietwelve = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.cookietwo = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardcandles = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardglassestopright = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardtable = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.leaderboardwhitetray = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
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


(lib.partyreadyrecipes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D6E47").s().p("AgHA4IgLgDIgDADIgEAAIgCAAIgCgCQgEgDgDgJQgDgIAAgIQAAgDACgCQABgDADAAQAFAAAFAIIAFAHQADAEAFADQAGACAFAAQAHAAAEgDQAEgEAAgGQAAgJgQgIIgHgEQgRgIgFgGQgHgHAAgKQAAgOAKgJQAKgIAQgBIAGABIAIABIAFgCIADAAQAFAAAGAIQAEAIAAAKQAAAEgCACQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgCAAgDgCQgCgCgEgFQgEgHgEgCQgEgDgGAAQgGAAgDADQgEAEAAAFQAAAFAEAEQAEAEAMAGIABABQAeAOAAARQAAAPgLAKQgMAKgRAAg");
	this.shape.setTransform(100.4,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D6E47").s().p("AgiAoQgPgPAAgXQAAgYAQgQQAPgRAXAAQAVAAAMAMQAMAMAAAUQAAAGgCADQgCACgIAAIgoAAQgDAAgCgCQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCADAAIAWAAIAFAAIABgEQAAgKgGgHQgIgHgJAAQgNAAgFALQgHALAAAQQAAAQAJAMQAIAMANAAQAIAAAFgCQAGgCAFgDIAEgDQAFgEADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQABACgDAEIgIAHQgJAIgJADQgIAEgKAAQgWAAgPgQg");
	this.shape_1.setTransform(89.8,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D6E47").s().p("AgzBJQgGgCABgEQgBgEAFgCIAGgCQACgCAAgJQABgIAAgbIAAgQQAAgdgBgJQgBgIgCgBIgFgCQgHgDAAgDQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAABgBQACgBAEgCIAPgFIAKgCQABAAABAAQABAAAAABQABAAAAAAQABABAAAAQABABABAEIAAAGIAAACIAAAAIAEgCIAEgEQAHgFAFgCQAGgCAHgBQATAAANAPQANAOAAAYQAAAYgPARQgOAQgWABQgJAAgCgDQgEgDAAgEIABgEQACgCADABIACAAIAEAAQAMAAAHgJQAHgLAAgPQAAgTgHgKQgJgMgLAAQgKAAgHAGQgGAGAAARIAABDIAAAKQAAAFACABIAGADIAEABIADADIABACQAAAEgHACQgGABgPABQgQgBgFgBg");
	this.shape_2.setTransform(77,3.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D6E47").s().p("AgSBMQgFgCAAgEQAAgEAFgBIADgCQACgCACgDIABgLIAAgIIAAgJIAAgKQAAgRgBgFQgBgEgCgBIgFgCQgHgDAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAgBQACgBAFgCIAQgGIAKgCQABAAABABQAAAAABAAQAAAAABABQAAAAABAAIABAHIAAAHIAAAFIgBAaIAAABIgBAaIABAOQABAEADACIAEACQAFABAAAFQAAAEgFABQgGACgNAAQgQAAgFgCgAgMg1QgFgEAAgFQAAgHAFgDQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAFQgFADgHAAQgHAAgEgDg");
	this.shape_3.setTransform(67.4,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D6E47").s().p("AghAoQgPgPAAgXQAAgYAQgQQAQgRAXAAQASAAAMAKQAMAJAAAMQAAAFgEADQgDADgFAAQgGAAgDgCQgDgDgEgJQgDgHgEgDQgFgDgGAAQgMAAgGAJQgHAJAAAQQAAATAKAMQAJAMAPAAIAKgCIAJgEIAEgDQAGgFADAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABADIgCAHIgFAGQgJAIgIADQgKAEgLAAQgVAAgPgQg");
	this.shape_4.setTransform(58.6,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D6E47").s().p("AgiAoQgPgPAAgXQAAgYAQgQQAPgRAXAAQAVAAAMAMQAMAMAAAUQAAAGgCADQgCACgIAAIgoAAQgDAAgCgCQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCADAAIAWAAIAFAAIABgEQAAgKgGgHQgIgHgJAAQgNAAgFALQgHALAAAQQAAAQAJAMQAIAMANAAQAIAAAFgCQAGgCAFgDIAEgDQAFgEADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQABACgDAEIgIAHQgJAIgJADQgIAEgKAAQgWAAgPgQg");
	this.shape_5.setTransform(46.9,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D6E47").s().p("AAXA1QgKgigHgHQgIgHgKAAQgJAAABgGQAAgGAGAAQASAAAIgHQAJgHgBgPQAAgOgJgHQgIgHgPAAIgMABQgDABgBADIgBAKIgBAVIAAAuIABAgQAAAIADABIAEADQAHACAAAEQAAAFgGACQgGACgRAAQgRAAgFgCQgHgCABgFQAAgEAGgDIAFgCQACgCABgMIABguIgBgoQAAgQgCgBQgCgCgFgCQgFgDAAgEQAAgEACgBQAEgCAGAAIAYAAIAVgBIARAAQAXAAAMAKQANAKAAASQgBAPgHAKQgJAKgPAEIAAABQAMACAGAHQAHAHAFARIADALQAEARAHAAIACgBIAFAAQAAAAAAAAQABAAAAABQABAAAAAAQABAAAAABIABAEQAAAFgFADQgGADgKAAQgWAAgHgZg");
	this.shape_6.setTransform(33.4,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D6E47").s().p("AgxBHQgFgFAAgHQAAgFAEgEQAEgEAFAAIAFABIADADIADAEQADAEACAAQAFAAAGgIQAFgIAAgIQAAgKgHgQIgBgDIgRglIgKgUQgCgEgGgDIgFgDIgBgEQAAgEAFgCQAGgCAPAAQAQAAAFACQAFABAAAFIAAADIgCACIgEACQgEABAAACIACAIIAJAWIAIAUQACAFACAAQABAAACgFIAHgRIAIgVIADgKQAAgEgGgDQgGgDAAgDQAAgEAFgBQAEgCANAAQAMAAAFACQAEABAAAFQAAAEgGABIgEACQgGADgHASIgDAIIgOAiQgRAsgLAOQgLANgQAAQgHAAgGgEg");
	this.shape_7.setTransform(13.3,3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D6E47").s().p("AguBAQgNgOAAgXQAAgaAPgPQAOgRAYAAIAHABQADABABACQACADAAADQAAAFgHAAIgDAAIgCgBQgMABgHAJQgHAJAAARQAAASAIALQAHAMAMAAQAKAAAHgHQAGgGAAgMIAAgdIAAgxQAAgHgBgDQgCgDgDgBIgDgBQgHgCAAgEQAAgCACgCIALgGIAMgDIAKgBQAEAAABACQACACAAAEIAAAGIgCBBIABAtQABAKACACIAHACQAGABgBAEQAAAFgPAFIgLADIgIABQAAgBgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgCgBABgFIAAgEIAAgDIgBgBIgEADIgEADQgGAFgGADQgFACgIAAQgTAAgNgPg");
	this.shape_8.setTransform(1.5,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D6E47").s().p("AATAyIgGgFIgEACQgNAJgNAAQgQAAgJgJQgKgJAAgPQAAgRAMgJQANgJAWAAQAFAAACABQADACABAEQgBAFgGAAQgLAAgGAGQgHAFAAAJQAAAIAGAFQAGAFAJAAQAJAAAFgEQAEgFAAgLIAAgoQAAgJgEgFQgEgFgGAAQgGAAgEACQgFACgEAFIgDADQgGAIgHAAQgEAAgDgCQgCgDAAgFQAAgKAMgHQANgHATAAQALAAAIAEQAJADAFAGQADAEABAGQACAHgBAPIAAAiIABAJQABABAAAAQAAABABAAQAAABABAAQAAAAABAAIADABQAHACAAADQAAAGgIAEQgHAEgJAAQgFAAgFgGg");
	this.shape_9.setTransform(-11.3,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D6E47").s().p("AgiAoQgPgPAAgXQAAgYAPgQQAQgRAYAAQAUAAAMAMQAMAMAAAUQAAAGgCADQgCACgIAAIgoAAQgEAAgCgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCAEAAIAVAAIAGAAIABgEQAAgKgHgHQgGgHgKAAQgMAAgHALQgFALAAAQQgBAQAJAMQAJAMAMAAQAIAAAGgCQAFgCAFgDIAEgDQAFgEADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAACgDAEIgHAHQgKAIgIADQgJAEgKAAQgWAAgPgQg");
	this.shape_10.setTransform(-23.2,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D6E47").s().p("AAXA1QgKgigIgHQgHgHgKAAQgJAAAAgGQAAgGAHAAQARAAAJgHQAJgHAAgPQAAgOgJgHQgJgHgQAAIgLABQgDABgCADIgBAKIAAAVIAAAuIABAgQAAAIADABIAEADQAHACAAAEQAAAFgGACQgGACgRAAQgQAAgHgCQgFgCgBgFQAAgEAHgDIAFgCQACgCABgMIABguIgBgoQgBgQgBgBQgCgCgFgCQgGgDAAgEQABgEADgBQADgCAHAAIAXAAIAWgBIAQAAQAXAAANAKQAMAKgBASQABAPgJAKQgHAKgPAEIAAABQALACAHAHQAGAHAFARIADALQAEARAGAAIAEgBIADAAQABAAAAAAQABAAAAABQABAAAAAAQABAAAAABIACAEQAAAFgHADQgFADgLAAQgVAAgHgZg");
	this.shape_11.setTransform(-36.8,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D6E47").s().p("AgUALIgFgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAIABgFIADgFIADgFIAGgBIAFAAIAJAAIASAAIADAAIAFABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQABAGgEAFQgEAEgEAAIgFAAIgGAAIgXABIgCAAg");
	this.shape_12.setTransform(-48.8,1.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D6E47").s().p("AgxBHQgFgFAAgHQAAgFAEgEQAEgEAFAAIAFABIADADIADAEQADAEACAAQAFAAAGgIQAFgIAAgIQAAgKgHgQIgBgDIgRglIgKgUQgCgEgGgDIgFgDIgBgEQAAgEAFgCQAGgCAPAAQAQAAAFACQAFABAAAFIAAADIgCACIgEACQgEABAAACIACAIIAJAWIAIAUQACAFACAAQABAAACgFIAHgRIAIgVIADgKQAAgEgGgDQgGgDAAgDQAAgEAFgBQAEgCANAAQAMAAAFACQAEABAAAFQAAAEgGABIgEACQgGADgHASIgDAIIgOAiQgRAsgLAOQgLANgQAAQgHAAgGgEg");
	this.shape_13.setTransform(-58.2,3.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D6E47").s().p("AgFBAQgFgBgEgEQgEgEgBgFQgCgGAAgRIAAg4IgJAAIgEAAIgBgDIAAgDQABgDAKgKIAFgEIAEgDQALgKAEAAIACABIACACIAAAVIAXAAIAFABIABADIAAADQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAIgVAAIgCABIAAADIAAA0QAAANACAEQACAEAGAAIAJgCIAHgCQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQABAGgKAFQgJAGgLAAQgGAAgFgCg");
	this.shape_14.setTransform(-67.8,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D6E47").s().p("AgfA1QgGgCAAgEQAAgEAGgCIACgBQADgCABgDIABgMIAAgHIAAgJIAAgGQAAgTgBgGQgBgGgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgCAFgBIAOgFIAJgCQAGAAABAOIAAADIABAAQAFgJAGgEQAGgFAGAAQAIAAAEAFQAEAEAAAIQAAAHgDAFQgDAEgGAAIgGgBIgEgDIgDgFQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAAAQgIAAgCAKQgDAKAAAgIABAOQABAEADABIAEACQAHACAAAEQAAAEgGACQgGACgOAAQgQAAgFgCg");
	this.shape_15.setTransform(-76,1.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D6E47").s().p("AATAyIgFgFIgGACQgMAJgNAAQgQAAgJgJQgKgJAAgPQAAgRANgJQAMgJAWAAQAFAAACABQAEACAAAEQgBAFgGAAQgLAAgGAGQgHAFAAAJQAAAIAGAFQAGAFAJAAQAJAAAFgEQAEgFAAgLIAAgoQAAgJgEgFQgEgFgGAAQgGAAgEACQgFACgEAFIgCADQgHAIgHAAQgEAAgDgCQgDgDAAgFQAAgKANgHQANgHATAAQALAAAIAEQAJADAFAGQADAEABAGQABAHAAAPIAAAiIABAJQABABAAAAQAAABABAAQAAABABAAQAAAAABAAIADABQAHACAAADQAAAGgIAEQgHAEgJAAQgFAAgFgGg");
	this.shape_16.setTransform(-86.3,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D6E47").s().p("Ag2BMQgHgCABgFQAAgEAGgDIAFgCQACgCABgNIABgtIgBgoQAAgQgCgBQgCgDgFgCQgFgCAAgEQAAgEACgCQAEgCAGAAIAMABIAMAAIAVgBIARAAQAYAAAMAKQAMAKAAAUQAAAWgPAMQgPALgcAAQgKAAAAgHQAAgHAIAAQANAAAJgHQAJgHgBgQQABgPgJgGQgJgIgQAAQgIABgDABQgDABgBADIgBAKIgBAWIAAAuIABAfQAAAHACACIAFACQAHACAAAFQAAAFgGACQgGACgRAAQgRAAgFgCg");
	this.shape_17.setTransform(-98.8,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.partyreadyrecipes, new cjs.Rectangle(-107.6,-15.8,215.3,29.4), null);


(lib.mainbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006F46").s().p("EgQFAzRMAAAhmhMAgLAAAMAAABmhg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.leaderboardtray = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardwhitetray();
	this.instance.parent = this;
	this.instance.setTransform(-79,-22);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboardtray, new cjs.Rectangle(-79,-22,158,44), null);


(lib.leaderboardtable_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardtable();
	this.instance.parent = this;
	this.instance.setTransform(-366,-47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboardtable_1, new cjs.Rectangle(-366,-47,732,94), null);


(lib.leaderboardsomethingdelicious = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D6E47").s().p("AgHA4IgLgCIgEACIgDAAIgCAAIgDgCQgDgDgDgJQgDgIAAgIQAAgDACgCQACgDACAAQAFAAAFAJIAFAGQADAEAFACQAFADAGAAQAHAAAEgEQAEgDAAgGQAAgJgQgJIgHgCQgQgJgHgGQgFgHAAgKQAAgOAKgIQAJgJAQAAIAGAAIAIACIAFgCIADgBQAFAAAFAIQAFAJAAAJQAAADgBADQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgDAAgCgCQgDgCgDgGQgDgGgFgDQgEgCgGAAQgFAAgEADQgEAEAAAFQAAAGAEADQAEAEANAGIABABQAdAOAAARQAAAPgLAKQgLAKgSAAg");
	this.shape.setTransform(100.6,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D6E47").s().p("AAYA2QgCgBAAgEIAAgHIAAgBIgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAABIgCABQgFAFgHADQgFADgIAAQgIAAgHgDQgHgEgEgFQgFgGgDgJQgCgIAAgWIAAgHIABgIIAAgDQgBgIgBgDQgBgCgEgCIgEgBQgGgCgBgDQABgDACgCQACgCAHgCIAPgEIALgCQABAAABAAQAAABABAAQAAAAABABQAAAAABABQABACAAAEIAAAFIgBAnQgBAVAFAJQAEAIALAAQAMAAAFgLQAGgLgBgZIAAgIQAAgIgBgDQgBgCgDgCIgFgBQgGgCAAgDQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQACgCAIgCIAOgEIALgCQABAAABAAQAAABABAAQAAAAABAAQAAABAAAAQACACAAAFIAAAGIgCArIAAASIABAIQABAEAGACIABABQAHACAAADQAAABgBAAQAAABAAABQAAAAAAABQgBAAAAABIgGADIgQAFIgLACQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_1.setTransform(89.1,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D6E47").s().p("AgmAoQgPgQAAgYQAAgXAQgQQAQgQAWAAQAYAAAPAPQAOAPAAAYQAAAYgPAQQgRARgWAAQgXAAgPgQgAgUgfQgGAJAAAOQAAAUAJAPQAJAOAMAAQALAAAGgJQAHgJgBgOQAAgUgJgOQgJgPgLAAQgLAAgHAJg");
	this.shape_2.setTransform(76.3,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D6E47").s().p("AgSBNQgFgDAAgEQAAgEAFgCIADgBQACgCACgDIABgMIAAgHIAAgJIAAgLQAAgRgBgDQgBgGgCgBIgFgBQgHgCAAgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQACgCAFgCIAQgFIAKgCQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAHIAAAGIAAAFIgBAaIAAABIgBAaIABAOQABAFADAAIAEACQAFADAAAEQAAADgFADQgGABgNAAQgQAAgFgBgAgMg1QgFgEAAgGQAAgFAFgEQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAEQgFAEgHAAQgHAAgEgDg");
	this.shape_3.setTransform(66.7,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D6E47").s().p("AghAoQgPgPAAgXQAAgYAQgQQAQgRAXAAQARAAANAKQAMAJAAAMQAAAFgEADQgDADgFAAQgGAAgDgCQgDgDgEgJQgDgHgEgDQgFgDgGAAQgMAAgGAJQgHAJAAAQQAAATAKAMQAKAMAOAAIAKgCIAJgEIAEgDQAFgFAEAAQABAAAAAAQAAAAABABQAAAAABAAQAAAAABABIABADIgDAHIgFAGQgIAIgJADQgKAEgKAAQgWAAgPgQg");
	this.shape_4.setTransform(57.9,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D6E47").s().p("AgSBNQgFgDAAgEQAAgEAFgCIADgBQACgCACgDIABgMIAAgHIAAgJIAAgLQAAgRgBgDQgBgGgCgBIgFgBQgHgCAAgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQACgCAFgCIAQgFIAKgCQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAHIAAAGIAAAFIgBAaIAAABIgBAaIABAOQABAFADAAIAEACQAFADAAAEQAAADgFADQgGABgNAAQgQAAgFgBgAgMg1QgFgEAAgGQAAgFAFgEQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAEQgFAEgHAAQgHAAgEgDg");
	this.shape_5.setTransform(48.7,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D6E47").s().p("AgRBNQgFgCAAgFQAAgDAEgCIAFgDQACgCABgGIABgVIAAgRIAAgTIAAgJQAAgagBgIQgBgIgDgBIgGgDQgHgBAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAIgDIAOgEIAKgBQABAAABAAQABAAAAAAQABAAAAABQAAAAABAAQABACAAAGIAAAIQgBAmAAAmIABAkQAAAIACACIAGADQAFACAAAEQAAAEgFACQgGACgOgBQgPABgFgCg");
	this.shape_6.setTransform(42.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D6E47").s().p("AgiAoQgPgPAAgXQAAgYAQgQQAPgRAXAAQAVAAAMAMQAMAMAAAUQAAAGgCADQgCACgIAAIgoAAQgDAAgDgCQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAgBAAAAQADgCADAAIAWAAIAFAAIABgEQAAgKgGgHQgIgHgJAAQgNAAgFALQgHALABAQQAAAQAIAMQAJAMAMAAQAIAAAGgCQAFgCAFgDIAEgDQAFgEADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQgBACgCAEIgHAHQgKAIgIADQgJAEgKAAQgWAAgPgQg");
	this.shape_7.setTransform(33.2,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D6E47").s().p("AgWBNIgOAAIgJAAIgJAAQgNAAgEgCQgEgBAAgFQAAgEAGgCIAHgEQABgCABgQIABgpIgBgnQgBgQgBgCQgBgCgGgCQgGgDAAgEQAAgEAFgCQAEgCANAAIAJAAIALABIAOgBIAMAAQAnAAAWAUQAWAVAAAlQAAAlgXATQgWATgpAAgAgXg8QgFACgBADQgBAEgBANIgBAgIABAoQABARABADQABADAHADQAHACAKAAQAYAAAMgPQAMgPAAgdQAAgfgOgRQgOgQgZAAQgJAAgFABg");
	this.shape_8.setTransform(18.8,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D6E47").s().p("AgnBGQgOgJAAgLQABgGADgDQACgEAHAAQAEAAACADQACACACAFQADAIAGAFQAHAEANAAQAOAAAJgFQAKgGAAgIQgBgFgDgDQgEgDgHAAIgMABIgQABQgSAAgKgGQgLgHAAgIQAAgGAEgFQAEgEAHgFQgGgFgDgHQgDgHgBgIQAAgSAOgLQANgMAUAAIAKABIARAEQAEAAAEgCIALgHIAEADIABAEQAAAEgDAFQgDAEgGADIADAJIABAIQgBASgMALQgNAKgUAAIgLAAIgLgCIgDAEIgBADQAAAFAFADQAFACAKAAIAQgBIARgBQAPAAAHAGQAIAGAAALQABARgSAMQgQALgZAAQgUAAgOgIgAgRg0QgFAHAAAKQgBALAGAHQAFAHAJAAQAIAAAHgHQAFgHAAgLQAAgLgFgGQgHgHgIAAQgIAAgGAHg");
	this.shape_9.setTransform(-1.4,4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D6E47").s().p("AAOA1QgFgCAAgEQAAgEAGgCIADgCQADgBABgEIABgRQAAghgFgIQgEgJgLAAQgFAAgFADQgGAEgCAGQgCAEgBAJIgBAcIABAOQABADACABIAEACQAFACAAAEQAAAEgFACQgFACgOAAQgQAAgGgCQgFgCAAgEQAAgEAFgCIADgBQACgCACgDIABgMIAAgHIAAgJIAAgKQAAgRgBgFQgBgFgCgBIgFgCQgHgCAAgDQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAABgBQABgCAFgBIAPgFIALgCQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAIABAGIAAAHIABABIAAAAIAAAAIABAAIACgDIADgCQALgLANAAQAHAAAHAEQAIADAEAGQAGAGABAIQADAIAAARIAAAOIgBAGIAAAHIABAKQACADADACIACABQAFACABAEQAAAEgGACQgEACgRAAQgPAAgFgCg");
	this.shape_10.setTransform(-14.3,2.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D6E47").s().p("AgSBNQgFgDAAgEQAAgEAFgCIADgBQACgCACgDIABgMIAAgHIAAgJIAAgLQAAgRgBgDQgBgGgCgBIgFgBQgHgCAAgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQACgCAFgCIAQgFIAKgCQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAHIAAAGIAAAFIgBAaIAAABIgBAaIABAOQABAFADAAIAEACQAFADAAAEQAAADgFADQgGABgNAAQgQAAgFgBgAgMg1QgFgEAAgGQAAgFAFgEQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAEQgFAEgHAAQgHAAgEgDg");
	this.shape_11.setTransform(-24.3,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D6E47").s().p("AAPBNQgGgCAAgEQABgEAFgCIAEgCQACgBABgFIABgQQAAgigEgIQgFgJgLAAQgFAAgFAEQgFADgDAFQgCAFgBAIIgBAdIABAOQABAEACABIAEACQAGACgBAEQAAAEgEACQgGABgNAAQgSAAgFgBQgEgCAAgFQAAgDAEgCIADgCQAEgBABgFIAAgQIAAgRIAAgQIAAgwQgBgMgBgCQgBgCgHgBQgGgCAAgEQAAgDACgCQADgCAKgDIAKgDIAKgBQAEAAABACQABACABAEIAAAFIgBAqIAAAGIAAACIACABIACgCIAEgFQAFgFAGgCQAFgDAHAAQASAAAJAMQAJAMAAAXIAAAKIAAATIAAAGIABAIIAEADIACACQAGABAAAEQAAAFgFACQgGABgQAAQgOAAgFgBg");
	this.shape_12.setTransform(-34.2,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D6E47").s().p("AgFBAQgFgCgEgDQgEgEgCgGQgBgFAAgQIAAg5IgJAAIgEgBIgBgCIAAgCQAAgEAMgKIAEgDIAEgEQALgKAEAAIADABIABADIAAAUIAXAAIAFAAIAAAEIAAADQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAIgWAAIgBABIAAADIAAA0QAAAOABADQADADAGABIAJgCIAHgCQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAGgJAFQgJAGgLAAQgGAAgFgCg");
	this.shape_13.setTransform(-44.6,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D6E47").s().p("AgiAoQgPgPAAgXQAAgYAPgQQAQgRAXAAQAVAAAMAMQAMAMAAAUQAAAGgCADQgCACgIAAIgoAAQgDAAgCgCQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAQACgCADAAIAVAAIAGAAIABgEQAAgKgHgHQgHgHgJAAQgNAAgGALQgFALgBAQQAAAQAJAMQAIAMANAAQAIAAAFgCQAGgCAFgDIAEgDQAFgEADAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAACgCAEIgIAHQgIAIgKADQgIAEgKAAQgWAAgPgQg");
	this.shape_14.setTransform(-54.6,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D6E47").s().p("AAvA1QgFgCAAgEQAAgEAGgCIAEgCQACgBABgFIABgSQABgfgFgJQgEgIgMAAQgMAAgFALQgGALABAZIAAAGIABAPQABADACACIADABQAFACAAAEQABAEgGACQgEACgRAAQgOAAgFgCQgFgCAAgEQAAgEAGgCIADgCQADgBABgEIABgRQAAghgFgIQgEgJgLAAQgGAAgFADQgFAEgDAGQgCAEgCAJIgBAcIABAOQACADACABIAEACQAGACAAAEQAAAEgGACQgFACgOAAQgQAAgGgCQgFgCAAgEQAAgEAFgCIADgBQADgCABgDIABgMIAAgHIAAgJIAAgGQAAgTgBgGQgBgGgCgBIgFgCQgHgCABgDQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBIAGgDIAQgGIAKgCQABAAABAAQAAABABAAQAAAAABAAQAAABABAAQABACAAAEIAAAFIAAACIAAABIABAAIAAAAIABAAIADgDIABgBQAMgMAOAAIAKACQAEABAEADQADADAFAFIAEAFQABAAAEgEIAEgEQAHgGAFgCQAFgDAHAAQAMAAAJAFQAKAFAEAJQAEAKAAAfIAAAKIAAAGIAAAFIABAJQABACAEACIACABQAGACAAAEQgBAEgFACQgEACgRAAQgPAAgGgCg");
	this.shape_15.setTransform(-70.6,2.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D6E47").s().p("AgmAoQgPgQAAgYQAAgXAQgQQAPgQAXAAQAYAAAOAPQAPAPAAAYQAAAYgQAQQgPARgXAAQgXAAgPgQgAgTgfQgHAJAAAOQAAAUAJAPQAJAOAMAAQAKAAAHgJQAGgJAAgOQABgUgKgOQgJgPgLAAQgLAAgGAJg");
	this.shape_16.setTransform(-86.8,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D6E47").s().p("AgaBNQgMgCgHgFQgEgDgDgIQgDgKAAgMQAAgFACgDQACgCADAAQAFAAAGAJIACAFQAHAMAIAGQAIAFALAAQALAAAIgHQAIgHAAgKQAAgPgfgOIgDgCQgagKgJgJQgIgKAAgPQAAgTAOgMQAOgNAXAAIAMABIAOAEIAFgDIADgBQABAAAAAAQABAAABAAQAAABABAAQAAAAABABIAEAFQAEAHACAHQACAHAAAFQAAAEgCACQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAAAAAQgGAAgFgIIgCgCQgGgIgHgDQgHgFgJAAQgLABgHAFQgHAGAAAJQAAAJAGAGQAFAFAXALIAEABQATAJAJAGQAGAGADAGQADAIAAAJQAAAVgQANQgPAMgagBQgNAAgMgCg");
	this.shape_17.setTransform(-99.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboardsomethingdelicious, new cjs.Rectangle(-107.8,-14.6,215.6,29.4), null);


(lib.leaderboardsignup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQAsQgIgEgGgGIAKgIQAEAFAFADQAFACAGAAIAGgBIAGgCQACgCACgDQACgDAAgEQAAgEgCgDIgFgFIgHgDIgHgCIgIgEQgFgBgDgCQgDgDgCgEQgCgEAAgHQAAgGACgGQADgEAFgDQAEgEAFgBIALgBIAHAAIAHACQAHADAFAEIgJAJQgDgEgFgCQgEgCgGAAIgFAAIgGADIgEAFQgCADAAAEQAAAEACACIAEAEIAGADIAGACIAJAEIAJADQAEAEACADQADAFAAAHQAAAHgDAFQgDAFgEAEQgEADgGABQgGACgFAAQgIAAgIgDg");
	this.shape.setTransform(63.3,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAtIAAhZIAMAAIAABOIAoAAIAAALg");
	this.shape_1.setTransform(56.7,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAtIAAhZIALAAIAABZg");
	this.shape_2.setTransform(50.8,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfAtIgKgWIgqAAIgJAWIgOAAIAohZIAKAAIAnBZgAARAMIgRgpIgQApIAhAAg");
	this.shape_3.setTransform(44.2,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiAtIAAhKIgeBKIgHAAIgehKIgBAAIAABKIgMAAIAAhZIAUAAIAaBEIAAAAIAbhEIAUAAIAABZg");
	this.shape_4.setTransform(33.5,0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgdAtIAAhZIA5AAIAAALIgsAAIAAAbIApAAIAAAKIgpAAIAAAeIAuAAIAAALg");
	this.shape_5.setTransform(23.9,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AARAtIgWgoIgOAAIAAAoIgMAAIAAhZIAdAAQAFAAAGABIAKAEQAFADACAFQADAFAAAHQAAAKgGAGQgDADgEABIgJADIAZApgAgTgFIAPAAIAHAAIAHgDIAEgEQACgDAAgEQAAgEgCgDQgBgDgDgBIgGgDIgHAAIgQAAg");
	this.shape_6.setTransform(12.3,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgJAuIgJgCQgJgEgGgGQgHgHgDgIQgEgJAAgKQAAgKAEgJQADgJAHgGQAGgGAJgEIAJgCIAJAAQAKAAAJACIAIAFIAHAFQAHAGADAJQAEAJAAAKQAAAKgEAJQgDAIgHAHIgHAGIgIAEQgJADgKAAIgJgBgAgNghQgHADgEAFQgEAFgDAHQgCAHAAAGQAAAHACAHQADAHAEAFQAFAEAGADQAGADAHAAQAIAAAGgDQAGgDAFgEQAEgFADgHQACgHAAgHQAAgGgCgHQgDgHgEgFQgFgFgGgDQgGgDgIAAQgHAAgGADg");
	this.shape_7.setTransform(2.2,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgbAtIAAhZIA3AAIAAALIgrAAIAAAcIAoAAIAAAKIgoAAIAAAog");
	this.shape_8.setTransform(-6.9,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgdAtIAAhZIAbAAQAHAAAGABQAGACAEADQAFADACAFQACAEAAAHQAAAHgCAFQgDAFgFACQgEADgGABQgGACgGAAIgOAAIAAAngAgQgEIANAAIAHgBQAFgBACgCQADgBABgDQACgDAAgEQAAgEgCgDQgBgDgDgBIgHgDIgHAAIgNAAg");
	this.shape_9.setTransform(-18.2,0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAtIgIgCIgGgDIgEgFQgFgEgCgHQgCgGAAgIIAAg4IAMAAIAAA4IABAJQACAFADADQACADAFADQAEACAFAAQAGAAAFgCQAEgDADgDIADgIIABgJIAAg4IANAAIAAA4QAAAIgCAGQgCAHgEAEIgGAFIgGADIgGACIgJABIgHgBg");
	this.shape_10.setTransform(-27.2,0.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAWAtIguhJIgBAAIAABJIgMAAIAAhZIAQAAIAuBHIABAAIAAhHIAMAAIAABZg");
	this.shape_11.setTransform(-40.7,0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLAsQgJgEgHgGQgGgHgEgIQgDgJAAgKQAAgKADgJQAEgJAGgGIAIgFIAIgFQAJgCAJAAIAKAAIAJACQAJADAGAGIgJAJQgFgEgFgDIgHgCIgIgBQgHAAgGADQgHADgEAFQgFAFgCAHQgCAHgBAGQABAHACAHQACAHAFAFQAEAEAHADQAGADAHAAIAMgBIAJgDIAAgZIgUAAIAAgKIAhAAIAAArQgHADgJACQgLACgHAAQgKAAgIgDg");
	this.shape_12.setTransform(-51.1,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAtIAAhZIALAAIAABZg");
	this.shape_13.setTransform(-58,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgQAsQgIgEgGgGIAKgIQAEAFAFADQAFACAGAAIAGgBIAGgCQACgCACgDQACgDAAgEQAAgEgCgDIgFgFIgHgDIgHgCIgIgEQgFgBgDgCQgDgDgCgEQgCgEAAgHQAAgGACgGQADgEAFgDQAEgEAFgBIALgBIAHAAIAHACQAHADAFAEIgJAJQgDgEgFgCQgEgCgGAAIgFAAIgGADIgEAFQgCADAAAEQAAAEACACIAEAEIAGADIAGACIAJAEIAJADQAEAEACADQADAFAAAHQAAAHgDAFQgDAFgEAEQgEADgGABQgGACgFAAQgIAAgIgDg");
	this.shape_14.setTransform(-63.8,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboardsignup, new cjs.Rectangle(-68.9,-9.3,138,18.7), null);


(lib.leaderboardlogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNgAgYgYQgKAKAAAOQAAAQAKAKQAKAKAOAAQAPAAAKgKQAKgKAAgQQAAgOgKgKQgKgKgPAAQgOAAgKAKgAAMAZIgOgVIgFAAIAAAVIgJAAIAAgzIATAAQARAAAAAPQAAANgNABIAPAWgAgHgDIAGAAQANAAAAgIQAAgHgMAAIgHAAg");
	this.shape.setTransform(64.1,29.1,0.491,0.491);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjnEaQgUgDgIgEQgJgFAAgNQAAgKAGgHQAFgHAJAAIARAAQAKAAAFgLQADgKgBgXIAAl5QABgXgDgKQgFgLgKAAIgRAAQgJAAgFgHQgGgHAAgKQAAgNAJgFQAIgEAUgDQBegNBrAAQBNAAA1ASQA1ASAnAoQAlAlAVA5QATA4AABEQAABNgZA9QgZA+gwAlQglAegvAOQgxAOhEAAQhrAAhegNgAgvjrQgcAFgKALQgKAMAAAhIAAFjQAAAhAVALQANAHAnADQBNAEAshAQAqg/ABhwQAAhwgrg/Qgrg/hKAAIgdADg");
	this.shape_1.setTransform(30.6,14.8,0.491,0.491);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNBlQgFgDAAgHIAAiTQAAgKgMAAIgyAAQgKAAAAgPIABgNQACgIAHAAICfAAQAMAAAAASQAAASgLAAIgyAAQgMAAAAAKIABCTQAAAHgFADQgEACgKAAQgJAAgEgCg");
	this.shape_2.setTransform(39.9,43.4,0.491,0.491);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBmQgNAAAAgPIAAiuQAAgOANAAICbAAQAGAAADAFQACADAAAJQAAAKgCADQgDAGgHAAIh5AAQgIAAAAAJIAAAbQAAAKAKAAIBFAAQALAAAAASQAAAQgKAAIhFAAQgLAAAAALIAAAeQAAAKAKAAIB4AAQAKAAAAATQAAARgKAAg");
	this.shape_3.setTransform(25.7,43.4,0.491,0.491);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAxBgIhAhGQgLgJgTAAQgFAAgEAEQgDAFAAAGIAAA8QAAAMgVAAQgRAAAAgNIAAi0QAAgIAFgCQAEgCALAAQASAAAAAMIAAA3QAAANAJAAQALAAAFgDQAEgBAFgFIBJhDQANgLAMAMQAMALgKAKIhAA6QgJAIAJAJIBOBWQAIAIgGAFQgFAFgNAAQgTAAgHgIg");
	this.shape_4.setTransform(11.1,43.4,0.491,0.491);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAvBeIghgxQgFgJgKAAIgtAAQgEAAgDADQgDACgBAFIABAwQAAAHgKACIgPAAQgNAAAAgLIAAi6QAAgIAJAAIBrAAQAgAAAUASQAVAUgBAgQAAAXgOAPQgIAJgPAJQgHAIAEAFIAiAyQAFAHgFAFQgEAEgPAAQgRAAgFgJgAg5g4IAAAuQABAFAEADQAEACAFAAIA+AAQAQAAALgHQALgKAAgPQAAgRgLgJQgLgJgQAAIg+AAQgOAAAAALg");
	this.shape_5.setTransform(-5.5,43.4,0.491,0.491);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABCBgIgOgbQgCgHgHAAIhTAAQgJAAgEALIgMAXQgDAHgSAAQgWAAAFgMIBZi4QAFgKAKAAQALAAAFAJIBXC6QADAGgJAEQgGACgIAAQgPAAgDgIgAgEgdIgYAyQgDAIAIAAIAwAAQABAAABAAQAAgBABAAQABAAAAAAQAAgBABAAQACgCgCgDIgZgzQgBgDgEAAQgCAAgCADg");
	this.shape_6.setTransform(-21.8,43.4,0.491,0.491);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABZBlQgFgDAAgFIgOhrQgCgHgFAAQgDAAgDAEIgxA+QgEAFgFAAQgHAAgEgHIgtg7QgCgDgEAAQgFAAgBAHIgOBpQgCAKgTAAQgGAAgFgCQgGgDAAgGIAVixQACgJADgCQAEgFALAAQAKAAAFAIIA4BPQAFAIAEAAQAEAAAHgIIA7hQQAEgIALAAQAGAAADACQAEADACAJIAVC1QABAKgXAAQgFAAgFgCg");
	this.shape_7.setTransform(-38.4,43.4,0.491,0.491);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AipF/QhPhTAAiLQAAhZAghEQAghCA6gnQAZgTAmgTQAmgTAngOQAKgDgDgJQgCgKgNADQg7ALgrgSQgWgJgdgRQghgUgJgEQgvgWg6AZQgVAJgMgLQgLgLAGgXQAXhWBDg3QBKg9BQAXQA0APAlA0QAmA2AfALQATAGgBAPQAAAOgRADQgaAFgjgRQgggPgdgbQgfgcgvgCQgsgCgbAVQgLAIADAHQAEAHAKgDQAggHAdAGQAoAIAbAgQAkAoAuAPQA4ASAugfIAZgWQANgNAMAEQAPAEgBAUQgBAUgTAZQgiAsg+AeQhFAjgeAdQgwAwgTA9QgPAzAABQQAAByAqBAQAqBABKAAQBKAAArhCQAqhBAAhwQAAhfgXg4QgZg6g2gVQgbgKAFgTQAFgUAhgEQA3gGA8AsQBoBOAACjQAACOhPBVQhQBUiHAAQiDAAhPhUg");
	this.shape_8.setTransform(7.2,-26.7,0.491,0.491);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABnDxQhFg2gYheIgBgDQgCgLgHABQgGgBgCALIgBABQgYBghGA2QhIA2hoAAQh+AAhMhQQhMhRAAiFQAAiGBMhRQBLhQCAAAQBpAABHA2QBHA3AXBgQACALAGgBQAHAAACgLIABAAQAXhgBGg2QBHg2BoAAQB/AABNBPQBMBQAACGQAACHhMBRQhNBQiBAAQhmAAhHg2gACniqQgpA/AABtQAABtApA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/gAmFiqQgoA/AABtQAABtAoA9QAoA+BIAAQBGAAApg/QAphAAAhrQAAhqgqhAQgpg/hHAAQhGAAgoA/g");
	this.shape_9.setTransform(-10.3,14.9,0.491,0.491);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ai5EbQgWAAgJgFQgIgFAAgOQAAgKAGgHQAHgHAJAAIARAAQAKAAAEgLQADgJAAgYIAAl7QAAgXgDgKQgCgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgJQAAgOAJgGQAIgFAWAAIFvAAQAaAAAEAVIAMA7QAEAQgFAJQgFAJgMAAQgPAAgHgOQgEgFgFgNQgFgQgPgFQgNgEggAAIhtAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAFADAdAAIBFAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAJgOAAQgTAAgEgXIAAgFQgCgNgIgDQgHgEgbAAIhFAAQgeAAgEAEQgIAFAAAZIAACLQAAAbACAGQAGALAMAAIATAAQAKAAAGAHQAGAHAAAKQAAAOgJAFQgIAFgYAAg");
	this.shape_10.setTransform(-48.4,14.8,0.491,0.491);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhTEbIgTgEQgIAAgKAJQgKAIgJAAQgLAAgGgHQgGgGgEgQIgVhUQgCgIAAgJQAAgMAHgIQAIgHAMAAQAMAAAJALIAMARQAWAfAhASQAiASAkAAQApAAAagVQAZgUAAgiQAAghgbgfQgbgdg/gsIhNg2QgSgPgTgWQgggmAAgzQAAg9ArgmQArgmBGAAQAlAAAjAIIAWAFIALACQAJAAALgIQAKgHAIAAQASAAAGAYIAUBcQABAEAAAIQAAAIgHAGQgHAGgKAAQgMAAgLgOQgNgVgHgIQgGgGgOgLQgjgbgtAAQgcAAgSAPQgRAQAAAaQAAAXAJALQAMASAbAWIApAdQAzAkAWARQAXASAUAUQAWAWAMAfQAMAeAAAhQAABJgyAtQgzAthUAAQgzAAglgNg");
	this.shape_11.setTransform(54.1,14.9,0.491,0.491);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah+EYQgLgJgHgYIhJjYQgBgFgEAAQgFAAgBAFIhNDYQgKAagHAIQgNAIgQABQgTgBgKgIQgLgKgJgYIimm+QgKgZgHgIQgHgHgUgFQgOgBgFgGQgFgFAAgKQAAgXAdAAICvAAQAcAAAAAXQAAAMgHAEQgHAFgRABQgOACgGAEQgGAFAAALQAAAIADALIBzFGQACAFAFAAQAEgBACgFIA/i1QAIgZgHgYIglhuQgEgJgHgFQgGgEgPgEQgNgEgGgEQgFgGAAgJQAAgaAdAAICnAAQAdAAAAAXQAAATgcAFQgRABgFAFQgGAFAAALQAAALAIAZIBfEsQACAFAEAAQAFgBABgFIBdk6QAEgLAAgJQAAgTgdgDQgbgCAAgWQAAgMAHgGQAIgGARAAIElAAQAVAAAIAGQAIAFAAAOQAAAKgGAHQgGAHgJAAIgQAAQgLAAgFAKQgCAJAAAZIAABuQAAAdAFAHQAGAGAXAAIB0AAQAXAAAHgHQADgEAAgGIABgfIAAhoQAAgbgDgHQgFgKgKAAIgQAAQgKAAgHgHQgGgHAAgKQAAgOAIgFQAJgGAWAAICaAAQAWAAAJAGQAJAFAAAOQAAAKgHAHQgGAHgJAAIgSAAQgEAAgEADQgFAEgBADQgDAKAAAYIAAF8QAAAYADALQABADAFAEQAEACAEAAIASAAQAJAAAGAIQAHAGAAAKQAAAOgJAGQgIAEgXAAIiaAAQgWAAgIgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIAQAAQAKABAFgKQADgIAAgbIAAh8IgBgdQAAgHgDgDQgHgIgXAAIh0AAQgXAAgGAHQgFAGAAAeIAACAQAAAZACAKQAFAKALgBIAQAAQAJAAAGAIQAGAGAAALQAAANgIAGQgIAEgVAAIiaAAQgWAAgJgEQgIgGAAgOQAAgKAGgGQAHgIAJAAIARAAQAEAAAFgCQAEgEABgDQADgIAAgbIAAl8QAAgwgkAEQgLABgHAJQgIAKgGAVIiHGzQgJAfgKAMQgLAKgTABQgTAAgLgKg");
	this.shape_12.setTransform(-36.7,-18.1,0.491,0.491);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AihEbQgWAAgIgFQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDACgEQADgIAAgXIAAmAQAAgZgDgHQgDgMgLAAIgRAAQgKABgGgHQgHgHAAgKQAAgOAJgFQAJgGAWAAICcAAQAWAAAJAGQAJAFAAAOQAAAKgGAHQgHAHgJgBIgSAAQgOAAgDAMQgDAFAAAbIAAFkQAAAdACAJQACAJAIAFQAGAFALABQALACAaAAIAwAAQAvAAAPggIAIgQQAIgPAPAAQAMgBAFAJQAFAJgEAQIgNBCQgEAVgaAAg");
	this.shape_13.setTransform(34,-18.3,0.491,0.491);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AjREWQgIgGAAgOQAAgJAGgHQAGgGAJAAIARAAQAEAAAEgEQAEgDABgEQAEgIAAgaIAAl7QAAgZgEgIQgBgGgEgDQgEgEgEAAIgRAAQgJAAgHgHQgGgHAAgKQAAgNAJgGQAIgFAWAAIFSAAQAZAAAFAVIAMA7QADAQgFAJQgFAIgMAAQgPAAgGgNQgDgCgGgQQgGgQgPgFQgMgEggAAIhQAAQghAAgJAJQgIAJAAAiIAABkQAAAaAIAFQAEADAeAAIAmAAQAbAAAIgDQAHgDACgNIAAgFQAEgWATAAQAOAAAFAJQAFAJAAAWIAABHQAAAWgFAJQgFAIgOAAQgTAAgEgWIAAgFQgCgNgIgDQgHgEgbAAIgmAAQgeAAgEAEQgIAFAAAZIAABsQAAAiADALQADALAKAEQAPAFAiAAIBVAAQAvAAAPgfIAHgQQAIgQAPAAQAMAAAFAJQAFAJgDAQIgNBCQgFAVgaAAIlhAAQgWAAgIgFg");
	this.shape_14.setTransform(56.2,-18.3,0.491,0.491);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0C6E47").s().p("AqoZMQk7iEjyjzQjxjxiFk6QiKlGAAljQAAljCKlGQCFk6DxjzQDzjxE6iFQFFiKFjAAQFkAAFFCKQE7CFDxDxQDyDzCFE6QCKFGAAFjQAAFjiKFGQiFE6jyDxQjxDzk7CEQlFCKlkAAQljAAlFiKg");
	this.shape_15.setTransform(0,0,0.491,0.491);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboardlogo, new cjs.Rectangle(-86,-86,172,172), null);


(lib.leaderboardholidayinspiration = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D6E47").s().p("AAOA1QgFgCAAgEQAAgEAFgCIAFgCQACgBABgEIABgRQAAghgEgIQgFgJgLAAQgFAAgFADQgGAEgCAGQgDAEgBAJIAAAcIAAAOQABADADABIAEACQAFACAAAEQAAAEgFACQgGACgNAAQgRAAgEgCQgGgCAAgEQAAgEAFgCIADgBQADgCABgDIABgMIAAgHIAAgJIAAgKQAAgRgBgFQgBgFgCgBIgFgCQgGgCAAgDQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQADgCAEgBIAPgFIAMgCQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIABAGIAAAHIAAABIABAAIAAAAIABAAIADgDIABgCQAMgLANAAQAIAAAGAEQAIADAFAGQAEAGADAIQACAIAAARIAAAOIAAAGIAAAHIABAKQAAADADACIADABQAGACgBAEQAAAEgEACQgGACgQAAQgPAAgFgCg");
	this.shape.setTransform(90.9,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D6E47").s().p("AgmAoQgPgQAAgYQAAgXAQgQQAPgQAYAAQAXAAAOAPQAPAPAAAYQAAAYgPAQQgRARgWAAQgXAAgPgQgAgUgfQgGAJAAAOQAAAUAJAPQAJAOAMAAQAKAAAHgJQAGgJABgOQgBgUgIgOQgKgPgMAAQgKAAgHAJg");
	this.shape_1.setTransform(78.1,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D6E47").s().p("AgSBNQgFgDAAgEQAAgEAFgCIADgBQACgCACgDIABgMIAAgHIAAgJIAAgLQAAgRgBgDQgBgGgCgBIgFgBQgHgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAFgCIAQgFIAKgCQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAHIAAAGIAAAFIgBAaIAAABIgBAaIABAOQABAFADAAIAEACQAFADAAAEQAAADgFADQgGABgNAAQgQAAgFgBgAgMg1QgFgEAAgGQAAgFAFgEQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAEQgFAEgHAAQgHAAgEgDg");
	this.shape_2.setTransform(68.5,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D6E47").s().p("AgFBAQgFgCgEgDQgEgEgCgGQgBgFAAgQIAAg5IgKAAIgDgBIAAgCIAAgCQAAgEALgKIAEgDIAEgEQALgKAEAAIADABIAAADIAAAUIAZAAIADAAIABAEIAAADQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgXAAIgBABIgBADIAAA0QAAAOACADQADADAGABIAJgCIAHgCQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAQgBAGgIAFQgJAGgMAAQgGAAgFgCg");
	this.shape_3.setTransform(61.3,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D6E47").s().p("AATAyIgGgFIgEACQgNAJgNAAQgPAAgKgJQgKgJAAgPQAAgRAMgJQANgJAWAAQAFAAADABQACACAAAEQABAFgIAAQgKAAgHAGQgGAFAAAJQAAAIAGAFQAFAFAKAAQAJAAAFgEQAEgFAAgLIAAgoQAAgJgEgFQgEgFgHAAQgFAAgFACQgEACgEAFIgDADQgGAIgHAAQgEAAgCgCQgDgDAAgFQAAgKAMgHQANgHATAAQALAAAJAEQAIADAEAGQAEAEABAGQABAHABAPIAAAiIAAAJQABABAAAAQAAABABAAQAAABABAAQAAAAAAAAIAEABQAHACAAADQAAAGgHAEQgIAEgJAAQgFAAgFgGg");
	this.shape_4.setTransform(51.4,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D6E47").s().p("AgfA1QgGgCAAgEQAAgEAGgCIACgBQADgCABgDIABgMIAAgHIAAgJIAAgGQAAgTgBgGQgBgGgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgCAFgBIAOgFIAJgCQAGAAABAOIAAADIABAAQAFgJAGgEQAGgFAGAAQAIAAAEAFQAEAEAAAIQAAAHgDAFQgDAEgGAAIgGgBIgEgDIgDgFQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAAAQgIAAgCAKQgDAKAAAgIABAOQABAEADABIAEACQAHACAAAEQAAAEgGACQgGACgOAAQgQAAgFgCg");
	this.shape_5.setTransform(41.2,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D6E47").s().p("AgSBNQgFgDAAgEQAAgEAFgCIADgBQACgCACgDIABgMIAAgHIAAgJIAAgLQAAgRgBgDQgBgGgCgBIgFgBQgHgCAAgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQACgCAFgCIAQgFIAKgCQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAHIAAAGIAAAFIgBAaIAAABIgBAaIABAOQABAFADAAIAEACQAFADAAAEQAAADgFADQgGABgNAAQgQAAgFgBgAgMg1QgFgEAAgGQAAgFAFgEQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAEQgFAEgHAAQgHAAgEgDg");
	this.shape_6.setTransform(33.3,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0D6E47").s().p("AgzBJQgGgCAAgFQAAgDAFgBIAGgEQACgCABgIQAAgIAAgbIAAgRQAAgdAAgIQgCgJgCgBIgFgBQgGgCgBgEQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAAAQADgCAEgCIAPgFIAKgCQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQACABAAAEIAAAFIAAACIAAABIAEgDIAEgCQAHgFAFgDQAGgCAGAAQAUAAANAOQAMAOAAAYQAAAYgNARQgPARgVAAQgKgBgDgCQgDgCAAgFIABgEQACgBADgBIACABIAEAAQAMAAAHgKQAHgKAAgQQAAgRgHgMQgJgLgMAAQgJAAgHAGQgHAHABAQIAABDIAAALQAAAEACABIAGADIAEACIACACIABACQABAFgHABQgGACgPgBQgPABgGgCg");
	this.shape_7.setTransform(23.3,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0D6E47").s().p("AgHA4IgLgCIgEACIgDAAIgCAAIgCgCQgEgDgDgJQgDgIAAgIQAAgDACgCQABgDADAAQAFAAAFAJIAFAGQADAEAFACQAGADAFAAQAHAAAEgEQAEgDAAgGQAAgJgQgJIgHgCQgRgJgFgGQgHgHABgKQgBgOAKgIQAKgJAQAAIAGAAIAIACIAFgCIADgBQAFAAAGAIQAEAJAAAJQAAADgBADQgBABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgCAAgDgCQgDgCgDgGQgEgGgEgDQgEgCgGAAQgGAAgDADQgEAEAAAFQAAAGAEADQAEAEANAGIAAABQAeAOAAARQAAAPgLAKQgLAKgSAAg");
	this.shape_8.setTransform(12.1,2.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0D6E47").s().p("AAOA1QgFgCAAgEQAAgEAGgCIADgCQADgBABgEIABgRQAAghgFgIQgEgJgLAAQgFAAgFADQgGAEgCAGQgCAEgCAJIAAAcIAAAOQACADACABIAEACQAFACAAAEQAAAEgFACQgGACgNAAQgQAAgGgCQgFgCAAgEQAAgEAFgCIADgBQACgCACgDIABgMIAAgHIAAgJIAAgKQAAgRgBgFQgBgFgCgBIgFgCQgHgCABgDQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQACgCAEgBIAPgFIALgCQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAIABAGIAAAHIAAABIABAAIAAAAIABAAIADgDIACgCQAMgLAMAAQAIAAAGAEQAIADAFAGQAEAGACAIQADAIAAARIAAAOIAAAGIAAAHIABAKQABADACACIADABQAFACABAEQAAAEgGACQgEACgRAAQgPAAgFgCg");
	this.shape_9.setTransform(0.7,2.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0D6E47").s().p("AgWBLQgGgCAAgEQAAgFAHgDIAFgBQACgCABgNIABgtIgBgoQgBgRgBgBQgBgCgGgCQgGgDAAgEQAAgEAFgBQAFgCASAAQATAAAFACQAFABAAAEQAAAEgHADIgFACQgCACgBALIgBAjIABAyQABATABACQABABAGACQAGACAAAFQAAAEgGACQgGACgRAAQgQAAgGgCg");
	this.shape_10.setTransform(-9.5,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0D6E47").s().p("AgxBHQgFgFAAgHQAAgFAEgEQAEgEAFAAIAFABIADADIADAEQADAEACAAQAFAAAGgIQAFgIAAgIQAAgKgHgQIgBgDIgRglIgKgUQgCgEgGgDIgFgDIgBgEQAAgEAFgCQAGgCAPAAQAQAAAFACQAFABAAAFIAAADIgCACIgEACQgEABAAACIACAIIAJAWIAIAUQACAFACAAQABAAACgFIAHgRIAIgVIADgKQAAgEgGgDQgGgDAAgDQAAgEAFgBQAEgCANAAQAMAAAFACQAEABAAAFQAAAEgGABIgEACQgGADgHASIgDAIIgOAiQgRAsgLAOQgLANgQAAQgHAAgGgEg");
	this.shape_11.setTransform(-25.1,4.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0D6E47").s().p("AATAyIgFgFIgGACQgMAJgNAAQgPAAgKgJQgKgJAAgPQAAgRANgJQAMgJAWAAQAFAAADABQACACAAAEQABAFgIAAQgKAAgHAGQgGAFAAAJQAAAIAGAFQAGAFAJAAQAKAAAEgEQAEgFAAgLIAAgoQAAgJgEgFQgEgFgHAAQgFAAgFACQgEACgEAFIgCADQgHAIgHAAQgEAAgCgCQgEgDAAgFQAAgKANgHQAMgHAUAAQALAAAJAEQAIADAEAGQAEAEABAGQACAHAAAPIAAAiIABAJQAAABAAAAQAAABABAAQAAABABAAQAAAAAAAAIAEABQAHACAAADQAAAGgIAEQgGAEgKAAQgFAAgFgGg");
	this.shape_12.setTransform(-36.5,2.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0D6E47").s().p("AguBBQgNgPAAgXQAAgaAPgPQAOgRAYAAIAHABQACABACADQACACAAACQAAAGgHAAIgDAAIgCAAQgMAAgHAKQgHAIAAARQAAASAHALQAJALALAAQAKAAAHgFQAGgHAAgMIAAgdIAAgwQAAgIgBgCQgCgEgEgBIgCgBQgHgCAAgEQAAgDACgBIALgGIAMgDIAKgBQAEAAABACQACACAAAFIAAAFIgBBBIAAAtQABAKACABIAHADQAGABgBAEQAAAFgPAFIgLACIgHABQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgCgBABgEIAAgFIAAgCIgBgBIgEACIgEADQgGAGgFABQgGADgIAAQgTAAgNgOg");
	this.shape_13.setTransform(-48.8,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0D6E47").s().p("AgSBNQgFgDAAgEQAAgEAFgCIADgBQACgCACgDIABgMIAAgHIAAgJIAAgLQAAgRgBgDQgBgGgCgBIgFgBQgHgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAFgCIAQgFIAKgCQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAHIAAAGIAAAFIgBAaIAAABIgBAaIABAOQABAFADAAIAEACQAFADAAAEQAAADgFADQgGABgNAAQgQAAgFgBgAgMg1QgFgEAAgGQAAgFAFgEQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAEQgFAEgHAAQgHAAgEgDg");
	this.shape_14.setTransform(-59.1,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0D6E47").s().p("AgRBNQgFgCAAgFQAAgDAEgCIAFgDQACgCABgGIABgVIAAgRIAAgTIAAgJQAAgagBgIQgBgIgDgBIgGgDQgHgBAAgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQACgCAIgDIAOgEIAKgBQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQABACAAAGIAAAIQgBAmAAAmIABAkQAAAIACACIAGADQAFACAAAEQAAAEgFACQgGACgOgBQgPABgFgCg");
	this.shape_15.setTransform(-65.7,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0D6E47").s().p("AgmAoQgPgQAAgYQAAgXAQgQQAPgQAYAAQAXAAAOAPQAPAPAAAYQAAAYgPAQQgRARgWAAQgXAAgPgQgAgUgfQgGAJAAAOQAAAUAJAPQAJAOAMAAQAKAAAHgJQAHgJAAgOQgBgUgIgOQgKgPgMAAQgKAAgHAJg");
	this.shape_16.setTransform(-75,2.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D6E47").s().p("AAYBLQgGgCAAgEQAAgFAGgDIAFgBQACgCABgGIAAgaIAAgPIgBgEQgBgCgFAAQgFgBgUAAIgWAAQgGABgCACIgBACIAAAIIAAAJIAAAaQABAGACACIAEABQAHADAAAFQAAAEgGACQgGACgRAAQgQAAgGgCQgGgCAAgEQAAgFAGgDIAFgBQACgCABgOIABgsIgBgoQgBgRgBgBQgBgCgGgCQgFgDAAgEQAAgEAFgBQAEgCATAAQATAAAFACQAFABAAAEQAAAEgHADIgEACQgCACgBAGIgBAgQAAAFAEABQAEACAQAAIAIAAIAWgBQAHgBACgCIABgCIAAgDIAAgGIAAgaQgBgFgCgCIgFgCQgGgDAAgEQAAgEAFgBQAFgCATAAQATAAAEACQAFABAAAEQAAAEgHADIgEACQgCACgBAOIgBAsIAAAoQABAQACADQABABAFACQAGACAAAFQAAAEgGACQgGACgQAAQgSAAgFgCg");
	this.shape_17.setTransform(-89.6,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboardholidayinspiration, new cjs.Rectangle(-99.8,-14.6,199.7,29.4), null);


(lib.leaderboarddiytips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D6E47").s().p("AgHA4IgMgCIgDACIgDAAIgCAAIgDgCQgDgDgDgJQgDgIAAgIQAAgDACgCQACgDADAAQAEAAAFAJIAEAGQAEAEAFACQAGADAFAAQAHAAAEgEQAEgDAAgGQAAgJgRgJIgGgCQgQgJgHgGQgFgHgBgKQAAgOALgIQAJgJAPAAIAHAAIAIACIAFgCIADgBQAGAAAEAIQAFAJAAAJQAAADgCADQAAABAAAAQgBAAAAABQgBAAgBAAQAAAAgBAAQgDAAgCgCQgCgCgDgGQgFgGgEgDQgEgCgGAAQgFAAgEADQgEAEAAAFQAAAGAEADQAEAEANAGIABABQAdAOAAARQAAAPgLAKQgMAKgRAAg");
	this.shape.setTransform(39.2,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D6E47").s().p("AgzBJQgGgCABgFQgBgDAFgBIAGgEQACgCAAgIQABgIAAgbIAAgRQAAgdgBgIQgBgJgCgBIgFgBQgHgCAAgEQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAABAAQACgCAEgCIAPgFIAKgCQABAAABAAQABAAAAAAQABABAAAAQABAAAAABQABABABAEIAAAFIAAACIAAABIAEgDIAEgCQAHgFAFgDQAGgCAHAAQATAAANAOQANAOAAAYQAAAYgPARQgOARgWAAQgJgBgCgCQgEgCAAgFIABgEQACgBADgBIACABIAEAAQAMAAAHgKQAHgKAAgQQAAgRgHgMQgJgLgLAAQgKAAgHAGQgGAHAAAQIAABDIAAALQAAAEACABIAGADIAEACIADACIABACQAAAFgHABQgGACgPgBQgQABgFgCg");
	this.shape_1.setTransform(27.5,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D6E47").s().p("AgSBNQgFgDAAgEQAAgEAFgCIADgBQACgCACgDIABgMIAAgHIAAgJIAAgLQAAgRgBgDQgBgGgCgBIgFgBQgHgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgCAFgCIAQgFIAKgCQABAAABAAQAAAAABAAQAAAAABABQAAAAABABIABAHIAAAGIAAAFIgBAaIAAABIgBAaIABAOQABAFADAAIAEACQAFADAAAEQAAADgFADQgGABgNAAQgQAAgFgBgAgMg1QgFgEAAgGQAAgFAFgEQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAEQgFAEgHAAQgHAAgEgDg");
	this.shape_2.setTransform(17.9,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D6E47").s().p("AgWBMQgGgCAAgFQAAgEAGgCQAGgCABgCQABgCABgRIAAgyIAAgcIgBgRQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAAAIgGgBIgFAAQgHAAgEACQgEACgDAEIgEAHIgDAHIgDADIgEACQgDAAgBgDQgCgDAAgHQAAgOADgIQAEgJAFAAIABAAQAIACANAAIA+AAQANAAAJgCIABAAQAFAAAEAJQADAIAAAOQAAAHgCADQgBADgEAAIgDgCIgDgDIgDgHIgEgHQgDgEgEgCQgEgCgHAAIgFAAIgGABQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgBARIgBAcIABAyQABARABACIAHAEQAGACAAAEQAAAFgGACQgHACgQAAQgQAAgGgCg");
	this.shape_3.setTransform(7.5,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D6E47").s().p("AgWBLQgGgCAAgEQAAgFAHgDIAFgBQADgDABgsIAAgJIgNgVIgUgfQgHgJgDgDIgFgCQgHgDAAgEQAAgEAFgBQAFgCAVAAQAUAAAFACQAFABAAAEQAAAFgIADIgBAAIgDACIgBAEQAAABAFAIIAUAiIATgcQAFgKAAgDQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQgCgCgFgDQgEgBgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEAEgBQAEgCASAAQARAAAFACQAEABAAAEQAAAFgGACIgIAFQgEADgLAQQgKAOgPAaIAAAUQAAAjADADIAFABQAHADAAAFQAAAEgGACQgGACgRAAQgQAAgGgCg");
	this.shape_4.setTransform(-13.2,0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D6E47").s().p("AgWBLQgGgCAAgEQAAgFAHgDIAFgBQACgCABgNIABgtIgBgoQgBgRgBgBQgBgCgGgCQgGgDAAgEQAAgEAFgBQAFgCASAAQATAAAFACQAFABAAAEQAAAEgHADIgFACQgCACgBALIgBAjIABAyQABATABACQABABAGACQAGACAAAFQAAAEgGACQgGACgRAAQgQAAgGgCg");
	this.shape_5.setTransform(-23.9,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0D6E47").s().p("AgWBNIgOAAIgJAAIgJAAQgNAAgEgCQgEgBAAgFQAAgEAGgCIAHgEQABgCABgQIABgpIgBgnQgBgQgBgCQgBgCgGgCQgGgDAAgEQAAgEAFgCQAEgCANAAIAJAAIALABIAOgBIAMAAQAnAAAWAUQAWAVAAAlQAAAlgXATQgWATgpAAgAgXg8QgFACgBADQgBAEgBANIgBAgIABAoQABARABADQABADAHADQAHACAKAAQAYAAAMgPQAMgPAAgdQAAgfgOgRQgOgQgZAAQgJAAgFABg");
	this.shape_6.setTransform(-36.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboarddiytips, new cjs.Rectangle(-46.4,-14.6,92.8,29.4), null);


(lib.leaderboardctarectangle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D63A01").s().p("Ar0CoIAAlPIXpAAIAAFPg");
	this.shape.setTransform(0,0,1.099,0.971);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaderboardctarectangle, new cjs.Rectangle(-83.2,-16.2,166.6,32.6), null);


(lib.leaaderboardcandles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardcandles();
	this.instance.parent = this;
	this.instance.setTransform(-54,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.leaaderboardcandles, new cjs.Rectangle(-54,-16,108,32), null);


(lib.glassesleaderboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.leaderboardglassestopright();
	this.instance.parent = this;
	this.instance.setTransform(-76.5,-32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.glassesleaderboard, new cjs.Rectangle(-76.5,-32,153,64), null);


(lib.fillyourinboxleaderboard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#027047").s().p("AAOBNQgEgCAAgEQgBgEAGgCIAEgCQADgBAAgFIABgQQAAgigEgIQgEgJgMAAQgEAAgFAEQgGADgCAFQgDAFgBAIIgBAdIABAOQABAEACABIAEACQAFACAAAEQABAEgGACQgFABgOAAQgRAAgEgBQgFgCgBgFQABgDAFgCIACgCQADgBACgFIABgQIAAgRIAAgQIgBgwQAAgMgDgCQAAgCgHgBQgGgCAAgEQAAgDACgCQADgCAKgDIALgDIAJgBQAEAAABACQACACAAAEIAAAFIgCAqIAAAGIABACIACABIACgCIADgFQAGgFAGgCQAGgDAGAAQASAAAJAMQAJAMAAAXIAAAKIAAATIAAAGIABAIIAEADIADACQAFABAAAEQAAAFgFACQgGABgQAAQgOAAgGgBg");
	this.shape.setTransform(94.7,-1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#027047").s().p("AgFBAQgFgBgEgEQgEgEgBgFQgCgGAAgRIAAg4IgJAAIgEAAIgBgDIAAgDQABgDAKgKIAFgEIAEgDQALgKAEAAIACABIACACIAAAVIAXAAIAFABIABADIAAADQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgBAAgBAAIgVAAIgCABIAAADIAAA0QAAANACAEQACAEAGAAIAJgCIAHgCQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABQABAGgKAFQgJAGgLAAQgGAAgFgCg");
	this.shape_1.setTransform(84.3,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#027047").s().p("AgSBMQgFgCAAgEQAAgEAFgBIADgCQACgCACgDIABgLIAAgIIAAgJIAAgKQAAgRgBgFQgBgEgCgBIgFgCQgHgDAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAgBQACgBAFgCIAQgGIAKgCQABAAABABQAAAAABAAQAAAAABABQAAAAABAAIABAHIAAAHIAAAFIgBAaIAAABIgBAaIABAOQABAEADACIAEACQAFABAAAFQAAAEgFABQgGACgNAAQgQAAgFgCgAgMg1QgFgEAAgFQAAgHAFgDQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAFQgFADgHAAQgHAAgEgDg");
	this.shape_2.setTransform(76.9,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#027047").s().p("AAGAMIgMghQgGgPgFgDIgDgBQgGgDAAgEQAAgEAFgBQAFgCARAAQAOAAAFACQAGABAAAEIgBAEIgCACIgEABQgEACAAADIACAGIAJAXIAJATQACAFACABQAAAAABgBQAAAAAAAAQABgBAAAAQABgBAAgBIAFgJIALgaQAEgLAAgDIgBgEIgCgCIgDgBQgFgCAAgEQAAgEAFgBQAFgCANAAQALAAAFACQAEABAAAEQAAAEgFACIgEABQgFADgKAXIgCAEIgEAKQgZA3gHAAQgHAAgTgrgAg+AGIgDgHIgHgRQgHgSgFgDIgDgBQgGgDAAgEQAAgEAFgBQAGgCARAAQAPAAAFACQAFABAAAEIgBAEIgCACIgDABQgFACAAADIADAJIAIAUIAJATQADAGABAAQADAAADgHIAEgIIACgDIAEgBQAAAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAADgDAGQgLAZgFAIQgFAIgDAAQgIAAgVgxg");
	this.shape_3.setTransform(64.8,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#027047").s().p("AAKA0QgFgCAAgEQAAgEADgCQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAgBQAAgCgEgHIgTgcIgRgaIgKgLQgBgBgFgBQgFgCAAgDQAAgFAFgCQAGgBAOAAQAOAAAGABQAFACAAAEQAAADgDADQgBAAAAABQgBAAAAABQgBAAAAAAQAAABAAAAQAAACALASIABABIAEgGQAKgOAAgBQAAgBgEgCQgEgDAAgDQAAgEAFgCQAGgBALAAQAJAAAEABQAFACAAAEQAAAEgHADIgGACQgFACgGAIQgHAIgIAOIATAcIAKAMIAIADQAFACAAAEQAAAFgFACQgFABgOAAQgPAAgGgBgAgyA0QgEgCAAgEQAAgFAIgCIAFgCQAEgCAFgHIAJgNIADgDIAEgBQAAAAABAAQAAAAABABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAADgDADQgIAMAAACQAAABAEACQAEACAAADQAAAEgFACQgFACgMAAQgJAAgFgBg");
	this.shape_4.setTransform(43.7,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#027047").s().p("AgmAoQgPgQAAgYQAAgXAQgQQAPgQAYAAQAXAAAPAPQAOAPAAAYQAAAYgPAQQgQARgXAAQgXAAgPgQgAgUgfQgGAJAAAOQAAAUAJAPQAJAOAMAAQALAAAGgJQAHgJAAgOQgBgUgIgOQgKgPgMAAQgKAAgHAJg");
	this.shape_5.setTransform(32,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#027047").s().p("AgOBNQgJgDgGgEIgGAEQgEACgDAAIgDgBIgFgBIAAgCQAFgEABgKQACgJAAgYIAAgYIAAgXIgBgbQgBgGgCgCIgGgCQgHgBAAgEQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAgBQADgCAIgDIANgEIAJgBQAFAAACABIABAGIAAAGIgBAfIAAAuIAAAcQAAAQAFAFQAEAFAMAAQANAAAIgLQAHgLAAgUQAAgRgHgJQgHgKgNAAIgEAAIgBAAQgIAAAAgHQAAgGAIgDQAGgDAKAAQATAAAMAOQANAOAAAXQAAAbgPAQQgPAQgaAAQgJAAgJgCg");
	this.shape_6.setTransform(18.8,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#027047").s().p("AAOA1QgFgCAAgEQAAgEAGgCIADgCQADgBABgEIABgRQAAghgFgIQgEgJgLAAQgFAAgFADQgFAEgDAGQgDAEgBAJIAAAcIAAAOQABADADABIAEACQAFACAAAEQAAAEgFACQgGACgNAAQgRAAgEgCQgGgCAAgEQAAgEAFgCIADgBQADgCABgDIABgMIAAgHIAAgJIAAgKQAAgRgBgFQgBgFgCgBIgFgCQgHgCABgDQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAABgBQACgCAEgBIAPgFIAMgCQAAAAABAAQABAAAAAAQABAAAAABQABAAAAAAIABAGIAAAHIAAABIABAAIAAAAIABAAIADgDIACgCQAMgLAMAAQAIAAAGAEQAIADAFAGQAEAGACAIQADAIAAARIAAAOIAAAGIAAAHIABAKQABADACACIADABQAFACAAAEQAAAEgEACQgGACgQAAQgPAAgFgCg");
	this.shape_7.setTransform(6.2,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#027047").s().p("AgWBLQgGgBAAgGQAAgEAHgCIAFgDQACgCABgMIABgtIgBgpQgBgPgBgCQgBgCgGgCQgGgDAAgEQAAgEAFgCQAFgBASAAQATAAAFABQAFACAAAEQAAAEgHADIgFACQgCACgBALIgBAjIABAyQABASABACQABACAGACQAGACAAAEQAAAGgGABQgGACgRAAQgQAAgGgCg");
	this.shape_8.setTransform(-4,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#027047").s().p("AgfA1QgGgCAAgEQAAgEAGgCIACgBQADgCABgDIABgMIAAgHIAAgJIAAgGQAAgTgBgGQgBgGgCgBIgFgCQgGgCAAgDQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQACgCAFgBIAOgFIAJgCQAGAAABAOIAAADIABAAQAFgJAGgEQAGgFAGAAQAIAAAEAFQAEAEAAAIQAAAHgDAFQgDAEgGAAIgGgBIgEgDIgDgFQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAAAAAAAQgIAAgCAKQgDAKAAAgIABAOQABAEADABIAEACQAHACAAAEQAAAEgGACQgGACgOAAQgQAAgFgCg");
	this.shape_9.setTransform(-18.2,1.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#027047").s().p("AAYA2QgCgBAAgEIAAgHIAAgBIAAAAQgCAAgDADIgBABQgFAFgGADQgGADgIAAQgIAAgHgDQgHgEgFgFQgEgGgDgJQgCgIAAgWIAAgHIAAgIIAAgDQABgIgCgDQgBgCgEgCIgEgBQgHgCAAgDQAAgDADgCQACgCAIgCIAOgEIAMgCQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQACACAAAEIgBAFIgBAnQABAVAEAJQAEAIALAAQALAAAGgLQAFgLABgZIAAgIQgBgIgBgDQgBgCgEgCIgEgBQgGgCAAgDQAAgBAAAAQAAgBAAgBQABAAAAgBQABAAAAgBQACgCAHgCIAPgEIALgCQABAAABAAQAAAAABABQAAAAABAAQAAABABAAQABACAAAFIAAAGIgBArIAAASIABAIQAAAEAFACIADABQAFACAAADQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAABIgHADIgPAFIgLACQgBAAAAAAQgBAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_10.setTransform(-29.4,1.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#027047").s().p("AgmAoQgPgQAAgYQAAgXAQgQQAPgQAYAAQAXAAAOAPQAPAPAAAYQAAAYgPAQQgRARgWAAQgXAAgPgQgAgUgfQgGAJAAAOQAAAUAJAPQAJAOAMAAQAKAAAHgJQAHgJAAgOQgBgUgIgOQgKgPgMAAQgKAAgHAJg");
	this.shape_11.setTransform(-42.2,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#027047").s().p("AgWBLQgGgBAAgGQAAgEAHgCIAFgDQADgDABgrIAAgKIgNgTIgUghQgHgIgDgDIgFgCQgHgDAAgEQAAgEAFgCQAFgBAVAAQAUAAAFABQAFACAAAEQAAAEgIAEIgBAAIgDACIgBAEQAAABAFAJIAUAgIATgbQAFgKAAgDQAAgBAAAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQgCgCgFgBQgEgCgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgEAEgCQAEgBASAAQARAAAFABQAEACAAAEQAAAEgGAEIgIADQgEAEgLAPQgKAQgPAZIAAATQAAAkADACIAFADQAHACAAAEQAAAGgGABQgGACgRAAQgQAAgGgCg");
	this.shape_12.setTransform(-55.6,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#027047").s().p("AgRBNQgFgCAAgFQAAgDAEgCIAFgDQACgCABgGIABgVIAAgRIAAgTIAAgIQAAgbgBgIQgBgIgDgBIgGgCQgHgCAAgEQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQACgDAIgCIAOgEIAKgCQABAAABABQABAAAAAAQABAAAAABQABAAAAABQABACAAAEIAAAJQgBAmAAAmIABAkQAAAIACACIAGADQAFACAAAEQAAAEgFACQgGABgOABQgPgBgFgBg");
	this.shape_13.setTransform(-72.5,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#027047").s().p("AgRBNQgFgCAAgFQAAgDAEgCIAFgDQACgCABgGIABgVIAAgRIAAgTIAAgIQAAgbgBgIQgBgIgDgBIgGgCQgHgCAAgEQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQACgDAIgCIAOgEIAKgCQABAAABABQABAAAAAAQABAAAAABQAAAAABABQABACAAAEIAAAJQgBAmAAAmIABAkQAAAIACACIAGADQAFACAAAEQAAAEgFACQgGABgOABQgPgBgFgBg");
	this.shape_14.setTransform(-78.9,-1.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#027047").s().p("AgSBMQgFgCAAgEQAAgEAFgBIADgCQACgCACgDIABgLIAAgIIAAgJIAAgKQAAgRgBgFQgBgEgCgBIgFgCQgHgDAAgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAgBQACgBAFgCIAQgGIAKgCQABAAABABQAAAAABAAQAAAAABABQAAAAABAAIABAHIAAAHIAAAFIgBAaIAAABIgBAaIABAOQABAEADACIAEACQAFABAAAFQAAAEgFABQgGACgNAAQgQAAgFgCgAgMg1QgFgEAAgFQAAgHAFgDQAFgFAHAAQAGAAAFAEQAFAEAAAGQAAAFgFAFQgFADgHAAQgHAAgEgDg");
	this.shape_15.setTransform(-85.3,-1.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#027047").s().p("Ag1BMQgGgBAAgFQAAgEAFgDIAHgDQACgDAAgQIABgpIgBgnQgBgQgBgCQgBgBgGgDQgFgCAAgFQAAgEAFgBQAFgCASAAIBAAAIALgBIAGgBIACABIACABIAEAMQACAHAAAFQAAAFgBACQgCADgDAAQgEAAgFgHIgDgFQgCgEgFgBQgFgCgHAAIgOAAIgPABQgFABgCADQgCACgBAHIgBAUIAAAJQAAAFABABIAEABIARAAQAIAAAEgCQADgCABgHIAAgCQACgLAGAAQAEAAACAGQACAFAAAVQAAATgCAGQgCAGgEAAQgGAAgCgLIAAgCQgBgHgDgCQgEgDgIAAIgRAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQgBACAAAHIAAAIIABAeQABAGACACIAEACQAHADAAAEQAAAFgGABQgGACgRAAQgRAAgFgCg");
	this.shape_16.setTransform(-95.1,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.fillyourinboxleaderboard, new cjs.Rectangle(-113.2,-15.8,226.5,29.4), null);


(lib.ctarollovervideo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B63100").s().p("AuQCqIAAlTIchAAIAAFTg");
	this.shape.setTransform(0,0,0.912,0.957);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ctarollovervideo, new cjs.Rectangle(-83.2,-16.2,166.6,32.6), null);


(lib.cookietwo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwo();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwo_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookietwelve_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookietwelve();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookietwelve_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookiethree_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiethree();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiethree_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookieten_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieten();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieten_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookiesixteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesixteen();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiesixteen_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookiesix_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiesix();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiesix_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookieseventeen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieseventeen();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieseventeen_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookieseven_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieseven();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieseven_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookieone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieone();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieone_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookienine_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookienine();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookienine_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookiegreens_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiegreens();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiegreens_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookiefrosting_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefrosting();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefrosting_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookiefour_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefour();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefour_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookiefive_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefive();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefive_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookiefifteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookiefifteen();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookiefifteen_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookieeleven_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeleven();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieeleven_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookieeighteen_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeighteen();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieeighteen_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookieeight_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieeight();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieeight_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.cookieberries_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cookieberries();
	this.instance.parent = this;
	this.instance.setTransform(-69,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cookieberries_1, new cjs.Rectangle(-69,-46.5,138,93), null);


(lib.blackwideskyscraper = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgRBA2FMAAAhsJMAiDAAAMAAABsJg");
	this.shape.setTransform(0,0,0.753,0.867);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackwideskyscraper, new cjs.Rectangle(-82.1,-300,164.3,600.1), null);


(lib.blackrectanglefillinbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EA3tgFxIAALjMhvZAAAIAArjg");
	this.shape.setTransform(0,0,1.02,1.203);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-364.5,-45.5,729,91);


(lib.ctarollover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.stop();
	}
	this.frame_23 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(12).call(this.frame_23).wait(2));

	// Layer 1
	this.instance = new lib.ctarollovervideo();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:1},9).wait(2).to({alpha:0},10).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-16.2,166.6,32.6);


// stage content:
(lib.leaderboardsimplefillinboxsomethingdelicious = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		//onhover event to reveal green cta rectangle over orange rectangle
		this.btn_main.addEventListener("mouseover", fl_MouseOverHandler.bind(this));
		this.btn_main.addEventListener("mouseout", fl_MouseOutHandler.bind(this));
		
		function fl_MouseOverHandler()
		{
			this.cta_rollover.gotoAndPlay(2);
		}
		
		function fl_MouseOutHandler()
		{
		this.cta_rollover.gotoAndPlay(13);
		}
	}
	this.frame_220 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(169).call(this.frame_220).wait(5));

	// button
	this.btn_main = new lib.mainbutton();
	this.btn_main.parent = this;
	this.btn_main.setTransform(365.8,47.1,3.544,0.143,0,0,0,0.3,0.7);
	new cjs.ButtonHelper(this.btn_main, 0, 1, 2, false, new lib.mainbutton(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_main).wait(225));

	// black-rectangle
	this.instance = new lib.blackrectanglefillinbox("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(225));

	// logo
	this.instance_1 = new lib.leaderboardlogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(660.8,44.7,0.667,0.667,0,0,0,0.1,0.2);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({regX:0,regY:0,scaleX:0.02,scaleY:0.02,x:660.9},0).to({regX:0.1,regY:0.2,scaleX:0.74,scaleY:0.74,x:660.8,alpha:1},6).to({scaleX:0.67,scaleY:0.67},7).wait(198));

	// fade-from-black
	this.instance_2 = new lib.blackwideskyscraper();
	this.instance_2.parent = this;
	this.instance_2.setTransform(366.7,50.5,4.456,0.171,0,0,0,0.6,0.6);
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_2.cache(-84,-302,168,604);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:0.2,regY:0.7,scaleY:0.16,x:364.9,y:47,alpha:0},9).wait(216));

	// sign-up-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuDB4IAAjvIcHAAIAADvg");
	mask.setTransform(125.5,64.5);

	// SIGN UP
	this.instance_3 = new lib.leaderboardsignup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(104,63.4);
	this.instance_3.alpha = 0;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({x:-63.2},0).to({x:114,alpha:1},10).to({x:104},6).wait(158));

	// cta-rollover-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AttG4IAAnBIejAAIAAHBg");
	mask_1.setTransform(107.8,44);

	// cta-rollover
	this.cta_rollover = new lib.ctarollover();
	this.cta_rollover.parent = this;
	this.cta_rollover.setTransform(103.6,63.9);

	var maskedShapeInstanceList = [this.cta_rollover];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.cta_rollover).wait(51).to({x:-63.2},0).to({x:113.6},10).to({x:103.6},6).wait(158));

	// cta-mask (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AttG4IAAnBIejAAIAAHBg");
	mask_2.setTransform(107.8,44);

	// cta-rectangle
	this.instance_4 = new lib.leaderboardctarectangle();
	this.instance_4.parent = this;
	this.instance_4.setTransform(103.6,63.8);
	this.instance_4.alpha = 0;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(51).to({x:-63.2,y:63.3},0).to({x:113.6,y:63.8,alpha:1},10).to({x:103.6},6).wait(158));

	// party-ready-mask (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("EghqACsIAAlYMBDWAAAIAAFYg");
	mask_3.setTransform(235.1,26.8);

	// party-ready
	this.instance_5 = new lib.partyreadyrecipes();
	this.instance_5.parent = this;
	this.instance_5.setTransform(135,28.2);
	this.instance_5.alpha = 0;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({x:122.5},0).to({x:346,alpha:1},10).to({x:336},6).wait(57).to({alpha:0},5).wait(112));

	// fill-up-mask (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AwhDDIAAkDMAkGAAAIAAEDg");
	mask_4.setTransform(125.3,19.5);

	// fill-your-inbox-with
	this.instance_6 = new lib.fillyourinboxleaderboard();
	this.instance_6.parent = this;
	this.instance_6.setTransform(130.9,28.2);
	this.instance_6.alpha = 0;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({x:-93.2},0).to({x:131.4,alpha:1},10).to({x:121.4},6).wait(174));

	// something-delicious
	this.instance_7 = new lib.leaderboardsomethingdelicious();
	this.instance_7.parent = this;
	this.instance_7.setTransform(336.1,27);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(188).to({alpha:1},10).wait(27));

	// holiday-inspiration
	this.instance_8 = new lib.leaderboardholidayinspiration();
	this.instance_8.parent = this;
	this.instance_8.setTransform(338.2,27);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(148).to({x:328.2},0).to({alpha:1},10).wait(30).to({alpha:0},5).wait(32));

	// diy-tips
	this.instance_9 = new lib.leaderboarddiytips();
	this.instance_9.parent = this;
	this.instance_9.setTransform(274.7,27);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(108).to({alpha:1},10).wait(30).to({alpha:0},5).wait(72));

	// glasses
	this.instance_10 = new lib.glassesleaderboard();
	this.instance_10.parent = this;
	this.instance_10.setTransform(636.5,32);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(225));

	// cookie-greens
	this.instance_11 = new lib.cookiegreens_1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(512,48.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({x:515,alpha:1},0).wait(137));

	// cookie-berries
	this.instance_12 = new lib.cookieberries_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(507.8,48.5);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(85).to({x:515,alpha:1},0).wait(140));

	// cookie-frosting
	this.instance_13 = new lib.cookiefrosting_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(507.8,48.5);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(78).to({x:515,alpha:1},0).wait(147));

	// cookie-eighteen
	this.instance_14 = new lib.cookieeighteen_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(507.8,48.5);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(71).to({x:515,alpha:1},0).wait(154));

	// cookie-seventeen
	this.instance_15 = new lib.cookieseventeen_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(511,48.5);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(67).to({x:515,alpha:1},0).wait(158));

	// cookie-sixteen
	this.instance_16 = new lib.cookiesixteen_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(507.8,48.5);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(63).to({x:515,alpha:1},0).wait(162));

	// cookie-fifteen
	this.instance_17 = new lib.cookiefifteen_1();
	this.instance_17.parent = this;
	this.instance_17.setTransform(511,48.5);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(59).to({x:515,alpha:1},0).wait(166));

	// cookie-twelve
	this.instance_18 = new lib.cookietwelve_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(507.8,48.5);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(55).to({x:515,alpha:1},0).wait(170));

	// cookie-eleven
	this.instance_19 = new lib.cookieeleven_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(507.8,48.5);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(51).to({x:515,alpha:1},0).wait(174));

	// cookie-ten
	this.instance_20 = new lib.cookieten_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(511,48.5);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(47).to({x:515,alpha:1},0).wait(178));

	// cookie-nine
	this.instance_21 = new lib.cookienine_1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(507.8,48.5);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(43).to({x:515,alpha:1},0).wait(182));

	// cookie-eight
	this.instance_22 = new lib.cookieeight_1();
	this.instance_22.parent = this;
	this.instance_22.setTransform(507.8,48.5);
	this.instance_22.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(39).to({x:515,alpha:1},0).wait(186));

	// cookie-seven
	this.instance_23 = new lib.cookieseven_1();
	this.instance_23.parent = this;
	this.instance_23.setTransform(507.8,48.5);
	this.instance_23.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(35).to({x:515,alpha:1},0).wait(190));

	// cookie-six
	this.instance_24 = new lib.cookiesix_1();
	this.instance_24.parent = this;
	this.instance_24.setTransform(515,48.5);
	this.instance_24.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(31).to({alpha:1},0).wait(194));

	// cookie-five
	this.instance_25 = new lib.cookiefive_1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(515,48.5);
	this.instance_25.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(27).to({alpha:1},0).wait(198));

	// cookie-four
	this.instance_26 = new lib.cookiefour_1();
	this.instance_26.parent = this;
	this.instance_26.setTransform(507.8,48.5);
	this.instance_26.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(23).to({x:515,alpha:1},0).wait(202));

	// cookie-three
	this.instance_27 = new lib.cookiethree_1();
	this.instance_27.parent = this;
	this.instance_27.setTransform(511,48.5);
	this.instance_27.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(19).to({x:515,alpha:1},0).wait(206));

	// cookie-two
	this.instance_28 = new lib.cookietwo_1();
	this.instance_28.parent = this;
	this.instance_28.setTransform(507.8,48.5);
	this.instance_28.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(14).to({x:515},0).to({alpha:1},10).wait(201));

	// cookie-one
	this.instance_29 = new lib.cookieone_1();
	this.instance_29.parent = this;
	this.instance_29.setTransform(515,48.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(225));

	// tray
	this.instance_30 = new lib.leaderboardtray();
	this.instance_30.parent = this;
	this.instance_30.setTransform(317,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(225));

	// candle-one
	this.instance_31 = new lib.leaaderboardcandles();
	this.instance_31.parent = this;
	this.instance_31.setTransform(184,75);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(225));

	// table
	this.instance_32 = new lib.leaderboardtable_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(364,47);

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(362,32.2,732.1,114.7);
// library properties:
lib.properties = {
	id: '85088BD5353243C8B4895C262600CED3',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['85088BD5353243C8B4895C262600CED3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;