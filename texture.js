var floorTexture;
var wallTexture;
var ceilingTexture;
var lightTexture;

function initTextures() {
	// floor
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
}

function handleLoadedTexture(texture) {
	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
	gl.bindTexture(gl.TEXTURE_2D, null);
}