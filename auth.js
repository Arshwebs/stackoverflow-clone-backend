const jwt = require("jsonwebtoken");

exports.createToken = async obj => {
	return await jwt.sign(obj, "#$^&#%#$&#kjhvoisbed@#^$@%^", {
		expiresIn: "5m",
	});
};
exports.decodeToken = async token => {
	return await jwt.decode(token);
};

exports.roleAdmin = (req, res, next) => {
	const hasToken = req.headers.authorization.split(" ")[1];
	if (hasToken) {
		const tokenValues = jwt.decode(hasToken);

		if (tokenValues.role === "admin") {
			next();
		} else {
			res.send("Not Authorized");
		}
	} else {
		res.send("token not available");
	}
};

exports.validate = (req, res, next) => {
	const hasToken = req.headers.authorization.split(" ")[1];
	if (hasToken) {
		const tokenValues = jwt.decode(hasToken);
		console.log(tokenValues);
		if (Math.floor(Date.now() / 1000) <= tokenValues.exp) {
			console.log(tokenValues.exp, Math.floor(Date.now() / 1000));
			next();
		} else {
			res.send("token expired");
		}
	} else {
		return res.send("token not available");
	}
};
