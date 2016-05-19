var lightRotate = 0.0;
var startX = 0.0;
var startY = -5.0;
var startZ = -30;

function drawScene() {
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	mat4.perspective(90, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);
	mat4.identity(mvMatrix);
	mat4.translate(mvMatrix, [startX, startY, startZ]);
	gl.uniform1i(shaderProgram.useLightingUniform, true);
	// mat4.rotate(mvMatrix, Math.PI / 10, [0, 1, 0]);

	mvPushMatrix();

	// floor
	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, floorVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, floorVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, floorVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, floorTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, floorVertexPositionBuffer.numItems);

	mvPopMatrix();
	mvPushMatrix();

	// back wall
	gl.bindBuffer(gl.ARRAY_BUFFER, wallVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, wallVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, wallVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, wallVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, wallVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, wallVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, wallTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, wallVertexPositionBuffer.numItems);

	mvPopMatrix();
	mvPushMatrix();

	// // light 1
	// mvPushMatrix();
	// gl.uniform1i(shaderProgram.useLightingUniform, false);
	// //mat4.identity(mvMatrix);
	// mat4.translate(mvMatrix, [0.0, (ceiling + startY) - 1.5, (backWall - startZ) / 3]);
	// mat4.rotate(mvMatrix, lightRotate, [1, 1, 0]);

	// gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	// gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, lightVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	// gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	// gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, lightVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	// gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexTextureCoordBuffer);
	// gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, lightVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	// gl.activeTexture(gl.TEXTURE0);
	// gl.bindTexture(gl.TEXTURE_2D, lightTexture);
	// gl.uniform1i(shaderProgram.samplerUniform, 0);

	// setMatrixUniforms();
	// gl.drawArrays(gl.TRIANGLE_STRIP, 0, lightVertexPositionBuffer.numItems);

	// mvPopMatrix();

	// // light 2
	// mvPushMatrix();
	// mat4.identity(mvMatrix);
	// mat4.translate(mvMatrix, [0.0, (ceiling + startY) - 1.5, (backWall - startZ) / 3 * 2]);
	// mat4.rotate(mvMatrix, lightRotate, [1, 1, 0]);

	// gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	// gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, lightVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	// gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	// gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, lightVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	// gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexTextureCoordBuffer);
	// gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, lightVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	// gl.activeTexture(gl.TEXTURE0);
	// gl.bindTexture(gl.TEXTURE_2D, lightTexture);
	// gl.uniform1i(shaderProgram.samplerUniform, 0);

	// setMatrixUniforms();
	// gl.drawArrays(gl.TRIANGLE_STRIP, 0, lightVertexPositionBuffer.numItems);

	// mvPopMatrix();

	// gl.uniform1i(shaderProgram.useLightingUniform, true);
	initLighting();
}

var lastTime = 0;

function animate() {
	var currTime = new Date().getTime();

	if (lastTime != 0) {
		lightRotate = (lightRotate + ((currTime - lastTime) / 100) * Math.PI) % (Math.PI * 2);
	}

	lastTime = currTime;
}

var continueTick = true;

function tick () {
	if (continueTick) {
		requestAnimationFrame(tick);
		drawScene();
		animate();
	}
}
