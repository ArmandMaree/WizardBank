
function initLighting() {
	// ambient lighting
	gl.uniform3f(shaderProgram.ambientColorUniform, 0.2, 0.2, 0.2);

	// point source
	gl.uniform3f(shaderProgram.pointLighting0LocationUniform, 0.0, (ceiling + startY) - 1.5, (backWall - startZ) / 3);
	gl.uniform3f(shaderProgram.pointLighting0ColorUniform, 0.025, 0.025, 0.025);
	gl.uniform3f(shaderProgram.pointLighting1LocationUniform, 0.0, (ceiling + startY) - 1.5, (backWall - startZ) / 3 * 2);
	gl.uniform3f(shaderProgram.pointLighting1ColorUniform, 0.025, 0.025, 0.025);
}
