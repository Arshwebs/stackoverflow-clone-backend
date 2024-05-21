const {MongoClient, URL} = require("../dbConfig");
const {createToken} = require("../auth");

const db = new MongoClient(URL);
exports.login = async (req, res) => {
	const usersData = req.body;
	try {
		await db.connect();
		const usersColl = db.db("Stackoverflow").collection("users");
		const data = await usersColl.findOne({name: usersData.name});
		console.log(data);
		if (data) {
			const token = await createToken(data);
			console.log(token);
			res.send({
				status: 200,
				message: "Login Successfull",
				token,
			});
		} else {
			console.log("failed");
			res.send({
				status: 401,
				message: "NOT AUTHORIZED",
			});
		}
	} catch (error) {
		console.log(error);
		await db.close();
	}
};
