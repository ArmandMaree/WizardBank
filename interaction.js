var xMovement = 0.0;
var yMovement = 0.0;
var zMovement = 0.0;
var xRotate = 0.0;
var yRotate = 0.0;
var zRotate = 0.0;
var useGreen = false;

$(document).on("keydown", function (e) {
	switch (e.which) {
		case 188:
		case 190:
		case 38:
		case 40:
		case 87:
		case 65:
		case 83:
		case 68:
		case 222:
		case 191:
		case 86:
		case 80:
		case 67:
			break;
		default:
			console.log(e.which);
	}

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

	if (e.which == 86) {
		isPerspective = !isPerspective;
	}

	if (e.which == 80) {
		usePointSource = !usePointSource;
	}

	if (e.which == 67) {
		useGreen = !useGreen;
	}
});
