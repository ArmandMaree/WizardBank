var maxParticles = 200;
var particles = [];
var particleAreaWidth = 6;
var particleWidth = 0.5;
var particlesMaxHeight = wallHeight;

var particleVertexPositionBuffer;
var particleVertexNormalBuffer;
var particleVertexTextureCoordBuffer;

function getRandomValue(max) {
	return Math.random() * (max) - max / 2;
}

function fillParticles() {
	var count = 0;

	while (particles.length < maxParticles && count < 1) {
		count++;
		var pW = getRandomValue(particleWidth);
		var c;

		if (useGreen)
			c = {r:0.498,g:0,b:0.215};
		else
			c = {r:0.149,g:0.498,b:0};

		var particle = {
			velocity: Math.random() * 0.3,
			pos: {x:getRandomValue(particleAreaWidth - particleWidth), y:0.0, z:getRandomValue(particleAreaWidth - particleWidth)},
			size: {width:pW, height:pW},
			color: {r:c.r, g:c.g, b:c.b, a: 1.0}
		};

		particles.push(particle);
	}
}

function calcParticlePosition() {
	for (var i = 0; i < particles.length; i++) {
		particles[i].pos.y = particles[i].pos.y + particles[i].velocity + 0.2;

		if (particles[i].pos.y > particlesMaxHeight)
			particles[i] = null;
	}

	particles = deleteMarked(particles);
}

function deleteMarked(array) {
  var newIndex = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== null) {
      array[newIndex] = array[i];
      newIndex += 1;
    }
  }

  return array.slice(0, newIndex);
}

function drawParticles() {
	fillParticles()
	calcParticlePosition();
	gl.uniform1i(shaderProgram.useColorUniform, true);
	gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);

	var index = 0;
	var normalIndex = 0;
	var colorIndex = 0;
	var texIndex = 0;
	particleArray = [];
	colorArray = [];
	normalArray = [];
	textureCoordinates = [];

	for (var i = 0; i < particles.length; i++) {
		var x1 = particles[i].pos.x - particleWidth/2;
		var x2 = particles[i].pos.x + particleWidth/2;
		var y1 = particles[i].pos.y - particleWidth/2;
		var y2 = particles[i].pos.y + particleWidth/2;
		index = concat_inplace(index, particleArray, [
			x1, y1, 0.0,
			x2, y1, 0.0,
			x1, y2, 0.0,
			x1, y2, 0.0,
			x2, y1, 0.0,
			x2, y2, 0.0
		]);
		normalIndex = concat_inplace(index, normalArray, [
			0.0, 0.0, 1.0,
			0.0, 0.0, 1.0,
			0.0, 0.0, 1.0,
			0.0, 0.0, 1.0
		]);
		texIndex = concat_inplace(texIndex, textureCoordinates, [
			0.0, 0.0,
			1.0, 0.0,
			0.0, 1.0,
			0.0, 1.0,
			1.0, 0.0,
			1.0, 1.0
		]);
		for (var ii = 0; ii < 6; ii++) {
			colorIndex = concat_inplace(colorIndex, colorArray, [
				particles[i].color.r,
				particles[i].color.g,
				particles[i].color.b,
				particles[i].color.a
			]);
		}
	}

	// back wall
	gl.bindBuffer(gl.ARRAY_BUFFER, particleVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(particleArray), gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, particleVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, 3, gl.FLOAT, false, 0, 0);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalArray), gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, particleVertexColorBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colorArray), gl.STATIC_DRAW);

	gl.bindBuffer(gl.ARRAY_BUFFER, particleVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, 2, gl.FLOAT, false, 0, 0);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordinates), gl.STATIC_DRAW);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, particleTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLES, 0, particles.length*6);

	gl.uniform1f(shaderProgram.alphaUniform, 1.0);
	gl.uniform1i(shaderProgram.useColorUniform, false);
	gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);
}

function concat_inplace(index,arr1,arr2) {
	for (var i = 0; i < arr2.length; i++) {
		arr1[index] = arr2[i];
		index += 1;
	}

	return index;
}
