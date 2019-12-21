import mongoose = require('mongoose');
import User from '../models/contact';
export class basicController{
    constructor(){

    }
    public welcome = (req,res)=>{
        res.status(200).send("HELLO WORLD");
    }
    public retrieveContactList = (req,res)=>{
        User.find({})
        .then((result)=>{
            res.status(200).json(result);
        })
        .catch(err=>{
            res.status(500).json({
                message: err.message || err,
                success: false
            })
        })
    }
    public addContact = (req,res)=>{
        const newUser = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            phone: req.body.phone,
            email: req.body.email
        })
        newUser.save()
        .then((result)=>{
            res.status(200).json({
                message: result,
                success: true
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err.message || err,
                success: false
            })
        })
    }
    public updateContact = (req,res)=>{
        User.updateOne({
            _id: req.body.id
        },{
            $set: req.body
        })
        .then((result)=>{
            res.status(200).json({
                message: result,
                success: true
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err.message || err,
                success: false
            })
        })
    }
    public deleteContact = (req,res)=>{
        User.removeOne({
            _id: req.params.id
        })
        .then((result)=>{
            res.status(200).json({
                message: result,
                success: true
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err.message || err,
                success: false
            })
        })
    }
    public getContact = (req,res)=>{
        User.findOne({
            _id: req.params.id
        })
        .then(result=>{
            res.status(200).json({
                message: result,
                success: true
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: err.message || err,
                success: false
            })
        })
    }
}
