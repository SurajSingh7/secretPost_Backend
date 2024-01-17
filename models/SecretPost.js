const mongoose = require("mongoose");

// Define the user schema using the Mongoose Schema constructor
const secretPostSchema = new mongoose.Schema(
	{
		// Define the name field with type String, required, and trimmed
        title: {
			type: String,
			required: true,
			trim: true,
		},
		content: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
		}
      
	},
    { timestamps: true }
);

module.exports = mongoose.model("secretPosts", secretPostSchema);