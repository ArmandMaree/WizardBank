var wallWidth = 100.0;
var wallHeight = 30.0;

var floorVertexPositionBuffer;
var floorVertexNormalBuffer;
var floorVertexTextureCoordBuffer;

var wallVertexPositionBuffer;
var wallVertexNormalBuffer;
var wallVertexTextureCoordBuffer;

var lightVertexPositionBuffer;
var lightVertexNormalBuffer;
var lightVertexTextureCoordBuffer;

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
}
