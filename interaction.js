var xMovement = 0.0;
var yMovement = 0.0;
var zMovement = 0.0;
var xRotate = 0.0;
var yRotate = 0.0;
var zRotate = 0.0;

$(document).on("keydown", function (e) {
	if (e.which == 188 || e.which == 190 ||e.which == 38 || e.which == 40 || e.which == 87 || e.which == 65 || e.which == 83 || e.which == 68 || e.which == 222 || e.which == 191) {
		e.preventDefault();
	}
	else
		console.log(e.which);

	if (e.which == 40) {
		yMovement += 2;
	}

	if (e.which == 38) {
		yMovement -= 2;
	}

	if (e.which == 87) {
		zMovement += 2;
	}

	if (e.which == 65) {
		xMovement += 2;
	}

	if (e.which == 83) {
		zMovement -= 1;
	}

	if (e.which == 68) {
		xMovement -= 1;
	}

	if (e.which == 188) {
		yRotate += Math.PI / 50;
	}

	if (e.which == 190) {
		yRotate -= Math.PI / 50;
	}

	if (e.which == 222) {
		xRotate += Math.PI / 30;
	}

	if (e.which == 191) {
		xRotate -= Math.PI / 30;
	}
});