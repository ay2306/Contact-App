import mongoose = require('mongoose');
export interface Iuser extends mongoose.Document{
    firstname: String,
    lastname: String,
    email: String,
    phone: String
}
export const UserSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: false},
    phone: {type: String, required: false}
});
const User = mongoose.model<Iuser>('User',UserSchema);
export default User;