function createMVMatrix() {
	return new Float32Array([
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1
	]);
}

function matMult(A, B) {
	var tmp = new Float32Array(16);

	for (var i = 0; i < tmp.length; i++) {
		var row = Math.floor(i / 4);
		var col = i % 4;

		tmp[i] = 0;

		for (var j = 0; j < 4; j++) {
			tmp[i] += A[row * 4 + j] * B[j * 4 + col];
		}
	}

	return tmp;
}

function rotateX(angle) {
	var R = new Float32Array([
		 1,                0,                0,  0,
		 0,  Math.cos(angle),  Math.sin(angle),  0,
		 0, -Math.sin(angle),  Math.cos(angle),  0,
		 0,                0,                0,  1
	]);

	mvMatrix = matMult(R, mvMatrix);
}

function rotateY(angle) {
	var R = new Float32Array([
		 Math.cos(angle),  0, -Math.sin(angle),  0,
		               0,  1,                0,  0,
		 Math.sin(angle),  0,  Math.cos(angle),  0,
		               0,  0,                0,  1
	]);

	mvMatrix = matMult(R, mvMatrix);
}

function rotateZ(angle) {
	var R = new Float32Array([
		 Math.cos(angle),  Math.sin(angle),  0,  0,
		-Math.sin(angle),  Math.cos(angle),  0,  0,
		               0,                0,  1,  0,
		               0,                0,  0,  1
	]);

	mvMatrix = matMult(R, mvMatrix);
}

function translateAll(x, y, z) {
	var T = new Float32Array([
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		x, y, z, 1
	]);

	mvMatrix = matMult(T, mvMatrix);
}

function scaleAll(x, y, z) {
	var S = new Float32Array([
		x, 0, 0, 0,
		0, y, 0, 0,
		0, 0, z, 0,
		0, 0, 0, 1
	]);

	mvMatrix = matMult(S, mvMatrix);
}

function shearX(angle) {
	var S = new Float32Array([
		                  1, 0, 0, 0,
		1 / Math.tan(angle), 1, 0, 0,
		                  0, 0, 1, 0,
		                  0, 0, 0, 1
	]);

	mvMatrix = matMult(S, mvMatrix);
}

function shearY(angle) {
	var S = new Float32Array([
		1, 1 / Math.tan(angle), 0, 0,
		0,               1, 0, 0,
		0,               0, 1, 0,
		0,               0, 0, 1
	]);

	mvMatrix = matMult(S, mvMatrix);
}

function shearZ(angle) {
	var S = new Float32Array([
		1, 0, 1 / Math.tan(angle), 0,
		0, 1,                   0, 0,
		0, 0,                   1, 0,
		0, 0,                   0, 1
	]);

	mvMatrix = matMult(S, mvMatrix);
}