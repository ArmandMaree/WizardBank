var floorTexture;
var wallTexture;
var ceilingTexture;
var lightTexture;
var witchTexture;
var catTexture;
var painting1Texture;
var painting2Texture;
var greenTexture;
var pinkTexture;

function initTextures() {
	floorTexture = gl.createTexture();
	floorTexture.image = new Image();
	floorTexture.image.crossOrigin = "anonymous";
	floorTexture.image.onload = function() { handleLoadedTexture(floorTexture); }
	floorTexture.image.src = "images/stonefloor.jpg";

	wallTexture = gl.createTexture();
	wallTexture.image = new Image();
	wallTexture.image.crossOrigin = "anonymous";
	wallTexture.image.onload = function() { handleLoadedTexture(wallTexture); }
	wallTexture.image.src = "images/stonewall.png";

	ceilingTexture = gl.createTexture();
	ceilingTexture.image = new Image();
	ceilingTexture.image.crossOrigin = "anonymous";
	ceilingTexture.image.onload = function() { handleLoadedTexture(ceilingTexture); }
	ceilingTexture.image.src = "images/ceiling.jpg";

	lightTexture = gl.createTexture();
	lightTexture.image = new Image();
	lightTexture.image.crossOrigin = "anonymous";
	lightTexture.image.onload = function() { handleLoadedTexture(lightTexture); }
	lightTexture.image.src = "images/light.png";

	witchTexture = gl.createTexture();
	witchTexture.image = new Image();
	witchTexture.image.crossOrigin = "anonymous";
	witchTexture.image.onload = function() { handleLoadedTexture(witchTexture); }
	witchTexture.image.src = "images/witch.png";

	catTexture = gl.createTexture();
	catTexture.image = new Image();
	catTexture.image.crossOrigin = "anonymous";
	catTexture.image.onload = function() { handleLoadedTexture(catTexture); }
	catTexture.image.src = "images/cat.png";

	painting1Texture = gl.createTexture();
	painting1Texture.image = new Image();
	painting1Texture.image.crossOrigin = "anonymous";
	painting1Texture.image.onload = function() { handleLoadedTexture(painting1Texture); }
	painting1Texture.image.src = "images/painting1.png";

	painting2Texture = gl.createTexture();
	painting2Texture.image = new Image();
	painting2Texture.image.crossOrigin = "anonymous";
	painting2Texture.image.onload = function() { handleLoadedTexture(painting2Texture); }
	painting2Texture.image.src = "images/painting2.png";

	greenTexture = gl.createTexture();
	greenTexture.image = new Image();
	greenTexture.image.crossOrigin = "anonymous";
	greenTexture.image.onload = function() { handleLoadedTexture(greenTexture); }
	greenTexture.image.src = "images/green.png";

	pinkTexture = gl.createTexture();
	pinkTexture.image = new Image();
	pinkTexture.image.crossOrigin = "anonymous";
	pinkTexture.image.onload = function() { handleLoadedTexture(pinkTexture); }
	pinkTexture.image.src = "images/pink.png";
}

function handleLoadedTexture(texture) {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.bindTexture(gl.TEXTURE_2D, null);
}
