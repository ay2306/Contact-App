"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class basicController {
    constructor() {
        this.welcome = (req, res) => {
            res.status(200).send("HELLO WORLD");
        };
        this.retrieveContactList = (req, res) => {
            res.status(200).send("Getting you the contact list");
        };
        this.addContact = (req, res) => {
            res.status(200).send("Adding Contact");
        };
        this.updateContact = (req, res) => {
            res.status(200).send("Updating Contact");
        };
        this.deleteContact = (req, res) => {
            res.status(200).send("Delete Contact");
        };
    }
}
exports.basicController = basicController;
//# sourceMappingURL=basic.js.map