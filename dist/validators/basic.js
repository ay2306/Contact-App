"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("@hapi/joi");
class basicSchema {
    constructor() {
        this.initiate();
    }
    initiate() {
        this.userAddSchema = Joi.object().keys({
            firstname: Joi.string().required(),
            lastname: Joi.string().required(),
            phone: [
                Joi.string().regex(/^\d+$/).min(10).max(13),
                Joi.string().allow('').valid('')
            ],
            email: [
                Joi.string().email(),
                Joi.string().allow('').valid('')
            ]
        });
    }
}
exports.default = new basicSchema();
//# sourceMappingURL=basic.js.map