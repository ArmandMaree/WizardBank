var lightRotate = 0.0;
var startX = 0.0;
var startY = -5;
var startZ = 1;

function drawScene() {
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	mat4.perspective(90, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, pMatrix);
	mat4.identity(mvMatrix);
	mat4.translate(mvMatrix, [startX, startY, startZ]);
	gl.uniform1i(shaderProgram.useLightingUniform, true);

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

	// left wall
	gl.bindBuffer(gl.ARRAY_BUFFER, leftWallVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, leftWallVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, leftWallVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, leftWallVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, leftWallVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, leftWallVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, wallTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, leftWallVertexPositionBuffer.numItems);

	// back wall
	gl.bindBuffer(gl.ARRAY_BUFFER, backWallVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, backWallVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, backWallVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, backWallVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, backWallVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, backWallVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, wallTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, backWallVertexPositionBuffer.numItems);

	// right wall
	gl.bindBuffer(gl.ARRAY_BUFFER, rightWallVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, rightWallVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, rightWallVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, rightWallVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, rightWallVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, rightWallVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, wallTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, rightWallVertexPositionBuffer.numItems);

	// front wall
	gl.bindBuffer(gl.ARRAY_BUFFER, frontWallVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, frontWallVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, frontWallVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, frontWallVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, frontWallVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, frontWallVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, wallTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, frontWallVertexPositionBuffer.numItems);

	// ceiling
	gl.bindBuffer(gl.ARRAY_BUFFER, ceilingVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, ceilingVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, ceilingVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, ceilingVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, ceilingVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, ceilingVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, ceilingTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, ceilingVertexPositionBuffer.numItems);

	// light 1
	mvPushMatrix();
	gl.uniform1i(shaderProgram.useLightingUniform, false);
	mat4.identity(mvMatrix);
	mat4.translate(mvMatrix, [0.0, (ceiling + startY) - 1.5, (backWall - startZ) / 3]);
	mat4.rotate(mvMatrix, lightRotate, [1, 1, 0]);

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

	// light 2
	mvPushMatrix();
	mat4.identity(mvMatrix);
	mat4.translate(mvMatrix, [0.0, (ceiling + startY) - 1.5, (backWall - startZ) / 3 * 2]);
	mat4.rotate(mvMatrix, lightRotate, [1, 1, 0]);

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

	gl.uniform1i(shaderProgram.useLightingUniform, true);
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
