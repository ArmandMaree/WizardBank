var lightSize = 0.0;
var witchAlpha = 1.0;
var startX = 0.0;
var startY = 0.0;
var startZ = -80;
var catRadius = wallWidth / 3;
var catX = catRadius;
var catZ = 0.0;
var catRotate = 0.0;
var isPerspective = true;
var usePointSource = true;

function drawScene() {
	initLighting();
	gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

	if (isPerspective)
		mat4.perspective(45, gl.viewportWidth / gl.viewportHeight, 0.1, 500.0, pMatrix);
	else
		mat4.ortho(-2.0, 2.0, -2.0, 2.0, 0.1, 100, pMatrix);

	mat4.identity(mvMatrix);
	mvMatrix = translateAll(mvMatrix, xMovement + startX, yMovement + startY, zMovement + startZ);

	if (xRotate != 0)
		pMatrix = rotateX(pMatrix, xRotate);

	if (yRotate != 0)
		pMatrix = rotateY(pMatrix, yRotate);

	if (zRotate != 0)
		pMatrix = rotateZ(pMatrix, zRotate);

	gl.uniform1i(shaderProgram.useLightingUniform, true);
	gl.uniform1i(shaderProgram.useParticleUniform, false);
	gl.uniform1i(shaderProgram.useColorUniform, false);
	gl.uniform1f(shaderProgram.alphaUniform, 1.0);
	gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);

	mvPushMatrix();

	// floor
	mvMatrix = translateAll(mvMatrix, 0.0, -wallHeight / 2, 0.0);
	mvMatrix = rotateX(mvMatrix, Math.PI);
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
	mvMatrix = translateAll(mvMatrix, 0.0, 0.0, -wallWidth / 2);
	mvMatrix = rotateY(mvMatrix, Math.PI);
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

	// front wall
	mvMatrix = translateAll(mvMatrix, 0.0, 0.0, wallWidth / 2);
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

	// left wall
	mvMatrix = translateAll(mvMatrix, -wallWidth / 2, 0.0, 0.0);
	mvMatrix = rotateY(mvMatrix, Math.PI / 2 * 3);
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
	mvMatrix = translateAll(mvMatrix, wallWidth / 2, 0.0, 0.0);
	mvMatrix = rotateY(mvMatrix, Math.PI / 2);
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
	mvMatrix = translateAll(mvMatrix, 0.0, wallHeight / 2, 0.0);
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
	mvMatrix = translateAll(mvMatrix, wallWidth / 4, wallHeight / 2 - 3, wallWidth / 4);
	mvMatrix = scaleAll(mvMatrix, lightSize, lightSize, lightSize);

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

	// right light back
	gl.uniform1i(shaderProgram.useLightingUniform, false);
	mvMatrix = translateAll(mvMatrix, wallWidth / 4, wallHeight / 2 - 3, -wallWidth / 4);
	mvMatrix = scaleAll(mvMatrix, lightSize, lightSize, lightSize);

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
	mvMatrix = translateAll(mvMatrix, -wallWidth / 4, wallHeight / 2 - 3, wallWidth / 4);
	mvMatrix = scaleAll(mvMatrix, lightSize, lightSize, lightSize);

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

	// left light back
	gl.uniform1i(shaderProgram.useLightingUniform, false);
	mvMatrix = translateAll(mvMatrix, -wallWidth / 4, wallHeight / 2 - 3, -wallWidth / 4);
	mvMatrix = scaleAll(mvMatrix, lightSize, lightSize, lightSize);

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
	mvMatrix = translateAll(mvMatrix, 0.0, -wallHeight / 2 + npcHeight / 2, -wallWidth / 2 + 2);
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

	gl.uniform1f(shaderProgram.alphaUniform, 1.0);

	mvPopMatrix();
	mvPushMatrix();

	// cat
	mvMatrix = translateAll(mvMatrix, catX, -wallHeight / 2 + catHeight / 2, catZ);
	mvMatrix = rotateY(mvMatrix, catRotate);
	gl.bindBuffer(gl.ARRAY_BUFFER, catVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, catVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, catVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, catVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, catVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, catVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, catTexture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, catVertexPositionBuffer.numItems);

	gl.uniform1i(shaderProgram.useLightingUniform, true);
	gl.uniform1f(shaderProgram.alphaUniform, 1.0);

	mvPopMatrix();
	mvPushMatrix();

	// painting left
	mvMatrix = translateAll(mvMatrix, -wallWidth / 4, wallHeight / 8, -wallWidth / 2 + 0.1);
	mvMatrix = shearX(mvMatrix, -Math.PI / 2.5);
	gl.bindBuffer(gl.ARRAY_BUFFER, paintingVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, paintingVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, paintingVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, paintingVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, paintingVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, paintingVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, painting1Texture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, paintingVertexPositionBuffer.numItems);

	gl.uniform1i(shaderProgram.useLightingUniform, true);
	gl.uniform1f(shaderProgram.alphaUniform, 1.0);

	mvPopMatrix();
	mvPushMatrix();

	// painting right
	mvMatrix = translateAll(mvMatrix, wallWidth / 4, wallHeight / 8, -wallWidth / 2 + 0.1);
	mvMatrix = shearX(mvMatrix, Math.PI / 2.5);
	gl.bindBuffer(gl.ARRAY_BUFFER, paintingVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, paintingVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, paintingVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, paintingVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, paintingVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, paintingVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, painting2Texture);
	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, paintingVertexPositionBuffer.numItems);

	gl.uniform1i(shaderProgram.useLightingUniform, true);
	gl.uniform1f(shaderProgram.alphaUniform, 1.0);

	mvPopMatrix();
	mvPushMatrix();

	// color box left
	mvMatrix = translateAll(mvMatrix, -wallWidth / 4, -wallHeight / 2 + 3, 0.0);
	mvMatrix = scaleAll(mvMatrix, 3.0, 3.0, 3.0);
	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, lightVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, lightVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, lightVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);

	if (useGreen)
		gl.bindTexture(gl.TEXTURE_2D, greenTexture);
	else
		gl.bindTexture(gl.TEXTURE_2D, pinkTexture);

	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, lightVertexPositionBuffer.numItems);

	mvMatrix = translateAll(mvMatrix, 0.0, -1, 0.0);
	mvMatrix = scaleAll(mvMatrix, 1/3, 1/3, 1/3);
	drawParticles();
	mvPopMatrix();
	mvPushMatrix();

	// color box right
	mvMatrix = translateAll(mvMatrix, wallWidth / 4, -wallHeight / 2 + 3, 0.0);
	mvMatrix = scaleAll(mvMatrix, 3.0, 3.0, 3.0);
	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexPositionBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, lightVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexNormalBuffer);
	gl.vertexAttribPointer(shaderProgram.vertexNormalAttribute, lightVertexNormalBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.bindBuffer(gl.ARRAY_BUFFER, lightVertexTextureCoordBuffer);
	gl.vertexAttribPointer(shaderProgram.textureCoordAttribute, lightVertexTextureCoordBuffer.itemSize, gl.FLOAT, false, 0, 0);

	gl.activeTexture(gl.TEXTURE0);

	if (useGreen)
		gl.bindTexture(gl.TEXTURE_2D, greenTexture);
	else
		gl.bindTexture(gl.TEXTURE_2D, pinkTexture);

	gl.uniform1i(shaderProgram.samplerUniform, 0);

	setMatrixUniforms();
	gl.drawArrays(gl.TRIANGLE_STRIP, 0, lightVertexPositionBuffer.numItems);

	mat4.translate(mvMatrix, [0.0, -1, 0.0]);
	mvMatrix = scaleAll(mvMatrix, 1/3, 1/3, 1/3);
	drawParticles();
	mvPopMatrix();
}

