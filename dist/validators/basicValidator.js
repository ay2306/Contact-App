"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic_1 = __importDefault(require("./basic"));
class validation {
    constructor() {
        this.userAddValidator = (req, res, next) => {
            const { error } = basic_1.default.userAddSchema.validate(req.body);
            if (error) {
                console.log(error);
                return res.status(500).json({ error: error.details[0].message });
            }
            next();
        };
    }
}
exports.default = new validation();
//# sourceMappingURL=basicValidator.js.map