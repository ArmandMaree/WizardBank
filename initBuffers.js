var wallWidth = 200.0;
var wallHeight = 50.0;
var npcWidth = 8.0;
var npcHeight = 20;
var catWidth = 12.0;
var catHeight = 8.0;

var floorVertexPositionBuffer;
var floorVertexNormalBuffer;
var floorVertexTextureCoordBuffer;

var wallVertexPositionBuffer;
var wallVertexNormalBuffer;
var wallVertexTextureCoordBuffer;

var lightVertexPositionBuffer;
var lightVertexNormalBuffer;
var lightVertexTextureCoordBuffer;

var npcVertexPositionBuffer;
var npcVertexNormalBuffer;
var npcVertexTextureCoordBuffer;

var catVertexPositionBuffer;
var catVertexNormalBuffer;
var catVertexTextureCoordBuffer;

function initBuffers() {
	// floor
	floorVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexPositionBuffer);
	var vertices = [
		-wallWidth / 2, 0.0, -wallWidth / 2,
		-wallWidth / 2, 0.0,  wallWidth / 2,
		 wallWidth / 2, 0.0, -wallWidth / 2,
		 wallWidth / 2, 0.0,  wallWidth / 2
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	floorVertexPositionBuffer.itemSize = 3;
	floorVertexPositionBuffer.numItems = 4;

	floorVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexNormalBuffer);
	var vertexNormals = [
		-wallWidth / 2, -wallHeight, -wallWidth / 2,
		-wallWidth / 2, -wallHeight,  wallWidth / 2,
		 wallWidth / 2, -wallHeight, -wallWidth / 2,
		 wallWidth / 2, -wallHeight,  wallWidth / 2
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	floorVertexNormalBuffer.itemSize = 3;
	floorVertexNormalBuffer.numItems = 4;

	floorVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexTextureCoordBuffer);
	var textureCoords = [
		1.0, 0.0,
		0.0, 0.0,
		1.0, 1.0,
		0.0, 1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	floorVertexTextureCoordBuffer.itemSize = 2;
	floorVertexTextureCoordBuffer.numItems = 4;

	// wall
	wallVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, wallVertexPositionBuffer);
	var vertices = [
		-wallWidth / 2, -wallHeight / 2, 0.0,
		-wallWidth / 2,  wallHeight / 2, 0.0,
		 wallWidth / 2, -wallHeight / 2, 0.0,
		 wallWidth / 2,  wallHeight / 2, 0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	wallVertexPositionBuffer.itemSize = 3;
	wallVertexPositionBuffer.numItems = 4;

	wallVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, wallVertexNormalBuffer);
	var vertexNormals = [
		-wallWidth / 2, -wallHeight / 2, -wallWidth,
		-wallWidth / 2,  wallHeight / 2, -wallWidth,
		 wallWidth / 2, -wallHeight / 2, -wallWidth,
		 wallWidth / 2,  wallHeight / 2, -wallWidth
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	wallVertexNormalBuffer.itemSize = 3;
	wallVertexNormalBuffer.numItems = 4;

	wallVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, wallVertexTextureCoordBuffer);
	var textureCoords = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	wallVertexTextureCoordBuffer.itemSize = 2;
	wallVertexTextureCoordBuffer.numItems = 4;

	// light
	lightVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	var vertices = [
		// Front face
		-1.0, -1.0, -1.0,
		-1.0,  1.0, -1.0,
		 1.0, -1.0, -1.0,
		 1.0,  1.0, -1.0,

		// Back face
		-1.0, -1.0, 1.0,
		-1.0,  1.0, 1.0,
		 1.0, -1.0, 1.0,
		 1.0,  1.0, 1.0,

		// Top face
		-1.0, 1.0, -1.0,
		-1.0, 1.0,  1.0,
		 1.0, 1.0, -1.0,
		 1.0, 1.0,  1.0,

		// Bottom face
		-1.0, -1.0, -1.0,
		-1.0, -1.0,  1.0,
		 1.0, -1.0, -1.0,
		 1.0, -1.0,  1.0,

		// Left face
		-1.0, -1.0, -1.0,
		-1.0,  1.0, -1.0,
		-1.0, -1.0,  1.0,
		-1.0,  1.0,  1.0,

		// Right face
		1.0, -1.0, -1.0,
		1.0,  1.0, -1.0,
		1.0, -1.0,  1.0,
		1.0,  1.0,  1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	lightVertexPositionBuffer.itemSize = 3;
	lightVertexPositionBuffer.numItems = 24;

	lightVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	var vertexNormals = [
		// Front face
		-1.0, -1.0, -1.0,
		-1.0,  1.0, -1.0,
		 1.0, -1.0, -1.0,
		 1.0,  1.0, -1.0,

		// Back face
		-1.0, -1.0, 1.0,
		-1.0,  1.0, 1.0,
		 1.0, -1.0, 1.0,
		 1.0,  1.0, 1.0,

		// Top face
		-1.0, 1.0, -1.0,
		-1.0, 1.0,  1.0,
		 1.0, 1.0, -1.0,
		 1.0, 1.0,  1.0,

		// Bottom face
		-1.0, -1.0, -1.0,
		-1.0, -1.0,  1.0,
		 1.0, -1.0, -1.0,
		 1.0, -1.0,  1.0,

		// Left face
		-1.0, -1.0, -1.0,
		-1.0,  1.0, -1.0,
		-1.0, -1.0,  1.0,
		-1.0,  1.0,  1.0,

		// Right face
		1.0, -1.0, -1.0,
		1.0,  1.0, -1.0,
		1.0, -1.0,  1.0,
		1.0,  1.0,  1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	lightVertexNormalBuffer.itemSize = 3;
	lightVertexNormalBuffer.numItems = 24;

	lightVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexTextureCoordBuffer);
	var textureCoords = [
		// front face
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0,

		// back face
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0,

		// top face
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0,

		// bottom face
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0,

		// left face
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0,

		// right face
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0,
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	lightVertexTextureCoordBuffer.itemSize = 2;
	lightVertexTextureCoordBuffer.numItems = 24;

	// npc
	npcVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, npcVertexPositionBuffer);
	var vertices = [
		-npcWidth / 2, -10, 0.0,
		-npcWidth / 2,  10, 0.0,
		 npcWidth / 2, -10, 0.0,
		 npcWidth / 2,  10, 0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	npcVertexPositionBuffer.itemSize = 3;
	npcVertexPositionBuffer.numItems = 4;

	npcVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, npcVertexNormalBuffer);
	var vertexNormals = [
		-npcWidth / 2, -npcHeight / 2, wallWidth,
		-npcWidth / 2,  npcHeight / 2, wallWidth,
		 npcWidth / 2, -npcHeight / 2, wallWidth,
		 npcWidth / 2,  npcHeight / 2, wallWidth
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	npcVertexNormalBuffer.itemSize = 3;
	npcVertexNormalBuffer.numItems = 4;

	npcVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, npcVertexTextureCoordBuffer);
	var textureCoords = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	npcVertexTextureCoordBuffer.itemSize = 2;
	npcVertexTextureCoordBuffer.numItems = 4;

	// cat
	catVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, catVertexPositionBuffer);
	var vertices = [
		-catWidth / 2, -catHeight / 2, 0.0,
		-catWidth / 2,  catHeight / 2, 0.0,
		 catWidth / 2, -catHeight / 2, 0.0,
		 catWidth / 2,  catHeight / 2, 0.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	catVertexPositionBuffer.itemSize = 3;
	catVertexPositionBuffer.numItems = 4;

	catVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, catVertexNormalBuffer);
	var vertexNormals = [
		-catWidth / 2, -catHeight / 2, wallWidth,
		-catWidth / 2,  catHeight / 2, wallWidth,
		 catWidth / 2, -catHeight / 2, wallWidth,
		 catWidth / 2,  catHeight / 2, wallWidth
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	catVertexNormalBuffer.itemSize = 3;
	catVertexNormalBuffer.numItems = 4;

	catVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, catVertexTextureCoordBuffer);
	var textureCoords = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	catVertexTextureCoordBuffer.itemSize = 2;
	catVertexTextureCoordBuffer.numItems = 4;
}

function recalcBuffers() {

}
