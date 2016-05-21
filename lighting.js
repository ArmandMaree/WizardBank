
function initLighting() {
	// ambient lighting
	gl.uniform3f(shaderProgram.ambientColorUniform, 0.2, 0.2, 0.2);

	// point source
	gl.uniform3f(shaderProgram.pointLighting0LocationUniform, 0.0 - startX, 0.0 - startY, 0.0 - startZ);
	gl.uniform3f(shaderProgram.pointLighting0ColorUniform, 0.025, 0.025, 0.025);
}
