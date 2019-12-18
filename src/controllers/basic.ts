import mongoose = require('mongoose');
import User = require('../models/contact');
export class basicController{
    constructor(){

    }
    public welcome = (req,res)=>{
        res.status(200).send("HELLO WORLD");
    }
    public retrieveContactList = (req,res)=>{
        res.status(200).send("Getting you the contact list");
    }
    public addContact = (req,res)=>{
        res.status(200).send("Adding Contact");
    }
    public updateContact = (req,res)=>{
        res.status(200).send("Updating Contact");
    }
    public deleteContact = (req,res)=>{
        res.status(200).send("Delete Contact");
    }
}
