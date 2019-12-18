"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const basic = __importStar(require("../controllers/basic"));
const basicValidator_1 = __importDefault(require("../validators/basicValidator"));
class basicRoutes {
    constructor() {
        this.basicController = new basic.basicController();
    }
    routes(app) {
        app.route('/').get(this.basicController.welcome);
        app.route('/contact').get(this.basicController.retrieveContactList);
        app.route('/contact').post(basicValidator_1.default.userAddValidator, this.basicController.addContact);
        app.route('/contact/:id').patch(this.basicController.updateContact);
        app.route('/contact/:id').delete(this.basicController.deleteContact);
    }
}
exports.basicRoutes = basicRoutes;
//# sourceMappingURL=basic.js.map