
function initLighting() {
	// ambient lighting
	gl.uniform3f(shaderProgram.ambientColorUniform, 0.5, 0.5, 0.5);

	// point source
	gl.uniform3f(shaderProgram.pointLighting0LocationUniform, 0.0, 0.0, 0.0);
	gl.uniform3f(shaderProgram.pointLighting0ColorUniform, 0.025, 0.025, 0.025);
	gl.uniform3f(shaderProgram.pointLighting1LocationUniform, 0.0, 0.0, 0.0);
	gl.uniform3f(shaderProgram.pointLighting1ColorUniform, 0.025, 0.025, 0.025);
}
