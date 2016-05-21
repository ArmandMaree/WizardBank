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

function rotate(matrix, x, y, z) {
	return rotateX(rotateY(rotateZ(matrix, z), y), x);
}

function rotateX(matrix, angle) {
	var R = new Float32Array([
		 1,                0,                0,  0,
		 0,  Math.cos(angle),  Math.sin(angle),  0,
		 0, -Math.sin(angle),  Math.cos(angle),  0,
		 0,                0,                0,  1
	]);

	return matMult(R, matrix);
}

function rotateY(matrix, angle) {
	var R = new Float32Array([
		 Math.cos(angle),  0, -Math.sin(angle),  0,
		               0,  1,                0,  0,
		 Math.sin(angle),  0,  Math.cos(angle),  0,
		               0,  0,                0,  1
	]);

	return matMult(R, matrix);
}

function rotateZ(matrix, angle) {
	var R = new Float32Array([
		 Math.cos(angle),  Math.sin(angle),  0,  0,
		-Math.sin(angle),  Math.cos(angle),  0,  0,
		               0,                0,  1,  0,
		               0,                0,  0,  1
	]);

	return matMult(R, matrix);
}

function translateAll(matrix, x, y, z) {
	var T = new Float32Array([
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		x, y, z, 1
	]);

	return matMult(T, matrix);
}

function scaleAll(matrix, x, y, z) {
	var S = new Float32Array([
		x, 0, 0, 0,
		0, y, 0, 0,
		0, 0, z, 0,
		0, 0, 0, 1
	]);

	return matMult(S, matrix);
}

function shearX(matrix, angle) {
	var S = new Float32Array([
		                  1, 0, 0, 0,
		1 / Math.tan(angle), 1, 0, 0,
		                  0, 0, 1, 0,
		                  0, 0, 0, 1
	]);

	return matMult(S, matrix);
}

function shearY(matrix, angle) {
	var S = new Float32Array([
		1, 1 / Math.tan(angle), 0, 0,
		0,               1, 0, 0,
		0,               0, 1, 0,
		0,               0, 0, 1
	]);

	return matMult(S, matrix);
}

function shearZ(matrix, angle) {
	var S = new Float32Array([
		1, 0, 1 / Math.tan(angle), 0,
		0, 1,                   0, 0,
		0, 0,                   1, 0,
		0, 0,                   0, 1
	]);

	return matMult(S, matrix);
}
