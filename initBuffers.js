var leftWall = -50.0;
var rightWall = 50.0;
var backWall = -50.0;
var frontWall = 0.0;
var floor = 0.0;
var ceiling = 20;

var floorVertexPositionBuffer;
var floorVertexNormalBuffer;
var floorVertexTextureCoordBuffer;

var leftWallVertexPositionBuffer;
var leftWallVertexNormalBuffer;
var leftWallVertexTextureCoordBuffer;

var backWallVertexPositionBuffer;
var backWallVertexNormalBuffer;
var backWallVertexTextureCoordBuffer;

var frontWallVertexPositionBuffer;
var frontWallVertexNormalBuffer;
var frontWallVertexTextureCoordBuffer;

var ceilingVertexPositionBuffer;
var ceilingVertexNormalBuffer;
var ceilingVertexTextureCoordBuffer;

var lightVertexPositionBuffer;
var lightVertexNormalBuffer;
var lightVertexTextureCoordBuffer;

function initBuffers() {
	// floor
	floorVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexPositionBuffer);
	var vertices = [
		rightWall, floor, frontWall,
		leftWall,  floor, frontWall,
		rightWall, floor, backWall,
		leftWall,  floor, backWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	floorVertexPositionBuffer.itemSize = 3;
	floorVertexPositionBuffer.numItems = 4;

	floorVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexNormalBuffer);
	var vertexNormals = [
		rightWall, ceiling, frontWall,
		leftWall,  ceiling, frontWall,
		rightWall, ceiling, backWall,
		leftWall,  ceiling, backWall
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

	// left wall
	leftWallVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, leftWallVertexPositionBuffer);
	var vertices = [
		leftWall, floor,   frontWall,
		leftWall, ceiling, frontWall,
		leftWall, floor,   backWall,
		leftWall, ceiling, backWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	leftWallVertexPositionBuffer.itemSize = 3;
	leftWallVertexPositionBuffer.numItems = 4;

	leftWallVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, leftWallVertexNormalBuffer);
	var vertexNormals = [
		rightWall, floor,   frontWall,
		rightWall, ceiling, frontWall,
		rightWall, floor,   backWall,
		rightWall, ceiling, backWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	leftWallVertexNormalBuffer.itemSize = 3;
	leftWallVertexNormalBuffer.numItems = 4;

	leftWallVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, leftWallVertexTextureCoordBuffer);
	var textureCoords = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	leftWallVertexTextureCoordBuffer.itemSize = 2;
	leftWallVertexTextureCoordBuffer.numItems = 4;

	// back wall
	backWallVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, backWallVertexPositionBuffer);
	var vertices = [
		leftWall,  floor,    backWall,
		leftWall,  ceiling,  backWall,
		rightWall, floor,   backWall,
		rightWall, ceiling, backWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	backWallVertexPositionBuffer.itemSize = 3;
	backWallVertexPositionBuffer.numItems = 4;

	backWallVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, backWallVertexNormalBuffer);
	var vertexNormals = [
		leftWall, floor,    frontWall,
		leftWall, ceiling,  frontWall,
		rightWall, floor,   frontWall,
		rightWall, ceiling, frontWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	backWallVertexNormalBuffer.itemSize = 3;
	backWallVertexNormalBuffer.numItems = 4;

	backWallVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, backWallVertexTextureCoordBuffer);
	var textureCoords = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	backWallVertexTextureCoordBuffer.itemSize = 2;
	backWallVertexTextureCoordBuffer.numItems = 4;

	// right wall
	rightWallVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, rightWallVertexPositionBuffer);
	var vertices = [
		rightWall, floor,   backWall,
		rightWall, ceiling, backWall,
		rightWall, floor,   frontWall,
		rightWall, ceiling, frontWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	rightWallVertexPositionBuffer.itemSize = 3;
	rightWallVertexPositionBuffer.numItems = 4;

	rightWallVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, rightWallVertexNormalBuffer);
	var vertexNormals = [
		leftWall, floor,   backWall,
		leftWall, ceiling, backWall,
		leftWall, floor,   frontWall,
		leftWall, ceiling, frontWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	rightWallVertexNormalBuffer.itemSize = 3;
	rightWallVertexNormalBuffer.numItems = 4;

	rightWallVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, rightWallVertexTextureCoordBuffer);
	var textureCoords = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	rightWallVertexTextureCoordBuffer.itemSize = 2;
	rightWallVertexTextureCoordBuffer.numItems = 4;

	// front wall
	frontWallVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, frontWallVertexPositionBuffer);
	var vertices = [
		rightWall, floor,   frontWall,
		rightWall, ceiling, frontWall,
		leftWall,  floor,   frontWall,
		leftWall,  ceiling, frontWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	frontWallVertexPositionBuffer.itemSize = 3;
	frontWallVertexPositionBuffer.numItems = 4;

	frontWallVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, frontWallVertexNormalBuffer);
	var vertexNormals = [
		rightWall, floor,   backWall,
		rightWall, ceiling, backWall,
		leftWall,  floor,   backWall,
		leftWall,  ceiling, backWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	frontWallVertexNormalBuffer.itemSize = 3;
	frontWallVertexNormalBuffer.numItems = 4;

	frontWallVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, frontWallVertexTextureCoordBuffer);
	var textureCoords = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	frontWallVertexTextureCoordBuffer.itemSize = 2;
	frontWallVertexTextureCoordBuffer.numItems = 4;

	// ceiling
	ceilingVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ceilingVertexPositionBuffer);
	var vertices = [
		leftWall,  ceiling, frontWall,
		leftWall,  ceiling, backWall,
		rightWall, ceiling, frontWall,
		rightWall, ceiling, backWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	ceilingVertexPositionBuffer.itemSize = 3;
	ceilingVertexPositionBuffer.numItems = 4;

	ceilingVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ceilingVertexNormalBuffer);
	var vertexNormals = [
		leftWall,  floor, frontWall,
		leftWall,  floor, backWall,
		rightWall, floor, frontWall,
		rightWall, floor, backWall
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexNormals), gl.STATIC_DRAW);
	ceilingVertexNormalBuffer.itemSize = 3;
	ceilingVertexNormalBuffer.numItems = 4;

	ceilingVertexTextureCoordBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, ceilingVertexTextureCoordBuffer);
	var textureCoords = [
		0.0, 0.0,
		0.0, 1.0,
		1.0, 0.0,
		1.0, 1.0
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
	ceilingVertexTextureCoordBuffer.itemSize = 2;
	ceilingVertexTextureCoordBuffer.numItems = 4;

	// light
	lightVertexPositionBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	var vertices = [
		// Front face
		-0.5, -0.5, -0.5,
		-0.5,  0.5, -0.5,
		 0.5, -0.5, -0.5,
		 0.5,  0.5, -0.5,

		// Back face
		-0.5, -0.5, 0.5,
		-0.5,  0.5, 0.5,
		 0.5, -0.5, 0.5,
		 0.5,  0.5, 0.5,

		// Top face
		-0.5, 0.5, -0.5,
		-0.5, 0.5,  0.5,
		 0.5, 0.5, -0.5,
		 0.5, 0.5,  0.5,

		// Bottom face
		-0.5, -0.5, -0.5,
		-0.5, -0.5,  0.5,
		 0.5, -0.5, -0.5,
		 0.5, -0.5,  0.5,

		// Left face
		-0.5, -0.5, -0.5,
		-0.5,  0.5, -0.5,
		-0.5, -0.5,  0.5,
		-0.5,  0.5,  0.5,

		// Right face
		0.5, -0.5, -0.5,
		0.5,  0.5, -0.5,
		0.5, -0.5,  0.5,
		0.5,  0.5,  0.5
	];
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
	lightVertexPositionBuffer.itemSize = 3;
	lightVertexPositionBuffer.numItems = 24;

	lightVertexNormalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	var vertexNormals = [
		// Front face
		-0.5, -0.5, -1.0,
		-0.5,  0.5, -1.0,
		 0.5, -0.5, -1.0,
		 0.5,  0.5, -1.0,

		// Back face
		-0.5, -0.5, 1.0,
		-0.5,  0.5, 1.0,
		 0.5, -0.5, 1.0,
		 0.5,  0.5, 1.0,

		// Top face
		-0.5, 1.0, -0.5,
		-0.5, 1.0,  0.5,
		 0.5, 1.0, -0.5,
		 0.5, 1.0,  0.5,

		// Bottom face
		-0.5, -1.0, -0.5,
		-0.5, -1.0,  0.5,
		 0.5, -1.0, -0.5,
		 0.5, -1.0,  0.5,

		// Left face
		-1.0, -0.5, -0.5,
		-1.0,  0.5, -0.5,
		-1.0, -0.5,  0.5,
		-1.0,  0.5,  0.5,

		// Right face
		1.0, -0.5, -0.5,
		1.0,  0.5, -0.5,
		1.0, -0.5,  0.5,
		1.0,  0.5,  0.5
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
