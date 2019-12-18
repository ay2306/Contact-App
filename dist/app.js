"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const basicRoutes = __importStar(require("./routes/basic"));
class App {
    constructor() {
        this.app = express();
        this.setup();
        this.basicRoutes = new basicRoutes.basicRoutes();
        this.basicRoutes.routes(this.app);
    }
    setup() {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname, '../public')));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map