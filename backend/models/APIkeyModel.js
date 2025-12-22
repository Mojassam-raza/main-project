// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//     name: { type: String, required: true, unique: true },
//     apiKey: { type: String, required: true, unique: true },
// }, { timestamps: true });

// module.exports = mongoose.model('apikey', userSchema);

// ------------------------ Alternative Schema ----------------------- //
const mongoose = require('mongoose');
const apiKeySchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
            unique: true,
        },

        projectName: {
            type: String,
            required: true,
        },

        projectId: {
            type: String,
            required: true,
        },

        quota: {
            type: String,
            default: "Unavailable",
        },

        isActive: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("APIKey", apiKeySchema);