var lightSizeUp = true;
var lastTime = 0;
var witchAlphaUp = false;
var catGoingLeft = true;
var catRadiusSqr = Math.pow(catRadius, 2);

function animate() {
	var currTime = new Date().getTime();

	if (lastTime != 0) {
		if (lightSizeUp)
			lightSize = Math.min(lightSize + ((currTime - lastTime) / 1000), 2.0);
		else
			lightSize = Math.max(lightSize - ((currTime - lastTime) / 1000), 0.5);

		if (lightSize == 2.0)
			lightSizeUp = false;
		else if (lightSize == 0.5)
			lightSizeUp = true;

		if (witchAlphaUp)
			witchAlpha = Math.min(witchAlpha + ((currTime - lastTime) / 5000), 1.0);
		else
			witchAlpha = Math.max(witchAlpha - ((currTime - lastTime) / 5000), 0.0);

		if (witchAlpha == 1.0)
			witchAlphaUp = false;
		else if (witchAlpha == 0.0)
			witchAlphaUp = true;

		if (catGoingLeft) {
			catX = Math.max(catX - ((currTime - lastTime) / 50), -catRadius);
			catZ = Math.max(Math.sqrt(catRadiusSqr - Math.pow(catX, 2)), -catRadius);
		}
		else {
			catX = Math.min(catX + ((currTime - lastTime) / 50), catRadius);
			catZ = Math.min(-Math.sqrt(catRadiusSqr - Math.pow(catX, 2)), catRadius);
		}

		if (catX == catRadius)
			catGoingLeft = true;
		else if (catX == -catRadius)
			catGoingLeft = false;

		catRotate = Math.atan(catX / catZ);

		if (!catGoingLeft)
			catRotate = Math.PI + catRotate;
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
