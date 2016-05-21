

function initLighting() {
	// ambient lighting
	gl.uniform3f(shaderProgram.ambientColorUniform, 0.2, 0.2, 0.2);

	// point source
	gl.uniform1i(shaderProgram.usePointUniform, usePointSource);
	gl.uniform3f(shaderProgram.pointLightingLocationUniform, xMovement, wallHeight / 2 - 3 + yMovement, zMovement);
	gl.uniform3f(shaderProgram.pointLightingColorUniform, 1.0, 1.0, 1.0);
}
