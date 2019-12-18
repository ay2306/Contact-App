"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: false }
});
const User = mongoose.model('User', exports.UserSchema);
exports.default = User;
//# sourceMappingURL=contact.js.map