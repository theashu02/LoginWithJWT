const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(
      "mongodb+srv://login:ashu0512@cluster0.k3qpuvm.mongodb.net/?retryWrites=true&w=majority",
      connectionParams
    );
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};
