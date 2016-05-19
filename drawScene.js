var lightRotate = 0.0;
var witchAlpha = 1.0;
var startX = 0.0;
var startY = 0.0;
var startZ = -100.0;

function drawScene() {
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 500.0, pMatrix);
	mat4.identity(mvMatrix);
	mat4.translate(mvMatrix, [startX, startY, startZ]);
	gl.uniform1i(shaderProgram.useLightingUniform, true);
	//mat4.rotate(mvMatrix, -Math.PI / 2, [0, 1, 0]);
	gl.uniform1f(shaderProgram.alphaUniform, 1.0);

	mvPushMatrix();

	// floor
	mat4.translate(mvMatrix, [0.0, -wallHeight / 2, 0.0]);
	mat4.rotate(mvMatrix, Math.PI, [1, 0, 0]);
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
	mat4.translate(mvMatrix, [0.0, 0.0, -wallWidth / 2]);
	mat4.rotate(mvMatrix, Math.PI, [0, 1, 0]);
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
	// mvPushMatrix();
	//
	// // front wall
	// mat4.translate(mvMatrix, [0.0, 0.0, wallWidth / 2]);
	// gl.bindBuffer(gl.ARRAY_BUFFER, wallVertexPositionBuffer);
	// gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, wallVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);
	//
	// gl.bindBuffer(gl.ARRAY_BUFFER, wallVertexNormalBuffer);
	// gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, wallVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);
	//
	// gl.bindBuffer(gl.ARRAY_BUFFER, wallVertexTextureCoordBuffer);
	// gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, wallVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);
	//
	// gl.activeTexture(gl.TEXTURE0);
	// gl.bindTexture(gl.TEXTURE_2D, wallTexture);
	// gl.uniform1i(shaderProgram.samplerUniform, 0);
	//
	// setMatrixUniforms();
	// gl.drawArrays(gl.TRIANGLE_STRIP, 0, wallVertexPositionBuffer.numItems);
	//
	// mvPopMatrix();
	mvPushMatrix();

	// left wall
	mat4.translate(mvMatrix, [-wallWidth / 2, 0.0, 0.0]);
	mat4.rotate(mvMatrix, Math.PI / 2 * 3, [0, 1, 0]);
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

	// right wall
	mat4.translate(mvMatrix, [wallWidth / 2, 0.0, 0.0]);
	mat4.rotate(mvMatrix, Math.PI / 2, [0, 1, 0]);
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

	// ceiling
	mat4.translate(mvMatrix, [0.0, wallHeight / 2, 0.0]);
	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, floorVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, floorVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, floorVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, floorVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, ceilingTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, floorVertexPositionBuffer.numItems);

	mvPopMatrix();
	mvPushMatrix();

	// right light front
	gl.uniform1i(shaderProgram.useLightingUniform, false);
	mat4.translate(mvMatrix, [wallWidth / 4, wallHeight / 2 - 3, wallWidth / 4]);
	mat4.rotate(mvMatrix, lightRotate, [1, 0.5, 0.25]);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, lightVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, lightVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, lightVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, lightTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, lightVertexPositionBuffer.numItems);

	mvPopMatrix();
	mvPushMatrix();

	// right light back
	mat4.translate(mvMatrix, [wallWidth / 4, wallHeight / 2 - 3, -wallWidth / 4]);
	mat4.rotate(mvMatrix, lightRotate, [1, 0.5, 0.25]);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, lightVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, lightVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, lightVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, lightTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, lightVertexPositionBuffer.numItems);

	gl.uniform1i(shaderProgram.useLightingUniform, true);

	mvPopMatrix();
	mvPushMatrix();

	// left light front
	gl.uniform1i(shaderProgram.useLightingUniform, false);
	mat4.translate(mvMatrix, [-wallWidth / 4, wallHeight / 2 - 3, wallWidth / 4]);
	mat4.rotate(mvMatrix, lightRotate, [1, 0.5, 0.25]);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, lightVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, lightVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, lightVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, lightTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, lightVertexPositionBuffer.numItems);

	mvPopMatrix();
	mvPushMatrix();

	// left light back
	gl.uniform1i(shaderProgram.useLightingUniform, false);
	mat4.translate(mvMatrix, [-wallWidth / 4, wallHeight / 2 - 3, -wallWidth / 4]);
	mat4.rotate(mvMatrix, lightRotate, [1, 0.5, 0.25]);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, lightVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, lightVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, lightVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, lightTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, lightVertexPositionBuffer.numItems);

	gl.uniform1i(shaderProgram.useLightingUniform, true);

	mvPopMatrix();
	mvPushMatrix();

	// witch
	gl.uniform1f(shaderProgram.alphaUniform, witchAlpha);
	gl.uniform1i(shaderProgram.useLightingUniform, false);
	mat4.translate(mvMatrix, [0.0, -wallHeight / 2 + npcHeight / 2, -wallWidth / 2 + 2]);
	gl.bindBuffer(gl.ARRAY_BUFFER, npcVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, npcVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, npcVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, npcVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, npcVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, npcVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, witchTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, npcVertexPositionBuffer.numItems);

	gl.uniform1i(shaderProgram.useLightingUniform, true);
	gl.uniform1f(shaderProgram.alphaUniform, 1.0);

	mvPopMatrix();
}

var lastTime = 0;
var witchAlphaUp = false;

function animate() {
	var currTime = new Date().getTime();

	if (lastTime != 0) {
		lightRotate = (lightRotate + ((currTime - lastTime) / 400) * Math.PI) % (Math.PI * 2);
		if (witchAlphaUp)
			witchAlpha = Math.min(witchAlpha + ((currTime - lastTime) / 10000), 1.0);
		else
			witchAlpha = Math.max(witchAlpha - ((currTime - lastTime) / 10000), 0.85);

		if (witchAlpha == 1.0)
			witchAlphaUp = false;
		else if (witchAlpha == 0.85)
			witchAlphaUp = true;
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
